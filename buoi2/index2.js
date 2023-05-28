//Hàm không có tham số
//vd1
function hello() {
    console.log("Hello");
}

hello();

//Hàm có tham số
//vd1
function hello2(name) {
    console.log("Hello " + name);
}

hello2("Tùng");

//Hàm có trả về giá trị (return)
//vd1 sum = cộng
function sum(a, b) {
    return a + b;
}

let x = sum(3, 9);
console.log(x);

//vd2 sub = trừ
function sub(a, b, c) {
    return a - b - c;
}

let y = sub(300, 201, 100);
console.log(y);

//vd3 mul = nhân
function mul(a, b, c) {
    return a * b * c;
}

let z = mul(2, 1, 23);
console.log(z);

//vd4 div = chia; paramater/3 tham số
function div(a, b, c) {
    return a / b / c;
}

let e = div(20, 2, 5);
console.log(e);



//áp dụng? 

//a
function PhanloaiSo(x) {
    let phannguyen = Math.floor(x);
    if (x < 0) {
        console.log(x + " la so am");
    } else if (x == 0) {
        console.log(x + " bang 0");
    } else {
        if (x - phannguyen == 0) {
            console.log(x + " la so nguyen duong");
        } else {
            console.log(x + " la so thap phan duong");
        }
    }
}

PhanloaiSo(10.0);

//b
function Solonnhat(a, b, c) {
    let max;
    if (a < b) {
        max = b;
    } else {
        max = a;
    }

    if (max < c) {
        max = c;
    }

    console.log("Gia tri lon nhau la " + max);
}

Solonnhat(3, 4, 5);

//c
function Xephanghs(dtb) {
    if( dtb < 5) {
        console.log("Hang F");
    } else if (dtb < 7) {
        console.log("Hang C");
    } else if(dtb < 9) {
        console.log("Hang B");
    } else {
        console.log("Hang A");
    }
}

Xephanghs(5.6);

//d; Khai báo bíe sử dụng từ khóa let thì biến đó chỉ sử dụng được trong cái hàm chứa nó
function Phuongtrinhbac2(a, b, c) {
    if (a == 0) {
        let x = -c / b;
        console.log("Nghiệm của phương trình là: " + x);
    } else {
        let delta = (b * b) - (4 * a * c);
        if (delta < 0) {
            console.log("Phương trình vô nghiệm");
        } else if (delta == 0) {
            let x = (-1 * b) / (2 * a);
            console.log("Phương trình có nghiệm kép, x = " + x);
        } else {
            let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a); 
            let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a);
            console.log("Phương trình có 2 nghiệm phân biệt: x1 = " + x1 + ";x2 = " + x2);
        }
    }
}

Phuongtrinhbac2(12, 24, 20);