import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SanPham } from './san-pham';

@Injectable({
  providedIn: 'root'
})
export class SanPhamService {
  private baseUrl="http://localhost:8080/api/SanPhams"
  private sgetSanPhamsByLoaiSanPham="http://localhost:8080/api/SanPhams/getSanPhamByLoaiSanPham"
  
  constructor(private http: HttpClient) { }

  getSanPhams(): Observable<SanPham[]>{
    return this.http.get<SanPham[]>(`${this.baseUrl}`);
  }
  createSanPhams(sanPham: SanPham): Observable<SanPham>{
    return this.http.post<SanPham>(`${this.baseUrl}`, sanPham);
  }
  getSanPhamsByLoaiSanPhamId(loaiSanPhamId: any): Observable<SanPham[]>{
    return this.http.get<SanPham[]>(`${this.sgetSanPhamsByLoaiSanPham}?loaiSanPham=${loaiSanPhamId}`);
  }
  getSanPhamById(id: any): Observable<SanPham>{
    return this.http.get<SanPham>(`${this.baseUrl}/${id}`);
  }
}
