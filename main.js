function preload()
{
    classifier=ml5.imageClassifier("DoodleNet");
}
function setup()
{
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
     canvas.mouseReleased(classifyCanvas);
     synth=window.speechSynthesis;
}
function draw()
{
   strokeWeight(10);
   stroke("#90ee90");
   if(mouseIsPressed)
   {
    line(pmouseX,pmouseY,mouseX,mouseY);
   }
}

function classifyCanvas()
   {
     classifier.classify(canvas, gotResult);
   }

   function gotResult(error,results)
   {
    if(error)
    {
        console.error(error);
    }
    
        console.log(results);
        document.getElementById("label").innerHTML="Label:"+results[0].label;
        document.getElementById("confidence").innerHTML="Confidence:"+Math.round(results[0].confidence*100)+"%";
    Utterthis=newSpeechSynthesisUtterance(results[0].label);
    synth.speak(Utterthis);
   }

function clearCanvas()
{
    background("White");
}