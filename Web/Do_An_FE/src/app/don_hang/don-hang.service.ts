import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DonHang } from './don-hang';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonHangService {
  baseUrl: String="http://localhost:8080/api/DonHang"
  constructor(private http: HttpClient) { }

  createDonHang(donHang: DonHang): Observable<DonHang>{
    return this.http.post<DonHang>(`${this.baseUrl}`, donHang);
  }
  findDonHangById(id: number): Observable<DonHang[]>{
    return this.http.get<DonHang[]>(`${this.baseUrl}/${id}`);    
  }
}
