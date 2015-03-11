function countWord(str) {
	var start = 0;
	var compareStr = ' ';
	var count = 0;
	var allWord = [];

	str += ' ';
	for(var i = 0;i < str.length;i++) {
		var index = str.indexOf(compareStr, start);
		if (index == -1) {
			break;
		} else {
			allWord[count++] = str.substring(start, index);
			start = index + 1;
		}
	}
	var compareWord = allWord[0]
	var countData = {};
	for(var i = 0;i < allWord.length;i++) {
		if (countData[allWord[i]] >= 1) {
			continue;
		} else {
			countData[allWord[i]] = 1;
		}
		for(var j = i + 1;j < allWord.length;j++) {
			if (allWord[j] == compareWord) {
				countData[compareWord]++;
			}
		}
	}
	var higest = {};
	var number = 0;
	for(word in countData) {
		if(countData[word] > number) {
			higest = {};
			higest[word] = countData[word];
			number = higest[word];
		}
	}
	console.log(higest);
}
countWord("Enter or paste your TEXT yuan here to calculate results yuan yuan yuan yuan . . . . . . . . heihei");