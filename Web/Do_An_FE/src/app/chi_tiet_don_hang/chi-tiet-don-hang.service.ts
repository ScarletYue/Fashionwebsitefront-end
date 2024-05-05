import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChiTietDonHang } from './chi-tiet-don-hang';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChiTietDonHangService {
  chiTietDonHangs: ChiTietDonHang[] = [];
  baseurl: String="http://localhost:8080/api/ChiTietDonHang";
  constructor(private http: HttpClient) { }
  themSanPham(chiTietDonHang: ChiTietDonHang) {
    this.chiTietDonHangs.push(chiTietDonHang);
  }
  getAllChiTietDonHang(): Observable<ChiTietDonHang[]>{
    return this.http.get<ChiTietDonHang[]>(`${this.baseurl}`);
  }
  createChiTietDonHang(chiTietDonHang: ChiTietDonHang): Observable<ChiTietDonHang>{
    return this.http.post<ChiTietDonHang>(`${this.baseurl}`, chiTietDonHang);
  }
  findChiTietDonHangById(id: number): Observable<ChiTietDonHang[]>{
    return this.http.get<ChiTietDonHang[]>(`${this.baseurl}/${id}`);
  }
  findChiTietDonHangByDonHang(id: number): Observable<ChiTietDonHang[]>{
    return this.http.get<ChiTietDonHang[]>(`${this.baseurl}/donhang/${id}`);
  }
  removeChiTietDonHang(id: number): Observable<Number>{
    return this.http.delete<Number>(`${this.baseurl}/${id}`);
  }
}
