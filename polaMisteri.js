
function pola(str) {
  console.log(str)
  let polaMisteri = str.replace(" * ", " ").replace(" =", " ").split(" "); //"42#3 188 80#204"=> [42#3,188,803204]
  console.log(polaMisteri)
  let tebakMisteri1 = "";
  let multiply = "";
  let tebakMisteri2 = "";                                                                                                                                             

  for (let i = 0; i < 10; i++) {
    tebakMisteri1 += polaMisteri[0].replace("#", i); //i=8
    multiply += tebakMisteri1 * polaMisteri[1]; //805204
    

    for (let j = 0; j < 10; j++) {
      // 80#204
      tebakMisteri2 += polaMisteri[2].replace("#", j); //805204
     
      if (multiply === tebakMisteri2) { //805204 ===805204
        return [i, j];
      }
      tebakMisteri2 = "";
    }
    tebakMisteri1 = "";
    multiply = "";
    //i++ loop pertama
  }
}
console.log(pola("42#3 * 188 =80#204"));
// console.log(pola("8#61 * 895 =78410#5"));
