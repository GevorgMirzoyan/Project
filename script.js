var socket = io();
socket = io.connect('http://localhost:3000');

var side = 20;

function setup()
{
    frameRate(10);
    createCanvas(1001, 1001);
    background('#acacac');
}

socket.on('send matrix', function(matrix, weather)
{
    for (var y = 0; y < matrix.length; y++) 
    {
        for (var x = 0; x < matrix[y].length; x++) 
        {
            if (matrix[y][x] == 0) //datark vandak
            {
                if(weather == 'winter')
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

            else if (matrix[y][x] == 1) //xot
            {
                if(weather == 'spring')
                {
                    fill("#30ff30");
                    rect(x * side, y * side, side, side);
                }

                if(weather == 'summer')
                {
                    fill("#008000");
                    rect(x * side, y * side, side, side);
                }

                if(weather == 'autumn')
                {
                    fill("#c8d123");
                    rect(x * side, y * side, side, side);
                }

                if(weather == 'winter')
                {
                    fill("#e0ffe0");
                    rect(x * side, y * side, side, side);
                }
            }

            else if (matrix[y][x] == 2) //xotaker_arakan
            {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            
            else if (matrix[y][x] == 2.5) //xotaker_igakan
            {
                fill("#fa00ff");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 3) //gishatich_arakan
            {
                fill("#ff5000");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 3.5) //gishatich_igakan
            {
                fill("#9825ed");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 4) //mard_arakan
            {
                fill("#840000");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 4.5) //mard_igakan
            {
                fill("#54078c");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 5) //tree
            {
                fill("brown");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 8) //virus
            {
                fill("black");
                rect(x * side, y * side, side, side);
            }
        }
    }
})