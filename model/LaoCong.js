import {NhanVien} from './NhanVien.js'

export class LaoCong extends NhanVien{

    constructor(name){
        super(name)
    }
    congViec(){

    }
    tinhLuong(){
        return super.tinhLuong() + 2000;
    }
}

let laoCong = new LaoCong();
laoCong.tinhLuong();

export const arrSinhVien = [{ma:1 , ten:'a'},{ma:2 , ten:'b'}]

//Export default mỗi file chỉ sử dụng được 1 lệnh và khi import có teh3 rename mà ko cần viết đúng tên

export default LaoCong ;