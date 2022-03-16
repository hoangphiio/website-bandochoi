import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GioithieuComponent } from '../gioithieu/gioithieu.component';
import { TrangchuComponent } from '../trangchu/trangchu.component';
import { SanphamComponent } from '../sanpham/sanpham.component';
import { ChucnangComponent } from '../chucnang/chucnang.component';
import { QuanlyComponent } from '../quanly/quanly.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'trangchu' },
  { path: 'trangchu', component: TrangchuComponent },
  { path: 'gioithieu', component: GioithieuComponent },
  { path: 'sanpham', component: SanphamComponent },
  { path: 'chucnang/:id', component: ChucnangComponent },
  { path: 'chucnang', component: ChucnangComponent },
  { path: 'quanly', component: QuanlyComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class NavigationModule { }
