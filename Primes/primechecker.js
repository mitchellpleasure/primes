function primeChecker(n){
  var a = true;
  for(i = 2; i < floor(sqrt(n))+1; i++){
    if(n%i === 0){
      a = false;
    }
  }
  return a;
}