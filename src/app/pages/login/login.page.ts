import { User } from './../../../shared/user';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CacheService } from 'src/shared/services/cache.service';
import { ToastService } from 'src/shared/services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  user: User;
  users: User[] = [];

  constructor(
    public navCtrl: NavController,
    private cacheService: CacheService<User>,
    private formBuilder: FormBuilder,
    public toastService: ToastService) { }

  ngOnInit() {
    this.buildForm();
    this.users = this.cacheService.getAll('users');
    if (!this.users) {
      this.users = [];
    }
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
    let form = this.form.controls;

    this.user = new User(null, form.email.value, form.password.value);


    this.users.forEach(user => {
      if (user.email == this.user.email && user.password == this.user.password) {
        this.toastService.loginValid(user.name);
        this.navCtrl.navigateRoot('home');
        this.cacheService.set('user', this.user);
        return;
      }
    });

    if (!this.cacheService.get('user'))
      this.toastService.loginInvalid();
  }


}
