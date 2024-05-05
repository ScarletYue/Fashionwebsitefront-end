import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KhachHang } from '../khach_hang/khach-hang';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  bt?:string;
  currentYear: number = new Date().getFullYear();
  footer = [
    {
      diachi: 'Địa chỉ: ',
      email: 'Email:',
      Sdt: 'Số điện thoại: '
    },]
    constructor(private router: Router) {}
    ngOnInit(): void {
    const khachHangString = localStorage.getItem('khachHang');
  if (khachHangString) {
    this.bt="Đăng Xuất";
    // Sử dụng giá trị khách hàng trong class ThanhcongcuComponent
  }else{
    this.bt="Đăng Kí";
  }}
  btClick(){
    if(this.bt=="Đăng Kí"){
      this.router.navigate(['/form']);
    }else{
      localStorage.removeItem('khachHang');
      this.router.navigate(['/trangchu']);
      // Tải lại trang web
      location.reload();

      // Điều hướng đến trang cụ thể sau khi tải lại
      window.location.href = '/';

    }
  }
  navigateToFormLog() {
    this.router.navigate(['/form']);
  }
}
