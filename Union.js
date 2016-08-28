function unionArrays (x, y) {
      var obj = {};
      for (var i = 0; i <=x.length; i++)
          obj[x[i]] = true;
           //console.log(obj);
      for (var i = 0; i <= y.length; i++)
           obj[y[i]] = true;
           var res = []
      for (var k in obj) {
          if (obj.hasOwnProperty(k))  // <-- optional
              res.push(k);
     }
      return res;
}

var a = [1,2,3,4]
var b = [4,5,6,7];
console.log(unionArrays(a,b));