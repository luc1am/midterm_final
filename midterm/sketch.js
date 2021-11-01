// Custom Functions
// Did they create a custom function? (10 points)
// Includes at least two parameters (15 points, each parameter 7.5 each)
// Objects
// Did they create an object? (10 points)
// Includes at least one method (15 points)


var deets = {
  r: 200,
  g: 120,
  b: 125
}
var buttonMake;
var inAdj;
var inNou;
var inVer;
var inNum;
var inLiq;

// var finalPoem = {
//   arrLines: [],
//   dislay: function(){
//     fill(0);
//     text(arrLines,0,0);
//   }
// }

//load random file
var poemTemp;
//to identify what questions to ask
var poemNum;
//https://www.gutenberg.org/files/1041/1041.txt
function preload(){
  //tester:
  poemNum = round(random(1));
  poemTemp = loadStrings(poemNum+'.txt');

}

//used P5.reference for DOM element review.
//I learned color(r,g,b,a) //line 47
function setup(){
  createCanvas(500,500);
  textFont('Georgia');
  let head = createElement('h1', "Stupid Shakespeare");
  head.style('color', color(150,10,70));
  head.position(40,10);
  buttonMake = createButton("generate");
  buttonMake.position(225,400);
  buttonMake.mousePressed(generate);
  buttonMake.style('background-color',
   color(deets.r,deets.g-100,deets.b, 50));
  inAdj = createInput('list of adj.');
  inNou = createInput('list of nouns');
  inVer = createInput('list of verbs');
  inNum = createInput('list of nums');
  inLiq = createInput('list of liq');
  inAdj.position(50,100);
  inAdj.size(380,17);
  inNou.position(50,130);
  inNou.size(380,17);
  inVer.position(50,160);
  inVer.size(380,17);
  inNum.position(50,190);
  inLiq.position(50,220);
  textFont("Helvetica")
  let note = createP("please separate words by spaces");

  note.position(50,250);
}

function draw(){
  background(deets.r,deets.g,deets.b);
  rectMode(CENTER);
  fill(deets.r+20,deets.g+20,deets.b+20,100);
  noStroke();
  rect(250,250,450,450);
  noLoop();
  fill(0);
  //text(poemTemp, 10,10);

  //turn the textBox input into arrays
  // arrVer = inVer.value().split(' ');
  // arrNou = inNou.value().split(' ');
  // arrAdj = inAdj.value().split(' ');
  // arrLiq = inAdj.value().split(' ');
  // arrNum = inNum.value().split(' ');
  // prep_poem(poemTemp,
  //   arrVer, arrNou, arrAdj, arrLiq, arrNum);

}

function generate(){
  arrVer = inVer.value().split(' ');
  arrNou = inNou.value().split(' ');
  arrAdj = inAdj.value().split(' ');
  arrLiq = inAdj.value().split(' ');
  arrNum = inNum.value().split(' ');
  prep_poem(poemTemp,
    arrVer, arrNou, arrAdj, arrLiq, arrNum);
  removeElements();
  background(deets.r,deets.g,deets.b);
  rectMode(CENTER);
  fill(deets.r+20,deets.g+20,deets.b+20,100);
  noStroke();
  rect(250,250,450,450);
  //global var, should be modified
  //number of lines
  showP(poemTemp, 14);
}
//sonnets have 14 lines
//reference join:
//https://www.w3schools.com/jsref/jsref_join.asp
function showP(lines, num){
  fill(0);
  var poem;
  //text(lines, 0,100);
  for (let i = 0; i<num;i++){
    lines[i] = lines[i].join(' ');
  }
  poem = lines.join('\n');
  text(poem, 100,100);
}
//poem prep uses RiTa.js
//https://rednoise.org/rita/
//I didn't copy code, only looked at reference

function prep_poem(lines, verbs, nouns,
        adjs, liqs, nums){
  //lines = ["each line","next line",... ]
  for (let i = 0; i<lines.length; i++){
    lines[i] = lines[i].split(' ');
  }
  //print(lines);
  //[["each", "line"], ["", ...]]
  for (let i = 0; i<lines.length; i++){
    for (let j = 0; j<lines[i].length; j++){

      //if first character of word is a parentheses
      //meaning it is going to be modified
      if (lines[i][j][0] =='('){
        //print('ok'); //test
        //print("test0")
        //if adj
        //print(lines[i][j].substr(1,3))
        if(lines[i][j].substr(1,3)=='adj'){
          rand = round(random(adjs.length-1));
          lines[i][j] = adjs[rand];
          //print("est1")
        }
        //if noun
        else if (lines[i][j].substr(1,3)=='nou') {
          rand = round(random(nouns.length-1));
          lines[i][j] = nouns[rand];
        }
        //if verb
        //verbs have special conditions:
        else if (lines[i][j].substr(1,3)=='ver'){
          rand = round(random(verbs.length-1));
          if (lines[i][j][7]=='r'){
            lines[i][j] = RiTa.presentPart(verbs[rand]);
          }else if (lines[i][j][7]=='a'){
            lines[i][j] = RiTa.pastPart(verbs[rand]);
          } else{
            lines[i][j] = verbs[rand];
          }


        }
        //if Number
        else if (lines[i][j].substr(1,3)=='num'){
          rand = round(random(nums.length-1));
          lines[i][j] = nums[rand];
        }

        //if liquid
        else if (lines[i][j].substr(1,3)=='liq'){
          rand = round(random(liqs.length-1));
          lines[i][j] = liqs[rand];
        }
        //if rhyme string
        //rhyme strings have a complex structure:
        //(rhyme[word]&pos)
        //search for ']'
        //search for pos

//for info on searching in string.
        //https://www.w3schools.com/jsref/jsref_indexof.asp
        else if (lines[i][j].substr(1,3)=='rhy'){
          //index within word to get;
          //largest issues here
          var begin = 8;
          var stop = 3;
          print(lines[i][j].substr(8,3));
          //print("x: "+end)
          // print(lines[i][j].substr(begin,stop));
          let rhymes = RiTa.rhymes(lines[i][j].substr(begin,stop-1));
          lines[i][j] = rhymes[0];
          // print(rhymes);
          // if (lines[i][j][end+2] =='n'){
          //   rhymes = RiTa.rhymes(
          //     lines[i][j].substr(begin,end), {pos: 'n'});
          // } else if (lines[i][j][end+2] =='v'){
          //   rhymes = RiTa.rhymes(
          //     lines[i][j].substr(begin,end), {pos: 'v'})
          // } else if (lines[i][j][end+2] =='a'){
          //   rhymes = RiTa.rhymes(
          //     lines[i][j].substr(begin,end), {pos: 'a'})
          //   }
          // lines[i][j] = rhymes;
          // print(rhymes);
        }
      }
    }
  }
  //only return if I will use it

}
