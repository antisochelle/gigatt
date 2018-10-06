import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { NgxImageGalleryModule } from 'ngx-image-gallery';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule, routerComponents } from './app-routing/app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RatesComponent } from './components/rates/rates.component';
import { KapampanganComponent } from './components/kapampangan/kapampangan.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routerComponents,
    FooterComponent,
    AboutComponent,
    GalleryComponent,
    RatesComponent,
    KapampanganComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    NgxImageGalleryModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
