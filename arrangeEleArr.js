function arangeColor(str, start, a){
	cur = start;
	next = start;
	while(next != a.length){
		if(a[next] == str){
            temp = a[cur];
            a[cur] = a[next];
            a[next] = temp;
            cur++;
        }
        next++;
	}
	return cur;
}
var str = 'grb'
var a = ['r','b','g','g','r','b','g']
var cur = arangeColor(str[0],0,a);
cur = arangeColor(str[1],cur,a);
console.log(a);