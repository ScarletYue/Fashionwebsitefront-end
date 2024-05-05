import { LoaiSanPham } from "../loai_san_pham/loai-san-pham";

export class SanPham {
    chatLieu?: string;
    loaiSanPham: LoaiSanPham= new LoaiSanPham();
    size?: string;
    mau?: string;
    moTa?: string;
    gia?: number;
    id_SanPham?: number;
    tenSanPham?: string;
    duongDanAnh?: string;
    soLuongTonKho?: number;
    phuHop?: string;
}
