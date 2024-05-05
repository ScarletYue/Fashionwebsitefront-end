import { Injectable } from '@angular/core';
import { SanPham } from '../san_pham/san-pham';

@Injectable({
  providedIn: 'root'
})
export class CtSanPhamService {
  sanPham?: SanPham=new SanPham;
  constructor() { }

}
