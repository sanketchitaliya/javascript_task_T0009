// count characters 
function countCharacters(text) {
    return text.length;
  }
  
  // count words
  function countWords(text) {
    return text.split(' ').length;
  }
  
  // count frequency of each word 
  function countWordFrequency(text) {
    const wordFrequency = {};
    const words = text.split(' ');
    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase();
      if (wordFrequency[word]) {
        wordFrequency[word]++;
      } else {
        wordFrequency[word] = 1;
      }
    }
    return wordFrequency;
  }
  
  // Main function 
  
  function analyzeText(text) {  
    console.log(`Character count: ${countCharacters(text)}`);
    console.log(`Word count: ${countWords(text)}`);
    console.log('Word frequency:');
    const wordFrequency = countWordFrequency(text);
    for (const word in wordFrequency) {
      console.log(`  ${word}: ${wordFrequency[word]}`);
    }
  }
  
  // Example string
  const text = 'This is a sample text. This text is for demonstration purposes only.';
  analyzeText(text);