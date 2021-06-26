// BÀI 1 :TÍNH TIỀN LƯƠNG NHÂN VIÊN

function luongNhanVien() {

    var luongNV = document.getElementById('soNgayLam').value;
    var luongNgay = 100000;
    var luong = luongNgay * luongNV;

    var tinhTienLuong = document.getElementById('tinhTienLuong');
    tinhTienLuong.innerHTML = "";

    var divTienLuong = document.createElement('div');
    divTienLuong.classList.add('borderdiv');
    var pTienLuong = document.createElement('p');
    pTienLuong.innerHTML = luong + " VNĐ";

    tinhTienLuong.appendChild(divTienLuong);
    divTienLuong.appendChild(pTienLuong);


}

// BAI 2 :TÍNH GIÁ TRỊ TRUNG BÌNH

function tinhTrungBinh() {

    var soThu1 = document.getElementById('so1').value;
    var soThu2 = document.getElementById('so2').value;
    var soThu3 = document.getElementById('so3').value;
    var soThu4 = document.getElementById('so4').value;
    var soThu5 = document.getElementById('so5').value;

    var diemTrungBinh = (+soThu1 + +soThu2 + +soThu3 + +soThu4 + +soThu5) / 5

    var contentTrungBinh = document.getElementById('content__trungbinh');
    contentTrungBinh.innerHTML = "";
    var divcontent = document.createElement('div');
    var pcontent = document.createElement('p');

    divcontent.classList.add('borderdiv');
    pcontent.innerHTML = diemTrungBinh + " Điểm";

    contentTrungBinh.appendChild(divcontent);
    divcontent.appendChild(pcontent);


}

// BAI 3 :QUY ĐỔI RA USD

function usd() {

    var soUSD = document.getElementById('soTienUSD').value;
    var giaUSD = 23500;
    var thanhTien = soUSD * giaUSD;

    var kqUSD = document.getElementById('kqUSD');
    kqUSD.innerHTML = "";

    var divkqUSD = document.createElement('div');
    divkqUSD.classList.add('borderdiv');
    var pkqUSD = document.createElement('p');
    pkqUSD.innerHTML = thanhTien + " VNĐ";

    kqUSD.appendChild(divkqUSD);
    divkqUSD.appendChild(pkqUSD);


}

// BAI 4 :CHU VI HÌNH CHỮ NHẬT

function kqChuViDienTich() {

    var chieuDai = document.getElementById('chieudai').value;
    var chieuRong = document.getElementById('chieurong').value;
    var dienTich = +chieuDai * +chieuRong;
    var chuVi = (+chieuDai + +chieuRong) * 2;

    var contentChuVi = document.getElementById('contentChuVi');
    contentChuVi.innerHTML = "";

    var divcontentChuVi = document.createElement('div');
    divcontentChuVi.classList.add('borderdiv');
    var pcontentDienTich = document.createElement('p');
    pcontentDienTich.innerHTML = " - Diện tích: " + dienTich;
    var pcontentChuVi = document.createElement('p');
    pcontentChuVi.innerHTML = " - Chu vi: " + chuVi;

    contentChuVi.appendChild(divcontentChuVi);
    divcontentChuVi.appendChild(pcontentDienTich);
    divcontentChuVi.appendChild(pcontentChuVi);

}


// BÀI 5 :TÍNH TỔNG 2 KÝ SỐ


function tinhTong() {
    var kySo = document.getElementById('kySo').value;
    var soHangDonVi = (+kySo % 10);
    var soHangChuc = Math.floor(+kySo / 10);
    var tinhTong = soHangChuc + soHangDonVi;

    var kqTinhTong = document.getElementById('kqTinhTong');
    kqTinhTong.innerHTML = "";
    var divkqTinhTong = document.createElement('div');
    divkqTinhTong.classList.add('borderdiv');
    kqTinhTong.appendChild(divkqTinhTong);


    if (kySo.length >= 3) {
        var note = " Không phải số có 2 ký số";

        var pkwarning = document.createElement('p');
        pkwarning.innerHTML = kySo + note;
        divkqTinhTong.appendChild(pkwarning);
        divkqTinhTong.classList.add('alert-danger');
    } else {
        var pkqTinhTong = document.createElement('p');
        pkqTinhTong.innerHTML = "- Tổng là: " + tinhTong;
        divkqTinhTong.appendChild(pkqTinhTong);
    }
}