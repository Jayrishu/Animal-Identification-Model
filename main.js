function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/AbLRfA0QE/model.json", modelReady);

}
function modelReady(){
    console.log("Model is ready");
    classifier.classify(gotResults);
}
