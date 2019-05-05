import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MyGithubComponent } from './my-github/my-github.component';
import { GitsearchComponent } from './gitsearch/gitsearch.component';

const routes: Routes = [

    {path:"my-github",component:MyGithubComponent},
    {path:"",redirectTo:"/my-github",pathMatch:"full"},
    {path:'gitsearch',component:GitsearchComponent},
    // {path:'**',component:NotFoundComponent}
  ]


@NgModule({
  declarations: [],
  exports:[RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
