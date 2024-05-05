import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangChuComponent } from './trangchu/trangchu.component';
import { ProductComponent } from './product/product.component';
import { ThanhcongcuComponent } from './thanhcongcu/thanhcongcu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { FormLogComponent } from './form-log/form-log.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { Sanpham1Component } from './sanpham1/sanpham1.component';
import { GiohangComponent } from './giohang/giohang.component';
import { ThanhtoanComponent } from './thanhtoan/thanhtoan.component';
import { KhachHangListComponent } from './khach_hang/khach-hang-list/khach-hang-list.component';
import { SanPhamListComponent } from './san_pham/san-pham-list/san-pham-list.component';
import { LoaiSanPhamListComponent } from './loai_san_pham/loai-san-pham-list/loai-san-pham-list.component';
import { DonHangListComponent } from './don_hang/don-hang-list/don-hang-list.component';
import { ChiTietDonHangListComponent } from './chi_tiet_don_hang/chi-tiet-don-hang-list/chi-tiet-don-hang-list.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ThemSanPhamComponent } from './them-san-pham/them-san-pham.component';

@NgModule({
  declarations: [
    AppComponent,
    TrangChuComponent,
    ProductComponent,
    ThanhcongcuComponent,
    FooterComponent,
    FormComponent,
    FormLogComponent,
    LienheComponent,
    Sanpham1Component,
    GiohangComponent,
    ThanhtoanComponent,
    KhachHangListComponent,
    SanPhamListComponent,
    LoaiSanPhamListComponent,
    DonHangListComponent,
    ChiTietDonHangListComponent,
    ThemSanPhamComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
