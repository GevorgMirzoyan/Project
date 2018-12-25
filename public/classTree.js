var LivingCreature = require('./LivingCreature.js');

module.exports = class Tree extends LivingCreature //done
{
    constructor(x, y, hivandutyun_timeout, hivandutyun_mahacu) {
        super(x, y, hivandutyun_timeout, hivandutyun_mahacu);
        this.multiply = 0;
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
            this.multiply++;

            var datarkVandakner = this.yntrelVandak(0);
            var norVandak = this.getRandomArr(datarkVandakner);

            var bazmanal_timeout = 0;

            if (weather == 'spring') {
                bazmanal_timeout = 10;
            }

            else if (weather == 'summer') {
                bazmanal_timeout = 5;
            }

            else if (weather == 'autumn') {
                bazmanal_timeout = 20;
            }

            if (norVandak && this.multiply >= bazmanal_timeout) {
                this.multiply = 0;

                var norx = norVandak[0];
                var nory = norVandak[1];
                matrix[nory][norx] = 5;

                var newTree = new Tree(norx, nory);
                treeArr.push(newTree);

                norTsarer++;
            }
        }
    }

    mahanal() //done
    {
        if (this.hivandutyun_mahacu == true) {
            for (var i in treeArr) {
                if (this.x == treeArr[i].x && this.y == treeArr[i].y) {
                    matrix[this.y][this.x] = 8;
                    treeArr.splice(i, 1);
                }
            }
        }
    }
}