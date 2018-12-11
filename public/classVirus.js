var LivingCreature = require('./LivingCreature.js');

module.exports = class Virus extends LivingCreature //done
{
    constructor(x, y) 
    {
        super(x, y);
        this.timer = 0;
    }

    antiVirus() //done
    {
        this.virus_time ++;

        var virus_off = 0;

        if(weather == 'spring')
        {
            virus_off = 10;
        }

        else if(weather == 'summer')
        {
            virus_off = 5;
        }

        else if(weather == 'autumn')
        {
            virus_off = 20;
        }

        else if(weather == 'winter')
        {
            virus_off = 30;
        }

        if(this.virus_time >= virus_off)
        {
            for(var i in virusArr)
            {
                if (this.x == virusArr[i].x && this.y == virusArr[i].y) 
                {
                    matrix[this.y][this.x] = 0;
                    virusArr.splice(i, 1);
                }
            }
        }
    }
}