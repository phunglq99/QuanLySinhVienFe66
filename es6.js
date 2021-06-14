// //Khai báo biến
// // Phân biệt var let và const;

// /*  
//     Phạm vi hoạt động của từ khóa var : toàn bộ scope
//     Phạm vi hoạt động của từ khóa let : Trong từng scope khác nhau sẽ phân biệt nhau
//     Trong cùng 1 scope không thể khai báo 2 lần let với cùng 1 tên biến
//     Dối với khai báo biến = var trong js sẽ hổ trợ cơ chế tự khai báo hosting(ngầm định khai báo biến đó ở đầu scope).
//     Dối với let và const không hỗ trợ hosting

// */


// // let hoTen = 'phụng';
// // {
// //     let hoTen = 'Phúc';
// //     console.log('hoTen',hoTen);
// // }
// // console.log('hoTen',hoTen);
// // console.log('name',name);
// // console.log('address',address);
// // console.log('city',city);

// // const name = 'Nguyễn văn a';
// // let address = '459 sư vạn hạnh';
// // var city = 'TPHCM';


// // ----------------Arrow Function------------------
// /* Arrow Function:
//     + Không hổ trợ cơ chế  hoisting (Khai báo trước mới được sử dụng gọi hàm)
//     + Đối với hàm  có 1 lệnh return thì không cần đóng {} và không cần ghi return
//     + Đối với hàm có 1 tham số thì không cần (thamso) => {} --> thamSo => {...}
//     + Lưu ý: Arrow function không thể định nghĩa dược prototype (class)
//     + Arrow function không làm thay đổi ngữ cảnh con trỏ this
// */
// //ES5
// function tenHamES5() {
//     console.log('tenhamES5')
// }
// // var tenHam = function(){
// // }

// // ES6
// var tenHam = () => {
//     console.log('hello Cyber');
// }
// tenHam();


// // var tinhTong = (a,b) => {
// //     return a + b;
// // }
// // ví dụ hàm có 1 lệnh return
// var tinhTong = (a, b) => a + b;
// // ví dụ hàm có 1 tham số
// var showMess = name => console.log(`Hello ${name}`);

// console.log(tinhTong(5, 10));
// showMess('phúc');

// //Arrow function không làm thay đổi ngữ cảnh con trỏ this

// /* + Ngữ cảnh (context) con trỏ this :
//         - Mặc định khi sữ dụng con trỏ this thì nó là window (var bien hoặc window.bien)
//         - Khi dùng con trỏ this trong đối tượng object ={} --> thì this là đối tượng đó
//         - Khi dùng con trỏ this trong function  (prototype hoặc class) thì this sẽ đại diện cho 
//         prototype hay class đó
//  */

// // console.log(window.innerHeight, window.innerWidth);
// // console.log(window.location.host);


// let hocVien = {
//     id: 1,
//     hoTenHocVien: 'Nguyen Văn A',
//     lop: 'Front end 66',
//     layThongTinHocVien: function () {
//         // Trong phương thức khai báo 1 hàm
//         let hienThiThongTin = () => {
//             console.log(`Họ tên: ${this.hoTenHocVien} - Lớp: ${this.lop}`)
//         }
//         //Gọi hàm đó
//         hienThiThongTin();

//     }
// }
// hocVien.layThongTinHocVien();



// //----------------------Default parameter--------
// /* + Giúp định nghĩa tham số mặc định cho hàm => 
//        - Nếu ta gọi hàm không truyền tham số thì hàm sẽ lấy tham số mặc định
//        - Ngược lại, nếu ta truyền tham số thì hàm sẽ thấy tham số ta truyền (không lấy mặc định)
// */

// var getUserInfo = (name ,year , age = 2021 - year) =>{
//     console.log('Name' + name);
//     console.log('Age' + age);
// }
// getUserInfo('Khải',1999,30);

// //------------------------- Rest params-------------------------


// // function tinhTong(a,b){
// //     console.log(a+b);
// // }
// // function tinhTong(a,b,c){
// //     console.log(a+b+c);
// // }

// var tinhTong = function(thamso1,...restParam){ // ...restParam là mảng[]
//     switch(restParam.length){
//         case 2:{
//             console.log(thamso1,'Tổng 2 tham số = ', restParam[0]+ restParam[1]);
//         }
//         case 3:{
//             console.log(thamso1,'Tổng 3 tham số = ', restParam[0]+ restParam[1] + restParam[2]);
//         }
//         default:{
//             console.log('Tham số không hợp lệ!');
//         }
//     }

