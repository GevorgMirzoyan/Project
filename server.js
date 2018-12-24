var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

matrix = [];
qanak = 50;

xotakerQanak = 0;
gishatichQanak = 0;
mardQanak = 0;
treeQanak = 0;

function random(max) {
    return Math.round(Math.random() * max);
}

function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}

function getRandomArr(array) //done
{
    var random_obj = Math.round(Math.random() * array.length);
    var object = array[random_obj];

    return object;
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
        'Xoteri qanak': grassArr.length, 'Xotakernei qanak': xotakerArr.length, 'Gishatichneri qanak': gishatichArr.length, 'Mardik': mardArr.length, 'Virusner': virusArr.length, 'Tsarer': treeArr.length,
        'Nor xoter': norXoter, 'Nor tsarer': norTsarer, 'Nor xotakerner': norXotakerner, 'Nor gishatichner': norGishatichner, 'Nor mardik': norMardik, 'Nor virusner': norVirusner,
        'Hivandacac xoter': hivandacacXoter, 'Hivandacac tsarer': hivandacacTsarer, 'Hivandacac xotakerner': hivandacacXotakerner, 'Hivandacac gishatichner': hivandacacGishatichner, 'Hivandacac mardik': hivandacacMardik
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
}, 10000)

function hivandutyun() {
    if (weather == 'winter') {
        for (var i = 0; i < 150; i++) {
            var r = random(1200);

            if (r <= 200 && grassArr.length > 0) {   //xoti hivandutyun
                var r2 = getRandomArr(grassArr);
                r2.hivandutyun_mahacu = true;
                hivandacacXoter++;
            }

            else if (r > 200 && r <= 400 && xotakerArr.length > 0) {   //xotakeri hivandutyun
                var r3 = getRandomArr(xotakerArr);
                r3.hivandutyun_mahacu = true;
                hivandXotakerner++;
            }

            else if (r > 400 && r <= 600 && gishatichArr.length > 0) {   //gishatchi hivandutyun
                var r4 = getRandomArr(gishatichArr);
                gishatichArr[r4].hivandutyun_mahacu = true;
                hivandGishatichner++;
            }

            else if (r > 600 && r <= 800 && yntaniKendaniArr.length > 0) {   //yntani kendanu hivandutyun
                var r5 = getRandomArr(yntaniKendaniArr);
                yntaniKendaniArr[r5].hivandutyun_mahacu = true;
                hivandYntaniKendaniner++;
            }

            else if (r > 800 && r <= 1000 && mardArr.length > 0) {   //mardu hivandutyun
                var r6 = getRandomArr(mardArr);
                mardArr[r6].hivandutyun_mahacu = true;
                hivandMardik++;
            }

            else if (r > 100 && r <= 1200 && treeArr.length > 0) {   //tsari hivandutyun
                var r7 = getRandomArr(treeArr);
                treeArr[r7].hivandutyun_mahacu = true;
                hivandTsarer++;
            }
        }
    }

    else if (weather == 'autumn') {
        for (var i = 0; i < 100; i++) {
            var r = random(1200);

            if (r <= 200 && grassArr.length > 0) {   //xoti hivandutyun
                var r2 = getRandomArr(grassArr);
                r2.hivandutyun_mahacu = true;
                hivandacacXoter++;
            }

            else if (r > 200 && r <= 400 && xotakerArr.length > 0) {   //xotakeri hivandutyun
                var r3 = getRandomArr(xotakerArr);
                r3.hivandutyun_mahacu = true;
                hivandXotakerner++;
            }

            else if (r > 400 && r <= 600 && gishatichArr.length > 0) {   //gishatchi hivandutyun
                var r4 = getRandomArr(gishatichArr);
                gishatichArr[r4].hivandutyun_mahacu = true;
                hivandGishatichner++;
            }

            else if (r > 600 && r <= 800 && yntaniKendaniArr.length > 0) {   //yntani kendanu hivandutyun
                var r5 = getRandomArr(yntaniKendaniArr);
                yntaniKendaniArr[r5].hivandutyun_mahacu = true;
                hivandYntaniKendaniner++;
            }

            else if (r > 800 && r <= 1000 && mardArr.length > 0) {   //mardu hivandutyun
                var r6 = getRandomArr(mardArr);
                mardArr[r6].hivandutyun_mahacu = true;
                hivandMardik++;
            }

            else if (r > 100 && r <= 1200 && treeArr.length > 0) {   //tsari hivandutyun
                var r7 = getRandomArr(treeArr);
                treeArr[r7].hivandutyun_mahacu = true;
                hivandTsarer++;
            }
        }
    }

    else if (weather == 'spring') {
        for (var i = 0; i < 25; i++) {
            var r = random(1200);

            if (r <= 200 && grassArr.length > 0) {   //xoti hivandutyun
                var r2 = getRandomArr(grassArr);
                r2.hivandutyun_mahacu = true;
                hivandacacXoter++;
            }

            else if (r > 200 && r <= 400 && xotakerArr.length > 0) {   //xotakeri hivandutyun
                var r3 = getRandomArr(xotakerArr);
                r3.hivandutyun_mahacu = true;
                hivandXotakerner++;
            }

            else if (r > 400 && r <= 600 && gishatichArr.length > 0) {   //gishatchi hivandutyun
                var r4 = getRandomArr(gishatichArr);
                gishatichArr[r4].hivandutyun_mahacu = true;
                hivandGishatichner++;
            }

            else if (r > 600 && r <= 800 && yntaniKendaniArr.length > 0) {   //yntani kendanu hivandutyun
                var r5 = getRandomArr(yntaniKendaniArr);
                yntaniKendaniArr[r5].hivandutyun_mahacu = true;
                hivandYntaniKendaniner++;
            }

            else if (r > 800 && r <= 1000 && mardArr.length > 0) {   //mardu hivandutyun
                var r6 = getRandomArr(mardArr);
                mardArr[r6].hivandutyun_mahacu = true;
                hivandMardik++;
            }

            else if (r > 100 && r <= 1200 && treeArr.length > 0) {   //tsari hivandutyun
                var r7 = getRandomArr(treeArr);
                treeArr[r7].hivandutyun_mahacu = true;
                hivandTsarer++;
            }
        }
    }
}

setInterval(hivandutyun, 10000);

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
        mardArr[i].timeout();
        mardArr[i].utel();
        mardArr[i].hivandutyun();
    }

    for (var i in grassArr) {
        grassArr[i].bazmanal();
        grassArr[i].mahanal();
    }

    for (var i in gishatichArr) {
        gishatichArr[i].timeout();
        gishatichArr[i].utel();
        gishatichArr[i].hivandutyun();
    }

    for (var i in treeArr) {
        treeArr[i].bazmanal();
        treeArr[i].hivandutyun();
    }

    for (var i in xotakerArr) {
        xotakerArr[i].timeout();
        xotakerArr[i].switch();
    }
}

setInterval(draw, 1000);

setInterval(function () {
    io.sockets.emit('send matrix', matrix, weather);
}, 1000)