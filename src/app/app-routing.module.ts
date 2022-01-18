import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideComponent } from './site/slide/slide.component';
import { ProfileComponent } from './site/profile/profile.component';
import { AboutComponent } from './site/about/about.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UsersComponent } from './admin/users/users.component';
import { StatusComponent } from './admin/status/status.component';
import { ProductComponent } from './admin/product/product.component';
import { SiteComponent } from './site/site.component';

const routes: Routes = [
{
  path: '', component: SiteComponent,
    children: [
      {path: '', component: SlideComponent},
      {path: 'about', component: AboutComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'slide', component: SlideComponent}
  ]
},
{ 
  path: '', component: AdminComponent,
  children: [
    {path: 'admin', component: DashboardComponent},
    {path: 'users', component: UsersComponent},
    {path: 'status', component: StatusComponent},
    {path: 'product', component: ProductComponent},
  ]
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
