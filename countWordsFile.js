function getStopWords(){
    fs = require('fs');
    var stopWordDict = {};
     var stopWordArr = fs.readFileSync('/home/rhythm/geek_school/stringify_prac/stopWords').toString().split('\n');
     for(var x = 0; x< stopWordArr.length; x++){
        stopWordDict[stopWordArr[x]] = true;
     }
     return stopWordDict;
}




function countWords(arr){
  var stopWord = getStopWords();
  var hit = {};
  for( key in arr){
    if(arr[key] in stopWord){
        continue;
    }
    if( arr[key] in hit){
      hit[arr[key]] += 1;
    }
    else{
      hit[arr[key]] = 1;
    }
  }
  return hit;
}


fs = require('fs');
var separators = [' ', '\n', '\\.'];
console.log(separators.join('|'));
var tokens = fs.readFileSync('/home/rhythm/geek_school/stringify_prac/intro').toString().split(new RegExp(separators.join('|'), 'g'));
// var sortable = [];
// for( str in newarr){
// 	sortable.push([str, newarr[str]])
// }
// sortable.sort(function(a, b) {return a[1] - b[1]})

console.log(countWords(tokens));