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
  userLogin: User;

  constructor(
    public navCtrl: NavController,
    private cacheService: CacheService<User>,
    private formBuilder: FormBuilder,
    public toastService: ToastService) { }

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
    let form = this.form.controls;

    this.user = new User(null, form.email.value, form.password.value);
    this.userLogin = this.cacheService.get("User");

    if (this.userLogin == null) {
      this.toastService.loginInvalid();
      return;
    }

    if (this.user.email != this.userLogin.email || this.user.password != this.userLogin.password) {
      this.toastService.loginInvalid();
      return;
    }

    this.toastService.loginValid(this.userLogin.name);
    this.navCtrl.navigateRoot('home');
  }


}
