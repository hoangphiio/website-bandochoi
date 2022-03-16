import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Sanpham } from '../models/Sanpham';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-chucnang',
  templateUrl: './chucnang.component.html',
  styleUrls: ['./chucnang.component.css']
})
export class ChucnangComponent implements OnInit {
  id: any;
  public chucnang = new FormGroup({
    img: new FormControl(''),
    thuonghieu: new FormControl(''),
    tensanpham: new FormControl(''),
    masanpham: new FormControl(''),
    chatlieu: new FormControl(''),
    soluongtonkho: new FormControl(''),
    giasanpham: new FormControl(''),
  });

  constructor(private common: CommonService, private serverHttp: ServerHttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id > 0) {
      this.loadData(this.id);
    }
  }

  public loadData(id: any) {
    console.log('load data', id);
    this.serverHttp.getSanphams(id).subscribe((data) => {
      console.log('getSanphams', data);
      for (const controlName in this.chucnang.controls) {
        if (controlName) {
          this.chucnang.controls[controlName].setValue(data[controlName]);
        }
      }
    });
  }

  private createNewData() {
    const newSanpham: any = {};
    for (const controlName in this.chucnang.controls) {
      if (controlName) {
        newSanpham[controlName] = this.chucnang.controls[controlName].value;
      }
    }
    return newSanpham as Sanpham;
  }

  public saveAndGotoList() {
    if (this.id > 0) {
      this.serverHttp.modifySanpham(this.id, this.createNewData()).subscribe((data) => {
        console.log('Thêm thành công', data)
        this.router.navigate(['sanpham'])
      });
    } else {
      this.serverHttp.addSanpham(this.createNewData()).subscribe((data) => {
        console.log('Thêm thành công', data)
        this.router.navigate(['sanpham'])
      });
    }
  }

  public save() {
    if (this.id > 0) {
      this.serverHttp.modifySanpham(this.id, this.createNewData()).subscribe((data) => {
        console.log('Thêm thành công', data)
      });
    } else {
      this.serverHttp.addSanpham(this.createNewData()).subscribe((data) => {
        console.log('Thêm thành công', data)
        this.chucnang.reset();
      });
    }
  }
}
