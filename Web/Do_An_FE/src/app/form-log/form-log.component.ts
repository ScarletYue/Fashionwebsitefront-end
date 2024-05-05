import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { KhachHang } from '../khach_hang/khach-hang';
import { KhacHangService } from '../khach_hang/khac-hang.service';
import { LoginRequest } from './login-request';
import { ThanhcongcuComponent } from '../thanhcongcu/thanhcongcu.component';
import { TrangChuComponent } from '../trangchu/trangchu.component';

@Component({
  selector: 'app-form-log',
  templateUrl: './form-log.component.html',
  styleUrls: ['./form-log.component.css']
})
export class FormLogComponent {
  khachHang: KhachHang = new KhachHang();
  loginRequest: LoginRequest = new LoginRequest();
  mess?: any;
  constructor(private router: Router, private khacHangService: KhacHangService) {}

  navigateToForm() {
    this.router.navigate(['/']);
    this.router.navigate(['/form']);

  }
  onSubmit() {
    this.khacHangService.loginKhachHang(this.loginRequest).subscribe(data => {
      this.khachHang=data;
      if(this.khachHang !=null){
        alert("Đăng Nhập thành công");
        localStorage.setItem('khachHang', JSON.stringify(this.khachHang));
        location.reload();
        window.location.href = '/';
      }else{
        alert("Đăng nhập thất bại")
      }
    },
    error => console.log(error));
  }
}
