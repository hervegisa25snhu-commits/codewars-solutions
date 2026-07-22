function howMuchILoveYou(nbPetals) {
  const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
  ]
  
  const index = (nbPetals - 1) % 6
  
  return phrases[index]
}