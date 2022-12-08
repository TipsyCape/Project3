console.log(navigator);
let device;

if(navigator.requestMIDIAccess){
    navigator.requestMIDIAccess().then(success, failure);
}

function failure(){
    console.log("Could not connect MIDI");
}

function updateDevices(event){
    console.log(event);
}

function success(midiAccess){
    //console.log(midiAccess);
    midiAccess.addEventListener('statechange', updateDevices);
    let inputs = midiAccess.inputs;
    //console.log(inputs);

    for(let output of midiAccess.outputs.values()){
        device = output;
        console.log('Output device selected', device);
    }
   
   inputs.forEach((input) => { 
       //console.log(input);
       input.addEventListener('midimessage', handleInput);
   })
}

function handleInput(input){
    console.log(input);

    let command = input.data[0];
    let note = input.data[1];
    let velocity = input.data[2];

    console.log(`command: ${command}, note: ${note}, velocity: ${velocity}`);

    if (velocity > 0){
        noteOn(note);
    }
    
    if (velocity == 0){
        noteOff(note);
    }
}

let one = [63, 38, 39, 69, 70, 96, 92, 88, 84, 80, 76, 72, 68];                 //size = 13
let two = [58, 62, 67, 96, 97, 94, 90, 85, 80, 47, 42, 38, 39, 68, 69, 70];     //size = 16
let three = [62, 67, 96, 97, 94, 90, 85, 84, 82, 78, 74, 39, 68, 69, 42, 46]    //size = 17 
let four = [66, 62, 58, 54, 55, 84, 85, 86, 97, 93, 89, 85, 81, 77, 73, 69];    //size = 17


