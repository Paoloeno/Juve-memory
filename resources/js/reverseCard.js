var turnCounter = 0;
var showedCardCounter;
var lastCheckedNumber;
var lastShowedCard;
var lock = false;
var winCounter;

function reverseCard(number){

var opacityValue = $("#c"+number).css('opacity');

if(opacityValue == 1 && lock == false){
    lock = true;
    showedCardCounter++;

    if(showedCardCounter==1){
        //odsłonięcie pierwszej karty
        $('#c'+number).css("background-image", "url('./resources/images/"+map.get(number)+"')");
        $('#c'+number).addClass('cardActive');

        lastCheckedNumber = number;
        lastShowedCard = map.get(lastCheckedNumber);
        lock = false;
    }else{
        //warunek zabraniający na kliknięcie dwa razy w tę samą kartę
        if(lastCheckedNumber == number){lock = false; return}

        //odsłonięcie drugiej karty - udane
        if(lastShowedCard==map.get(number)){
             $('#c'+number).css("background-image", "url('./resources/images/"+map.get(number)+"')");
             $('#c'+number).addClass('cardActive');

             setTimeout(function(){$('#c'+number).css('opacity', 0); lock = false;}, 1000);
             setTimeout(function(){$('#c'+lastCheckedNumber).css('opacity', 0);}, 1000);

             winCounter++;
             if(winCounter == 10){
                 $('#gameBoard').html('<br><br><br><div id="tryAgainInfo">Gratulacje, Twój wynik to '+turnCounter
                 +'</div><div id="tryAgainButton" onclick="document.location.reload(true)">Spróbuj jeszcze raz!</div>');
             }
        }else{
        //odsłonięcie drugiej karty - nieudane
        $('#c'+number).css("background-image", "url('./resources/images/"+map.get(number)+"')");
        $('#c'+number).addClass('cardActive');

        setTimeout("hideMissedCards("+lastCheckedNumber+", "+number+")", 1500);
        }
    showedCardCounter = 0;
    turnCounter++;
    $('#turnCounter').html("Turns : "+turnCounter);
    }
}
}

function hideMissedCards(lastCheckedNumber ,number){
    $('#c'+lastCheckedNumber).css("background-image", "url('./resources/images/juveLogo.jpg')");
    $('#c'+lastCheckedNumber).removeClass('cardActive');

    $('#c'+number).css("background-image", "url('./resources/images/juveLogo.jpg')");
    $('#c'+number).removeClass('cardActive');

    lock = false;
}
