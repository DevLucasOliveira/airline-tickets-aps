import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    constructor(public toastController: ToastController) { }


    async formInvalid() {
        const toast = await this.toastController.create({
            message: 'Preencha todos os campos',
            duration: 2000,
            color: 'warning',
            position: 'top',
        });
        toast.present();
    }

    async formValid() {
        const toast = await this.toastController.create({
            message: 'Cadastro realizado com sucesso',
            duration: 2000,
            color: 'success',
            position: 'top',
        });
        toast.present();
    }

    async loginInvalid() {
        const toast = await this.toastController.create({
            message: 'Usuário não cadastrado',
            duration: 2000,
            color: 'danger',
            position: 'top',
        });
        toast.present();
    }

    async loginValid(name: string) {
        const toast = await this.toastController.create({
            message: 'Bem vindo ' + name,
            duration: 2000,
            color: 'success',
            position: 'top',
        });
        toast.present();
    }

}