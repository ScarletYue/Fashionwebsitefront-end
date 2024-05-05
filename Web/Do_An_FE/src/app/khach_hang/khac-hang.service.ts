import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { KhachHang } from './khach-hang';
import { LoginRequest } from '../form-log/login-request';


@Injectable({
  providedIn: 'root'
})
export class KhacHangService {
  khachHang:KhachHang = new KhachHang();
  baseUrl="http://localhost:8080/api/KhachHang"
  loginUrl="http://localhost:8080/api/KhachHang/login"
  constructor(private http: HttpClient) { }
  getKhachHang(){
    return this.khachHang;
  }
  setKhachHang(khachHang: KhachHang){
    this.khachHang=khachHang;
  }
  getKhachHangList(): Observable<KhachHang[]>{
    return this.http.get<KhachHang[]>(`${this.baseUrl}`);
  }
  createKhachHang(khachHang: KhachHang): Observable<KhachHang>{
    return this.http.post<KhachHang>(`${this.baseUrl}`, khachHang);
  }
  loginKhachHang(loginRequest: LoginRequest): Observable<KhachHang>{
    return this.http.post<KhachHang>(`${this.loginUrl}`, loginRequest);
  }
  getKhachHangById(id: number): Observable<KhachHang[]>{
    return this.http.get<KhachHang[]>(`${this.baseUrl}/${id}`);
  }
}
