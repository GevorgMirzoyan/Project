var LivingCreature = require('./LivingCreature.js');

module.exports = class Solider extends LivingCreature //done
{
    constructor(x, y) 
    {
        super(x, y);
        this.energy = 10;
        this.lvlUpScore = 0;
        this.lvl = 1;
        this.power = 10;
        this.ser = 1;
        this.axorjak = 0;
        this.bazmacox = false;
        this.health = 10;
        this.healthPlusTimer = 0;
        this.energy_zero = false;
    }

    stanalNorKordinatner() 
    {
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

    yntrelVandak(ch) 
    {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }

    sharjvel() //done
    {
        if(this.hivandutyun_mahacu == false)
        {
            var datarkVandakner = this.yntrelVandak(0);
            var norVandak = this.getRandomArr(datarkVandakner);

            if (norVandak) 
            {
                this.lvlUpScore = 0;
                this.axorjak = 0;
                matrix[this.y][this.x] = 0;

                var norx = norVandak[0];
                var nory = norVandak[1];

                matrix[nory][norx] = 11;

                this.x = norx;
                this.y = nory;

                this.energy -= 1;

                if(this.energy <= 0)
                {
                    this.energy_zero = true;
                }
            }

            else
            {
                this.energy -= 1;

                if(this.energy <= 0)
                {
                    this.energy_zero = true;
                }
            }
        }
    }
    
    utel() //done
    {
        if(this.hivandutyun_mahacu == false)
        {
            var mutant = this.yntrelVandak(9);
            var norVandak = this.getRandomArr(mutant);
            
            var xot = this.yntrelVandak(1);
            var norVandak4 = this.getRandomArr(xot);
            
            var xotaker = this.yntrelVandak(2);
            var norVandak2 = this.getRandomArr(xotaker);

            var xotaker2 = this.yntrelVandak(2.5);
            var norVandak3 = this.getRandomArr(xotaker2);
            
            if(norVandak)
            {
                this.axorjak = 0;
                
                var norx = norVandak[0];
                var nory = norVandak[1];
                
                for(var i in mutantArr)
                {
                    if(norx.x == mutantArr[i].x && nory.y == mutantArr[i].y)
                    {
                        var mutant = mutantArr[i];
                        console.log(mutant)
                    }
                }

                mutant.health -= this.power;
                
                if(mutant.mahacox == true)
                {
                    matrix[nory][norx] = 0;

                    this.x = norx;
                    this.y = nory;

                    matrix[nory][norx] = 11;

                    if(this.lvl != 10)
                    {
                        var score = 1;
                        score *= mutant.lvl;
                        this.lvlUpScore += score;
                    }
                    
                    var energy2 = 1;
                    energy2 *= mutant.lvl;
                    this.energy -= energy2;

                    if(this.energy <= 0)
                    {
                        this.energy_zero = true;
                    }
                }

                else if(mutant.mahacox == false)
                {
                    var health2 = 5;
                    health2 *= mutant.lvl;
                    this.health -= health2;
                    
                    if(this.health <= 0)
                    {
                        this.energy_zero = true;
                    }
                }
            }

            else if (norVandak2 || norVandak3) 
            {
                if(this.lvl != 10)
                {
                    this.lvlUpScore += 1;
                }

                var axorjak = 1;
                axorjak *= this.lvl;
                this.axorjak += axorjak;
                
                var energy = 1;
                energy *= this.lvl;
                this.energy += energy;

                matrix[this.y][this.x] = 0;

                if(norVandak2)
                {
                    var norx = norVandak2[0];
                    var nory = norVandak2[1];
                }

                else if(norVandak3)
                {
                    var norx = norVandak3[0];
                    var nory = norVandak3[1];
                }

                this.x = norx;
                this.y = nory;

                matrix[nory][norx] = 11;

                if(this.axorjak >= 30)
                {
                    this.bazmacox = true;
                    this.axorjak = 0;
                    this.bazmanal();
                }
                
                for (var i in xotakerArr) 
                {
                    if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) 
                    {
                        xotakerArr.splice(i, 1);
                    }
                }
            }

            else if (norVandak4) 
            {
                if(this.lvl != 10)
                {
                    this.lvlUpScore += 1;
                }

                var axorjak = 1;
                axorjak *= this.lvl;
                this.axorjak += axorjak;
                
                var energy = 1;
                energy *= this.lvl;
                this.energy += energy;

                matrix[this.y][this.x] = 0;

                var norx = norVandak4[0];
                var nory = norVandak4[1];
                
                this.x = norx;
                this.y = nory;

                matrix[nory][norx] = 11;

                for(var i in grassArr)
                {
                    if(this.x == grassArr[i].x && this.y == grassArr[i].y)
                    {
                        grassArr.splice(i, 1);
                    }
                }

                if(this.axorjak >= 30)
                {
                    this.bazmacox = true;
                    this.axorjak = 0;
                    this.bazmanal();
                }
            }

            else
            {
                this.sharjvel();
            }

            this.lvlChange();
        }
    }

    bazmanal() //done
    {
        if(this.ser == 1 && this.bazmanal_timeout == true && this.hivandutyun_mahacu == false)
        {
            var datarkVandakner = this.yntrelVandak(0);
            var norVandak = this.getRandomArr(datarkVandakner);
            var norVandak3 = this.getRandomArr(datarkVandakner);

            var mard = this.yntrelVandak(4.5);
            var norVandak2 = this.getRandomArr(mard);
        
            if (norVandak2)
            {
                for(var i in mardArr)
                {
                    if(norVandak2[0] == mardArr[i].x && norVandak2[1] == mardArr[i].y)
                    {
                        var mard_igakan = mardArr[i];
                    }
                }

                if(norVandak)
                {
                    this.bazmanal_timeout = false; 

                    if(mard_igakan.bazmacox == false)
                    {
                        var norx = norVandak[0];
                        var nory = norVandak[1];

                        var r = Math.floor(this.getRandomNum(5));
            
                        if(r >= 1)
                        {
                            matrix[nory][norx] = 11;
           
                            var norZinvor = new Solider(norx, nory);
                            soliderArr.push(norZinvor);

                            norZinvorner ++;
                        }
                
                        else
                        {
                            matrix[nory][norx] = 4.5;

                            var norMard = new Mard(norx, nory);
                            mardArr.push(norMard);

                            norMard.ser = 2 ;
                            norMardik ++;
                        }
                    }
                    
                    else if(mard_igakan.bazmacox == true)
                    {
                        mard_igakan.bazmacox = false;

                        var norx = norVandak[0];
                        var nory = norVandak[1];

                        var r = Math.floor(this.getRandomNum(5));
            
                        if(r >= 1)
                        {
                            matrix[nory][norx] = 11;
           
                            var norZinvor = new Solider(norx, nory);
                            soliderArr.push(norZinvor);

                            norZinvorner ++;
                        }
                
                        else
                        {
                            matrix[nory][norx] = 4.5;

                            var norMard = new Mard(norx, nory);
                            mardArr.push(norMard);

                            norMard.ser = 2 ;
                            norMardik ++;
                        }

                        if(norVandak3)
                        {
                            if(norVandak3[0] != norVandak[0] && norVandak3[1] != norVandak[1])
                            {
                                var norx = norVandak3[0];
                                var nory = norVandak3[1];

                                var r2 = Math.floor(this.getRandomNum(5));
                    
                                if(r >= 1)
                                {
                                    matrix[nory][norx] = 11;
                
                                    var norZinvor = new Solider(norx, nory);
                                    soliderArr.push(norZinvor);

                                    norZinvorner ++;
                                }
                        
                                else
                                {
                                    matrix[nory][norx] = 4.5;

                                    var norMard = new Mard(norx, nory);
                                    mardArr.push(norMard);

                                    norMard.ser = 2 ;
                                    norMardik ++;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    timeout() //done
    {
        if(this.bazmanal_timeout == false && this.hivandutyun_mahacu == false)
        {
            this.timeout_time ++;

            var bazmanal_timeout = 0;

            if(weather == 'spring')
            {
                bazmanal_timeout = 10;
            }

            else if(weather == 'summer')
            {
                bazmanal_timeout = 5;
            }

            else if(weather == 'autumn')
            {
                bazmanal_timeout = 15;
            }

            else if(weather == 'winter')
            {
                bazmanal_timeout = 20;
            }

            if(this.timeout_time >= bazmanal_timeout)
            {
                this.timeout_time = 0;
                this.bazmanal_timeout = true;
            }
        }
    }    

    lvlChange() //done
    {
        if(this.lvl != 10)
        {
            if(this.lvl == 1)
            {
                if(this.energy > 10)
                {
                    this.energy = 10;
                }

                if(this.power > 10)
                {
                    this.power = 10;
                }

                if(this.health > 10)
                {
                    this.health = 10;
                }
            }

            if(this.lvlUpScore > 10 && this.lvl == 1) 
            {
                this.lvl = 2;   
                this.lvlUpScore = 0;
                this.energy = 20;
                this.power = 20;
                this.health = 20;

                if(this.energy > 20)
                {
                    this.energy = 20;
                }

                if(this.power > 20)
                {
                    this.power = 20;
                }

                if(this.health > 20)
                {
                    this.health = 20;
                }
            }

            else if(this.lvlUpScore > 10 && this.lvl == 2)
            {
                this.lvl = 3;
                this.lvlUpScore = 0;
                this.energy = 30;
                this.power = 30;
                this.health = 30;

                if(this.energy > 30)
                {
                    this.energy = 30;
                }

                if(this.power > 30)
                {
                    this.power = 30;
                }

                if(this.health > 30)
                {
                    this.health = 30;
                }
            }

            else if(this.lvlUpScore > 10 && this.lvl == 3)
            {
                this.lvl = 4;
                this.lvlUpScore = 0;
                this.energy = 40;
                this.power = 40;
                this.health = 40;

                if(this.energy > 40)
                {
                    this.energy = 40;
                }

                if(this.power > 40)
                {
                    this.power = 40;
                }

                if(this.health > 40)
                {
                    this.health = 40;
                }
            }

            else if(this.lvlUpScore > 10 && this.lvl == 4)
            {
                this.lvl = 5;
                this.lvlUpScore = 0;
                this.energy = 50;
                this.power = 50;
                this.health = 50;

                if(this.energy > 50)
                {
                    this.energy = 50;
                }

                if(this.power > 50)
                {
                    this.power = 50;
                }

                if(this.health > 50)
                {
                    this.health = 50;
                }
            }

            else if(this.lvlUpScore > 20 && this.lvl == 5)
            {
                this.lvl = 6;
                this.lvlUpScore = 0;
                this.energy = 60;
                this.power = 60;
                this.health = 60;

                if(this.energy > 60)
                {
                    this.energy = 60;
                }

                if(this.power > 60)
                {
                    this.power = 60;
                }

                if(this.health > 60)
                {
                    this.health = 60;
                }
            }

            else if(this.lvlUpScore > 20 && this.lvl == 6)
            {
                this.lvl = 7;       
                this.lvlUpScore = 0;
                this.energy = 70;
                this.power = 70;
                this.health = 70;

                if(this.energy > 70)
                {
                    this.energy = 70;
                }

                if(this.power > 70)
                {
                    this.power = 70;
                }

                if(this.health > 70)
                {
                    this.health = 70;
                }
            }

            else if(this.lvlUpScore > 20 && this.lvl == 7)
            {
                this.lvl = 8;
                this.lvlUpScore = 0;
                this.energy = 80;
                this.power = 80;
                this.health = 80;

                if(this.energy > 80)
                {
                    this.energy = 80;
                }

                if(this.power > 80)
                {
                    this.power = 80;
                }

                if(this.health > 80)
                {
                    this.health = 80;
                }
            }

            else if(this.lvlUpScore > 30 && this.lvl == 8)
            {
                this.lvl = 9;
                this.lvlUpScore = 0;
                this.energy = 90;
                this.power = 90;
                this.health = 90;

                if(this.energy > 90)
                {
                    this.energy = 90;
                }

                if(this.power > 90)
                {
                    this.power = 90;
                }

                if(this.health > 90)
                {
                    this.health = 90;
                }
            }

            else if(this.lvlUpScore > 30 && this.lvl == 9)
            {
                this.lvl = 10;
                this.lvlUpScore = 0;
                this.energy = 100;
                this.power = 100;
                this.health = 100;
            }
        }

        else
        {
            if(this.energy > 100)
            {
                this.energy = 100;
            }

            if(this.power > 100)
            {
                this.power = 100;
            }

            if(this.health > 100)
            {
                this.health = 100;
            }
        }
    }

    healthPlus() //done
    {
        this.healthPlusTimer ++

        var timer = 0;

        if(this.lvl <= 5)
        {
            timer =  30;
        }

        else if(this.lvl > 5 && this.lvl <= 9)
        {
            timer =  20;
        }

        else if(this.lvl = 10)
        {
            timer =  10;
        }

        if(this.healthPlusTimer >= timer)
        {
            this.healthPlusTimer = 0;
            this.health += 10;
        }
    }

    hivandutyun() //done
    {
        this.hivandutyun_timeout ++;

        var hivandutyun_repeat = 0;
        var numCount = 0;
        var randomNumCount = 0;

        if(weather == 'spring')
        {
            hivandutyun_repeat = 60;
            numCount = 2000;
            randomNumCount = 150;
        }

        else if(weather == 'summer')
        {
            hivandutyun_repeat = 80;
            numCount = 3000;
            randomNumCount = 100;
        }

        else if(weather == 'autumn')
        {
            hivandutyun_repeat = 40;
            numCount = 1500;
            randomNumCount = 250;
        }

        else if(weather == 'winter')
        {
            hivandutyun_repeat = 30;
            numCount = 1000;
            randomNumCount = 200;
        }
        
        var numArr = [];

        for(var a = 0; a < numCount; a++) //Numbers Array
        {
            var num = a;
            numArr.push(num);
        }

        if(this.hivandutyun_timeout >= hivandutyun_repeat)
        {
            this.hivandutyun_timeout = 0;

            var randomArr = [];
            var bool = false;

            for(var r = 0; r < randomNumCount; r++) //Random Numbers Array
            {
                var rand = Math.round(this.getRandomNum(numCount));
                randomArr.push(rand);
            }
            
            for(var i in randomArr) //Comparison of Arrays
            {
                var b = Math.round(this.getRandomNum(numCount));
                
                if(randomArr[i] == numArr[b])
                {
                    bool = true;
                }
            }
            
            if(bool == true)
            {
                hivandZinvorner ++;
                this.hivandutyun_mahacu = true;
                bool = false;
            }
        }
    }

    mahanal() //done
    {
        if(this.hivandutyun_mahacu == true)
        {
            for(var i in soliderArr)
            {
                if (this.x == soliderArr[i].x && this.y == soliderArr[i].y) 
                {
                    matrix[this.y][this.x] = 8;
                    soliderArr.splice(i, 1);
                }
            }
        }

        else if(this.energy_zero == true)
        {
            for(var i in soliderArr)
            {
                if (this.x == soliderArr[i].x && this.y == soliderArr[i].y) 
                {
                    matrix[this.y][this.x] = 0;
                    soliderArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}