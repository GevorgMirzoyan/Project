var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

matrix = [];
qanak = 75;

xotakerQanak = 500;
gishatichQanak = 100;
mardQanak = 50;
treeQanak = 300;

function random(max) {
    return Math.round(Math.random() * max);
}

function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}

for (var a = 0; a < qanak; ++a) {
    matrix[a] = [];

    for (var b = 0; b < qanak; ++b) {
        matrix[a][b] = random(1);
    }
}

var i = 0;

while (i < xotakerQanak) {
    var x = getRandomNum(qanak);
    var y = getRandomNum(qanak);
    var r = getRandomNum(5);

    if (r > 1) {
        matrix[y][x] = 2;
    }

    else {
        matrix[y][x] = 2.5;
    }

    i++;
}

var i2 = 0;
while (i2 < gishatichQanak) {
    var x = getRandomNum(qanak);
    var y = getRandomNum(qanak);
    var r = getRandomNum(5);

    if (matrix[y][x] != 2 && matrix[y][x] != 2.5) {
        if (r > 1) {
            matrix[y][x] = 3;
        }

        else {
            matrix[y][x] = 3.5;
        }
    }

    i2++;
}

var i3 = 0;

while (i3 < mardQanak) {
    var x = getRandomNum(qanak);
    var y = getRandomNum(qanak);

    if (matrix[y][x] != 2 && matrix[y][x] != 3 && matrix[y][x] != 2.5 && matrix[y][x] != 3.5) {
        var r = getRandomNum(5);

        if (r >= 1) {
            matrix[y][x] = 4;
        }

        else {
            matrix[y][x] = 4.5;
        }

        i3++;
    }
}

var i4 = 0;

while (i4 < treeQanak) {
    var x = getRandomNum(qanak);
    var y = getRandomNum(qanak);

    if (matrix[y][x] != 2 && matrix[y][x] != 3 && matrix[y][x] != 4 && matrix[y][x] != 2.5 && matrix[y][x] != 3.5 && matrix[y][x] != 4.5) {
        matrix[y][x] = 5;

        i4++;
    }
}

global.LivingCreature = require("./public/LivingCreature.js");
global.Grass = require("./public/classGrass.js");
global.Tree = require("./public/classTree.js");
global.Xotaker = require("./public/classXotaker.js");
global.Gishatich = require("./public/classGishatich.js");
global.YntaniKendani = require("./public/classYntaniKendani.js");
global.Mard = require("./public/classMard.js");
global.Virus = require("./public/classVirus.js");

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

global.grassArr = [];
global.xotakerArr = [];
global.gishatichArr = [];
global.yntaniKendaniArr = [];
global.mardArr = [];
global.virusArr = [];
global.treeArr = [];

global.norXoter = 0;
global.norTsarer = 0;
global.norXotakerner = 0;
global.norGishatichner = 0;
global.norYntaniKendaniner = 0;
global.norMardik = 0;
global.norVirusner = 0;

global.hivandacacXoter = 0;
global.hivandacacTsarer = 0;
global.hivandacacXotakerner = 0;
global.hivandacacGishatichner = 0;
global.hivandacacYntaniKendaniner = 0;
global.hivandacacMardik = 0;

