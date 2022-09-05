var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition(); 
var Textbox = document.getElementById("textbox");
function start() 
{ 
    Textbox.innerHTML = ""; 
    recognition.start(); 
}
recognition.onresult = function(event) {

var Content = event.results[0][0].transcript; 
Textbox.innerHTML = Content; 
console.log(Content);
if (Content == "take my selfie")
{
    console.log("taking selfie --- ");
    (speak);
}
speak();

document.getElementById("textbox").innerHTML = Content;
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds";

    speak_data = document.getElementById("textbox").Value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_selfie();
    }, 5000);
}

Webcam.set({
    width:360,
    hieght:250,
    image_format : 'png' ,
    png_quality :90
});
camera = document.getElementById("camera");

function take_selfie()
 { 
    Webcam.snap(function(data_uri) { 
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
     }); 
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}