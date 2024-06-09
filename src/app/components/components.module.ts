import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FumecFooterComponent } from './fumec-footer/fumec-footer.component';
import { HeaderWithNavbarComponent } from './header-with-navbar/header-with-navbar.component';
import { HeaderJustLogoComponent } from './header-just-logo/header-just-logo.component';
import { MenuButtonsComponent } from './menu-buttons/menu-buttons.component';
import { LoginAndSignUpCardComponent } from './login-and-sign-up-card/login-and-sign-up-card.component';
import { HeaderJustLogoWhiteComponent } from './header-just-logo-white/header-just-logo-white.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    FumecFooterComponent,
    HeaderWithNavbarComponent,
    HeaderJustLogoComponent,
    LoginAndSignUpCardComponent,
    MenuButtonsComponent,
    HeaderJustLogoWhiteComponent
  ],
  exports: [
    HeaderComponent,
    FumecFooterComponent,
    HeaderWithNavbarComponent,
    HeaderJustLogoComponent,
    LoginAndSignUpCardComponent,
    MenuButtonsComponent,
    HeaderJustLogoWhiteComponent
  ]
})
export class ComponentsModule { }
