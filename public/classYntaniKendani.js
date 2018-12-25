var LivingCreature = require('./LivingCreature.js');

module.exports = class Gishatich extends LivingCreature //done
{
    constructor(x, y, hivandutyun_timeout, hivandutyun_mahacu) {
        super(x, y, hivandutyun_timeout, hivandutyun_mahacu)
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
                    matrix[nory][norx] = 6;
                }

                else {
                    matrix[nory][norx] = 6.5;
                }

                this.x = norx;
                this.y = nory;

                this.energy -= 1;
                this.axorjak = 0;

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
                    matrix[nory][norx] = 6;
                }

                else {
                    matrix[nory][norx] = 6.5;
                }

                this.energy -= 1;
                this.axorjak = 0;

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

            var yntaniKendani = this.yntrelVandak(6.5);
            var norVandak2 = this.getRandomArr(yntaniKendani);

            if (norVandak2) {
                for (var i in yntaniKendaniArr) {
                    if (norVandak2[0] == yntaniKendaniArr[i].x && norVandak2[1] == yntaniKendaniArr[i].y) {
                        var yntaniKendani_igakan = yntaniKendaniArr[i];
                    }
                }

                if (norVandak) {
                    this.bazmanal_timeout = false;

                    if (yntaniKendani_igakan.bazmacox == false) {
                        var norx = norVandak[0];
                        var nory = norVandak[1];

                        var r = Math.floor(this.getRandomNum(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 6;
                        }

                        else {
                            matrix[nory][norx] = 6.5;
                        }

                        var norYntaniKendani = new YntaniKendani(norx, nory);
                        yntaniKendaniArr.push(norYntaniKendani);

                        norYntaniKendaniner++;

                        if (matrix[nory][norx] == 6) {
                            norYntaniKendani.ser = 1;
                        }

                        else {
                            norYntaniKendani.ser = 2;
                        }
                    }

                    else if (yntaniKendani_igakan.bazmacox == true) {
                        yntaniKendani_igakan.bazmacox = false;

                        var norx = norVandak[0];
                        var nory = norVandak[1];

                        var r = Math.floor(this.getRandomNum(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 6;
                        }

                        else {
                            matrix[nory][norx] = 6.5;
                        }

                        var norYntaniKendani = new YntaniKendani(norx, nory);
                        yntaniKendaniArr.push(norYntaniKendani);

                        norYntaniKendaniner++;

                        if (matrix[nory][norx] == 6) {
                            norYntaniKendani.ser = 1;
                        }

                        else {
                            norYntaniKendani.ser = 2;
                        }

                        if (norVandak3) {
                            if (norVandak3[0] != norVandak[0] && norVandak3[1] != norVandak[1]) {
                                var norx = norVandak3[0];
                                var nory = norVandak3[1];

                                var r2 = Math.floor(this.getRandomNum(5));

                                if (r2 >= 1) {
                                    matrix[nory][norx] = 6;
                                }

                                else {
                                    matrix[nory][norx] = 6.5;
                                }

                                var norYntaniKendani2 = new YntaniKendani(norx, nory);
                                yntaniKendaniArr.push(norYntaniKendani2);

                                norYntaniKendaniner++;

                                if (matrix[nory][norx] == 6) {
                                    norYntaniKendani2.ser = 1;
                                }

                                else {
                                    norYntaniKendani2.ser = 2;
                                }
                            }
                        }
                    }
                }

                else if (norVandak4) {
                    this.bazmanal_timeout = false;

                    if (yntaniKendani_igakan.bazmacox == false) {
                        var norx = norVandak4[0];
                        var nory = norVandak4[1];

                        var r = Math.floor(this.getRandomNum(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 6;
                        }

                        else {
                            matrix[nory][norx] = 6.5;
                        }

                        var norYntaniKendani = new YntaniKendani(norx, nory);
                        yntaniKendaniArr.push(norYntaniKendani);

                        norYntaniKendaniner++;

                        if (matrix[nory][norx] == 6) {
                            norYntaniKendani.ser = 1;
                        }

                        else {
                            norYntaniKendani.ser = 2;
                        }

                        for (var i in xotakerArr) {
                            if (norYntaniKendani.x == xotakerArr[i].x && norYntaniKendani.y == xotakerArr[i].y) {
                                xotakerArr.splice(i, 1);
                                norYntaniKendani.axorjak += 1;
                            }
                        }
                    }

                    else if (yntaniKendani_igakan.bazmacox == true) {
                        yntaniKendani_igakan.bazmacox = false;

                        var norx = norVandak4[0];
                        var nory = norVandak4[1];

                        var r = Math.floor(this.getRandomNum(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 6;
                        }

                        else {
                            matrix[nory][norx] = 6.5;
                        }

                        var norYntaniKendani = new YntaniKendani(norx, nory);
                        yntaniKendaniArr.push(norYntaniKendani);

                        norYntaniKendaniner++;

                        if (matrix[nory][norx] == 6) {
                            norYntaniKendani.ser = 1;
                        }

                        else {
                            norYntaniKendani.ser = 2;
                        }

                        for (var i in xotakerArr) {
                            if (norYntaniKendani.x == xotakerArr[i].x && norYntaniKendani.y == xotakerArr[i].y) {
                                xotakerArr.splice(i, 1);
                                norYntaniKendani.axorjak += 1;
                            }
                        }

                        if (norVandak5) {
                            if (norVandak5[0] != norVandak4[0] && norVandak5[1] != norVandak4[1]) {
                                var norx = norVandak5[0];
                                var nory = norVandak5[1];

                                var r2 = Math.floor(this.getRandomNum(5));

                                if (r2 >= 1) {
                                    matrix[nory][norx] = 6;
                                }

                                else {
                                    matrix[nory][norx] = 6.5;
                                }

                                var norYntaniKendani2 = new YntaniKendani(norx, nory);
                                yntaniKendaniArr.push(norYntaniKendani2);

                                norYntaniKendaniner++;

                                if (matrix[nory][norx] == 6) {
                                    norYntaniKendani2.ser = 1;
                                }

                                else {
                                    norYntaniKendani2.ser = 2;
                                }

                                for (var i in xotakerArr) {
                                    if (norYntaniKendani2.x == xotakerArr[i].x && norYntaniKendani2.y == xotakerArr[i].y) {
                                        xotakerArr.splice(i, 1);
                                        norYntaniKendani2.axorjak += 1;
                                    }
                                }
                            }
                        }
                    }
                }

                else if (norVandak6) {
                    this.bazmanal_timeout = false;

                    if (yntaniKendani_igakan.bazmacox == false) {
                        var norx = norVandak6[0];
                        var nory = norVandak6[1];

                        var r = Math.floor(this.getRandomNum(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 6;
                        }

                        else {
                            matrix[nory][norx] = 6.5;
                        }

                        var norYntaniKendani = new YntaniKendani(norx, nory);
                        yntaniKendaniArr.push(norYntaniKendani);

                        norYntaniKendaniner++;

                        if (matrix[nory][norx] == 6) {
                            norYntaniKendani.ser = 1;
                        }

                        else {
                            norYntaniKendani.ser = 2;
                        }

                        for (var i in xotakerArr) {
                            if (norYntaniKendani.x == xotakerArr[i].x && norYntaniKendani.y == xotakerArr[i].y) {
                                xotakerArr.splice(i, 1);
                                norYntaniKendani.axorjak += 1;
                            }
                        }
                    }

                    else if (yntaniKendani_igakan.bazmacox == true) {
                        yntaniKendani_igakan.bazmacox = false;

                        var norx = norVandak6[0];
                        var nory = norVandak6[1];

                        var r = Math.floor(this.getRandomNum(5));

                        if (r >= 1) {
                            matrix[nory][norx] = 6;
                        }

                        else {
                            matrix[nory][norx] = 6.5;
                        }

                        var norYntaniKendani = new YntaniKendani(norx, nory);
                        yntaniKendaniArr.push(norYntaniKendani);

                        norYntaniKendaniner++;

                        if (matrix[nory][norx] == 3) {
                            norYntaniKendani.ser = 1;
                        }

                        else {
                            norYntaniKendani.ser = 2;
                        }

                        for (var i in xotakerArr) {
                            if (norYntaniKendani.x == xotakerArr[i].x && norYntaniKendani.y == xotakerArr[i].y) {
                                xotakerArr.splice(i, 1);
                                norYntaniKendani.axorjak += 1;
                            }
                        }

                        if (norVandak7) {
                            if (norVandak7[0] != norVandak6[0] && norVandak7[1] != norVandak6[1]) {
                                var norx = norVandak7[0];
                                var nory = norVandak7[1];

                                var r2 = Math.floor(this.getRandomNum(5));

                                if (r2 >= 1) {
                                    matrix[nory][norx] = 6;
                                }

                                else {
                                    matrix[nory][norx] = 6.5;
                                }

                                var norYntaniKendani2 = new YntaniKendani(norx, nory);
                                yntaniKendaniArr.push(norYntaniKendani2);

                                norYntaniKendaniner++;

                                if (matrix[nory][norx] == 6) {
                                    norYntaniKendani2.ser = 1;
                                }

                                else {
                                    norYntaniKendani2.ser = 2;
                                }

                                for (var i in xotakerArr) {
                                    if (norYntaniKendani2.x == xotakerArr[i].x && norYntaniKendani2.y == xotakerArr[i].y) {
                                        xotakerArr.splice(i, 1);
                                        norYntaniKendani2.axorjak += 1;
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
            var norVandak2 = this.getRandomArr(xotaker2);

            if (norVandak || norVandak2) {
                this.axorjak += 1;
                this.energy += 2;

                matrix[this.y][this.x] = 0;

                if (norVandak) {
                    var norx = norVandak[0];
                    var nory = norVandak[1];
                }

                else if (norVandak2) {
                    var norx = norVandak2[0];
                    var nory = norVandak2[1];
                }

                if (this.ser == 1) {
                    matrix[nory][norx] = 6;
                }

                else {
                    matrix[nory][norx] = 6.5;
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

            else {
                this.sharjvel();
            }
        }
    }

    mahanal() //done
    {
        if (this.hivandutyun_mahacu == true) {
            for (var i in yntaniKendaniArr) {
                if (this.x == yntaniKendaniArr[i].x && this.y == yntaniKendaniArr[i].y) {
                    matrix[this.y][this.x] = 8;
                    yntaniKendaniArr.splice(i, 1);
                }
            }
        }

        else {
            for (var i in yntaniKendaniArr) {
                if (this.x == yntaniKendaniArr[i].x && this.y == yntaniKendaniArr[i].y) {
                    matrix[this.y][this.x] = 0;
                    yntaniKendaniArr.splice(i, 1);
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