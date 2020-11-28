import { ToastService } from '../../../shared/services/toast.service';
import { CacheService } from '../../../shared/services/cache.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from 'src/shared/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {first} from 'rxjs/operators';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form: FormGroup;
  user: User;
  users: User[] = [];

  constructor(
    public navCtrl: NavController,
    private cacheService: CacheService<User>,
    private formBuilder: FormBuilder,
    public toastService: ToastService,
    public authService: AuthService,
    ) { }

  ngOnInit() {
    this.buildForm();
    this.users = this.cacheService.getAll('users');
    if (!this.users) {
      this.users = [];
    }
  }

  buildForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register() {
    if (!this.form.valid) {
      this.toastService.formInvalid();
      return;
    }

    const form = this.form.controls;
    if (form.password.value.length < 6) {
      this.toastService.passwordInvalid();
      return;
    }

    this.user = new User(form.name.value, form.email.value, form.password.value);

    this.authService.register(this.user)
        .pipe(first())
        .subscribe(
            data => {
              console.log(data);
            },
            error => {
              console.log(error);
            });
  }



}
