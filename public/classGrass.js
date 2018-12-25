var LivingCreature = require('./LivingCreature.js');

module.exports = class Grass extends LivingCreature //done
{
    constructor(x, y, hivandutyun_timeout, hivandutyun_mahacu) {
        super(x, y, hivandutyun_timeout, hivandutyun_mahacu);
        this.multiply_bazmanal = 0;
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
        ];
    }

    yntrelVandak(ch) {
        if (this.hivandutyun_mahacu == false) {
            this.stanalNorKordinatner();
            return super.yntrelVandak(ch);
        }
    }

    bazmanal() //done
    {
        if (this.hivandutyun_mahacu == false && weather != 'winter') {
            this.multiply_bazmanal++;

            var datarkVandakner = this.yntrelVandak(0);
            var norVandak = this.getRandomArr(datarkVandakner);

            var bazmanal_timeout = 0;

            if (weather == 'spring') {
                bazmanal_timeout = 3;
            }

            else if (weather == 'summer') {
                bazmanal_timeout = 1;
            }

            else if (weather == 'autumn') {
                bazmanal_timeout = 10;
            }

            if (norVandak && this.multiply_bazmanal >= bazmanal_timeout) {
                this.multiply_bazmanal = 0;
                var norx = norVandak[0];
                var nory = norVandak[1];

                matrix[nory][norx] = 1;

                var norXot = new Grass(norx, nory);
                grassArr.push(norXot);

                norXoter++;
            }
        }
    }

    mahanal() //done
    {
        if (this.hivandutyun_mahacu == true) {
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    matrix[this.y][this.x] = 8;
                    grassArr.splice(i, 1);
                }
            }
        }
    }
}