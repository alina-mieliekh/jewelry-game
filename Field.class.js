function Field (gameContainerId, fieldHeight, fieldWidth){

    var
        gameContainer,
        field;

    var initialize = function(){
        gameContainer = document.getElementById(gameContainerId);
        generateField();
    };

    this.render = function () {

    };


    var generateField = function(){

        var tempArray;

        field = [];
        for (var i=0; i<fieldHeight; i++){
            tempArray = [];

            for (var j=0; j<fieldWidth; j++){
                tempArray.push(null);
            }
            field.push(tempArray);
        }
        console.log('field: ', field);

    };

    initialize();

}

var myField = new Field('gameContainer', 10, 10);
myField.render();



