let x=1
let y=3
let z=4

function findMax(x, y, z) {
    let max=z
    if( x > max ) max = x;
    if( y> max ) max = y;

    return max;
}
console.log(findMax(x, y, z) );