// }

// tinhTong('bài toán',1,2,3);

// // -----------------------------Spread Operator-------------------
// /* Giúp thay đổi giá trị trong object (prototype or class) thứ nhất mà không cần phả copy paste giá trị như trên

// */

// let sinhVien1= {
//     maSV:1,
//     hoTen: ' Nguyễn Văn a',
// };
// let sinhVien2 = {...sinhVien1, lop:'FrontEnd 66', hoTen:'Tran Thi Phuong'};

// sinhVien2.maSV = 2;
// // sinhVien2.hoTen = 'Trần Thị Phương';

// console.log('sinhVien1', sinhVien1);
// console.log('sinhVien2', sinhVien2);

// let arr1 =[1,2,3,4];
// let arr2 =[...arr1, 7];

// // arr2.push[7];
// console.log(arr1);
// console.log(arr2);

// //----------------------------------------Destructuring-------------------------

// let sanPham ={
//     maSP:1,
//     tenSP: 'Iphone',
//     hinhAnh: 'https://picsum.photos/200/200',
//     thongTinSanPham : function(){
//         console.log('Mã sp: ',sanPham.maSP);
//         console.log('Tên sp: ',sanPham.tenSP);
//         console.log('Hình sp: ',sanPham.hinhAnh);
//     }
// }
// //ES5
// //  let maSP = sanPham.maSP;
// //  let tenSP = sanPham.tenSP;
// //  let hinhAnh = sanPham.hinhAnh;
// //  let thongTinSanPham = sanPham.thongTinSanPham;

// //ES6
// // let {maSP,tenSP,hinhAnh,thongTinSanPham}= sanPham;
// // let {maSP,tenSP,...restParam}= sanPham;
// let {maSP,tenSP} = sanPham;
// console.log(maSP,tenSP);
// // console.log('RestParams', restParam);

// //-------------------------------Object Literal--------------------
// // + Từ tên biến tạo ra tên thuộc tính
// let fName = 'Mị';
// let myobj ={
//     fName,
//     sayHi : function(){
//         console.log(`Hello ${this.fName}`)
//     }
// }
// console.log('myObj',myobj);

// //có thể truyền giá trị vào làm tên thuộc tính
// let tenThuocTinh = 'Mã Học Viên';
// let OLhocVien ={
//     [tenThuocTinh]: '001',
//     tenHocVien: 'Trần Văn Phương'
// }
// console.log('Học Viên :',OLhocVien[tenThuocTinh]);


// // ----------------------------For in - For Of-------------------------------
// //(1) For in : mỗi lần duyệt lấy ra index của mảng, Ngoài duyệt array ra for in còn dùng để duyệt các thuộc tính của object
// let mangSanPham =[
//     {maSP:1 ,tenSP: 'Iphone X',gia:1000,hinhAnh:'https://picsum.photos/200/200'},
//     {maSP:2 ,tenSP: 'Iphone XS',gia:2000,hinhAnh:'https://picsum.photos/200/200'},
//     {maSP:3 ,tenSP: 'Iphone XS max',gia:3000,hinhAnh:'https://picsum.photos/200/200'},

// ]
// // for(let index in mangSanPham){//...... index = 0 --> ....length -1
// //     // Mỗi lần duyệt lấy ra 1 sp
// //     let sanPham = mangSanPham[index];
// //     console.log('index',index);
// //     console.log('mangSanPham',mangSanPham[index]);
// //     console.log('mangSanPham',sanPham);

// // }
// var nguoiDung = {
//     taiKhoan:'nguyenvana',
//     matKhau:'12345',
//     email:'nguyenvana@gmail.com',
//     soDienThoai:'09312321312',

// }
//  for(let tenThuocTinh in nguoiDung){
//      console.log(tenThuocTinh, nguoiDung[tenThuocTinh]);
//  }
// // (2) For of: mỗi lần duyệt lấy ra 1 object trong mảng
// for(let sanPham of mangSanPham){
//     console.log('sanPham',sanPham);
// }

// // For in dùng để duyệt key (thuộc tính) object, For of dùng để duyệt object của array(mảng)


// ==============================Bài Tập=================================

