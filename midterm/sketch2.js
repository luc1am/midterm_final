var thingList; //user things
var feelSlider;
var desc;
var button;
//files
var poemTemp;
var poem = {
  template: "",
  userThings: [], //array of string "thingList"
  generate: function(){ pass; },
  display: function(){ pass; },
}
//arrays
var hap_adj = ["content", "pleased",
"cheerful","jovial","jolly","glad",
"thrilled", "elated","gleeful","sunny"];

//saddest
//https://www.gutenberg.org/ebooks/1952



//obtain basic poem file
function preload(){
  //array of lines
  poemTemp = loadStrings("walter_white.txt");
}

function setup() {
  createCanvas(windowWidth,500);
  thingList = createInput("give me some things")
  thingList.position(100,100);

  //returns happiness level
  //createSlider(min,max, start)
  feelSlider = createSlider(0,100,50);
  feelSlider.position(100,50);

  desc = createP("sad /\t/ happy");
  desc.position(135,20);

  button = createButton("create Poem");
  button.mousePressed(formulatePoem);

}

function draw() {
  background(200,150,180);
  fill(100,200,200,80);
  noStroke();
  rect(windowWidth/2, 250, windowWidth-50, 450);
  rectMode(CENTER);
  fill(0);
  text("please separate by comma", 100,133)
  //poem.display();
  //print(poemTemp);
  set_up(poemTemp);
//  set_up();
  //noLoop();
}

// function set_up(){
//   print('nothing');
// }


function set_up(text_arr){
print('nothing');
  for(let i = 0; i<text_arr.length; i++){
    text_arr[i] = text_arr[i].split(" ");
    // for(let j = 0; i<text_arr[i].length; j++){
    //   if(text_arr[i][j]){
    //     text_arr[i][j] = "yass";
    //   }
       // if (RiTa.isAdjective(text_arr[i][j])){
       //   text_arr[i][j] == "ADJ";
       // }
     }
  }
  //print(text_arr);
//  print('y');
}

//not sure yet if I will generate poem in Object
//or outside of it
function formulatePoem(){
  //make user input into an array
  var things = thingList.value().split(',');

}

function restart(){
  clearCanvas();
  background(200,150,180);
}
