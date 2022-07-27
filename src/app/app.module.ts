import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';

  //MATA MODULE IMPORT
 import { MatModule } from './appmodules/mat/mat.module';
import { MainComponent } from './pages/main/main.component';
import { ProductsComponent } from './products/products.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ButtonComponent } from './pages/button/button.component';
import { ToggleComponent } from './pages/toggle/toggle.component';

import { TheamComponent } from './pages/theam/theam.component';
import { ElivationComponent } from './pages/elivation/elivation.component';
import { RippleComponent } from './pages/ripple/ripple.component';

 
  
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductsComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    ButtonComponent,
    ToggleComponent,
   
    TheamComponent,
        ElivationComponent,
        RippleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
