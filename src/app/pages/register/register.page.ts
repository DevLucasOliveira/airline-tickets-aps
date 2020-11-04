import { ToastService } from './../../../shared/services/toast.service';
import { CacheService } from './../../../shared/services/cache.service';
import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
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
    let form = this.form.controls;
    this.user = new User(form.name.value, form.email.value, form.password.value, true);

    this.cacheService.set("Usuário", this.user);
    this.toastService.formValid();

    this.navCtrl.navigateRoot('home');
  }



}
