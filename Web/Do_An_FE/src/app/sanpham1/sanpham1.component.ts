import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SanPhamService } from '../san_pham/san-pham.service';
import { SanPham } from '../san_pham/san-pham';
import { ChiTietDonHang } from '../chi_tiet_don_hang/chi-tiet-don-hang';
import { ChiTietDonHangService } from '../chi_tiet_don_hang/chi-tiet-don-hang.service';
import { KhachHang } from '../khach_hang/khach-hang';

@Component({
  selector: 'app-sanpham1',
  templateUrl: './sanpham1.component.html',
  styleUrls: ['./sanpham1.component.css']
})
export class Sanpham1Component {
    productId: number = 0;
    chiTietDonHang: ChiTietDonHang=new ChiTietDonHang();
    @Input() productPrice: number = 50; // Giá gốc của sản phẩm
    @Input() salePrice: number | null = 10; // Số tiền giảm giá
    @Input() hasSale: boolean = false; // Có giảm giá hay không
    @Input() value: number = 1;
    sanPham: SanPham=new SanPham();
    gioHang: ChiTietDonHang[]=[];
  khachHang: KhachHang=new KhachHang();
    discountedPrice(): number {
      return this.productPrice - (this.salePrice !== null ? this.salePrice : 0);
    }
    increment() {
      this.value++;
    }
  
    decrement() {
      if (this.value > 0) {
        this.value--;
      }
    }
    onInputChange(event: Event) {
      const inputValue = (event.target as HTMLInputElement).value;
      const numericValue = parseInt(inputValue, 10);
  
      if (!isNaN(numericValue)) {
        this.value = numericValue;
      }
    }
    constructor(private router: Router,private route: ActivatedRoute,private sanPhamService: SanPhamService,private chiTietDonHangService: ChiTietDonHangService) {}

  navigateToFormLog() {
    this.router.navigate(['/formlog']);
  }
btThemGioHang() {
  const khachHangString = localStorage.getItem('khachHang');
  if (khachHangString) {
    this.chiTietDonHang.donHang.id_DonHang=2;
    this.khachHang = JSON.parse(khachHangString);
    this.chiTietDonHang.khachHang = this.khachHang;
    this.chiTietDonHang.khachHang.id_KhachHang = this.khachHang.id_KhachHang;
    this.chiTietDonHang.gia = this.sanPham.gia;
    this.chiTietDonHang.sanPham.id_SanPham = this.sanPham.id_SanPham;
    this.chiTietDonHang.soLuong = this.value;
    this.chiTietDonHangService.createChiTietDonHang(this.chiTietDonHang).subscribe(data => {
      console.log(data);
    })
  }else{
    this.chiTietDonHang.donHang.id_DonHang=1;
    this.chiTietDonHang.gia = this.sanPham.gia;
    this.chiTietDonHang.sanPham.id_SanPham = this.sanPham.id_SanPham;
    this.chiTietDonHang.soLuong = this.value;
    this.chiTietDonHangService.createChiTietDonHang(this.chiTietDonHang).subscribe(data => {
      console.log(data);
    })
  }
    
    // Lấy mảng chiTietDonHang từ localStorage
    
}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if(typeof params.get('id') === 'string') {
        this.productId = +params.get('id')!;
        
        this.sanPhamService.getSanPhamById(this.productId).subscribe(data => {
          this.sanPham = data;
        })
      }
    });
}}
