/*START CANVAS HEADER*/
window.onload = function() {
  var canvas = document.getElementById('monCanvas');
  if (!canvas) {
    alert("Impossible de récupérer le canvas");
    return;
  }

  var context = canvas.getContext('2d');
  if (!context) {
    alert("Impossible de récupérer le context du canvas");
    return;
  }
  context.lineWidth = 40;
  context.lineJoin = 'round';
  context.beginPath(); //On démarre un nouveau tracé
  context.moveTo(290, 600); //On se déplace au coin inférieur gauche
  context.lineTo(640, 25);
  context.lineTo(990, 600);
  context.lineTo(290, 600);
  context.lineTo(500, 255);
  context.strokeStyle = "#FFCC01";
  context.stroke(); //On trace seulement les lignes.
  context.closePath();

  context.lineWidth = 30;
  context.lineJoin = 'round';
  context.beginPath(); //On démarre un nouveau tracé
  context.moveTo(315, 585); //On se déplace au coin inférieur gauche
  context.lineTo(640, 50);
  context.lineTo(965, 585);
  context.lineTo(315, 585);
  context.lineTo(500, 280);
  context.strokeStyle = "#E3001B";
  context.stroke(); //On trace seulement les lignes.
  context.closePath();

  context.beginPath(); //On démarre un nouveau tracé
  context.moveTo(340, 570); //On se déplace au coin inférieur gauche
  context.lineTo(640, 78);
  context.lineTo(938, 570);
  context.lineTo(345, 570);
  context.fillStyle = "#FFCC01";
  context.fill(); //On trace seulement les lignes.
  context.closePath();

  context.font = "bold 4.5rem Arial";
  context.fillStyle = "#000000";
  context.fillText("BANP", 535, 310);

  context.font = "bold 0.8rem Arial";
  context.fillStyle = "#000000";
  context.fillText("BIENNALE ART NUMERIQUE PHOCEENNE", 510, 340);

  context.font = "2.7rem Arial";
  context.fillStyle = "#000000";
  context.fillText("LA REVOLUTION", 466, 400);

  context.font = "2.7rem Arial";
  context.fillStyle = "#000000";
  context.fillText("DU TRAVAIL", 520, 450);

  var personne = new Image();
  personne.addEventListener('load', function() {
    context.drawImage(personne, 515, 430, 270, 270);
  }, false);
  personne.src = "panneau.png";
}
/*END CANAVS HEADER*/

  var canvas2 = document.getElementById('monCanvas2');
  var context2 = canvas2.getContext('2d');

  context2.lineWidth = 39;
  context2.lineJoin = 'round';
  context2.beginPath(); //On démarre un nouveau tracé
  context2.moveTo(290, 600); //On se déplace au coin inférieur gauche
  context2.lineTo(640, 25);
  context2.lineTo(990, 600);
  context2.lineTo(290, 600);
  context2.lineTo(500, 255);
  context2.strokeStyle = "#00000063";
  context2.stroke(); //On trace seulement les lignes.
  context2.closePath();
  
  context2.beginPath(); //On démarre un nouveau tracé
  context2.moveTo(325, 580.5); //On se déplace au coin inférieur gauche
  context2.lineTo(640, 63);
  context2.lineTo(955, 580.5);
  context2.lineTo(325, 580.5);
  context2.fillStyle = "#00000063";
  context2.fill(); //On trace seulement les lignes.
  context2.closePath();