for (var y = 0; y < matrix.length; ++y) {
    for (var x = 0; x < matrix[y].length; ++x) {
        if (matrix[y][x] == 1) {
            var xot = new Grass(x, y);
            grassArr.push(xot);
        }

        if (matrix[y][x] == 2) {
            var xotaker = new Xotaker(x, y);
            xotakerArr.push(xotaker);
            xotaker.ser = 1;
        }

        if (matrix[y][x] == 2.5) {
            var xotaker = new Xotaker(x, y);
            xotakerArr.push(xotaker);
            xotaker.ser = 2;
        }

        if (matrix[y][x] == 3) {
            var gishatich = new Gishatich(x, y);
            gishatichArr.push(gishatich);
            gishatich.ser = 1;
        }

        if (matrix[y][x] == 3.5) {
            var gishatich = new Gishatich(x, y);
            gishatichArr.push(gishatich);
            gishatich.ser = 2;
        }

        if (matrix[y][x] == 4) {
            var mard = new Mard(x, y);
            mardArr.push(mard);
            mard.ser = 1;
        }

        if (matrix[y][x] == 4.5) {
            var mard = new Mard(x, y);
            mardArr.push(mard);
            mard.ser = 2;
        }

        if (matrix[y][x] == 5) {
            var tree = new Tree(x, y);
            treeArr.push(tree);
        }
    }
}
var info = { "Info": [] };
setInterval(function () {
    global.file = "data.json"

    var obj =
    {
        'Exanak': weather, 'Xoteri qanak': grassArr.length, 'Xotakernei qanak': xotakerArr.length, 'Gishatichneri qanak': gishatichArr.length, 'Yntani Kendanineri qanak' : yntaniKendaniArr.length, 'Mardik': mardArr.length, 'Virusner': virusArr.length, 'Tsarer': treeArr.length,
        'Nor xoter': norXoter, 'Nor tsarer': norTsarer, 'Nor xotakerner': norXotakerner, 'Nor gishatichner': norGishatichner, 'Nor Yntani Kendaniner' : norYntaniKendaniner, 'Nor mardik': norMardik, 'Nor virusner': norVirusner,
        'Hivandacac xoter': hivandacacXoter, 'Hivandacac tsarer': hivandacacTsarer, 'Hivandacac xotakerner': hivandacacXotakerner, 'Hivandacac gishatichner': hivandacacGishatichner, 'Hivand Yntani Kendaniner' : hivandacacYntaniKendaniner, 'Hivandacac mardik': hivandacacMardik
    }
    info.Info.push(obj);

    var myJSON = JSON.stringify(info, null, 3);
    fs.writeFileSync(file, myJSON);
}, 1000)

global.weather = 'spring';

setInterval(function () {
    if (weather == 'spring') {
        weather = 'summer';
    }

    else if (weather == 'summer') {
        weather = 'autumn';
    }

    else if (weather == 'autumn') {
        weather = 'winter';
    }

    else if (weather == 'winter') {
        weather = 'spring';
    }
}, 15000)