document.querySelector('form').onclick = function (e) {
    e.preventDefault();
    // Dom đến tất cả input trong form
    let arrInput = document.querySelectorAll('form input[type=text]');
    console.log(arrInput);
    let hocVien = {};
    //Duyệt các thẻ input
    for (let input of arrInput) {
        //lấy ra name và value
        // let name = input.name;
        // let value = input.value;
        let { name, value } = input;
        hocVien = { ...hocVien, [name]: value }
        // console.log('input',input)
    }
    //Tạo table từ object học viên
    console.log('hocVien :', hocVien);
    var trHocVien = `<tr>`;
    for (let tenThuocTinh in hocVien) {
        trHocVien += `
            <td>${hocVien[tenThuocTinh]}</td>
        `
    }

    trHocVien += `</tr>`

    document.querySelector('#tableHocVien').innerHTML = trHocVien;
}

//----------------------------Class--------------------------------

//ES5
// function HocVien(){
//     this.maHocVien=ma;
//     this.tenHocVien = ten;
//     this.hienThiThongTin = function(){
//         console.log(this.maHocVien);
//         console.log(this.tenHocVien);
//     }
// }
//ES6

//  class HocVien{
//      maHocVien = '';
//      tenHocVien = '';

//      constructor(ma,ten){
//          this.maHocVien = ma;
//          this.tenHocVien = ten
//      }
//      // Có 2 Cách khai báo phương thức
//      // Cách 1
//      hienThiThongBaoHocVien(){
//          console.log(this.maHocVien);
//          console.log(this.tenHocVien);
//      }
//      //Cách 2
//      hienThiThongBao = () => {
//         console.log(this.maHocVien);
//         console.log(this.tenHocVien);
//      }
//  }
//  let hv = new HocVien(1 , 'Khải');

//  //-----------------------------Inheritance(kế thừa)---------------------

//  import { LaoCong,arrSinhVien } from './model/LaoCong.js';
//  import NhanVienLaoCong from './model/LaoCong.js';
//  let laoCong = new LaoCong('Khải');
//  laoCong.maNhanVien = 1;

//  console.log('laoCong',laoCong);
//  console.log(arrSinhVien);

//  let nhanVien = new NhanVienLaoCong('Phúc');
//  nhanVien.maNhanVien = 2;
//  nhanVien.tinhLuong();
//  console.log({nhanVien});

// vd 

let mangSanPham = [
    { maSP: 1, tenSP: 'Google pixel xl', gia: 1000, hangSX: 'Google' },
    { maSP: 2, tenSP: 'Google pixel xl 2', gia: 2000, hangSX: 'Google' },
    { maSP: 3, tenSP: 'Sony xperia xz', gia: 3000, hangSX: 'Sony' },
    { maSP: 4, tenSP: 'Sony xperia xzs', gia: 3000, hangSX: 'Sony' },
    { maSP: 5, tenSP: 'Iphone X', gia: 2500, hangSX: 'Apple' },
    { maSP: 6, tenSP: 'Iphone XS', gia: 1500, hangSX: 'Apple' },
    { maSP: 7, tenSP: 'Samsung galaxy s9', gia: 7000, hangSX: 'Samsung' },
    { maSP: 8, tenSP: 'Samsung galaxy Note 10 plus', gia: 8000, hangSX: 'Samsung' },
    { maSP: 9, tenSP: 'Xiaomi mi 9', gia: 9000, hangSX: 'Xiaomi' },
    { maSP: 10, tenSP: 'Xiaomi mi 10', gia: 10000, hangSX: 'Xiaomi' },
]

//  Yêu cầu : lấy ra các sản phẩm hangSX = sony
// let arrSony =[];
// for(let sanPham of mangSanPham){
//     if(sanPham.hangSX ==='Sony'){
//         arrSony.push(sanPham);
//     }
// }
// console.log(arrSony);

//---------------------------------- filter() --------------------------------
// Là hàm lọc ra các sản phẩm thỏa diểu kiện của arrowFunction

let arrSony = mangSanPham.filter(sanPham => sanPham.hangSX === 'Sony');
console.log('arrSony', arrSony)

// -------------------------------find()--------------------------------
// Là hàm tìm ra phần tử thõa điều kiện arrow function . Lấy ra sản phẩm dầu tiền tìm tháy, Tìm không thấy thì trả về undefine

let sp5 = mangSanPham.find(sanPham => sanPham.maSP === 5);

