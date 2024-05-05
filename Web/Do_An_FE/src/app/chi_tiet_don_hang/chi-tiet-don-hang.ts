import { DonHang } from "../don_hang/don-hang";
import { KhachHang } from "../khach_hang/khach-hang";
import { SanPham } from "../san_pham/san-pham"

export class ChiTietDonHang {
    id_ChiTietDonHang?: number
    donHang: DonHang=new DonHang();
    sanPham:SanPham=new SanPham();
    khachHang: KhachHang=new KhachHang();
    soLuong?: number
    gia?: number
    size?: String;
}
