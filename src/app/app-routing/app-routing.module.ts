import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	// { path: 'login', component: LoginComponent },
	// { path: 'register', component: SignupComponent },
	{ path: 'home', component: HomeComponent}
	// { path: 'exam', component: AdminExamComponent},
	// { path: "**", component: PageNotFoundComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
export const routerComponents = [HomeComponent]