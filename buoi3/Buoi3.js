// alert("test");

//1
function leap_year(a) {
    if(a % 400 == 0 || (a % 4 == 0 && a % 100 != 0)) {
        console.log(a + " La nam nhuan");
    } else {
        console.log(a + " Khong phai nam nhuan");
    }
}

leap_year(2028);

//3
function thamso(x, y){
    let chu_vi = ( (x + y)*2 )
    let dien_tich = (x * y)
    console.log("Chu vi la " + chu_vi);
    console.log("Dien tich la " + dien_tich);
}

thamso(3, 4);

//2
function classify_triangle(a, b, c) {
    let sum = a + b + c;
    if (sum == 180) {
        if (a > 90 || b > 90 || c > 90) {
            console.log("Tam giac tu");
        } else if ((a < 90 && b < 90 && c < 90) ) {
            console.log("Tam giac nhon");
        } else if( a== 90 || b==90 || c==90) {
            console.log("Tam giac vuong");
        } else {
            console.log("Tam giac deu");
        }
    } else {
        console.log("Tam giac khong hop le");
    }
}

classify_triangle(60, 60, 60)

//4
function circle(raidus) {
    const pi = 3.14;
    let C = raidus * 2 * pi;
    let S = radius * radius * pi;
    let D = radius * 2;
    console.log("Chu vi = " + C);
    console.log("Dien tich = " + S);
    console.log("Duong kinh = " + D);
}

radius(9);
