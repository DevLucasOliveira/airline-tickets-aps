import { CacheService } from './../../../shared/services/cache.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from 'src/shared/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  form: FormGroup;
  user: User;

  constructor(public navCtrl: NavController, private cacheService: CacheService<User>, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
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
      return;
    }
    let form = this.form.controls;

    this.user = new User(form.name.value, form.email.value, form.password.value, true);
    this.cacheService.set("Usuário", this.user);
    this.navCtrl.navigateRoot('home');
  }

}
