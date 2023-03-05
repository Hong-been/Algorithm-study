// const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// "A".charCodeAt(0) = 65
const alphas = Array.from({length: 26}, (_, i) => String.fromCharCode(i + 65)); // lower 97
const alphasR = Array.from({length: 26}, (_, i) => String.fromCharCode(65 + 25 - i));
