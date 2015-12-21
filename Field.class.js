function Field (gameContainerId, fieldHeight, fieldWidth){

    var
        gameContainer,
        field;

    var initialize = function(){
        gameContainer = document.getElementById(gameContainerId);
        generateField();
        this.render();
    }.bind(this);

    this.render = function () {
        var html = '';
        var map = {
            1:'rhombus',
            2:'circle',
            3:'star',
            4:'pentagon',
            5:'heart'
        };

        for (i=0; i<field.length; i++){
            html += '<div class="row">';
            for (j=0; j<field[i].length; j++){
                //console.log(field[i][j]);
                html +=
                    '<div class="cell">' +
                        '<div class="type-'+ map[field[i][j]] + '" >' +
                        '</div>' +
                    '</div>';
            }
            html += '</div>';
        }
        gameContainer.innerHTML=html;
        console.log(html);


    };

    var getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max + 1 - min)) + min;
    };

    var generateField = function(){

        var tempArray;

        field = [];
        for (var i=0; i<fieldHeight; i++){
            tempArray = [];

            for (var j=0; j<fieldWidth; j++){
                tempArray.push( getRandomInt(1, 5) );
            }
            field.push(tempArray);
        }
        console.log('field: ', field);

    };

    initialize();

}

var myField = new Field('gameContainer', 10, 20);
myField.render();



