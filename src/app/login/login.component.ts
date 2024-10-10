// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }

  onLogin() {
    // Aqui você pode adicionar a lógica de autenticação
    // Se a autenticação for bem-sucedida, redirecione para a tela principal
    this.router.navigate(['/principal']);
  }
}
