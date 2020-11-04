import { User } from './../../../shared/user';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CacheService } from 'src/shared/services/cache.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  user: User;
  userLogin: User;

  constructor(public navCtrl: NavController, private cacheService: CacheService<User>, private formBuilder: FormBuilder) { }

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
      return;
    }
    let form = this.form.controls;

    this.user = new User(null, form.email.value, form.password.value, true);
    this.userLogin = this.cacheService.get("Usuário");

    if (this.user.email != this.userLogin.email || this.user.password != this.userLogin.password) {
      return;
    }

    this.navCtrl.navigateRoot('home');
  }

}
