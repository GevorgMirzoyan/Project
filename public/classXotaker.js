var LivingCreature = require('./LivingCreature.js');

module.exports = class Xotaker extends LivingCreature //done
{
    constructor(x, y) 
    {
        super(x, y)
        this.energy = 8;
        this.axorjak = 0;
        this.ser = 0;
        this.bazmacox = false;
        this.timeout_time = 0;
        this.bazmanal_timeout = true;
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
            [this.x + 2, this.y + 2]
        ];
    }

    yntrelVandak(ch) 
    {
        if(this.hivandutyun_mahacu == false)
        {
            this.stanalNorKordinatner();
            return super.yntrelVandak(ch);
        }
    }

    sharjvel() //done
    {
        if(this.hivandutyun_mahacu == false)
        {
            var datarkVandakner = this.yntrelVandak(0);
            var norVandak = this.getRandomArr(datarkVandakner);

            if (norVandak) 
            {
                this.axorjak = 0;
                matrix[this.y][this.x] = 0;
                var norx = norVandak[0];
                var nory = norVandak[1];

                if(this.ser == 1)
                {
                    matrix[nory][norx] = 2;
                }

                else
                {
                    matrix[nory][norx] = 2.5;
                }

                this.x = norx;
                this.y = nory;

                this.energy -= 1;

                if(this.energy <= 0)
                {
                    this.energy_zero = true;
                    this.mahanal();
                }
            }

            else
            {
                this.energy -= 1;

                if(this.energy <= 0)
                {
                    this.energy_zero = true;
                    this.mahanal();
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

    bazmanal() //done
    {
        if(this.bazmanal_timeout == true && this.hivandutyun_mahacu == false)
        {
            var datarkVandakner = this.yntrelVandak(0);
            var norVandak = this.getRandomArr(datarkVandakner);
            var norVandak3 = this.getRandomArr(datarkVandakner);

            var xot = this.yntrelVandak(1);
            var norVandak4 = this.getRandomArr(xot);
            var norVandak5 = this.getRandomArr(xot);
        
            var xotaker = this.yntrelVandak(2.5);
            var norVandak2 = this.getRandomArr(xotaker);
        
            if (norVandak2)
            {
                for(var i in xotakerArr)
                {
                    if(norVandak2[0] == xotakerArr[i].x && norVandak2[1] == xotakerArr[i].y)
                    {
                        var xotaker_igakan = xotakerArr[i];
                    }
                }

                if(norVandak)
                {
                    this.bazmanal_timeout = false; 

                    if(xotaker_igakan.bazmacox == false)
                    {
                        var norx = norVandak[0];
                        var nory = norVandak[1];

                        var r = Math.floor(this.getRandomNum(5));
            
                        if(r >= 1)
                        {
                            matrix[nory][norx] = 2;
                        }
                
                        else
                        {
                            matrix[nory][norx] = 2.5;
                        }
                
                        var norXotaker = new Xotaker(norx, nory);
                        xotakerArr.push(norXotaker);
                
                        norXotakerner ++;

                        if(matrix[nory][norx] == 2)
                        {
                            norXotaker.ser = 1;
                        }
                
                        else
                        {
                            norXotaker.ser = 2 ;
                        }
                    }
                    
                    else if(xotaker_igakan.bazmacox == true)
                    {
                        xotaker_igakan.bazmacox = false;
                        
                        var norx = norVandak[0];
                        var nory = norVandak[1];

                        var r = Math.floor(this.getRandomNum(5));
            
                        if(r >= 1)
                        {
                            matrix[nory][norx] = 2;
                        }
                
                        else
                        {
                            matrix[nory][norx] = 2.5;
                        }
                
                        var norXotaker = new Xotaker(norx, nory);
                        xotakerArr.push(norXotaker);

                        norXotakerner ++;
                
                        if(matrix[nory][norx] == 2)
                        {
                            norXotaker.ser = 1;
                        }
                
                        else
                        {
                            norXotaker.ser = 2 ;
                        }

                        if(norVandak3)
                        {
                            if(norVandak3[0] != norVandak[0] && norVandak3[1] != norVandak[1])
                            {
                                var norx = norVandak3[0];
                                var nory = norVandak3[1];

                                var r2 = Math.floor(this.getRandomNum(5));
                    
                                if(r2 >= 1)
                                {
                                    matrix[nory][norx] = 2;
                                }
                        
                                else
                                {
                                    matrix[nory][norx] = 2.5;
                                }
                        
                                var norXotaker2 = new Xotaker(norx, nory);
                                xotakerArr.push(norXotaker2);

                                norXotakerner ++;
                        
                                if(matrix[nory][norx] == 2)
                                {
                                    norXotaker2.ser = 1;
                                }
                        
                                else
                                {
                                    norXotaker2.ser = 2 ;
                                }
                            }
                        }
                    }
                }

                else if(norVandak4)
                {
                    this.bazmanal_timeout = false; 

                    if(xotaker_igakan.bazmacox == false)
                    {  
                        var norx = norVandak4[0];
                        var nory = norVandak4[1];

                        var r = Math.floor(this.getRandomNum(5));
            
                        if(r >= 1)
                        {
                            matrix[nory][norx] = 2;
                        }
                
                        else
                        {
                            matrix[nory][norx] = 2.5;
                        }
                
                        var norXotaker = new Xotaker(norx, nory);                       
                        xotakerArr.push(norXotaker);
                
                        norXotakerner ++;

                        if(matrix[nory][norx] == 2)
                        {
                            norXotaker.ser = 1;
                        }
                
                        else
                        {
                            norXotaker.ser = 2 ;
                        }
                        
                        for(var i in grassArr)
                        {
                            if(norXotaker.x == grassArr[i].x && norXotaker.y == grassArr[i].y)
                            {
                                grassArr.splice(i, 1);
                                norXotaker.axorjak += 1;
                            }
                        }
                    }
                    
                    else if(xotaker_igakan.bazmacox == true)
                    {
                        xotaker_igakan.bazmacox = false;
                       
                        var norx = norVandak4[0];
                        var nory = norVandak4[1];

                        var r = Math.floor(this.getRandomNum(5));
            
                        if(r >= 1)
                        {
                            matrix[nory][norx] = 2;
                        }
                
                        else
                        {
                            matrix[nory][norx] = 2.5;
                        }
                
                        var norXotaker = new Xotaker(norx, nory);
                        xotakerArr.push(norXotaker);

                        norXotakerner ++;
                
                        if(matrix[nory][norx] == 2)
                        {
                            norXotaker.ser = 1;
                        }
                
                        else
                        {
                            norXotaker.ser = 2 ;
                        }

                        for(var i in grassArr)
                        {
                            if(norXotaker.x == grassArr[i].x && norXotaker.y == grassArr[i].y)
                            {
                                grassArr.splice(i, 1);
                                norXotaker.axorjak += 1;
                            }
                        }

                        if(norVandak5)
                        {
                            if(norVandak4[0] != norVandak5[0] && norVandak4[1] != norVandak5[1])
                            {
                                var norx = norVandak5[0];
                                var nory = norVandak5[1];

                                var r2 = Math.floor(this.getRandomNum(5));
                    
                                if(r2 >= 1)
                                {
                                    matrix[nory][norx] = 2;
                                }
                        
                                else
                                {
                                    matrix[nory][norx] = 2.5;
                                }
                        
                                var norXotaker2 = new Xotaker(norx, nory);
                                xotakerArr.push(norXotaker2);

                                norXotakerner ++;
                        
                                if(matrix[nory][norx] == 2)
                                {
                                    norXotaker2.ser = 1;
                                }
                        
                                else
                                {
                                    norXotaker2.ser = 2 ;
                                }

                                for(var i in grassArr)
                                {
                                    if(norXotaker2.x == grassArr[i].x && norXotaker2.y == grassArr[i].y)
                                    {
                                        grassArr.splice(i, 1);
                                        norXotaker2.axorjak += 1;
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
        if(this.hivandutyun_mahacu == false)
        {
            var xoter = this.yntrelVandak(1);
            var norVandak = this.getRandomArr(xoter);

            if (norVandak) 
            {
                this.axorjak += 1;

                var score_plus = 0;

                if(weather == 'spring')
                {
                    score_plus = 2;
                }

                else if(weather == 'summer')
                {
                    score_plus = 3;
                }

                else if(weather == 'autumn')
                {
                    score_plus = 1;
                }

                else if(weather == 'winter')
                {
                    score_plus = 0.5;
                }

                this.energy += score_plus;

                matrix[this.y][this.x] = 0;
                var norx = norVandak[0];
                var nory = norVandak[1];

                if(this.ser == 1)
                {
                    matrix[nory][norx] = 2;
                }

                else
                {
                    matrix[nory][norx] = 2.5;
                }

                this.x = norx;
                this.y = nory;

                if (this.energy > 15) 
                {
                    this.energy = 15;
                }

                for (var i in grassArr) 
                {
                    if (this.x == grassArr[i].x && this.y == grassArr[i].y) 
                    {
                        grassArr.splice(i, 1);
                    }
                }

                if(this.axorjak >= 5 && this.ser == 1)
                {
                    this.bazmacox = true;
                    this.axorjak = 0;
                    this.bazmanal();
                }

                else if(this.axorjak >= 5 && this.ser == 2)
                {
                    this.bazmacox = true;
                    this.axorjak = 0;           
                }
            }

            else 
            {
                this.sharjvel();
            }
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
            numCount = 2500;
            randomNumCount = 75;
        }

        else if(weather == 'summer')
        {
            hivandutyun_repeat = 80;
            numCount = 3000;
            randomNumCount = 50;
        }

        else if(weather == 'autumn')
        {
            hivandutyun_repeat = 40;
            numCount = 1500;
            randomNumCount = 150;
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
                hivandXotakerner ++;
                this.hivandutyun_mahacu = true;
                bool = false;
                this.mahanal();
            }
        }
    }

    mahanal() //done
    {
        if(this.hivandutyun_mahacu == true)
        {
            for(var i in xotakerArr)
            {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) 
                {
                    matrix[this.y][this.x] = 8;
                    xotakerArr.splice(i, 1);
                }
            }
        }

        else if(this.energy_zero == true)
        {
            for(var i in xotakerArr)
            {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) 
                {
                    matrix[this.y][this.x] = 0;
                    xotakerArr.splice(i, 1);
                }
            }
        }
    }
}