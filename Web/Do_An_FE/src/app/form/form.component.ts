import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KhachHang } from '../khach_hang/khach-hang';
import { KhacHangService } from '../khach_hang/khac-hang.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  khachHang: KhachHang = new KhachHang();
  mess: string="";
  
  constructor(private router: Router,private khacHangService: KhacHangService) {}
  

  navigateToFormLog() {
    this.router.navigate(['/formlog']);
  }
  onSubmit() {
    if(this.khachHang.tenDangNhap == null || this.khachHang.matKhau == null){
      this.mess = "vui lòng nhập đầy đủ thông tin"
    }else{
      console.log(this.khachHang);
      this.mess = "Đăng ký thành công";
      this.saveKhachHang(this.khachHang);
      this.navigateToFormLog();
    }
  }
  saveKhachHang(khach_hang: KhachHang) {
    this.khacHangService.createKhachHang(khach_hang).subscribe(data => {
      console.log(data);
    },
    error => console.log(error));
  }
  showMessage() {
    return this.mess;
  }
}