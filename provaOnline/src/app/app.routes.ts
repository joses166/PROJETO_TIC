import { AuthGuard } from './guards/auth-guard';
import {Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RecuperaSenhaComponent } from './recupera-senha/recupera-senha.component';
import { CriarQuestoesComponent } from './criar-questoes/criar-questoes.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
    {path: 'header', component: HeaderComponent, canActivate: [AuthGuard]},
    {path: 'footer', component: FooterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'recuperasenha', component: RecuperaSenhaComponent},
    {path: 'criarquestoes', component: CriarQuestoesComponent, canActivate: [AuthGuard]},
    {path: '', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
]
