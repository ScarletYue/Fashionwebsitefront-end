import { KhachHang } from "../khach_hang/khach-hang"

export class DonHang {
    id_DonHang?: number
    id_khachHang?: KhachHang=new KhachHang();
    trangThai?: string
    tongTien?: number
    ngayDatHang?: Date
}
