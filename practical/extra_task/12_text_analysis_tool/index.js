function analyzeText() {
    
    let text = document.getElementById('textInput').value.trim();

    
    let words = text.toLowerCase().match(/\b\w+\b/g);

    let wordCount = words ? words.length : 0;
    document.getElementById('wordCount').textContent = `Word Count: ${wordCount}`;

    let totalLength = words ? words.reduce((acc, word) => acc + word.length, 0) : 0;
    let averageWordLength = wordCount > 0 ? (totalLength / wordCount).toFixed(2) : 0;
    document.getElementById('averageWordLength').textContent = `Average Word Length: ${averageWordLength}`;

    //frequency of word
    let wordFrequency = {};
    if (words) {
        words.forEach(word => {
            if (word in wordFrequency) {
                wordFrequency[word]++;
            } else {
                wordFrequency[word] = 1;
            }
        });
    }

    // Sort word frequency
    let sortedWords = [];
    for (let word in wordFrequency) {
        sortedWords.push([word, wordFrequency[word]]);
    }
    sortedWords.sort((a, b) => b[1] - a[1]);

    //console.log(sortedWords);

    let commonWordsList = document.getElementById('commonWords');
    commonWordsList.innerHTML = '';
    sortedWords.slice(0, 5).forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item[0]} (${item[1]} time prints)`;
        commonWordsList.appendChild(li);
    });
}
