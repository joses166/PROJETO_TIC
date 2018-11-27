import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  liberaItensMenuProfessor: boolean = false;
  mostrarMenu: boolean = false;

  constructor(private authService: AuthService,
    private router: Router) {

  }

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
    this.authService.liberaItensMenuEmitter.subscribe(
      liberar => this.liberaItensMenuProfessor = liberar
    );
  }

  doLogout() {
    this.authService.logout();
    console.log('usuario nao logado');
    this.router.navigate(['/login']);
  }

}
