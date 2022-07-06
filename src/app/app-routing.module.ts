import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { OurservicesComponent } from './components/ourservices/ourservices.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TeamComponent } from './components/team/team.component';
import { WhykayanComponent } from './components/whykayan/whykayan.component';
import { AdminComponent} from './components/admin/admin.component';
import { AppComponent} from './app.component';
import { NavbarComponent} from'./components/navbar/navbar.component';
import { UserviewComponent } from './components/userview/userview.component';
import { SigninComponent } from './components/signin/signin.component';
const routes:Routes = [ 
                        {path:"admindashboard" ,component:AdminComponent},
                        {path:"" , component:UserviewComponent },
                        {path:"admin" , component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
