module.exports = class LivingCreature //done
{
    constructor(x, y) //done
    {
        this.x = x;
        this.y = y;
        this.hivandutyun_timeout = 0;
        this.hivandutyun_mahacu = false;
        this.virus_time = 0;
    }

    yntrelVandak(ch) //done
    {
        var found = [];

        for (var i in this.directions)
        {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) 
            {
                if (matrix[y][x] == ch) 
                {
                    found.push(this.directions[i]);
                }
            }
        }

        return found;
    }

    getRandomArr(array) //done
    {
        var random = Math.round(Math.random() * array.length);
        var object = array[random];

        return object;
    }

    getRandomNum(max) //done
    {
        var r = Math.round(Math.random() * (max - 0 + 1)) + 0;

        return r;
    }
}