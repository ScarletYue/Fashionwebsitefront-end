import { Component } from '@angular/core';
import { KhachHang } from '../khach-hang';
import { KhacHangService } from '../khac-hang.service';
@Component({
  selector: 'app-khach-hang-list',
  templateUrl: './khach-hang-list.component.html',
  styleUrls: ['./khach-hang-list.component.css']
})
export class KhachHangListComponent {
  khachHangs?: KhachHang[];

  constructor(private khacHangService: KhacHangService) {}

  getKhachHangs(): void {
    this.khacHangService.getKhachHangList().subscribe(khachHangs => this.khachHangs = khachHangs);
  }

}
