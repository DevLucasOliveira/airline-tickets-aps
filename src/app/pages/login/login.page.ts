import {User, UserAuthResponse} from '../../../shared/user';
import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CacheService} from 'src/shared/services/cache.service';
import {ToastService} from 'src/shared/services/toast.service';
import {first} from 'rxjs/operators';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    form: FormGroup;
    user: User;
    userAuthResponse: UserAuthResponse;

    constructor(
        public navCtrl: NavController,
        private cacheService: CacheService<User>,
        private formBuilder: FormBuilder,
        public toastService: ToastService,
        public authService: AuthService,
    ) {
    }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.form = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        if (!this.form.valid) {
            this.toastService.formInvalid();
            return;
        }
        const form = this.form.controls;

        this.user = new User(null, form.email.value, form.password.value);

        this.authService.login(form.email.value, form.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    this.userAuthResponse = data;
                },
                error => {
                    console.log(error);
                });
    }


}
