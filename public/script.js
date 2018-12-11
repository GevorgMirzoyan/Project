var matrix = [];
var qanak = 50;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var yntaniKendaniArr = [];
var mardArr = [];
var soliderArr = [];
var mutantArr = [];
var virusArr = [];
var treeArr = [];
var xotakerQanak = 0;
var gishatichQanak = 0;
var mardQanak = 0;
var treeQanak = 0;
var mutantQanak = 0;
var soliderQanak = 0;

var Grass = require('./classGrass.js');
var Xotaker = require('./classXotaker.js');
var Gishatich = require('./classGishatich.js');
var Mard = require('./classMard.js');
var Solider = require('./classSolider.js');
var Mutant = require('./classMutant.js');
var Virus = require('./classVirus.js');
var Tree = require('./classTree.js');

    // for (var a = 0; a < qanak; ++a) 
    // {
    //     matrix[a] = [];

    //     for (var b = 0; b < qanak; ++b) 
    //     {
    //         matrix[a][b] = Math.round(random(1));
    //     }
    // }
    
    // var i = 0;
    // while (i < xotakerQanak)
    // {
    //     var x = Math.floor(random(qanak));
    //     var y = Math.floor(random(qanak));
    //     var r = Math.floor(random(5));

    //     if(r >= 1)
    //     {
    //         matrix[y][x] = 2;
    //     }

    //     else
    //     {
    //         matrix[y][x] = 2.5;
    //     }
    //     i++;
    // }
    
    // var i = 0;
    // while (i < gishatichQanak)
    // {
    //     var x = Math.floor(random(qanak));
    //     var y = Math.floor(random(qanak));

    //     if (matrix[y][x] != 2 && matrix[y][x] != 2.5) 
    //     {
    //         var r = Math.floor(random(5));

    //         if(r >= 1)
    //         {
    //             matrix[y][x] = 3;
    //         }

    //         else
    //         {
    //             matrix[y][x] = 3.5;
    //         }
    //         i++;
    //     }
    // }

    // var i = 0;
    // while (i < mardQanak)
    // {
    //     var x = Math.floor(random(qanak));
    //     var y = Math.floor(random(qanak));

    //     if (matrix[y][x] != 2 && matrix [y][x] != 3 && matrix[y][x] != 2.5 && matrix [y][x] != 3.5) 
    //     {
    //         var r = Math.floor(random(5));

    //         if(r >= 1)
    //         {
    //             matrix[y][x] = 4;              
    //         }

    //         else
    //         {
    //             matrix[y][x] = 4.5;               
    //         }
    //         i++;
    //     }
    // }

    // var i = 0;
    // while (i < treeQanak)
    // {
    //     var x = Math.floor(random(qanak));
    //     var y = Math.floor(random(qanak));

    //     if (matrix[y][x] != 2 && matrix [y][x] != 3 && matrix [y][x] != 4 && matrix[y][x] != 2.5 && matrix [y][x] != 3.5 && matrix [y][x] != 4.5) 
    //     {
    //         matrix[y][x] = 5;
    //         i++;
    //     }
    // }

    // var i = 0;
    // while (i < mutantQanak)
    // {
    //     var x = Math.floor(random(qanak));
    //     var y = Math.floor(random(qanak));

    //     if (matrix[y][x] != 2 && matrix [y][x] != 3 && matrix [y][x] != 4 && matrix[y][x] != 2.5 && matrix [y][x] != 3.5 && matrix [y][x] != 4.5 && matrix [y][x] != 5)
    //     {
    //         matrix[y][x] = 9;
    //         i++;
    //     }
    // }

    // var i = 0;
    // while (i < soliderQanak)
    // {
    //     var x = Math.floor(random(qanak));
    //     var y = Math.floor(random(qanak));

    //     if (matrix[y][x] != 2 && matrix [y][x] != 3 && matrix [y][x] != 4 && matrix[y][x] != 2.5 && matrix [y][x] != 3.5 && matrix [y][x] != 4.5 && matrix [y][x] != 5 && matrix [y][x] != 9)
    //     {
    //         matrix[y][x] = 11;
    //         i++;
    //     }
    // }

//     for (var y = 0; y < matrix.length; ++y) 
//     {
//         for (var x = 0; x < matrix[y].length; ++x) 
//         {
//             if (matrix[y][x] == 1) 
//             {
//                 var xot = new Grass(x,y);
//                 grassArr.push(xot);
//             }

//             if (matrix[y][x] == 2) 
//             {
//                 var xotaker = new Xotaker(x,y);
//                 xotakerArr.push(xotaker);
//                 xotaker.ser = 1;
//             }

//             if (matrix[y][x] == 2.5) 
//             {
//                 var xotaker = new Xotaker(x,y);
//                 xotakerArr.push(xotaker);
//                 xotaker.ser = 2;
//             }

