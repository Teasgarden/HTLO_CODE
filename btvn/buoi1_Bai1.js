// //bai 1

// let x=10 
// let phannguyen = Math.floor(x);
// if (x < 0) {
//     console.log("X la so am");
// } else if (x==0) {
//     console.log("x bang 0");
// } else {
//     if (x - phannguyen == 0) {
//         console.log("x la so nguyen duong");
//     } else {
//         console.log("x la so thap phan duong");
//     }
// }

//bai2

// let a=1
// let b=3
// let c=4
// let max;

// if(a<b) {
//     max=b;
// } else {
//     max = a;
// }

// if(max < c) {
//     max = c;
// }

// console.log("Gia tri lon nhau la " + max );

//bai 3
// let dtb = 9.8;

// if( dtb < 5) {
//     console.log("Hang F");
// } else if (dtb < 7) {
//     console.log("Hang C");
// } else if(dtb < 9) {
//     console.log("Hang B");
// } else {
//     console.log("Hang A");
// }

//bai 4_bai nang cao
let a = 1;
let b = -11;
let c = 30;

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

