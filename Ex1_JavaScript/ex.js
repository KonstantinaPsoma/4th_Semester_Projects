'use strict';

console.log('"1η Ασκηση"');

function powerOf2(x){
    return 2**x;
}

var i;
for(i=1; i<11; i++){
   var myVar = powerOf2(i); 
   console.log('"1η Δύναμη του 2: ' + myVar + '"');
}



console.log('"2η Ασκηση"');

function Maximum(var1, var2, var3){
    var max= var1;
    if(var2>max){
        max = var2;
    }
    if(var3>max){
        max= var3;
    }
    return max;
}

console.log('"Κλήση συνάρτησης με ορίσματα: 10, 14, 9"');
var var1 = 10;
var var2 = 14;
var var3 = 9;
console.log(Maximum(var1, var2, var3));

console.log('"Κλήση συνάρτησης με ορίσματα: aa, ba, ca"');
console.log(Maximum('aa', 'ba', 'ca'));

console.log('"3η Άσκηση"');

function Integers(var1, var2){
    if(var1>0 && Number.isInteger(var1) && var2>0 && Number.isInteger(var2)){
        return var2**var1;
    }
    else{
        return;
    }
}

console.log('"Κλήση συνάρτησης με ορίσματα: 3, 3"');
console.log(Integers(3,3));

console.log('"Κλήση συνάρτησης με ορίσματα: 3.2, 3"');
console.log(Integers(3.2,3));

console.log('"Κλήση συνάρτησης με ορίσματα: -3, 3"');
console.log(Integers(-3,3));

console.log('"Κλήση συνάρτησης με ορίσματα: ' + "'aa'," + "'ba'");
console.log(Integers('aa', 'ba'));

