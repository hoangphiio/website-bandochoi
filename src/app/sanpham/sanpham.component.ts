import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sanpham } from '../models/Sanpham';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.css']
})
export class SanphamComponent implements OnInit {
  public sanpham: any;

  constructor(
    private common: CommonService,
    private serverHttp: ServerHttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadData();
  }
  private loadData() {
    this.serverHttp.getSanpham().subscribe((data) => {
      console.log('getSanpham', data);
      this.sanpham = data;
    });
  }

  public addSanpham() {
    this.router.navigate(['chucnang', 0])
  }

  public deleteSanpham(sanphamId: any) {
    console.log('sanpham', sanphamId)
    this.serverHttp.deleteSanpham(sanphamId).subscribe((data) => {
      console.log('delete', data);
      this.loadData();
    });
  }

  public editSanpham(sanphamId: any) {
    this.router.navigate(['chucnang', sanphamId]);
  }
}
