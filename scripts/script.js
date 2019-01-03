var time =document.querySelector(".time"),
    laptime =document.querySelector(".laptime"),
  start =document.querySelector("#start"),
  stop =document.querySelector("#pause"),
  reset =document.querySelector("#reset"),
  resume =document.querySelector("#resume"),
  lap =document.querySelector("#lap"),
  clear=document.querySelector("#clear"),
  list = document.querySelector(".laps")


var tcs =0,ts = 0,tm=0,action;
var lcs =0, ls = 0, lm=0;

var mode =0, timeCounter=0, lapCounter=0;

stop.style.display ="none";
reset.style.display ="none";
resume.style.display ="none";
clear.style.display ="none";

start.addEventListener("click",function(){
  mode=1;
  stop.style.display="inline-block";
  start.style.display="none";
  startAction();
});

stop.addEventListener("click",function(){
    stop.style.display="none";
    lap.style.display="none";
    reset.style.display ="inline-block";
    resume.style.display ="inline-block";
    //stop counter here
    clearInterval(action);
});

resume.addEventListener("click",function(){
    stop.style.display="inline-block";
    lap.style.display="inline-block";
    reset.style.display ="none";
    resume.style.display ="none";
    //start counter here
    startAction();
});

reset.addEventListener("click",function(){
  tcs =0,ts = 0,tm=0,lcs =0, ls = 0, lm=0
  location.reload();

});

lap.addEventListener("click",function(){
  // check mode
  if(mode){
  //stop action
  clearInterval(action);
  //reset lap and print its details
    lapCounter=0;
    addLap();
  //start action
  startAction();
 }
});




/**Functions here*/
function startAction()
{
  action =setInterval(function(){
   timeCounter++;
   if(timeCounter==100*60*100) { timeCounter=0; }
   lapCounter++;
   if(lapCounter==100*60*100) { lapCounter=0; }

   updateTime();
  },10);
}

// converts counters to hours , minutes , seconds and centiseconds
function updateTime()
{
  // 1minutes =60*100 centiseconds =6000 centiseconds
    tm = Math.floor(timeCounter/6000);
    //1 seconds =100centoseconds
    ts = Math.floor((timeCounter%6000)/100);
    // centiseconds =remainder of other
    tcs =(timeCounter%6000)%100;

      time.textContent = (tm?(tm>9?tm:"0"+tm):"00")+":"+(ts?(ts>9?ts:"0"+ts):"00")+":"+(tcs?(tcs>9?tcs:"0"+tcs):"00");


    // 1minutes =60*100 centiseconds =6000 centiseconds
      lm = Math.floor(lapCounter/6000);
      //1 seconds =100centoseconds
      ls = Math.floor((lapCounter%6000)/100);
      // centiseconds =remainder of other
      lcs =(lapCounter%6000)%100;

      laptime.textContent = (lm?(lm>9?lm:"0"+lm):"00")+":"+(ls?(ls>9?ls:"0"+ls):"00")+":"+(lcs?(lcs>9?lcs:"0"+lcs):"00");
}

// print lap details
function addLap()
{

  var ld = (lm?(lm>9?lm:"0"+lm):"00")+":"+(ls?(ls>9?ls:"0"+ls):"00")+":"+(lcs?(lcs>9?lcs:"0"+lcs):"00");;
  var entry = document.createElement('li');
  entry.append(document.createTextNode(ld));
  list.prepend(entry);

}
