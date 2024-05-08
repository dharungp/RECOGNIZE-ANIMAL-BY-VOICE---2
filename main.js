function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/d9ly8EVqH/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResult)
}

function gotResult(error,result){
    print('got result')
}