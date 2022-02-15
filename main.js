function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/AbLRfA0QE/model.json", modelReady);

}
function modelReady(){
    console.log("Model is ready");
    classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;
function gotResults(error, results){
    if (error) {
        console.error(error);
    }else{
        console.log(results);
        r = Math.floor(Math.random()*255)+1;
        g = Math.floor(Math.random()*255)+1;
        b = Math.floor(Math.random()*255)+1;
        document.getElementById("sound").innerHTML = "Sound - "+results[0].label;
        document.getElementById("number").innerHTML = "Number of times dog sound is detected - "+dog+"<br>"+
        "Number of times cat sound is detected - "+cat+"<br>"+"Number of times lion sound is detected - "+lion+"<br>"+"Number of times cow sound is detected - "+cow;
        document.getElementById("sound").style.color = "rgb("+r+","+g+","+b+")";
        document.getElementById("number").style.color = "rgb("+r+","+g+","+b+")";
        img = document.getElementById("image");
        if (results[0].label=="Moo") {
            img.src = "moo.gif"
            cow = cow+1;
        } else if(results[0].label=="Meow"){
            img.src = "meow.gif"
            cat = cat+1;
        }else if (results[0].label=="Roar") {
            img.src = "roar.gif"
            lion = lion+1;
        }else if (results[0].label=="Bark") {
            img.src = "bark.gif"
            dog = dog+1;
        }else{
            img.src = "ear.jpeg";
        }
    }
}