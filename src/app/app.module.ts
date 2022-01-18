import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { SiteComponent } from './site/site.component';
import { NavbarComponent } from './site/navbar/navbar.component';
import { AboutComponent } from './site/about/about.component';
import { FooterComponent } from './site/footer/footer.component';
import { LoginComponent } from './site/login/login.component';
import { RegisterComponent } from './site/register/register.component';
import { ProfileComponent } from './site/profile/profile.component';
import { SlideComponent } from './site/slide/slide.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { StatusComponent } from './admin/status/status.component';
import { UsersComponent } from './admin/users/users.component';
import { ProductComponent } from './admin/product/product.component';
import { DashboardNavbarComponent } from './admin/dashboard-navbar/dashboard-navbar.component';
import { DashboardSidebarComponent } from './admin/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardFooterComponent } from './admin/dashboard-footer/dashboard-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SiteComponent,
    NavbarComponent,
    AboutComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SlideComponent,
    DashboardComponent,
    StatusComponent,
    UsersComponent,
    ProductComponent,
    DashboardNavbarComponent,
    DashboardSidebarComponent,
    DashboardFooterComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
