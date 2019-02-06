window.onload = setPicturesPlaces;
var numberList = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
var map = new Map();

function setPicturesPlaces(){

    for(i=0 ; i<10 ; i++){
    //iteracja po zawodnikach
    var playerImage = "player"+i+".jpg";

        for(j=0; j<2 ; j++){
        //dobór 2 losoych pól dla jednego obrazu
            var wylosowanyIndex = Math.floor(Math.random() * numberList.length); console.log(wylosowanyIndex);
            var wylosowanePole = numberList[wylosowanyIndex];  console.log(wylosowanePole);
            numberList.splice(wylosowanyIndex, 1); console.log(numberList);

            map.set(wylosowanePole, playerImage); console.log(map)
        }
    }
    showedCardCounter = 0;
    winCounter = 0;
}
