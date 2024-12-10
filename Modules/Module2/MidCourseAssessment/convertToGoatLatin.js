/* Transform a given sentence into "Goat Latin" by:

Appending "ma" to words starting with vowels.
Moving the first letter to the end and appending "ma" for words starting with consonants.
Adding 'a' repeatedly based on the word's position in the sentence.
Return the modified sentence as the result. */

/* Example 1:
Input:
sentence = "I speak Goat Latin"

Output:
"Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

Explanation:
"I" starts with a vowel → "Imaa"
"speak" starts with a consonant → "peaksma"
"Goat" starts with a consonant → "oatGma"
"Latin" starts with a consonant → "atinLma" */


var toGoatLatin = function(sentence) {
    // Your code goes here
    let words = sentence.split(" ")
    const vowels = /[aeiou]/i

    for(let i=0; i<words.length;i++ ){
        let word = words[i]
        if(!vowels.test(word[0])){
            words[i] = word.slice(1)+word[0]
        }
        words[i] += 'ma'+'a'.repeat(i + 1);
    }
    return words.join(" ")
};
