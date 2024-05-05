import { Component } from '@angular/core';
import { SanPham } from '../san_pham/san-pham';
import { SanPhamService } from '../san_pham/san-pham.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-them-san-pham',
  templateUrl: './them-san-pham.component.html',
  styleUrls: ['./them-san-pham.component.css']
})
export class ThemSanPhamComponent {
  sanPham: SanPham= new SanPham();
  

  selectedFile: File | undefined;
  imageSrc?: string ;
  selectedMau: string | undefined;
  

  constructor(private http: HttpClient, private sanPhamSevice: SanPhamService) {}
  handleFileInput(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageSrc = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  
  onSubmit(){
    this.sanPham.duongDanAnh=this.imageSrc;
    this.sanPhamSevice?.createSanPhams(this.sanPham).subscribe(data => {
      console.log(data);
      alert("Đã thêm sản phẩm thành công");
    },
    error => console.log(error));
  }
  
}
