import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thanhtoan',
  templateUrl: './thanhtoan.component.html',
  styleUrls: ['./thanhtoan.component.css']
})
export class ThanhtoanComponent {
  public districts: string[] = ['TP/Thị xã/Huyện'];
  public tinh = [
  {
    city:"Tỉnh", 
    district: [
      'TP/Thị xã/Huyện',
    ],
  },
  {
    city:"An Giang", 
    district: [
      'Thành phố Long Xuyên',
      'Thành phố Châu Đốc',
      'Thị xã Tân Châu',
      'Huyện An Phú',
      'Huyện Châu Phú',
      'Huyện Châu Thành',
      'Huyện Chợ Mới',
      'Huyện Phú Tân',
      'Huyện Thoại Sơn',
      'Huyện Tịnh Biên',
      'Huyện Tri Tôn'
    ],
  },
  {
    city:"Bà Rịa - Vũng Tàu", 
    district: [
      'Thành phố Vũng Tàu',
      'Thị xã Bà Rịa',
      'Thị xã Phú Mỹ',
      'uyện Châu Đức',
      'Huyện Côn Đảo',
      'Huyện Đất Đỏ',
      'Huyện Long Điền',
      'Huyện Tân Thành',
      'Huyện Xuyên Mộc',
    ],
  },
  {
    city:"Bạc Liêu", 
    district: [
      'Thành phố Bạc Liêu',
      'Huyện Đông Hải',
      'Huyện Giá Rai',
      'Huyện Hòa Bình',
      'Huyện Hồng Dân',
      'Huyện Phước Long',
      'Huyện Vĩnh Lợi',
    ],
  },
  {
    city:"Bắc Kạn", 
    district: [
      'Thị xã Bắc Kạn',
      'Huyện Ba Bể',
      'Huyện Bạch Thông',
      'Huyện Chợ Đồn',
      'Huyện Chợ Mới',
      'Huyện Na Rì',
      'Huyện Ngân Sơn',
      'Huyện Pác Nặm',
    ],
  },
  {
    city:"Bắc Giang", 
    district: [
      'Thành phố Bắc Giang',
      'Huyện Hiệp Hòa',
      'Huyện Lạng Giang',
      'Huyện Lục Nam',
      'Huyện Lục Ngạn',
      'Huyện Sơn Động',
      'Huyện Tân Yên',
      'Huyện Việt Yên',
      'Huyện Yên Dũng',
      'Huyện Yên Thế',
    ],
  },
  {
    city:"Bắc Ninh", 
    district: [
      'Thành phố Bắc Ninh',
      'Thị xã Từ Sơn',
      'Huyện Gia Bình',
      'Huyện Lương Tài',
      'Huyện Quế Võ',
      'Huyện Thuận Thành',
      'Huyện Tiên Du',
      'Huyện Yên Phong',
    ],
  },
  {
    city:"Bến Tre", 
    district: [
      'Thành phố Bến Tre',
      'Huyện Ba Tri',
      'Huyện Bình Đại',
      'Huyện Châu Thành',
      'Huyện Chợ Lách',
      'Huyện Giồng Trôm',
      'Huyện Mỏ Cày Bắc',
      'Huyện Mỏ Cày Nam',
      'Huyện Thạnh Phú',
    ],
  },
  {
    city:"Bình Dương", 
    district: [
      'Thành phố Thủ Dầu Một',
      'Thị xã Bến Cát',
      'Thị xã Tân Uyên',
      'Huyện Bắc Tân Uyên',
      'Huyện Dầu Tiếng',
      'Huyện Dĩ An',
      'Huyện Phú Giáo',
      'Huyện Tân Uyên',
      'Huyện Thuận An',
    ],
  },
  {
    city:"Bình Định", 
    district: [
      "Thành phố Quy Nhơn",
      "Huyện An Lão",
      "Huyện An Nhơn",
      "Huyện Hoài Ân",
      "Huyện Hoài Nhơn",
      "Huyện Phù Cát",
      "Huyện Phù Mỹ",
      "Huyện Tây Sơn",
      "Huyện Tuy Phước",
      "Huyện Vân Canh",
      "Huyện Vĩnh Thạnh"
    ],
  },
  {
    city:"Bình Phước", 
    district: [
      "Thị xã Bình Long",
      "Thị xã Đồng Xoài",
      "Thị xã Phước Long",
      "Huyện Bù Đăng",
      "Huyện Bù Đốp",
      "Huyện Bù Gia Mập",
      "Huyện Chơn Thành",
      "Huyện Đồng Phú",
      "Huyện Hớn Quản",
      "Huyện Lộc Ninh",
      "Huyện Phú Riềng"    
    ],
  },
  {
    city:"Bình Thuận", 
    district: [
      "Thành phố Phan Thiết",
      "Thị xã La Gi",
      "Huyện Bắc Bình",
      "Huyện Đảo Phú Quý",
      "Huyện Đức Linh",
      "Huyện Hàm Tân",
      "Huyện Hàm Thuận Bắc",
      "Huyện Hàm Thuận Nam",
      "Huyện Tánh Linh",
      "Huyện Tuy Phong"
    ],
  },
  {
    city:"Cà Mau", 
    district: [
      "Thành phố Cà Mau",
      "Huyện Cái Nước",
      "Huyện Đầm Dơi",
      "Huyện Năm Căn",
      "Huyện Ngọc Hiển",
      "Huyện Phú Tân",
      "Huyện Thới Bình",
      "Huyện Trần Văn Thời",
      "Huyện U Minh",
      "Huyện Tuy Phong"   
     ],
  },
  {
    city:"Cao Bằng", 
    district: [
      "Thị xã Cao Bằng",
      "Huyện Bảo Lạc",
      "Huyện Bảo Lâm",
      "Huyện Hạ Lang",
      "Huyện Hà Quảng",
      "Huyện Hòa An",
      "Huyện Nguyên Bình",
      "Huyện Phục Hòa",
      "Huyện Quảng Uyên",
      "Huyện Thạch An",
      "Huyện Thông Nông",
      "Huyện Trà Lĩnh",
      "Huyện Trùng Khánh"    
     ],
  },
  {
    city:"Cần Thơ", 
    district: [
      "Quận Bình Thủy",
      "Quận Cái Răng",
      "Quận Ninh Kiều",
      "Quận Ô Môn",
      "Quận Thốt Nốt",
      "Huyện Thới Lai",
      "Huyện Cờ Đỏ",
      "Huyện Phong Điền",
      "Huyện Vĩnh Thạnh"
    ],
  },
   {
    city:"Đà Nẵng", 
    district: [
      "Quận Cẩm Lệ",
      "Quận Hải Châu",
      "Quận Liên Chiểu",
      "Quận Ngũ Hành Sơn",
      "Quận Sơn Trà",
      "Quận Thanh Khê",
      "Huyện Hòa Vang",
      "Huyện Hoàng Sa"
    ],
  },
];

 public ngOnInit(): void {
  console.log('tinh = ', this.tinh);
 }

 public changeCity(event:any): void {
  const city = event.target.value;
  if (!city) {
    return;
  }
 this.districts = 
      this.tinh.find((data) => data.city === city)?.district || [];
}
constructor( private router: Router) {}
  navigateToTrangchu() {
    this.router.navigate(['/trangchu']);
    this.router.navigate(['/giohang']);
  }
}