import { NivelQuestaoComponent } from './nivel-questao/nivel-questao.component';
import { NivelQuestaoEditaComponent } from './nivel-questao-edita/nivel-questao-edita.component';
import { NivelQuestaoCreateComponent } from './nivel-questao-create/nivel-questao-create.component';
import { QuestoesEditaComponent } from './questoes-edita/questoes-edita.component';
import { QuestoesCreateComponent } from './questoes-create/questoes-create.component';
import { QuestoesComponent } from './questoes/questoes.component';
import { AuthGuard } from './guards/auth-guard';
import {Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RecuperaSenhaComponent } from './recupera-senha/recupera-senha.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
    {path: 'header', component: HeaderComponent, canActivate: [AuthGuard]},
    {path: 'footer', component: FooterComponent},

    {path: 'login', component: LoginComponent},

    {path: 'recuperasenha', component: RecuperaSenhaComponent},

    {path: 'questoes', component: QuestoesComponent, canActivate: [AuthGuard]},
    {path: 'questoes-edita', component: QuestoesEditaComponent, canActivate: [AuthGuard]},
    {path: 'questoes-create', component: QuestoesCreateComponent, canActivate: [AuthGuard]},

    {path: 'nivel-questao', component: NivelQuestaoComponent, canActivate: [AuthGuard]},
    {path: 'nivel-questao-edita', component: NivelQuestaoEditaComponent, canActivate: [AuthGuard]},
    {path: 'nivel-questao-create', component: NivelQuestaoCreateComponent, canActivate: [AuthGuard]},

    {path: '', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
]
