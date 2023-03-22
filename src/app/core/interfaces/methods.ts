export function generateArrayNumbers(minVal:number, maxVal: number) {
  const numberArr = [];
  while (numberArr.length !== maxVal) {
    const n = getRnd(minVal, maxVal,numberArr);
    numberArr.push(n);
  }
  return numberArr;
}

function getRnd(minVal:number=1, maxVal:number,numberArr:Array<number>) {
  let newNumber;
  while (!newNumber || numberArr.includes(newNumber)) {
    newNumber = Math.floor(Math.random() * (maxVal - minVal + 1) + minVal)
  }
  return newNumber;
}

export function shuffleArray(array:Array<number|string>): Array<number|string> {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function namesFormat(word: string | undefined) {
  if (typeof word == undefined || typeof word == null || word == "") {
    return "";
  } else {
    if (typeof word != 'string') {
      throw TypeError('El argumento debe ser una cadena de caracteres (text)')
    }
    let word_split = word.trim().split(' ')
    return word_split.map(p => p[0].toUpperCase() + p.slice(1).toLowerCase()).join(' ')
  }
}


