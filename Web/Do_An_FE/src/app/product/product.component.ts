import {  Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { SanPham } from '../san_pham/san-pham';
import { HttpClient } from '@angular/common/http';
import { SanPhamService } from '../san_pham/san-pham.service';
import { DonHang } from '../don_hang/don-hang';
import { ChiTietDonHang } from '../chi_tiet_don_hang/chi-tiet-don-hang';
import { DonHangService } from '../don_hang/don-hang.service';
import { ChiTietDonHangService } from '../chi_tiet_don_hang/chi-tiet-don-hang.service';
import { KhachHang } from '../khach_hang/khach-hang';
import { GiohangService } from '../giohang/giohang.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
 
  @Input() selectedCategory: string = 'All';
  @Input() selectedCate: string = 'All';
  @Output() categorySelected = new EventEmitter<string>();
  @Output() cateSelected = new EventEmitter<string>();
  @Output() categoryAndCateSelected = new EventEmitter<{ category: string, cate: string }>();

  categories: string[] = ['All', 'T-Shirt', 'Jacket', 'Hoodie','Shorts','Trousers'];
  router: any;
  routerSubscription: any;
  id:Number=0;
  
  sanPhams: SanPham[]=[];
  chiTietDonHangs?: ChiTietDonHang= new ChiTietDonHang();
  khachHang?: KhachHang= new KhachHang();
  sanPham: any;
  itemsPerPage: number=16;
  displaySanPhams: SanPham[]=[];
  constructor(private http: HttpClient, private sanPhamSevice: SanPhamService,private donHangService: DonHangService, private chiTietDonHangService: ChiTietDonHangService,private gioHangSerive: GiohangService) {}
  selectCategory(category: string) {
    this.selectedCategory = category;
    this.categorySelected.emit(category);
    this.categoryAndCateSelected.emit({ category: this.selectedCategory, cate: this.selectedCate });
    console.log(this.selectedCategory);
    
    this.sanPhamSevice.getSanPhamsByLoaiSanPhamId(this.selectedCategory).subscribe(data => {
      this.sanPhams = data;
      console.log(this.sanPhams);
      this.goToPage(0);
    });

}
selectCategory2(category: string) {
  this.selectedCategory = category;
  this.categorySelected.emit(category);}

  cates: string[] = [ 'All','Nam', 'Nữ'];
  selectCate(cate: string) {
    this.selectedCate = cate;
    this.cateSelected.emit(cate);
    this.categoryAndCateSelected.emit({ category: this.selectedCategory, cate: this.selectedCate });
  }
    pageSize: number = 6;
  currentPage: number = 1;
  pages: number[] = [];
  prevSelectedCategory: string | undefined;
  prevSelectedCate: string | undefined;
  prevSelectedCategoryandcate: string | undefined;
kiemTra(id: number){
  this.id=id;
    return this.id;
}
isMenuOpen: boolean = false;

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}
    moveToDetail(SanPham: SanPham): void {
      this.router.navigate(['/chitietsanpham', SanPham.id_SanPham]);
      
    }
    paginateSanPhams(): void {
          }
  goToPage(page: number) {
    if(this.sanPhams){
    if (page >= 1 && page <= this.sanPhams.length) {
      this.currentPage += 1; 
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.displaySanPhams = this.sanPhams.slice(startIndex, endIndex);
      console.log(this.displaySanPhams);
    }else
    if (page < 1) {
      this.currentPage = 1;
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.displaySanPhams = this.sanPhams.slice(startIndex, endIndex);
      console.log(this.displaySanPhams);
    }else{
    this.currentPage-=1;
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displaySanPhams = this.sanPhams.slice(startIndex, endIndex);
    console.log(this.displaySanPhams);
  }}
  }
  ngOnInit(): void {
    this.sanPhamSevice.getSanPhams().subscribe(data => {
      this.sanPhams = data;
      console.log(this.sanPhams);
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      this.displaySanPhams = this.sanPhams.slice(startIndex, endIndex);
      console.log(this.displaySanPhams);
    });
   
    this.paginateSanPhams();
  }
  navigateToForm() {
    this.router.navigate(['/trangchu']);

  }
}
