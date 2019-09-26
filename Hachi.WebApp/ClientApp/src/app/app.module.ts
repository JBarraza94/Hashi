import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderComponent } from './shared/header/header.component';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { AboutComponent } from './shared/about/about.component';
import { ContactoService } from './services/contacto/contacto.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    GalleryComponent,
    FooterComponent,
    ContactoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ContactoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
