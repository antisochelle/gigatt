import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { RatesComponent } from '../components/rates/rates.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { KapampanganComponent } from '../components/kapampangan/kapampangan.component';
import { ContactComponent } from '../components/contact/contact.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'rates', component: RatesComponent},
    { path: 'gallery', component: GalleryComponent},
    { path: 'kapampangan', component: KapampanganComponent},
    { path: 'contact', component: ContactComponent}
    // { path: "**", component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routerComponents = [HomeComponent,
                                 AboutComponent,
                                 RatesComponent,
                                 GalleryComponent,
                                 KapampanganComponent,
                                 ContactComponent];
