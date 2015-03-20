function countWord(str) {
	var	allWord = [],
		compareWord,
		countData = {};

	allWord = str.split(' ');

	for(var i = 0;i < allWord.length;i++) {
		compareWord = allWord[i];
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
	console.log(countData);
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
