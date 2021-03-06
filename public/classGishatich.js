var LivingCreature = require('./LivingCreature.js');

module.exports = class Gishatich extends LivingCreature //done
{
    constructor(x, y, hivandutyun_timeout, hivandutyun_mahacu) {
        super(x, y, hivandutyun_timeout, hivandutyun_mahacu)
        this.yntaniKendani = false;
        this.energy = 25;
        this.axorjak = 0;
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
            [this.x + 3, this.y + 3]
        ];
    }

    yntrelVandak(ch) {
        if (this.hivandutyun_mahacu == false) {
            this.stanalNorKordinatner();
            return super.yntrelVandak(ch);
        }
    }

    sharjvel() //done
    {
        if (this.hivandutyun_mahacu == false && weather != 'winter') {
            var datarkVandakner = this.yntrelVandak(0);
            var norVandak = this.getRandomArr(datarkVandakner);

            var xot = this.yntrelVandak(1);
            var norVandak2 = this.getRandomArr(xot);

            this.axorjak = 0;

            if (norVandak) {
                matrix[this.y][this.x] = 0;
                var norx = norVandak[0];
                var nory = norVandak[1];

                if (this.ser == 1) {
                    matrix[nory][norx] = 3;
                }

                else {
                    matrix[nory][norx] = 3.5;
                }

                this.x = norx;
                this.y = nory;

                this.energy -= 1;

                if (this.energy <= 0) {
                    this.mahanal();
                }
            }

            else if (norVandak2) {
                for (var i in grassArr) {
                    if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                        grassArr.splice(i, 1);
                    }
                }

                matrix[this.y][this.x] = 0;

                var norx = norVandak2[0];
                var nory = norVandak2[1];

                this.x = norx;
                this.y = nory;

                if (this.ser == 1) {
                    matrix[nory][norx] = 3;
                }

                else {
                    matrix[nory][norx] = 3.5;
                }

                this.energy -= 1;

                if (this.energy <= 0) {
                    this.mahanal();
                }
            }

            else {
                this.energy -= 1;

                if (this.energy <= 0) {
                    this.mahanal();
                }
            }
        }
    }

    timeout() //done
    {
        if (this.bazmanal_timeout == false && this.hivandutyun_mahacu == false && weather != 'winter') {
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

    bazmanal() //done
    {
        if (this.bazmanal_timeout == true && this.hivandutyun_mahacu == false && weather != 'winter') {
            var datarkVandakner = this.yntrelVandak(0);
            var norVandak = this.getRandomArr(datarkVandakner);
            var norVandak3 = this.getRandomArr(datarkVandakner);

            var xot = this.yntrelVandak(2);
            var norVandak6 = this.getRandomArr(xot);
            var norVandak7 = this.getRandomArr(xot);

            var xotaker = this.yntrelVandak(2);
            var norVandak4 = this.getRandomArr(xotaker);
            var norVandak5 = this.getRandomArr(xotaker);

            var gishatich = this.yntrelVandak(3.5);
            var norVandak2 = this.getRandomArr(gishatich);

            if (norVandak2) {
                for (var i in gishatichArr) {
                    if (norVandak2[0] == gishatichArr[i].x && norVandak2[1] == gishatichArr[i].y) {
                        var gishatich_igakan = gishatichArr[i];
                    }
                }

                if (norVandak) {
                    this.bazmanal_timeout = false;

                    if (gishatich_igakan.bazmacox == false) {
                        var norx = norVandak[0];
                        var nory = norVandak[1];

                        var r = Math.floor(this.getRandomNum(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 3;
                        }

                        else {
                            matrix[nory][norx] = 3.5;
                        }

                        var norGishatich = new Gishatich(norx, nory);
                        gishatichArr.push(norGishatich);

                        norGishatichner++;

                        if (matrix[nory][norx] == 3) {
                            norGishatich.ser = 1;
                        }

                        else {
                            norGishatich.ser = 2;
                        }
                    }

                    else if (gishatich_igakan.bazmacox == true) {
                        gishatich_igakan.bazmacox = false;

                        var norx = norVandak[0];
                        var nory = norVandak[1];

                        var r = Math.floor(this.getRandomNum(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 3;
                        }

                        else {
                            matrix[nory][norx] = 3.5;
                        }

                        var norGishatich = new Gishatich(norx, nory);
                        gishatichArr.push(norGishatich);

                        norGishatichner++;

                        if (matrix[nory][norx] == 3) {
                            norGishatich.ser = 1;
                        }

                        else {
                            norGishatich.ser = 2;
                        }

                        if (norVandak3) {
                            if (norVandak3[0] != norVandak[0] && norVandak3[1] != norVandak[1]) {
                                var norx = norVandak3[0];
                                var nory = norVandak3[1];

                                var r2 = Math.floor(this.getRandomNum(5));

                                if (r2 >= 1) {
                                    matrix[nory][norx] = 3;
                                }

                                else {
                                    matrix[nory][norx] = 3.5;
                                }

                                var norGishatich2 = new Gishatich(norx, nory);
                                gishatichArr.push(norGishatich2);

                                norGishatichner++;

                                if (matrix[nory][norx] == 3) {
                                    norGishatich2.ser = 1;
                                }

                                else {
                                    norGishatich2.ser = 2;
                                }
                            }
                        }
                    }
                }

                else if (norVandak4) {
                    this.bazmanal_timeout = false;

                    if (gishatich_igakan.bazmacox == false) {
                        var norx = norVandak4[0];
                        var nory = norVandak4[1];

                        var r = Math.floor(this.getRandomNum(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 3;
                        }

                        else {
                            matrix[nory][norx] = 3.5;
                        }

                        var norGishatich = new Gishatich(norx, nory);
                        gishatichArr.push(norGishatich);

                        norGishatichner++;

                        if (matrix[nory][norx] == 3) {
                            norGishatich.ser = 1;
                        }

                        else {
                            norGishatich.ser = 2;
                        }

                        for (var i in xotakerArr) {
                            if (norGishatich.x == xotakerArr[i].x && norGishatich.y == xotakerArr[i].y) {
                                xotakerArr.splice(i, 1);
                                norGishatich.axorjak += 1;
                            }
                        }
                    }

                    else if (gishatich_igakan.bazmacox == true) {
                        gishatich_igakan.bazmacox = false;

                        var norx = norVandak4[0];
                        var nory = norVandak4[1];

                        var r = Math.floor(this.getRandomNum(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 3;
                        }

                        else {
                            matrix[nory][norx] = 3.5;
                        }

                        var norGishatich = new Gishatich(norx, nory);
                        gishatichArr.push(norGishatich);

                        norGishatichner++;

                        if (matrix[nory][norx] == 3) {
                            norGishatich.ser = 1;
                        }

                        else {
                            norGishatich.ser = 2;
                        }

                        for (var i in xotakerArr) {
                            if (norGishatich.x == xotakerArr[i].x && norGishatich.y == xotakerArr[i].y) {
                                xotakerArr.splice(i, 1);
                                norGishatich.axorjak += 1;
                            }
                        }

                        if (norVandak5) {
                            if (norVandak4[0] != norVandak5[0] && norVandak4[1] != norVandak5[1]) {
                                var norx = norVandak5[0];
                                var nory = norVandak5[1];

                                var r2 = Math.floor(this.getRandomNum(5));

                                if (r2 >= 1) {
                                    matrix[nory][norx] = 3;
                                }

                                else {
                                    matrix[nory][norx] = 3.5;
                                }

                                var norGishatich2 = new Xotaker(norx, nory);
                                gishatichArr.push(norGishatich2);

                                norGishatichner++;

                                if (matrix[nory][norx] == 3) {
                                    norGishatich2.ser = 1;
                                }

                                else {
                                    norGishatich2.ser = 2;
                                }

                                for (var i in xotakerArr) {
                                    if (norGishatich2.x == xotakerArr[i].x && norGishatich2.y == xotakerArr[i].y) {
                                        xotakerArr.splice(i, 1);
                                        norGishatich2.axorjak += 1;
                                    }
                                }
                            }
                        }
                    }
                }

                else if (norVandak6) {
                    this.bazmanal_timeout = false;

                    if (gishatich_igakan.bazmacox == false) {
                        var norx = norVandak6[0];
                        var nory = norVandak6[1];

                        var r = Math.floor(this.getRandomNum(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 3;
                        }

                        else {
                            matrix[nory][norx] = 3.5;
                        }

                        var norGishatich = new Gishatich(norx, nory);
                        gishatichArr.push(norGishatich);

                        norGishatichner++;

                        if (matrix[nory][norx] == 3) {
                            norGishatich.ser = 1;
                        }

                        else {
                            norGishatich.ser = 2;
                        }

                        for (var i in xotakerArr) {
                            if (norGishatich.x == xotakerArr[i].x && norGishatich.y == xotakerArr[i].y) {
                                xotakerArr.splice(i, 1);
                                norGishatich.axorjak += 1;
                            }
                        }
                    }

                    else if (gishatich_igakan.bazmacox == true) {
                        gishatich_igakan.bazmacox = false;

                        var norx = norVandak6[0];
                        var nory = norVandak6[1];

                        var r = Math.floor(this.getRandomNum(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 3;
                        }

                        else {
                            matrix[nory][norx] = 3.5;
                        }

                        var norGishatich = new Gishatich(norx, nory);
                        gishatichArr.push(norGishatich);

                        norGishatichner++;

                        if (matrix[nory][norx] == 3) {
                            norGishatich.ser = 1;
                        }

                        else {
                            norGishatich.ser = 2;
                        }

                        for (var i in xotakerArr) {
                            if (norGishatich.x == xotakerArr[i].x && norGishatich.y == xotakerArr[i].y) {
                                xotakerArr.splice(i, 1);
                                norGishatich.axorjak += 1;
                            }
                        }

                        if (norVandak7) {
                            if (norVandak7[0] != norVandak6[0] && norVandak7[1] != norVandak6[1]) {
                                var norx = norVandak7[0];
                                var nory = norVandak7[1];

                                var r2 = Math.floor(this.getRandomNum(5));

                                if (r2 >= 1) {
                                    matrix[nory][norx] = 3;
                                }

                                else {
                                    matrix[nory][norx] = 3.5;
                                }

                                var norGishatich2 = new Xotaker(norx, nory);
                                gishatichArr.push(norGishatich2);

                                norGishatichner++;

                                if (matrix[nory][norx] == 3) {
                                    norGishatich2.ser = 1;
                                }

                                else {
                                    norGishatich2.ser = 2;
                                }

                                for (var i in xotakerArr) {
                                    if (norGishatich2.x == xotakerArr[i].x && norGishatich2.y == xotakerArr[i].y) {
                                        xotakerArr.splice(i, 1);
                                        norGishatich2.axorjak += 1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    utel() //done
    {
        if (this.hivandutyun_mahacu == false && weather != 'winter') {
            var xotaker = this.yntrelVandak(2);
            var norVandak = this.getRandomArr(xotaker);

            var xotaker2 = this.yntrelVandak(2.5);
            var norVandak3 = this.getRandomArr(xotaker2);

            var mard = this.yntrelVandak(4.5);
            var norVandak2 = this.getRandomArr(mard);

            if (norVandak || norVandak3) {
                this.axorjak += 1;
                this.energy += 2;

                matrix[this.y][this.x] = 0;

                if (norVandak) {
                    var norx = norVandak[0];
                    var nory = norVandak[1];
                }

                else if (norVandak3) {
                    var norx = norVandak3[0];
                    var nory = norVandak3[1];
                }

                if (this.ser == 1) {
                    matrix[nory][norx] = 3;
                }

                else {
                    matrix[nory][norx] = 3.5;
                }

                this.x = norx;
                this.y = nory;

                if (this.energy > 25) {
                    this.energy = 25;
                }

                for (var i in xotakerArr) {
                    if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                        xotakerArr.splice(i, 1);
                    }
                }

                if (this.axorjak >= 7 && this.ser == 1) {
                    this.bazmacox = true;
                    this.axorjak = 0;
                    this.bazmanal();
                }

                else if (this.axorjak >= 7 && this.ser == 2) {
                    this.bazmacox = true;
                    this.axorjak = 0;
                }
            }

            else if (norVandak2) {
                this.axorjak += 1;
                this.energy += 3;

                matrix[this.y][this.x] = 0;
                var norx = norVandak2[0];
                var nory = norVandak2[1];

                if (this.ser == 1) {
                    matrix[nory][norx] = 3;
                }

                else {
                    matrix[nory][norx] = 3.5;
                }

                this.x = norx;
                this.y = nory;

                if (this.energy > 25) {
                    this.energy = 25;
                }

                for (var i in mardArr) {
                    if (this.x == mardArr[i].x && this.y == mardArr[i].y) {
                        mardArr.splice(i, 1);
                    }
                }

                if (this.axorjak >= 7 && this.ser == 1) {
                    this.bazmacox = true;
                    this.axorjak = 0;
                    this.bazmanal();
                }

                else if (this.axorjak >= 7 && this.ser == 2) {
                    this.bazmacox = true;
                    this.axorjak = 0;
                }
            }

            else {
                this.sharjvel();
            }

        }
    }

    mahanal() //done
    {
        if (this.hivandutyun_mahacu == true) {
            for (var i in gishatichArr) {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                    matrix[this.y][this.x] = 8;
                    gishatichArr.splice(i, 1);
                }
            }
        }

        else {
            for (var i in gishatichArr) {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                    matrix[this.y][this.x] = 0;
                    gishatichArr.splice(i, 1);
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