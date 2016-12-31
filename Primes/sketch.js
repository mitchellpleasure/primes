var srcTxt;
var prmTxt;
var output;
var submit;
var numberArray = [];
var indexArray = [];
var primeNums;
var primeCheck;
var toDelete;

function setup() {
  noCanvas();
  srcTxt = createInput("Prime Getter");
  srcTxt.changed(newText);
  prmTxt = createInput("Prime Checker");
  prmTxt.changed(prmText);
  //toDelete = select("#output");
}

function newText(){
  primeNums = Primes(parseInt(srcTxt.value()))
  primeNums = join(primeNums, ' ');
  createP(primeNums);
  //toDelete.html(primeNums);
}

function prmText(){
  primeCheck = primeChecker(parseInt(prmTxt.value()))
  createP(primeCheck);
}
/*function clearing()
{
  toDelete.html("");
  //primeNums = " ";
}*/