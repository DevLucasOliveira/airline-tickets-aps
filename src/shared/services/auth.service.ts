import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User, UserAuthResponse} from '../user';
import {environment} from '../../environments/environment';
import {ToastService} from './toast.service';
import {NavController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient,
                private toaster: ToastService,
                public navCtrl: NavController
    ) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string): Observable<UserAuthResponse> {
        return this.http.post<UserAuthResponse>(`${environment.backendURL}/api/users/authenticate`, {email, password})
            .pipe(map(userResult => {
                if (userResult.success) {
                    localStorage.setItem('currentUser', JSON.stringify(userResult.data));
                    this.toaster.loginValid(userResult.data.name);
                    this.currentUserSubject.next(userResult.data);
                    this.navCtrl.navigateRoot('home');
                } else {
                    this.toaster.custom('Senha ou E-mail inválidos.', 'danger', 'top');
                }

                return userResult;
            }));
    }

    register(user: User) {
        return this.http.post<UserAuthResponse>(`${environment.backendURL}/api/users/register`, user)
            .pipe(map(userResult => {
                if (userResult.success) {
                    localStorage.setItem('currentUser', JSON.stringify(userResult.data));
                    this.toaster.formValid();
                    this.currentUserSubject.next(userResult.data);
                    this.navCtrl.navigateRoot('home');
                } else {
                    this.toaster.custom(userResult.message, 'danger', 'top');
                }

                return userResult;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
