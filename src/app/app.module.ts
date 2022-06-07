import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { LaptopsComponent } from './product/laptops/laptops.component';
import { MobilesComponent } from './product/mobiles/mobiles.component';
import { VegComponent } from './groceries/veg/veg.component';
import { NonVegComponent } from './groceries/non-veg/non-veg.component';
import { BatComponent } from './sports/bat/bat.component';
import { BallComponent } from './sports/ball/ball.component';
import { FootballComponent } from './sports/football/football.component';
import { CricketKitComponent } from './sports/cricket-kit/cricket-kit.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './admin/user/user.component';
import { UserValuesComponent } from './admin/user-values/user-values.component';
import { UsergroupsComponent } from './admin/user-groups/usergroups.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    LaptopsComponent,
    MobilesComponent,
    VegComponent,
    NonVegComponent,
    BatComponent,
    BallComponent,
    FootballComponent,
    CricketKitComponent,
    AdminComponent,
    UserComponent,
    UserValuesComponent,
    UsergroupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