//             if (matrix[y][x] == 3) 
//             {
//                 var gishatich = new Gishatich(x,y);
//                 gishatichArr.push(gishatich);
//                 gishatich.ser = 1;
//             }

//             if (matrix[y][x] == 3.5) 
//             {
//                 var gishatich = new Gishatich(x,y);
//                 gishatichArr.push(gishatich);
//                 gishatich.ser = 2;
//             }

//             if (matrix[y][x] == 4) 
//             {
//                 var mard = new Mard(x,y);
//                 mardArr.push(mard);
//                 mard.ser = 1;
//             }

//             if (matrix[y][x] == 4.5) 
//             {
//                 var mard = new Mard(x,y);
//                 mardArr.push(mard);
//                 mard.ser = 2;
//             }

//             if (matrix[y][x] == 5) 
//             {
//                 var tree = new Tree(x,y);
//                 treeArr.push(tree);
//             }

//             if (matrix[y][x] == 9) 
//             {
//                 var mutant = new Mutant(x,y);
//                 mutantArr.push(mutant);
//             }
//         }
//     }
// }

function Draw() 
{
    for (var i in mutantArr)
    {
        mutantArr[i].utel();
    }

    for(var i in virusArr)
    {
        virusArr[i].antiVirus();
    }

    for (var i in mardArr) 
    {
        mardArr[i].weather();
        mardArr[i].timeout();
        mardArr[i].utel();
        mardArr[i].hivandutyun();
    }
    
    for (var i in grassArr)
    {
        grassArr[i].weatherSwitch();
        grassArr[i].bazmanal();
        grassArr[i].hivandutyun();
    }
    
    for (var i in gishatichArr) 
    {
        gishatichArr[i].weather();
        gishatichArr[i].timeout();
        gishatichArr[i].utel();
        gishatichArr[i].hivandutyun();
    }

    for (var i in treeArr) 
    {
        treeArr[i].weather();
        treeArr[i].bazmanal();
        treeArr[i].hivandutyun();
    }
    
    for (var i in xotakerArr)
    {   
        xotakerArr[i].weather();
        xotakerArr[i].timeout();
        xotakerArr[i].utel();
        xotakerArr[i].hivandutyun();
    }
}

setInterval(Draw, 100);

// for (var y = 0; y < matrix.length; y++) 
// {
//     for (var x = 0; x < matrix[y].length; x++) 
//     {
//         if (matrix[y][x] == 0) //datark vandak
//         {
//             fill("#acacac");
//             rect(x * side, y * side, side, side);
//         }

//         else if (matrix[y][x] == 1) //xot
//         {
//             fill("green");
//             rect(x * side, y * side, side, side);
//         }

//         else if (matrix[y][x] == 2) //xotaker_arakan
//         {
//             fill("yellow");
//             rect(x * side, y * side, side, side);
//         }

//         else if (matrix[y][x] == 2.5) //xotaker_igakan
//         {
//             fill("pink");
//             rect(x * side, y * side, side, side);
//         }

//         else if (matrix[y][x] == 3) //gishatich_arakan
//         {
//             fill("#FF6400");
//             rect(x * side, y * side, side, side);
//         }

//         else if (matrix[y][x] == 3.5) //gishatich_igakan
//         {
//             fill("pink");
//             rect(x * side, y * side, side, side);
//         }

//         else if (matrix[y][x] == 4) //mard_arakan
//         {
//             fill("red");
//             rect(x * side, y * side, side, side);
//         }

//         else if (matrix[y][x] == 4.5) //mard_igakan
//         {
//             fill("pink");
//             rect(x * side, y * side, side, side);
//         }

//         else if (matrix[y][x] == 5) //tree
//         {
//             fill("brown");
//             rect(x * side, y * side, side, side);
//         }

//         else if (matrix[y][x] == 6) //water
//         {
//             fill("blue");
//             rect(x * side, y * side, side, side);
//         }

//         else if (matrix[y][x] == 7) //vandak
//         {
//             fill("black");
//             rect(x * side, y * side, side, side);
//         }

//         else if (matrix[y][x] == 8) //virus
//         {
//             fill("black");
//             rect(x * side, y * side, side, side);
//         }

//         else if (matrix[y][x] == 9) //mutant
//         {
//             fill("red");
//             rect(x * side, y * side, side, side);
//         }

//         else if (matrix[y][x] == 10) //virus_mutant
//         {
//             fill("black");
//             rect(x * side, y * side, side, side);
//         }

//         else if (matrix[y][x] == 11) //virus_mutant
//         {
//             fill("blue");
//             rect(x * side, y * side, side, side);
//         }
//     }
// }