
// Global Variable ,stores time given in input
var time="";


// Ticking analog clock
function tick(){
        var hDeg, minDeg, secDeg;
        var hours= new Date().getHours();
        var min= new Date().getMinutes();
        var sec = new Date().getSeconds();
        hDeg = 30 * (hours % 12 + min/ 60); // Hour hand rotates 30 deg in one hr
        minDeg = 6 * min;  // Min hand rotates 6 degree per min
        secDeg = 6 * sec;  // Sec hand rotates 6 degree in one sec

        // Rotating clock hands by web kit 
        document.getElementById('secH').style.cssText="-webkit-transform:rotate("+secDeg+"deg);"; 
        document.getElementById('minH').style.cssText="-webkit-transform:rotate("+minDeg+"deg);";
        document.getElementById('hrH').style.cssText="-webkit-transform:rotate("+hDeg+"deg);";
        setTimeout(tick, 1000);

    }

// Switching Clocks

function switchClock()
{

    var name = document.getElementById("clockBtn").value;
    console.log(name);
    if(name == "Go Digital")
    {

        document.getElementById("clockBtn").value = "Try Analog";
        document.getElementById("Anaclock").style.display="none";
        document.getElementById("Digiclock").style.display="block";
        showTime();
    }
    else
    {
        document.getElementById("clockBtn").value = "Go Digital";
        document.getElementById("Digiclock").style.display="none";
        document.getElementById("Anaclock").style.display="block";
        tick();
    }
}

//Loading Digital Clock

function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    
    var time = h + ":" + m +"  "+ session;
    document.getElementById("Digiclock").innerText = time;
    document.getElementById("Digiclock").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

//createAlarm called on clicking ADD ALARM button

function createAlarm()
{
    
    time = document.getElementById("getTime").value;

    if(time == ":00")
       alert("Please enter time to set Alarm");
    else
    {
        alert("Your Alarm has been set @ "+time+" IST");
        checkAlarm(time);
    }

}

// checkAlarm fun runs every second till alarm rings.

function checkAlarm(){

        var date = new Date();
        var currTime= date.getHours()+":"+date.getMinutes();
        if(currTime===time )
        {
            startAlarm(); 
            return;
        }
        else{
            console.log(currTime);
        }

        setTimeout(checkAlarm,1000);  

}


//Alarm begins

function startAlarm()
{

            var music = document.getElementById("alarmMusic");
            music.play();
}
