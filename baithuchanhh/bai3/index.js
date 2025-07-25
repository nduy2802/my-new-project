class SoTietKiem {
    constructor(maSo, loaiTietKiem, hoTen, cmnd, ngayMoSo, soTienGui) {
        this.maSo = maSo;
        this.loaiTietKiem = loaiTietKiem;
        this.hoTen = hoTen;
        this.cmnd = cmnd;
        this.ngayMoSo = ngayMoSo;
        this.soTienGui = soTienGui;
    }

    hienThi() {
        return ` Mã sổ: ${this.maSo}
 Loại tiết kiệm: ${this.loaiTietKiem}
 Họ tên: ${this.hoTen}
 CMND: ${this.cmnd}
 Ngày mở sổ: ${this.ngayMoSo}
 Số tiền gửi: ${this.soTienGui.toLocaleString()} VND`;
    }
}

let danhSachSTK = [];

function validateSoTietKiem(maSo, loaiTietKiem, hoTen, cmnd, ngayMoSo, soTienGui) {
    if (!maSo || maSo.length > 5) return "Mã sổ tối đa 5 ký tự.";
    if (!loaiTietKiem || loaiTietKiem.length > 10) return "Loại tiết kiệm tối đa 10 ký tự.";
    if (!hoTen || hoTen.length > 30) return "Họ tên tối đa 30 ký tự.";
    if (!/^\d{9,12}$/.test(cmnd)) return "CMND phải là số, từ 9 đến 12 chữ số.";
    if (!/^\d{2}-\d{2}-\d{4}$/.test(ngayMoSo)) return "Ngày mở sổ sai định dạng. Đúng là YYYY-MM-DD.";
    if (isNaN(soTienGui) || soTienGui <= 0) return "Số tiền phải là số dương.";
    return "";
}

function themSoTietKiem() {
    let maSo = prompt("Nhập mã sổ (tối đa 5 ký tự):").trim();

    while (danhSachSTK.find(s => s.maSo === maSo)) {
        alert(" Mã sổ đã tồn tại! Nhập lại.");
        maSo = prompt("Nhập mã sổ khác (tối đa 5 ký tự):").trim();
    }

    let loaiTietKiem = prompt("Nhập loại tiết kiệm (tối đa 10 ký tự):").trim();
    let hoTen = prompt("Nhập họ tên khách hàng (tối đa 30 ký tự):").trim();
    let cmnd = prompt("Nhập CMND (số):").trim();
    let ngayMoSo = prompt("Nhập ngày mở sổ (DD-MM-YYYY):").trim();
    let soTienGui = parseFloat(prompt("Nhập số tiền gửi (số dương):"));

    // Kiểm tra dữ liệu
    let loi = validateSoTietKiem(maSo, loaiTietKiem, hoTen, cmnd, ngayMoSo, soTienGui);
    if (loi !== "") {
        alert(" Lỗi: " + loi);
        themSoTietKiem(); // Cho nhập lại
        return;
    }

    const stk = new SoTietKiem(maSo, loaiTietKiem, hoTen, cmnd, ngayMoSo, soTienGui);
    danhSachSTK.push(stk);
    alert(" Thêm thành công!");
    document.getElementById("output").innerText = stk.hienThi();
}

function xoaSoTietKiem() {
    if (danhSachSTK.length === 0) {
        alert(" Danh sách trống.");
        return;
    }

    let maXoa = prompt("Nhập mã sổ tiết kiệm cần xóa:");
    let index = danhSachSTK.findIndex(s => s.maSo === maXoa);

    while (index === -1) {
        alert(" Không tìm thấy mã sổ này.");
        maXoa = prompt("Nhập lại mã sổ:");
        index = danhSachSTK.findIndex(s => s.maSo === maXoa);
    }

    let xacNhan = confirm("Bạn có chắc chắn muốn xóa không?");
    if (xacNhan) {
        danhSachSTK.splice(index, 1);
        alert(" Đã xóa thành công.");
        document.getElementById("output").innerText = "";
    } else {
        alert(" Hủy xóa.");
    }
}