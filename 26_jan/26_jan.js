const changeTheCase = (string) => {
  const trimmedStr = string.trim();
  if (!trimmedStr) {
    return string
  }
  const words = string.split(" ")

  const wordsNew = words.map(word => {
    const newString = converTheValeu(word)
    return newString;
  });
  return wordsNew.join(' ')
}

const converTheValeu = (string) => {
  const lowercaseAlphabetsSet = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
  const uppercaseAlphabetsSet = new Set(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);
  const stringWorld = string.split('')
  const NewConvertedString = stringWorld.map(singleWolrd => {
    if (lowercaseAlphabetsSet.has(singleWolrd)) {
      return singleWolrd.toUpperCase()
    } else if (uppercaseAlphabetsSet.has(singleWolrd)) {
      return singleWolrd.toLowerCase()
    } else {
      return singleWolrd
    }

  })
  return NewConvertedString.join('')
}

const convertedString = changeTheCase("eh qolrd ");
console.log(convertedString); 