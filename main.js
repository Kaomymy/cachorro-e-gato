img = "";
status = "";

function preload(){
 img = loadImage ("dog_cat.jpg");
}

function setup(){
canvas = createCanvas(640 , 420);
canvas.center ();
objectDectector ('cocossd', modelLoaded);
document.getElementById ("status").innerHTML = "status: detectando objetos";
}

function modelLoaded(){
    console.log ("modelo carregado")
    status = true;
    objectDectector.detect (img, gotResult);
}

function draw(){
image = (img , 0 , 0 , 640 , 420);
fill ('#FF0000');
text ("Dog" , 45 , 75);
noFill ();
stroke ('#FF0000');
rect (30 , 60 , 450 , 350);

fill ('#FF0000');
text ("cat" , 45 , 75);
noFill ();
stroke ('#FF0000');
rect (300 , 90 , 270 , 320);

}

function gotResult(error, results){
if (error){
    console.error (error);
}
else{
    console.log (result);
    objects = results;
    
}
}