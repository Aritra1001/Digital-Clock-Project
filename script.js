function clockStart(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

   
    if(hours >= 12){
        hours = hours - 12;
         if(hours == 0){
         hours = 12;
         }
        let am = document.getElementById("am");
        am.innerText = "PM";
    }
    // else{
    //     let am = document.getElementById("am");
    //     am.innerText = "AM";
    // }

    let hrs = document.getElementById("hrs");
    hrs.innerText = hours + " hours";
    let mins = document.getElementById("mins");
    mins.innerText = minutes + " mins";
    let secs = document.getElementById("secs");
    secs.innerText = seconds + " secs";
}
setInterval(()=>{
    clockStart();
},1000);

//for the hover on button
let button = document.getElementById("btn");
let text = document.getElementById("button_text");
button.addEventListener("mouseenter",function(){
    text.innerText = "Party Time!"
});
button.addEventListener("mouseleave",function(){
    text.innerText = "Set Alarm";
});

//for timebox
let option1 = document.getElementById("select1");
let option2 = document.getElementById("select2");
let option3 = document.getElementById("select3");
let option4 = document.getElementById("select4");

let wake = document.getElementById("wk_up");
let lunch = document.getElementById("lun_tm");
let nap = document.getElementById("nap_tm");
let night = document.getElementById("nt_tm");

let msg1 = document.getElementById("msg1");
let msg2 = document.getElementById("msg2");
let img = document.getElementById("img_dis");

button.addEventListener("click",function(){
    let value1 = option1.value;
    //console.log(value1);
    //let value_1 = option1.value;
   // console.log(value_1);
    wake.innerText =`Wake Up Time : ${value1}`;
    let hours = new Date().getHours();
    if(hours >= 12){
        hours = hours - 12;
         if(hours == 0){
         hours = 12;
         }
    }
     //console.log(hours); 
    let x = parseInt(value1);
    //console.log(x);
    if(x === hours){
        msg1.innerText = `GOOD MORNING!! WAKE UP!!`;
        msg2.innerText = `GRAB SOME HEALTHY BREAKFAST!!!`;
        img.src ="\Goodmorning.png";
    }

    
    let value2 = option2.value;
    lunch.innerText = `Lunch Time : ${value2}`;
    let y = parseInt(value2);
    if(y === hours){
        msg1.innerText = `GOOD AFTERNOON !! TAKE SOME SLEEP`;
        msg2.innerText = `LET'S HAVE SOME LUNCH !!`;
        img.src = "\lunch.png"
    }

    let value3 = option3.value;
    nap.innerText = `Nap Time : ${value3}`;
    let z = parseInt(value3);
    if(z === hours){
        msg1.innerText = `GOOD EVENING !!`;
        msg2.innerText = `STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!`;
        img.src = "\Goodevening.png";
    }

    let value4 = option4.value;
    night.innerText = `Night Time : ${value4}`;
    
    let w = parseInt(value4);
    if(w === hours){
        msg1.innerText = `GOOD NIGHT !!`;
        msg2.innerText = `CLOSE YOUR EYES AND GO TO SLEEP`;
        img.src = "\Goodnight.png"
    }
})

