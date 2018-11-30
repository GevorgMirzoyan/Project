var socket = io();
socket = io.connect('http://localhost:3000');

var matrix2 = [];
var info_weather;
var fr = 10;
var side = 20;

// matrix[0].length * side + 1, matrix.length * side + 1

function setup()
{
    frameRate(fr);
    createCanvas(1001, 1001);
    background('#acacac');
}
    
socket.on('send matrix', function(matrix, weather) 
{
    matrix2 = matrix;
    info_weather = weather;
    
    for (var y = 0; y < matrix2.length; y++) 
    {
        for (var x = 0; x < matrix2[y].length; x++) 
        {
            if (matrix2[y][x] == 0) //datark vandak
            {
                if(info_weather == 'winter')
                {
                    fill("white");
                    rect(x * side, y * side, side, side);
                }

                else
                {
                    fill("#acacac");
                    rect(x * side, y * side, side, side); 
                }
            }

            else if (matrix2[y][x] == 1) //xot
            {
                if(info_weather == 'spring')
                {
                    fill("#30ff30");
                    rect(x * side, y * side, side, side);
                }

                if(info_weather == 'summer')
                {
                    fill("#008000");
                    rect(x * side, y * side, side, side);
                }

                if(info_weather == 'autumn')
                {
                    fill("#c8d123");
                    rect(x * side, y * side, side, side);
                }

                if(info_weather == 'winter')
                {
                    fill("#e0ffe0");
                    rect(x * side, y * side, side, side);
                }
            }

            else if (matrix2[y][x] == 2) //xotaker_arakan
            {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            
            else if (matrix2[y][x] == 2.5) //xotaker_igakan
            {
                fill("#fa00ff");
                rect(x * side, y * side, side, side);
            }

            else if (matrix2[y][x] == 3) //gishatich_arakan
            {
                fill("#ff5000");
                rect(x * side, y * side, side, side);
            }

            else if (matrix2[y][x] == 3.5) //gishatich_igakan
            {
                fill("#9825ed");
                rect(x * side, y * side, side, side);
            }

            else if (matrix2[y][x] == 4) //mard_arakan
            {
                fill("#840000");
                rect(x * side, y * side, side, side);
            }

            else if (matrix2[y][x] == 4.5) //mard_igakan
            {
                fill("#54078c");
                rect(x * side, y * side, side, side);
            }

            else if (matrix2[y][x] == 5) //tree
            {
                fill("brown");
                rect(x * side, y * side, side, side);
            }

            else if (matrix2[y][x] == 8) //virus
            {
                fill("black");
                rect(x * side, y * side, side, side);
            }

            else if (matrix2[y][x] == 9) //mutant
            {
                fill("red");
                rect(x * side, y * side, side, side);
            }

            else if (matrix2[y][x] == 10) //virus_mutant
            {
                fill("#162118");
                rect(x * side, y * side, side, side);
            }

            else if (matrix2[y][x] == 11) //solider
            {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
        }
    }
})