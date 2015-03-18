Array.prototype.unique = function() {
	var json = {};
	var res = [];
	for(var i = 0;i < this.length;i++) {
		if(!json[this[i]]) {
			res.push(this[i]);
			json[this[i]] = 1;
		}
	}
	return res;
}

var a = [1,2,3,3,2,1,4,4,0,7];
console.log(a.unique());