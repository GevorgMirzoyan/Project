var LivingCreature = require('./LivingCreature.js');

module.exports = class Mard extends LivingCreature //done
{
    constructor(x, y, hivandutyun_timeout, hivandutyun_mahacu) {
        super(x, y, hivandutyun_timeout, hivandutyun_mahacu);
        this.energy = 50;
        this.axorjak = 0;
        this.wood = 5;
        this.ser = 0;
        this.bazmacox = false;
        this.timeout_time = 0;
        this.bazmanal_timeout = true;
    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],

            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2],

            [this.x - 3, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 3, this.y + 3],

            [this.x - 4, this.y - 4],
            [this.x, this.y - 4],
            [this.x + 4, this.y - 4],
            [this.x - 4, this.y],
            [this.x + 4, this.y],
            [this.x - 4, this.y + 4],
            [this.x, this.y + 4],
            [this.x + 4, this.y + 4],

            [this.x - 5, this.y - 5],
            [this.x, this.y - 5],
            [this.x + 5, this.y - 5],
            [this.x - 5, this.y],
            [this.x + 5, this.y],
            [this.x - 5, this.y + 5],
            [this.x, this.y + 5],
            [this.x + 5, this.y + 5]
        ];
    }

    yntrelVandak(ch) {
        if (this.hivandutyun_mahacu == false) {
            this.stanalNorKordinatner();
            return super.yntrelVandak(ch);
        }
    }

    timeout() //done
    {
        if (this.bazmanal_timeout == false && this.hivandutyun_mahacu == false) {
            this.timeout_time++;

            var bazmanal_timeout = 0;

            if (weather == 'spring') {
                bazmanal_timeout = 10;
            }

            else if (weather == 'summer') {
                bazmanal_timeout = 5;
            }

            else if (weather == 'autumn') {
                bazmanal_timeout = 15;
            }

            else if (weather == 'winter') {
                bazmanal_timeout = 20;
            }


            if (this.timeout_time >= bazmanal_timeout) {
                this.timeout_time = 0;
                this.bazmanal_timeout = true;
            }
        }
    }

    sharjvel() //done
    {
        if (this.hivandutyun_mahacu == false) {
            var datarkVandakner = this.yntrelVandak(0);
            var norVandak = this.getRandomArr(datarkVandakner);

            if (norVandak) {
                this.axorjak = 0;

                matrix[this.y][this.x] = 0;
                var norx = norVandak[0];
                var nory = norVandak[1];

                if (this.ser == 1) {
                    matrix[nory][norx] = 4;
                }

                else {
                    matrix[nory][norx] = 4.5;
                }

                this.x = norx;
                this.y = nory;

                this.energy -= 1;

                if (this.energy <= 0) {
                    this.mahanal();
                }
            }

            else {
                this.axorjak = 0;
                this.energy -= 1;

                if (this.energy <= 0) {
                    this.mahanal();
                }
            }
        }
    }

    utel() //done
    {
        if (this.hivandutyun_mahacu == false) {
            var xot = this.yntrelVandak(1);
            var norVandak = this.getRandomArr(xot);

            var xotaker = this.yntrelVandak(2);
            var norVandak2 = this.getRandomArr(xotaker);

            var xotaker2 = this.yntrelVandak(2.5);
            var norVandak5 = this.getRandomArr(xotaker2);

            var gishatich = this.yntrelVandak(3);
            var norVandak3 = this.getRandomArr(gishatich);

            var gishatich2 = this.yntrelVandak(3.5);
            var norVandak6 = this.getRandomArr(gishatich2);

            var tree = this.yntrelVandak(5);
            var norVandak4 = this.getRandomArr(tree);

            if (norVandak3 || norVandak6) {
                for (var i in gishatichArr) {
                    if ((norVandak3 && norVandak3[0] == gishatichArr[i].x && norVandak3[1] == gishatichArr[i].y) || (norVandak6 && norVandak6[0] == gishatichArr[i].x && norVandak6[1] == gishatichArr[i].y)) {
                        var gishatich = gishatichArr[i];
                    }
                }
            }

            if (this.wood < 3 && norVandak4 && this.ser == 1) {
                this.axorjak = 0;
                this.wood += 3;

                matrix[this.y][this.x] = 0;
                var norx = norVandak4[0];
                var nory = norVandak4[1];

                matrix[nory][norx] = 4;

                this.x = norx;
                this.y = nory;

                if (this.wood > 10) {
                    this.wood = 10;
                }

                for (var i in treeArr) {
                    if (this.x == treeArr[i].x && this.y == treeArr[i].y) {
                        treeArr.splice(i, 1);
                    }
                }

                this.energy -= 3;

                if (this.energy <= 0) {
                    this.mahanal();
                }
            }

            else if ((norVandak3 || norVandak6) && this.ser == 1) {
                if (this.wood >= 3) {
                    for (var i in gishatichArr) {
                        if (gishatich.x == gishatichArr[i].x && gishatich.y == gishatichArr[i].y) {
                            gishatichArr.splice(i, 1);
                        }
                    }

                    var yntaniKendani = new YntaniKendani(gishatich.x, gishatich.y);
                    yntaniKendaniArr.push(yntaniKendani);
                    norYntaniKendaniner++;

                    var r = Math.floor(this.getRandomNum(5));

                    if (r >= 1) {
                        yntaniKendani.ser = 1;
                    }

                    else {
                        yntaniKendani.ser = 2;
                    }

                    this.axorjak = 0;
                    this.wood -= 3;

                    if (norVandak3) {
                        var norx = norVandak3[0];
                        var nory = norVandak3[1];
                    }

                    else if (norVandak6) {
                        var norx = norVandak6[0];
                        var nory = norVandak6[1];
                    }

                    if (yntaniKendani.ser == 1) {
                        matrix[nory][norx] = 6;
                    }

                    else {
                        matrix[nory][norx] = 6.5;
                    }

                    this.energy -= 5;
                    this.axorjak = 0;

                    if (this.energy <= 0) {
                        this.mahanal();
                    }
                }

                else {
                    var i = Math.round(this.getRandomNum(10));

                    if (i >= 3) {
                        for (var i in gishatichArr) {
                            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                                gishatichArr.splice(i, 1);
                                matrix[this.y][this.x] = 0;
                            }
                        }

                        this.axorjak += 1;
                        this.energy += 3;

                        if (norVandak3) {
                            var norx = norVandak3[0];
                            var nory = norVandak3[1];
                        }

                        if (norVandak6) {
                            var norx = norVandak6[0];
                            var nory = norVandak6[1];
                        }

                        this.x = norx;
                        this.y = nory;

                        matrix[nory][norx] = 4;

                        if (this.energy > 50) {
                            this.energy = 50;
                        }

                        if (this.axorjak >= 20) {
                            this.bazmacox = true;
                            this.axorjak = 0;
                            this.bazmanal();
                        }
                    }

                    else {
                        this.mahanal();

                        gishatich.axorjak += 1;
                        gishatich.energy += 3;

                        if (gishatich.energy >= 25) {
                            gishatich.energy = 25;
                        }
                    }
                }
            }

            else if (norVandak2 || norVandak5) {
                this.axorjak += 1;
                this.energy += 2;

                matrix[this.y][this.x] = 0;

                if (norVandak2) {
                    var norx = norVandak2[0];
                    var nory = norVandak2[1];
                }

                else if (norVandak5) {
                    var norx = norVandak5[0];
                    var nory = norVandak5[1];
                }

                if (this.ser == 1) {
                    matrix[nory][norx] = 4;
                }

                else {
                    matrix[nory][norx] = 4.5;
                }

                this.x = norx;
                this.y = nory;

                if (this.energy > 50) {
                    this.energy = 50;
                }

                if (this.axorjak >= 20 && this.ser == 1) {
                    this.bazmacox = true;
                    this.axorjak = 0;
                    this.bazmanal();
                }

                else if (this.axorjak >= 20 && this.ser == 2) {
                    this.bazmacox = true;
                    this.axorjak = 0;
                }

                for (var i in xotakerArr) {
                    if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                        xotakerArr.splice(i, 1);
                    }
                }
            }

            else if (norVandak) {
                this.axorjak += 1;

                var score_plus = 0;

                if (weather == 'spring') {
                    score_plus = 2;
                }

                else if (weather == 'summer') {
                    score_plus = 3;
                }

                else if (weather == 'autumn') {
                    score_plus = 1;
                }

                else if (weather == 'winter') {
                    score_plus = 0.5;
                }

                this.energy += score_plus;

                matrix[this.y][this.x] = 0;
                var norx = norVandak[0];
                var nory = norVandak[1];

                if (this.ser == 1) {
                    matrix[nory][norx] = 4;
                }

                else {
                    matrix[nory][norx] = 4.5;
                }

                this.x = norx;
                this.y = nory;

                if (this.energy >= 50) {
                    this.energy = 50;
                }

                if (this.axorjak >= 20 && this.ser == 1) {
                    this.bazmacox = true;
                    this.axorjak = 0;
                    this.bazmanal();
                }

                else if (this.axorjak >= 20 && this.ser == 2) {
                    this.bazmacox = true;
                    this.axorjak = 0;
                }

                for (var i in grassArr) {
                    if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                        grassArr.splice(i, 1);
                    }
                }
            }

            else {
                this.sharjvel();
            }
        }
    }

    bazmanal() //done
    {
        if (this.bazmanal_timeout == true && this.hivandutyun_mahacu == false) {
            var datarkVandakner = this.yntrelVandak(0);
            var norVandak = this.getRandomArr(datarkVandakner);
            var norVandak3 = this.getRandomArr(datarkVandakner);

            var xot = this.yntrelVandak(1);
            var norVandak6 = this.getRandomArr(xot);
            var norVandak7 = this.getRandomArr(xot);

            var xotaker = this.yntrelVandak(2);
            var norVandak4 = this.getRandomArr(xotaker);
            var norVandak5 = this.getRandomArr(xotaker);

            var mard = this.yntrelVandak(4.5);
            var norVandak2 = this.getRandomArr(mard);

            if (norVandak2) {
                for (var i in mardArr) {
                    if (norVandak2[0] == mardArr[i].x && norVandak2[1] == mardArr[i].y) {
                        var mard_igakan = mardArr[i];
                    }
                }

                if (norVandak) {
                    this.bazmanal_timeout = false;

                    if (mard_igakan.bazmacox == false) {
                        var norx = norVandak[0];
                        var nory = norVandak[1];

                        var r = Math.floor(this.getRandomNum(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 4;
                        }

                        else {
                            matrix[nory][norx] = 4.5;
                        }

                        var norMard = new Mard(norx, nory);
                        mardArr.push(norMard);

                        norMardik++;

                        if (matrix[nory][norx] == 4) {
                            norMard.ser = 1;
                        }

                        else {
                            norMard.ser = 2;
                        }
                    }

                    else if (mard_igakan.bazmacox == true) {
                        mard_igakan.bazmacox = false;

                        var norx = norVandak[0];
                        var nory = norVandak[1];

                        var r = Math.floor(this.getRandomNum(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 4;
                        }

                        else {
                            matrix[nory][norx] = 4.5;
                        }

                        var norMard = new Mard(norx, nory);
                        mardArr.push(norMard);

                        norMardik++;

                        if (matrix[nory][norx] == 4) {
                            norMard.ser = 1;
                        }

                        else {
                            norMard.ser = 2;
                        }

                        if (norVandak3) {
                            if (norVandak3[0] != norVandak[0] && norVandak3[1] != norVandak[1]) {
                                var norx = norVandak3[0];
                                var nory = norVandak3[1];

                                var r2 = Math.floor(this.getRandomNum(5));

                                if (r2 >= 1) {
                                    matrix[nory][norx] = 4;
                                }

                                else {
                                    matrix[nory][norx] = 4.5;
                                }

                                var norMard2 = new Mard(norx, nory);
                                mardArr.push(norMard2);

                                norMardik++;

                                if (matrix[nory][norx] == 4) {
                                    norMard2.ser = 1;
                                }

                                else {
                                    norMard2.ser = 2;
                                }
                            }
                        }
                    }
                }

                else if (norVandak6) {
                    this.bazmanal_timeout = false;

                    if (mard_igakan.bazmacox == false) {
                        var norx = norVandak6[0];
                        var nory = norVandak6[1];

                        var r = Math.floor(this.getRandomNum(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 4;
                        }

                        else {
                            matrix[nory][norx] = 4.5;
                        }

                        var norMard = new Mard(norx, nory);
                        mardArr.push(norMard);

                        norMardik++;

                        if (matrix[nory][norx] == 4) {
                            norMard.ser = 1;
                        }

                        else {
                            norMard.ser = 2;
                        }

                        for (var i in grassArr) {
                            if (norMard.x == grassArr[i].x && norMard.y == grassArr[i].y) {
                                grassArr.splice(i, 1);
                                norMard.axorjak += 1;
                            }
                        }
                    }

                    else if (mard_igakan.bazmacox == true) {
                        mard_igakan.bazmacox = false;

                        var norx = norVandak6[0];
                        var nory = norVandak6[1];

                        var r = Math.floor(this.getRandomNum(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 4;
                        }

                        else {
                            matrix[nory][norx] = 4.5;
                        }

                        var norMard = new Mard(norx, nory);
                        mardArr.push(norMard);

                        norMardik++;

                        if (matrix[nory][norx] == 4) {
                            norMard.ser = 1;
                        }

                        else {
                            norMard.ser = 2;
                        }

                        for (var i in grassArr) {
                            if (norMard.x == grassArr[i].x && norMard.y == grassArr[i].y) {
                                grassArr.splice(i, 1);
                                norMard.axorjak += 1;
                            }
                        }

                        if (norVandak7) {
                            if (norVandak6[0] != norVandak7[0] && norVandak6[1] != norVandak7[1]) {
                                var norx = norVandak7[0];
                                var nory = norVandak7[1];

                                var r2 = Math.floor(this.getRandomNum(5));

                                if (r2 >= 1) {
                                    matrix[nory][norx] = 4;
                                }

                                else {
                                    matrix[nory][norx] = 4.5;
                                }

                                var norMard2 = new Mard(norx, nory);
                                mardArr.push(norMard2);

                                norMardik++;

                                if (matrix[nory][norx] == 4) {
                                    norMard2.ser = 1;
                                }

                                else {
                                    norMard2.ser = 2;
                                }

                                for (var i in grassArr) {
                                    if (norMard2.x == grassArr[i].x && norMard2.y == grassArr[i].y) {
                                        grassArr.splice(i, 1);
                                        norMard2.axorjak += 1;
                                    }
                                }
                            }
                        }
                    }
                }

                else if (norVandak4) {
                    this.bazmanal_timeout = false;

                    if (mard_igakan.bazmacox == false) {
                        var norx = norVandak4[0];
                        var nory = norVandak4[1];

                        var r = Math.floor(this.getRandomNum(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 4;
                        }

                        else {
                            matrix[nory][norx] = 4.5;
                        }

                        var norMard = new Mard(norx, nory);
                        mardArr.push(norMard);

                        norMardik++;

                        if (matrix[nory][norx] == 4) {
                            norMard.ser = 1;
                        }

                        else {
                            norMard.ser = 2;
                        }

                        for (var i in xotakerArr) {
                            if (norMard.x == xotakerArr[i].x && norMard.y == xotakerArr[i].y) {
                                xotakerArr.splice(i, 1);
                                norMard.axorjak += 1;
                            }
                        }
                    }

                    else if (mard_igakan.bazmacox == true) {
                        mard_igakan.bazmacox = false;

                        var norx = norVandak4[0];
                        var nory = norVandak4[1];

                        var r = Math.floor(this.getRandomNum(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 4;
                        }

                        else {
                            matrix[nory][norx] = 4.5;
                        }

                        var norMard = new Mard(norx, nory);
                        mardArr.push(norMard);

                        norMardik++;

                        if (matrix[nory][norx] == 4) {
                            norMard.ser = 1;
                        }

                        else {
                            norMard.ser = 2;
                        }

                        for (var i in xotakerArr) {
                            if (norMard.x == xotakerArr[i].x && norMard.y == xotakerArr[i].y) {
                                xotakerArr.splice(i, 1);
                                norMard.axorjak += 1;
                            }
                        }

                        if (norVandak5) {
                            if (norVandak4[0] != norVandak5[0] && norVandak4[1] != norVandak5[1]) {
                                var norx = norVandak5[0];
                                var nory = norVandak5[1];

                                var r2 = Math.floor(this.getRandomNum(5));

                                if (r2 >= 1) {
                                    matrix[nory][norx] = 4;
                                }

                                else {
                                    matrix[nory][norx] = 4.5;
                                }

                                var norMard2 = new Mard(norx, nory);
                                mardArr.push(norMard2);

                                norMardik++;

                                if (matrix[nory][norx] == 4) {
                                    norMard2.ser = 1;
                                }

                                else {
                                    norMard2.ser = 2;
                                }

                                for (var i in xotakerArr) {
                                    if (norMard2.x == xotakerArr[i].x && norMard2.y == xotakerArr[i].y) {
                                        mardArr.splice(i, 1);
                                        norMard2.axorjak += 1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    mahanal() //done
    {
        if (this.hivandutyun_mahacu == true) {
            for (var i in mardArr) {
                if (this.x == mardArr[i].x && this.y == mardArr[i].y) {
                    matrix[this.y][this.x] = 8;
                    mardArr.splice(i, 1);
                }
            }
        }

        else {
            for (var i in mardArr) {
                if (this.x == mardArr[i].x && this.y == mardArr[i].y) {
                    matrix[this.y][this.x] = 0;
                    mardArr.splice(i, 1);
                }
            }
        }
    }

    switch() //done
    {
        if (this.hivandutyun_mahacu == true) {
            this.mahanal();
        }

        else if (this.hivandutyun_mahacu == false) {
            this.utel();
            this.timeout();
        }
    }
}