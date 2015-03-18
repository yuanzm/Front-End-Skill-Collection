//selection sort
function selectionSort(array) {
	if (Object.prototype.toString.call(array).slice(8, -1) === "Array") {
		var len = array.length, temp;
		for(var i = 0;i < len - 1;i++) {
			var min = i;
			for(var j = i + 1;j < len;j++) {
				if (array[j] < array[min]) {
					min = j;
				}
			}
			if (min != i) {
				temp = array[i];
				array[i] = array[min];
				array[min] = temp; 
			}
		}
		return array;		
	} else {
		return "array is not an Array";
	}
}

// var test = [1,4,5,2,76,21,45];
// console.log(selectionSort(test));

//insertion sort
function insertionSort(array) {
	if (Object.prototype.toString.call(array).slice(8, -1) === "Array") {
		for (var i = 1;i < array.length;i++) {
			var key = array[i];
			var j = i - 1;
			while (j > 0 && array[j] > key) {
				array[j + 1] = array[j];
				console.log(array);
				j--;
			}
			array[j + 1] = key;
		}
		return array;
	} else {
		return "array is not an Array";
	}
}
// var test = [1,4,5,2,76,21,45];
// console.log(insertionSort(test));

