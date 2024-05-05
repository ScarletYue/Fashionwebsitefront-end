import { Component, OnInit } from '@angular/core';
import { Product } from './product0.model';
import { Product0Service } from './product0.service';
import { ActivatedRoute, Router } from '@angular/router';
import { KhachHang } from '../khach_hang/khach-hang';
import { KhacHangService } from '../khach_hang/khac-hang.service';


@Component({
  selector: 'app-thanhcongcu',
  templateUrl: './thanhcongcu.component.html',
  styleUrls: ['./thanhcongcu.component.css']
})
export class ThanhcongcuComponent implements OnInit {
  products: Product[] = [];
  khachHang: KhachHang= new KhachHang();
  selectedPriceRange: { min: number; max: number } = { min: 0, max: 100 };
  selectedDiscount: boolean = false;
  btDN?: string;
  bt:string | undefined;
  btThemSp: string | undefined;
  constructor(private khachHangService: KhacHangService,private productService: Product0Service, private router: Router) {
  }

  ngOnInit(): void {
    const khachHangString = localStorage.getItem('khachHang');
    if (khachHangString) {
      this.khachHang = JSON.parse(khachHangString);
      if(this.khachHang.admin==1){
        this.btThemSp="Thêm Sản Phẩm";
      }
      this.btDN="Đăng Nhập";
      this.btDN=undefined;

    }else{
      this.btDN="Đăng Nhập";
    }
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
    
  }

  filterProducts() {
  }
  layKhachHang(khachHang: KhachHang){
    this.khachHang=khachHang;
    
  }
  navigateToFormLog() {
    this.router.navigate(['/formlog']);
    this.router.navigate(['/lienhe']);
    this.router.navigate(['/trangchu']);
    this.router.navigate(['/giohang']);
    this.router.navigate(['/themsp']);

  }
  navigateToProduct(selectedCategory: string, selectedCate: string) {
    this.router.navigate(['/sanpham', selectedCategory, selectedCate]);
    
  }
}
