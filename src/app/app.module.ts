import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { FooterComponent } from './footer/footer.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { NavigationModule } from './navigation/navigation.module';
import { ChucnangComponent } from './chucnang/chucnang.component';
import { QuanlyComponent } from './quanly/quanly.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    TrangchuComponent,
    FooterComponent,
    GioithieuComponent,
    ChucnangComponent,
    QuanlyComponent,
    SanphamComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NavigationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