let horiz = -50;
let vert = -50;
let size = 100;
let rotate = 0;
let skew = 0;
let margin = 100;
function noteOn(note){
    console.log(`note:${note} // on`);

    if(note == 71){
        document.getElementById("instructions").innerHTML = "";
        colorM(71, 26);
        //row 1 colors
        colorM(64, 6); 
        colorM(65, 16); 
        colorM(66, 26); 
        colorM(67, 36);
        colorM(96, 46); 
        colorM(97, 13); 
        colorM(98, 56);
        colorM(99, 1);   
        //end row 1 colors

        //row 2 background colors
        colorM(60, 6); 
        colorM(61, 16); 
        colorM(62, 26); 
        colorM(63, 36);
        colorM(92, 46); 
        colorM(93, 13); 
        colorM(94, 56);
        colorM(95, 1);   
        //end row 2 background colors

        //row 3 fonts
        colorM(56, 3);
        colorM(57, 3);
        colorM(58, 3);
        colorM(59, 3);
        colorM(88, 3);
        colorM(89, 3);
        colorM(90, 3);
        colorM(91, 1);
        //end row 3 fonts

        //arrows for text translation
        colorM(50, 1);
        colorM(45, 1);
        colorM(46, 1);
        colorM(47, 1);
        colorM(42, 1);
        //end arrows for text translation

        //text size
        colorM(48, 26);
        colorM(40, 6);
        //end text size

        //text rotate
        colorM(53, 13);
        colorM(55, 13);
        //end text rotate

        //skew
        colorM(37, 36);
        colorM(39, 36);
        //end skew

        //add/sub pargraphs
        colorM(80, 26);
        colorM(72, 6);
        //end add/sub paragraphs

        //margin
        colorM(54, 46);
        colorM(38, 46);
        //end margin
    }

    //first row, colors
    if(note == 64){
        document.getElementById("lorem").style.color = "red";                    
    }

    if(note == 65){
        document.getElementById("lorem").style.color = "lightgreen";                      
    }

    if(note == 66){                     
        document.getElementById("lorem").style.color = "green"; 
    }

    if(note == 67){                     
        document.getElementById("lorem").style.color = "lightblue"; 
    }

    if(note == 96){                     
        document.getElementById("lorem").style.color = "blue"; 
    }

    if(note == 97){                     
        document.getElementById("lorem").style.color = "yellow";
    }

    if(note == 98){                     
        document.getElementById("lorem").style.color = "pink";
    }

    if(note == 99){                     
        document.getElementById("lorem").style.color = "black";
    }
    //end first row, colors

    //second row, background colors
    if(note == 60){
        document.body.style.backgroundColor = "red";                    
    }

    if(note == 61){
        document.body.style.backgroundColor = "lightgreen";                      
    }

    if(note == 62){                     
        document.body.style.backgroundColor = "green"; 
    }

    if(note == 63){                     
        document.body.style.backgroundColor = "lightblue"; 
    }

    if(note == 92){                     
        document.body.style.backgroundColor = "blue"; 
    }

    if(note == 93){                     
        document.body.style.backgroundColor = "yellow";
    }

    if(note == 94){                     
        document.body.style.backgroundColor = "pink";
    }

    if(note == 95){                     
        document.body.style.backgroundColor = "white";
    }

    //end second row, background colors

    //third row, fonts
    if(note == 56){
        document.getElementById("lorem").style.fontFamily = "Arial, sans-serif";                    
    }

    if(note == 57){
        document.getElementById("lorem").style.fontFamily = "Andale Mono, monospace";                      
    }

    if(note == 58){                     
        document.getElementById("lorem").style.fontFamily = "Courier New, monospace"; 
    }

    if(note == 59){                     
        document.getElementById("lorem").style.fontFamily = "Impact, fantasy"; 
    }

    if(note == 88){                     
        document.getElementById("lorem").style.fontFamily = "Comic Sans MS"; 
    }

    if(note == 89){                     
        document.getElementById("lorem").style.fontFamily = "Bahnschrift SemiBold";
    }

    if(note == 90){                     
        document.getElementById("lorem").style.fontFamily = "Ink Free";
    }

    if(note == 91){                     
        document.getElementById("lorem").style.fontFamily = "Times";
    }
    //end third row, fonts

    //arrows for translation
    if(note == 50){
        vert += -10;                    
        document.getElementById("lorem").style.transform = "translate("+ horiz + "%, " + vert + "%) rotate(" + rotate + "deg) skew(" + skew + "deg)";     
    }
    if(note == 45){                     
        horiz += -10;                    
        document.getElementById("lorem").style.transform = "translate("+ horiz + "%, " + vert + "%) rotate(" + rotate + "deg) skew(" + skew + "deg)";    
    }
    if(note == 46){                     
        
    }
    if(note == 47){                     
        horiz += 10;                    
        document.getElementById("lorem").style.transform = "translate("+ horiz + "%, " + vert + "%) rotate(" + rotate + "deg) skew(" + skew + "deg)";     
    }
    if(note == 42){  
        vert += 10;                    
        document.getElementById("lorem").style.transform = "translate("+ horiz + "%, " + vert + "%) rotate(" + rotate + "deg) skew(" + skew + "deg)";    
    }
    //end arrows for translation

    //text size
    if(note == 48){
        size += 10;
        document.getElementById("lorem").style.fontSize = size + "%";
    }
    if(note == 40){
        size += -10;
        document.getElementById("lorem").style.fontSize = size + "%";
    }
    //end text size

    //rotate
    if(note==55){
        rotate += 10;
        document.getElementById("lorem").style.transform = "translate("+ horiz + "%, " + vert + "%) rotate(" + rotate + "deg) skew(" + skew + "deg)"; 
    }
    if(note==53){
        rotate += -10;
        document.getElementById("lorem").style.transform = "translate("+ horiz + "%, " + vert + "%) rotate(" + rotate + "deg) skew(" + skew + "deg)";     
    }    
    //end rotate

    //skew
    if(note==37){
        skew += 10;
        document.getElementById("lorem").style.transform = "translate("+ horiz + "%, " + vert + "%) rotate(" + rotate + "deg) skew(" + skew + "deg)";     
    }
    if(note==39){
        skew += -10;
        document.getElementById("lorem").style.transform = "translate("+ horiz + "%, " + vert + "%) rotate(" + rotate + "deg) skew(" + skew + "deg)";     
    } 
    //end skew

    //add/sub paragraphs
    if(note==80){
        paragraphs +=1;
        makeAPICall();
    }
    if(note==72){
        if(paragraphs > 1){
            paragraphs +=-1;
            makeAPICall();
        }
    }
    //end add/sub paragraphs

    //margin
    if(note==54){
        margin += 10;
        document.getElementById("lorem").style.margin = margin + "px";
    }
    if(note==38){
        margin +=-10
        document.getElementById("lorem").style.margin = margin + "px";
    }
    //end margin
}

function noteOff(note){
    console.log(`note:${note} // off`);
    
       
}



function colorM(key, clr){
    device && device.send([0x90, key, clr]); //note on
}

