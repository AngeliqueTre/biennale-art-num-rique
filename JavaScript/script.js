/*NAVIGUATION*/


/*START CANVAS HEADER*/
window.onload = function()
{
    var canvas = document.getElementById('mon_canvas');
        if(!canvas)
        {
            alert("Impossible de récupérer le canvas");
            return;
        }

    var context = canvas.getContext('2d');
        if(!context)
        {
            alert("Impossible de récupérer le context du canvas");
            return;
        }
      context.lineWidth = 40;
      context.lineJoin = 'round';
      context.beginPath();//On démarre un nouveau tracé
      context.moveTo(290, 600);//On se déplace au coin inférieur gauche
      context.lineTo(640, 25);
      context.lineTo(990, 600);
      context.lineTo(290, 600);
      context.lineTo(500, 255);
      context.strokeStyle = "#FFCC01";
      context.stroke();//On trace seulement les lignes.
      context.closePath();

      context.lineWidth = 30;
      context.lineJoin = 'round';
      context.beginPath();//On démarre un nouveau tracé
      context.moveTo(315, 585);//On se déplace au coin inférieur gauche
      context.lineTo(640, 50);
      context.lineTo(965, 585);
      context.lineTo(315, 585);
      context.lineTo(500, 280);
      context.strokeStyle = "#E3001B";
      context.stroke();//On trace seulement les lignes.
      context.closePath();

      context.beginPath();//On démarre un nouveau tracé
      context.moveTo(340, 570);//On se déplace au coin inférieur gauche
      context.lineTo(640, 78);
      context.lineTo(938, 570);
      context.lineTo(345, 570);
      context.fillStyle = "#FFCC01";
      context.fill();//On trace seulement les lignes.
      context.closePath();

      context.font="bold 4.5rem Arial";
      context.fillStyle = "#000000";
      context.fillText("BANP", 530, 310);

      context.font="bold 0.8rem Arial";
      context.fillStyle = "#000000";
      context.fillText("BIENNALE ART NUMERIQUE PHOCEENNE", 495, 340);

      context.font="2.7rem Arial";
      context.fillStyle = "#000000";
      context.fillText("LA REVOLUTION", 466, 400);

      context.font="2.7rem Arial";
      context.fillStyle = "#000000";
      context.fillText("DU TRAVAIL", 520, 450);
}
/*END CANAVS HEADER*/


/*START TEXT FOOTER*/
var SCROLLER_LENGTH = 60;
var HEIGHT = 7;
var theInput = $('#theInput');
var fps = 10;

var myMessage = textToLED('VOUS POUVEZ NOUS CONTACTER VIA NOTRE PAGE INFORMATION');
var leftPointer = SCROLLER_LENGTH + 1;
var rightPointer = 0;
var furthestLeftPoint = 0 - myMessage.length;

theInput.change(function(){
  clearLights();
  myMessage = textToLED(this.value);
  furthestLeftPoint = 0 - myMessage.length;
  leftPointer = SCROLLER_LENGTH + 1;
});

function clearLights(){
  var lightsOn = $('.on');
  lightsOn.removeClass('on');
  lightsOn.addClass('off');
}
function setLight(row, col, state){
  var theLight = $('.'+row+'_'+col);

  if(theLight.hasClass('on') && !state){
    theLight.removeClass('on');
    theLight.addClass('off');
  }else if(theLight.hasClass('off') && state){
    theLight.removeClass('off');
    theLight.addClass('on');
  }
}

function drawMessage(messageArray, leftPointer){
  var messageLength = messageArray.length;
  var totalScrollLength = SCROLLER_LENGTH + messageLength;

  if(messageLength>0){

		for(var col=0;col<messageLength;col++){
      for(var row=0;row<HEIGHT;row++){
        var offsetCol = leftPointer + col;

        if(offsetCol<SCROLLER_LENGTH || offsetCol >= 0){
          setLight(row,offsetCol,messageArray[col][row]);
        }

      }
    }

  }
}