function hivandutyun() {
    if (weather == 'winter') {
        var r = random(600);

        if (r <= 100 && grassArr.length > 300) {
            for (var i = 0; i < 300; i++) {
                grassArr[i].hivandutyun_mahacu = true;
                hivandacacXoter++;
            }
        }

        else if (r > 100 && r <= 200 && xotakerArr.length > 50) {
            for (var i = 0; i < 50; i++) {
                xotakerArr[i].hivandutyun_mahacu = true;
                hivandacacXotakerner++;
            }
        }

        else if (r > 200 && r <= 300 && gishatichArr.length > 30) {
            for (var i = 0; i < 30; i++) {
                gishatichArr[i].hivandutyun_mahacu = true;
                hivandacacGishatichner++;
            }
        }

        else if (r > 300 && r <= 400 && yntaniKendaniArr.length > 20) {
            for (var i = 0; i < 20; i++) {
                yntaniKendaniArr[i].hivandutyun_mahacu = true;
                hivandacacYntaniKendaniner++;
            }
        }

        else if (r > 400 && r <= 500 && mardArr.length > 30) {
            for (var i = 0; i < 30; i++) {
                mardArr[i].hivandutyun_mahacu = true;
                hivandacacMardik++;
            }
        }

        else if (r > 500 && r <= 600 && treeArr.length > 100) {
            for (var i = 0; i < 100; i++) {
                treeArr[i].hivandutyun_mahacu = true;
                hivandacacTsarer++;
            }
        }
    }

    else if (weather == 'autumn') {
        var r = random(600);

        if (r <= 100 && grassArr.length > 200) {
            for (var i = 0; i < 200; i++) {
                grassArr[i].hivandutyun_mahacu = true;
                hivandacacXoter++;
            }
        }

        else if (r > 100 && r <= 200 && xotakerArr.length > 30) {
            for (var i = 0; i < 30; i++) {
                xotakerArr[i].hivandutyun_mahacu = true;
                hivandacacXotakerner++;
            }
        }

        else if (r > 200 && r <= 300 && gishatichArr.length > 20) {
            for (var i = 0; i < 20; i++) {
                gishatichArr[i].hivandutyun_mahacu = true;
                hivandacacGishatichner++;
            }
        }

        else if (r > 300 && r <= 400 && yntaniKendaniArr.length > 10) {
            for (var i = 0; i < 10; i++) {
                yntaniKendaniArr[i].hivandutyun_mahacu = true;
                hivandacacYntaniKendaniner++;
            }
        }

        else if (r > 400 && r <= 500 && mardArr.length > 15) {
            for (var i = 0; i < 15; i++) {
                mardArr[i].hivandutyun_mahacu = true;
                hivandacacMardik++;
            }
        }

        else if (r > 500 && r <= 600 && treeArr.length > 50) {
            for (var i = 0; i < 50; i++) {
                treeArr[i].hivandutyun_mahacu = true;
                hivandacacTsarer++;
            }
        }
    }

    else if (weather == 'summer') {
        var r = random(600);

        if (r <= 100 && grassArr.length > 50) {
            for (var i = 0; i < 50; i++) {
                grassArr[i].hivandutyun_mahacu = true;
                hivandacacXoter++;
            }
        }

        else if (r > 100 && r <= 200 && xotakerArr.length > 10) {
            for (var i = 0; i < 10; i++) {
                xotakerArr[i].hivandutyun_mahacu = true;
                hivandacacXotakerner++;
            }
        }

        else if (r > 200 && r <= 300 && gishatichArr.length > 5) {
            for (var i = 0; i < 5; i++) {
                gishatichArr[i].hivandutyun_mahacu = true;
                hivandacacGishatichner++;
            }
        }

        else if (r > 300 && r <= 400 && yntaniKendaniArr.length > 3) {
            for (var i = 0; i < 3; i++) {
                yntaniKendaniArr[i].hivandutyun_mahacu = true;
                hivandacacYntaniKendaniner
            }
        }

        else if (r > 400 && r <= 500 && mardArr.length > 5) {
            for (var i = 0; i < 5; i++) {
                mardArr[i].hivandutyun_mahacu = true;
                hivandacacGishatichner++;
            }
        }

        else if (r > 500 && r <= 600 && treeArr.length > 10) {
            for (var i = 0; i < 10; i++) {
                treeArr[i].hivandutyun_mahacu = true;
                hivandacacTsarer++;
            }
        }
    }

    else if (weather == 'spring') {
        var r = random(600);

        if (r <= 100 && grassArr.length > 100) {
            for (var i = 0; i < 100; i++) {
                grassArr[i].hivandutyun_mahacu = true;
                hivandacacXoter++;
            }
        }

        else if (r > 100 && r <= 200 && xotakerArr.length > 15) {
            for (var i = 0; i < 15; i++) {
                xotakerArr[i].hivandutyun_mahacu = true;
                hivandacacXotakerner++;
            }
        }

        else if (r > 200 && r <= 300 && gishatichArr.length > 10) {
            for (var i = 0; i < 10; i++) {
                gishatichArr[i].hivandutyun_mahacu = true;
                hivandacacGishatichner++;
            }
        }

        else if (r > 300 && r <= 400 && yntaniKendaniArr.length > 5) {
            for (var i = 0; i < 5; i++) {
                yntaniKendaniArr[i].hivandutyun_mahacu = true;
                hivandacacYntaniKendaniner++;
            }
        }

        else if (r > 400 && r <= 500 && mardArr.length > 10) {
            for (var i = 0; i < 10; i++) {
                mardArr[i].hivandutyun_mahacu = true;
                hivandacacMardik++;
            }
        }

        else if (r > 500 && r <= 600 && treeArr.length > 25) {
            for (var i = 0; i < 25; i++) {
                treeArr[i].hivandutyun_mahacu = true;
                hivandacacTsarer++;
            }
        }
    }
}

setInterval(hivandutyun, 7500);

function draw() {
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 8) {
                var virus = new Virus(x, y);
                virusArr.push(virus);
                norVirusner++;
            }
        }
    }

    for (var i in virusArr) {
        virusArr[i].antiVirus();
    }

    for (var i in mardArr) {
        mardArr[i].switch();
    }

    for (var i in grassArr) {
        grassArr[i].bazmanal();
        grassArr[i].mahanal();
    }

    for (var i in gishatichArr) {
        gishatichArr[i].switch();
    }

    for (var i in yntaniKendaniArr) {
        yntaniKendaniArr[i].switch();
    }

    for (var i in treeArr) {
        treeArr[i].bazmanal();
        treeArr[i].mahanal();
    }

    for (var i in xotakerArr) {
        xotakerArr[i].switch();
    }
}

setInterval(draw, 1000);

setInterval(function () {
    io.sockets.emit('send matrix', matrix, weather);
}, 1000)