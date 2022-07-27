import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './includes/footer/footer.component';
import { HeaderComponent } from './includes/header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ButtonComponent } from './pages/button/button.component';
import { ElivationComponent } from './pages/elivation/elivation.component';
import { MainComponent } from './pages/main/main.component';
import { RippleComponent } from './pages/ripple/ripple.component';
import { ToggleComponent } from './pages/toggle/toggle.component';

const routes: Routes = [
   {path:'header',component:HeaderComponent},
    {path:'footer',component:FooterComponent},
    {path:'main',component:MainComponent},
    {path:'home',component:HomeComponent},
    {path:'menu',component:MenuComponent},
    {path:'button',component:ButtonComponent},
    {path:'tooglebutton',component:ToggleComponent},
    {path:'elivation',component:ElivationComponent},
    {path:'ripple',component:RippleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