function textToLED(theWord){
  var theMessage = [];
  theWord = theWord.toUpperCase();
  for(var i=0;i<theWord.length;i++){
    theMessage.push(charToLED(theWord.charAt(i)));
    theMessage.push(charToLED());
  }

  var flatten = [];
  flatten = flatten.concat.apply(flatten, theMessage);

  return flatten;
}

function charToLED(theChar){
  var theLed = [];
	switch(theChar){
    case 'A' :
      theLed = [[false, false, true, true, true, true, true],
                [false, true, false, false, true, false, false],
                [true, false, false, false, true, false, false],
                [false, true, false, false, true, false, false],
                [false, false, true, true, true, true, true]];
      break;
    case 'B' :
      theLed = [[true, true, true, true, true, true, true],
                [true, false, false, true, false, false, true],
                [true, false, false, true, false, false, true],
                [true, false, false, true, false, false, true],
                [false, true, true, false, true, true, false]];
      break;
		case 'C' :
      theLed = [[false, true, true, true, true, true, false],
                [true, false, false, false, false, false, true],
                [true, false, false, false, false, false, true],
                [true, false, false, false, false, false, true],
                [false, true, false, false, false, true, false]];
      break;
     case 'D' :
      theLed = [[true, true, true, true, true, true, true],
                [true, false, false, false, false, false, true],
                [true, false, false, false, false, false, true],
                [true, false, false, false, false, false, true],
                [false, true, true, true, true, true, false]];
      break;
    case 'E' :
      theLed = [[true, true, true, true, true, true, true],
                [true, false, false, true, false, false, true],
                [true, false, false, true, false, false, true],
                [true, false, false, true, false, false, true],
                [true, false, false, false, false, false, true]];
      break;
    case 'F' :
      theLed = [[true, true, true, true, true, true, true],
                [true, false, false, true, false, false, false],
                [true, false, false, true, false, false, false],
                [true, false, false, true, false, false, false],
                [true, false, false, false, false, false, false]];
      break;
    case 'G' :
      theLed = [[false, true, true, true, true, true, false],
                [true, false, false, false, false, false, true],
                [true, false, false, false, false, false, true],
                [true, false, false, false, true, false, true],
                [true, true, false, false, true, true, true]];
      break;
    case 'H' :
      theLed = [[true, true, true, true, true, true, true],
                [false, false, false, true, false, false, false],
                [false, false, false, true, false, false, false],
                [false, false, false, true, false, false, false],
                [true, true, true, true, true, true, true]];
      break;
    case 'I' :
      theLed = [[false, false, false, false, false, false, false],
                [true, false, false, false, false, false, true],
                [true, true, true, true, true, true, true],
                [true, false, false, false, false, false, true],
                [false, false, false, false, false, false, false]];
      break;
    case 'J' :
      theLed = [[false, false, false, false, false, true, false],
                [false, false, false, false, false, false, true],
                [true, false, false, false, false, false, true],
                [true, true, true, true, true, true, false],
                [true, false, false, false, false, false, false]];
      break;
 	 case 'K' :
      theLed = [[true, true, true, true, true, true, true],
                [false, false, false, true, false, false, false],
                [false, false, true, false, true, false, false],
                [false, true, false, false, false, true, false],
                [true, false, false, false, false, false, true]];
      break;
 	 case 'L' :
      theLed = [[true, true, true, true, true, true, true],
                [false, false, false, false, false, false, true],
                [false, false, false, false, false, false, true],
                [false, false, false, false, false, false, true],
                [false, false, false, false, false, false, true]];
      break;
 	 case 'M' :
      theLed = [[true, true, true, true, true, true, true],
                [false, true, false, false, false, false, false],
                [false, false, true, false, false, false, false],
                [false, true, false, false, false, false, false],
                [true, true, true, true, true, true, true]];
      break;
 	 case 'N' :
      theLed = [[true, true, true, true, true, true, true],
                [false, false, true, false, false, false, false],
                [false, false, false, true, false, false, false],
                [false, false, false, false, true, false, false],
                [true, true, true, true, true, true, true]];
      break;
 	 case 'O' :
      theLed = [[false, true, true, true, true, true, false],
                [true, false, false, false, false, false, true],
                [true, false, false, false, false, false, true],
                [true, false, false, false, false, false, true],
                [false, true, true, true, true, true, false]];
      break;
 	 case 'P' :
      theLed = [[true, true, true, true, true, true, true],
                [true, false, false, true, false, false, false],
                [true, false, false, true, false, false, false],
                [true, false, false, true, false, false, false],
                [false, true, true, false, false, false, false]];
      break;
 	 case 'Q' :
      theLed = [[false, true, true, true, true, true, false],
                [true, false, false, false, false, false, true],
                [true, false, false, false, true, false, true],
                [true, false, false, false, false, true, false],
                [false, true, true, true, true, false, true]];
      break;
 	 case 'R' :
      theLed = [[true, true, true, true, true, true, true],
                [true, false, false, true, false, false, false],
                [true, false, false, true, false, false, false],
                [true, false, false, true, false, false, false],
                [false, true, true, false, true, true, true]];
      break;
 	 case 'S' :
      theLed = [[false, true, true, false, false, false, true],
                [true, false, false, true, false, false, true],
                [true, false, false, true, false, false, true],
                [true, false, false, true, false, false, true],
                [true, false, false, false, true, true, false]];
      break;
 	 case 'T' :
      theLed = [[true, false, false, false, false, false, false],
                [true, false, false, false, false, false, false],
                [true, true, true, true, true, true, true],
                [true, false, false, false, false, false, false],
                [true, false, false, false, false, false, false]];
      break;
 	 case 'U' :
      theLed = [[true, true, true, true, true, true, false],
                [false, false, false, false, false, false, true],
                [false, false, false, false, false, false, true],
                [false, false, false, false, false, false, true],
                [true, true, true, true, true, true, false]];
      break;
 	 case 'V' :
      theLed = [[true, true, true, true, true, false, false],
                [false, false, false, false, false, true, false],
                [false, false, false, false, false, false, true],
                [false, false, false, false, false, true, false],
                [true, true, true, true, true, false, false]];
      break;
 	 case 'W' :
      theLed = [[true, true, true, true, true, true, false],
                [false, false, false, false, false, false, true],
                [false, false, false, false, true, true, false],
                [false, false, false, false, false, false, true],
                [true, true, true, true, true, true, false]];
      break;
 	 case 'X' :
      theLed = [[true, false, false, false, false, false, true],
                [false, true, true, false, true, true, false],
                [false, false, false, true, false, false, false],
                [false, true, true, false, true, true, false],
                [true, false, false, false, false, false, true]];
      break;
 	 case 'Y' :
      theLed = [[true, false, false, false, false, false, false],
                [false, true, false, false, false, false, false],
                [false, false, true, true, true, true, true],
                [false, true, false, false, false, false, false],
                [true, false, false, false, false, false, false]];
      break;
 	 case 'Z' :
      theLed = [[true, false, false, false, false, true, true],
                [true, false, false, false, true, false, true],
                [true, false, false, true, false, false, true],
                [true, false, true, false, false, false, true],
                [true, true, false, false, false, false, true]];
      break;
    default:
      theLed = [[false, false, false, false, false, false, false]];
  }
  return theLed;
}


function draw() {
	setTimeout(function() {
		requestAnimationFrame(draw);

    	 if(leftPointer==furthestLeftPoint){
        	leftPointer = SCROLLER_LENGTH + 1;
       }

       drawMessage(myMessage, leftPointer);
       leftPointer--;

	}, 10 / fps);
}

draw();
/*END TEXT FOOTER*/
