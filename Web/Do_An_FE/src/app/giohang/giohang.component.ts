import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { ChiTietDonHang } from '../chi_tiet_don_hang/chi-tiet-don-hang';
import { ChiTietDonHangService } from '../chi_tiet_don_hang/chi-tiet-don-hang.service';
import { KhachHang } from '../khach_hang/khach-hang';

interface Product {
  name: string;
  price: number;
  image: string;
}

interface CartItem {
  product: Product;
  quantity: number;
  total: number;
}

@Component({
  selector: 'app-giohang',
  templateUrl: './giohang.component.html',
  styleUrls: ['./giohang.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('0', style({ opacity: 0 })),
      state('1', style({ opacity: 1 })),
      transition('0 <=> 1', animate('0.5s ease-in-out'))
    ])
  ]
})
export class GiohangComponent {
  [x: string]: any;
  @Input() quantity: number = 1;
  @Input() min: number = 1;
  @Input() max: number = 10;
  chitietdonhang?: ChiTietDonHang;
  chiTietDonHangs?: ChiTietDonHang[];
  khachHang: KhachHang=new KhachHang();
  tong: number=0;
  ngOnInit():void{
  const khachHangString = localStorage.getItem('khachHang');
  if (khachHangString)
    {
      this.khachHang= JSON.parse(khachHangString);
      if(this.khachHang.id_KhachHang)
      this.chiTietDonHangService.findChiTietDonHangById(this.khachHang.id_KhachHang).subscribe(data => {
        this.chiTietDonHangs=data;
        
      })
    }else
    {
      this.chiTietDonHangService.findChiTietDonHangByDonHang(1).subscribe(data => {
        this.chiTietDonHangs=data;
      })
    }
  }
    decreaseQuantity() {
    if (this.quantity > this.min) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    if (this.quantity < this.max) {
      this.quantity++;
    }
  }
  btXoa(id?: number){
    console.log(id);
    if (id != undefined)
    this.chiTietDonHangService.removeChiTietDonHang(id).subscribe(data => {
      console.log(data);
      location.reload();
    },
    error => console.log(error));
  }
  getTong(chiTietDonHang:ChiTietDonHang):Number{
    if(chiTietDonHang.gia&&chiTietDonHang.soLuong)
    this.tong= chiTietDonHang.gia*chiTietDonHang.soLuong;
  return this.tong;
  }
  constructor( private router: Router, private chiTietDonHangService: ChiTietDonHangService) {}
  navigateToTrangchu() {
    this.router.navigate(['/trangchu']);}
}