if (sp5) {
    console.log('sp5', sp5);
} else {
    console.log('Không tìm thấy');
}
// Bài tập 1 lấy ra các sản phẩm có giá trên 2000
let arrGia = mangSanPham.filter(sanPham => sanPham.gia > 2000);
console.log('arrGia', arrGia);

// Bài tập 2: thay đổi tên sản phẩm thứ 10 thành xiaomi mi mix 3
let tensp10 = mangSanPham.find(sanPham => sanPham.maSP === 10)
if (tensp10) {
    tensp10.tenSP = 'xiaomi mi mix 3';
    console.log(mangSanPham);
} else {
    console.log('Không tìm thấy');
}

//----------------------- findIndex()-----------------------------------
// Trương tự find tuy nhiên tìm vị trí  phần tử trong mảng nếu không tìm thấy thì trả về -1.(chỉnh sửa hoặc xóa dựa trên index)

let index = mangSanPham.findIndex(sp => sp.maSP === 9);
if (index !== -1) {
    mangSanPham.splice(index, 1);
    console.log('mangSP', mangSanPham)
} else {
    console.log('Không tìm thấy sản phẩm', index);
}


// ------------------------------foreach()-----------------------------------
// Dùng để duyệt qua các phần tử của mảng để làm thao tác j đó
mangSanPham.forEach((sanPham, index) => {
    sanPham.gia += 1000;
    console.log('sanPham', sanPham);
})

// --------------------------------------map()----------------------------

// Là phương thức dùng để thực hiện biến  đổi từ mảng này thành mảng khác
let htmlCard = mangSanPham.map((sanPham, index) => {
    return `
    <div class="col-4">
    <div class="card text-left">
    <img class="card-img-top" src="https://picsum.photos/id/${sanPham.maSP}/300/300" alt="">
    <div class="card-body">
      <h4 class="card-title">${sanPham.tenSP}</h4>
      <p class="card-text">${sanPham.gia}</p>
    </div>
  </div>
  </div>
    `
});

 htmlCard.forEach((htmlSanPham, index) => {
    // sanPham.gia +=1000;
    document.querySelector('#danhSachSanPham').innerHTML +=htmlSanPham;
})

// -----------------------------reduce()-----------------------------
// Tương tự hàm map() tuy nhiên kết quả trả về 1 giá trị , từ mảng => 1 giá trị

let tongTienSanPham = mangSanPham.reduce((tongTien,sanPham,index) =>{
    return tongTien += sanPham.gia;
},0)
console.log('Tổng Tiền: ', tongTienSanPham);

//Sử dụng reduce để tạo từ 1 mảng object => 1 chuổi html card
let stringHtml = mangSanPham.reduce((content,sanPham,index) =>{
    return content+= `<tr>
            <td>${sanPham.maSP}</td>
            <td>${sanPham.tenSP}</td>
            <td><img width="50" height="50" src="https://picsum.photos/id/${sanPham.maSP}/300/300" alt="">
            </td>
            <td>${sanPham.gia}</td>
            <td>${sanPham.hangSX}</td>
    
    </tr>`
},'')
document.querySelector('#tblSanPham').innerHTML = stringHtml;

// dùng reduce thay map()
let arrResult = mangSanPham.reduce((result,sanPham, index) => {
    return [...result , `
    <div class="col-4">
    <div class="card text-left">
    <img class="card-img-top" src="https://picsum.photos/id/${sanPham.maSP}/300/300" alt="">
    <div class="card-body">
      <h4 class="card-title">${sanPham.tenSP}</h4>
      <p class="card-text">${sanPham.gia}</p>
    </div>
  </div>
  </div>
    `]
},[]);

//-----------------------------------sort()---------------------------
// Sắp xếp chuổi a -> z và sắp xếp theo số
 mangSanPham.sort((sp, spTruocDo) =>{
    let tenSanPham = sp.tenSP.toLowerCase().trim();

    let tenSPTruoc = spTruocDo.tenSP.toLowerCase().trim();

    if(tenSanPham >tenSPTruoc){
        return 1;
    }
    return -1;
})
    console.log('mangSXTen',mangSanPham);
    //đổi chiều mảng
    // mangSanPham.reverse();
    // console.log('mangSXTen',mangSanPham);
    mangSanPham.sort((sp,spTruocDo) =>{
        return sp.gia - spTruocDo.gia;
    })
    console.log('mangSanPham theo giá',mangSanPham);