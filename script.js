
var domande = [
    "sei stronzo?",
    "fumare le canne è parte della tua personalità?",
    "ti chiami teobaldo?",
    "invece di prenderti le tue responsabilità per essere una persona di merda incolpi i tuoi traumi passati?"
];

var conta = 0;
var totale = 0;

function Next()
{
    conta+=1;
    if(conta<4)
    {
        document.getElementById("testoDomanda").innerHTML=domande[conta-1];
        document.getElementById("numeroDomanda").innerHTML="Domanda "+(conta+1);
        totale += parseInt(document.getElementById("risposta").value)*2;
    }
    if(conta==4)
    {
        document.getElementById("numeroDomanda").innerHTML="Domanda "+(conta+1);
        document.getElementById("testoDomanda").innerHTML=domande[conta-1];
        document.getElementById("calcola").innerHTML="Calcola";
        totale += parseInt(document.getElementById("risposta").value)*2;
    }
    if(conta>4)
    {
        totale += parseInt(document.getElementById("risposta").value)*2;
        document.getElementById("testoRisultati").innerHTML="Sei teobaldo al "+totale+"%!";
        document.getElementById("risultati").style.display="block";
    }
}