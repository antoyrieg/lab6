function convertTemp(temp, newTemp) {
  if (newTemp === "C" ) {
   console.log((temp - 32) * (5/9) );
    
  }
    else { 
     console.log((temp*(9/5) + 32)); }
  
}


convertTemp(212, "C"); // > 100
convertTemp(32, "C"); // > 0
convertTemp(65, "C"); // > 18.333
convertTemp(0, "F"); // > 32
convertTemp(100, "F"); // > 212
convertTemp (-40, "F");