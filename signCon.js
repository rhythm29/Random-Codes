//console.log(Number(8).toString(2));
//console.log(8>>>0);


function toUint32(x) {
    return x >>> 0;
 }

 console.log(toUint32(~2147483647));

 
function dec2Bin(dec)
{
    if(dec >= 0) {
        return dec.toString(2);
    }
    else {
        /* Here you could represent the number in 2s compliment but this is not what 
           JS uses as its not sure how many bits are in your number range. There are 
           some suggestions http://stackoverflow.com/questions/10936600/javascript-decimal-to-binary-64-bit 
        */
        return (~dec).toString(2);
    }
}

var num = -10;
console.log(num.toString(2));