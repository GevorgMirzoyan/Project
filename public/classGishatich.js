module.exports = class Gishatich extends global.Class10 //done
{
    constructor(x, y) 
    {
        super(x, y)
        this.yntaniKendani = false;
        this.energy = 25;
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
        if(this.hivandutyun_mahacu == false && weather != 'winter')
        {
            var datarkVandakner = this.yntrelVandak(0);
            var norVandak = this.getRandomArr(datarkVandakner);

            var xot = this.yntrelVandak(1);
            var norVandak2 = this.getRandomArr(xot);

            this.axorjak = 0;

            if (norVandak) 
            {
                matrix[this.y][this.x] = 0;
                var norx = norVandak[0];
                var nory = norVandak[1];

                if(this.ser == 1)
                {
                    matrix[nory][norx] = 3;
                }

                else
                {
                    matrix[nory][norx] = 3.5;
                }

                this.x = norx;
                this.y = nory;

                this.energy -= 1;

                if(this.energy <= 0)
                {
                    this.energy_zero = true;
                }
            }

            else if (norVandak2) 
            {
                for (var i in grassArr) 
                {
                    if (this.x == grassArr[i].x && this.y == grassArr[i].y) 
                    {
                        grassArr.splice(i, 1);
                    }
                }

                matrix[this.y][this.x] = 0;
                
                var norx = norVandak2[0];
                var nory = norVandak2[1];

                this.x = norx;
                this.y = nory;

                if(this.ser == 1)
                {
                    matrix[nory][norx] = 3;
                }

                else
                {
                    matrix[nory][norx] = 3.5;
                }

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

    timeout() //done
    {
        if(this.bazmanal_timeout == false && this.hivandutyun_mahacu == false && weather != 'winter')
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
        if(this.ser == 1 && this.bazmanal_timeout == true && this.hivandutyun_mahacu == false && weather != 'winter')
        {
            var datarkVandakner = this.yntrelVandak(0);
            var norVandak = this.getRandomArr(datarkVandakner);
            var norVandak3 = this.getRandomArr(datarkVandakner);

            var xotaker = this.yntrelVandak(2);
            var norVandak4 = this.getRandomArr(xotaker);
            var norVandak5 = this.getRandomArr(xotaker);

            var gishatich = this.yntrelVandak(3.5);
            var norVandak2 = this.getRandomArr(gishatich);
        
            if (norVandak2)
            {
                for(var i in gishatichArr)
                {
                    if(norVandak2[0] == gishatichArr[i].x && norVandak2[1] == gishatichArr[i].y)
                    {
                        var gishatich_igakan = gishatichArr[i];
                    }
                }

                if(norVandak)
                {
                    this.bazmanal_timeout = false; 

                    if(gishatich_igakan.bazmacox == false)
                    {
                        var norx = norVandak[0];
                        var nory = norVandak[1];

                        var r = Math.floor(this.getRandomNum(5));
            
                        if(r >= 1)
                        {
                            matrix[nory][norx] = 3;
                        }
                
                        else
                        {
                            matrix[nory][norx] = 3.5;
                        }
                
                        var norGishatich = new Gishatich(norx, nory);
                        gishatichArr.push(norGishatich);

                        norGishatichner ++;
                
                        if(matrix[nory][norx] == 3)
                        {
                            norGishatich.ser = 1;
                        }
                
                        else
                        {
                            norGishatich.ser = 2 ;
                        }
                    }
                    
                    else if(gishatich_igakan.bazmacox == true)
                    {
                        gishatich_igakan.bazmacox = false;

                        var norx = norVandak[0];
                        var nory = norVandak[1];

                        var r = Math.floor(this.getRandomNum(5));
            
                        if(r >= 1)
                        {
                            matrix[nory][norx] = 3;
                        }
                
                        else
                        {
                            matrix[nory][norx] = 3.5;
                        }
                
                        var norGishatich = new Gishatich(norx, nory);
                        gishatichArr.push(norGishatich);

                        norGishatichner ++;
                
                        if(matrix[nory][norx] == 3)
                        {
                            norGishatich.ser = 1;
                        }
                
                        else
                        {
                            norGishatich.ser = 2 ;
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
                                    matrix[nory][norx] = 3;
                                }
                        
                                else
                                {
                                    matrix[nory][norx] = 3.5;
                                }
                        
                                var norGishatich2 = new Gishatich(norx, nory);
                                gishatichArr.push(norGishatich2);

                                norGishatichner ++;
                        
                                if(matrix[nory][norx] == 3)
                                {
                                    norGishatich2.ser = 1;
                                }
                        
                                else
                                {
                                    norGishatich2.ser = 2 ;
                                }
                            }
                        }
                    }
                }

                if(norVandak4)
                {
                    this.bazmanal_timeout = false; 

                    if(gishatich_igakan.bazmacox == false)
                    {
                        var norx = norVandak4[0];
                        var nory = norVandak4[1];

                        var r = Math.floor(this.getRandomNum(5));
            
                        if(r >= 1)
                        {
                            matrix[nory][norx] = 3;
                        }
                
                        else
                        {
                            matrix[nory][norx] = 3.5;
                        }
                
                        var norGishatich = new Gishatich(norx, nory);                       
                        gishatichArr.push(norGishatich);

                        norGishatichner ++;
                
                        if(matrix[nory][norx] == 3)
                        {
                            norGishatich.ser = 1;
                        }
                
                        else
                        {
                            norGishatich.ser = 2 ;
                        }
                        
                        for(var i in xotakerArr)
                        {
                            if(norGishatich.x == xotakerArr[i].x && norGishatich.y == xotakerArr[i].y)
                            {
                                xotakerArr.splice(i, 1);
                                norGishatich.axorjak += 1;
                            }
                        }
                    }
                    
                    else if(gishatich_igakan.bazmacox == true)
                    {
                        gishatich_igakan.bazmacox = false;

                        var norx = norVandak4[0];
                        var nory = norVandak4[1];

                        var r = Math.floor(this.getRandomNum(5));
            
                        if(r >= 1)
                        {
                            matrix[nory][norx] = 3;
                        }
                
                        else
                        {
                            matrix[nory][norx] = 3.5;
                        }
                
                        var norGishatich = new Gishatich(norx, nory);
                        gishatichArr.push(norGishatich);

                        norGishatichner ++;
                
                        if(matrix[nory][norx] == 3)
                        {
                            norGishatich.ser = 1;
                        }
                
                        else
                        {
                            norGishatich.ser = 2 ;
                        }

                        for(var i in xotakerArr)
                        {
                            if(norGishatich.x == xotakerArr[i].x && norGishatich.y == xotakerArr[i].y)
                            {
                                xotakerArr.splice(i, 1);
                                norGishatich.axorjak += 1;
                            }
                        }

                        if(norVandak4)
                        {
                            if(norVandak4[0] != norVandak5[0] && norVandak4[1] != norVandak5[1])
                            {
                                var norx = norVandak5[0];
                                var nory = norVandak5[1];

                                var r2 = Math.floor(this.getRandomNum(5));
                    
                                if(r2 >= 1)
                                {
                                    matrix[nory][norx] = 3;
                                }
                        
                                else
                                {
                                    matrix[nory][norx] = 3.5;
                                }
                        
                                var norGishatich2 = new Xotaker(norx, nory);
                                gishatichArr.push(norGishatich2);
                            
                                norGishatichner ++;
                        
                                if(matrix[nory][norx] == 3)
                                {
                                    norGishatich2.ser = 1;
                                }
                        
                                else
                                {
                                    norGishatich2.ser = 2 ;
                                }

                                for(var i in xotakerArr)
                                {
                                    if(norGishatich2.x == xotakerArr[i].x && norGishatich2.y == xotakerArr[i].y)
                                    {
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
        if(this.hivandutyun_mahacu == false && weather != 'winter')
        {
            if(this.yntaniKendani == false)
            {
                var xotaker = this.yntrelVandak(2);
                var norVandak = this.getRandomArr(xotaker);

                var xotaker2 = this.yntrelVandak(2.5);
                var norVandak3 = this.getRandomArr(xotaker2);

                var mard = this.yntrelVandak(4.5);
                var norVandak2 = this.getRandomArr(mard);

                if (norVandak || norVandak3) 
                {
                    this.axorjak += 1;
                    this.energy += 2;

                    matrix[this.y][this.x] = 0;

                    if(norVandak)
                    {
                        var norx = norVandak[0];
                        var nory = norVandak[1];
                    }

                    else if (norVandak3)
                    {
                        var norx = norVandak3[0];
                        var nory = norVandak3[1];
                    }

                    if(this.ser == 1)
                    {
                        matrix[nory][norx] = 3;
                    }

                    else
                    {
                        matrix[nory][norx] = 3.5;
                    }

                    this.x = norx;
                    this.y = nory;

                    if (this.energy > 25) 
                    {
                        this.energy = 25;
                    }

                    for (var i in xotakerArr) 
                    {
                        if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) 
                        {
                            xotakerArr.splice(i, 1);
                        }
                    }

                    if(this.axorjak >= 7 && this.ser == 1)
                    {
                        this.bazmacox = true;
                        this.axorjak = 0;
                        this.bazmanal();
                    }

                    else if(this.axorjak >= 7 && this.ser == 2)
                    {
                        this.bazmacox = true;
                        this.axorjak = 0;           
                    }
                }

                else if (norVandak2) 
                {
                    this.axorjak += 1;
                    this.energy += 3;

                    matrix[this.y][this.x] = 0;
                    var norx = norVandak2[0];
                    var nory = norVandak2[1];

                    if(this.ser == 1)
                    {
                        matrix[nory][norx] = 3;
                    }

                    else
                    {
                        matrix[nory][norx] = 3.5;
                    }

                    this.x = norx;
                    this.y = nory;

                    if (this.energy > 25) 
                    {
                        this.energy = 25;
                    }

                    for (var i in mardArr) 
                    {
                        if (this.x == mardArr[i].x && this.y == mardArr[i].y) 
                        {
                            mardArr.splice(i, 1);
                        }
                    }

                    if(this.axorjak >= 7 && this.ser == 1)
                    {
                        this.bazmacox = true;
                        this.axorjak = 0;
                        this.bazmanal();
                    }

                    else if(this.axorjak >= 7 && this.ser == 2)
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

            else if(this.yntaniKendani == true)
            {
                var xotaker = this.yntrelVandak(2);
                var norVandak = this.getRandomArr(xotaker);

                var xotaker2 = this.yntrelVandak(2.5);
                var norVandak2 = this.getRandomArr(xotaker2);

                if (norVandak || norVandak2) 
                {
                    this.axorjak += 1;
                    this.energy += 2;

                    matrix[this.y][this.x] = 0;

                    if(norVandak)
                    {
                        var norx = norVandak[0];
                        var nory = norVandak[1];
                    }

                    else if(norVandak2)
                    {
                        var norx = norVandak2[0];
                        var nory = norVandak2[1];
                    }
                    
                    if(this.ser == 1)
                    {
                        matrix[nory][norx] = 3;
                    }

                    else
                    {
                        matrix[nory][norx] = 3.5;
                    }

                    this.x = norx;
                    this.y = nory;

                    if (this.energy > 25) 
                    {
                        this.energy = 25;
                    }

                    for (var i in xotakerArr) 
                    {
                        if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y)
                        {
                            xotakerArr.splice(i, 1);
                        }
                    }

                    if(this.axorjak >= 7 && this.ser == 1)
                    {
                        this.bazmacox = true;
                        this.axorjak = 0;
                        this.bazmanal();
                    }

                    else if(this.axorjak >= 7 && this.ser == 2)
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
                hivandGishatichner ++;
                this.hivandutyun_mahacu = true;
                bool = false;
            }
        }
    }

    mahanal() //done
    {
        if(this.hivandutyun_mahacu == true)
        {
            for(var i in gishatichArr)
            {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) 
                {
                    matrix[this.y][this.x] = 8;
                    gishatichArr.splice(i, 1);
                }
            }
        }

        else if(this.energy_zero == true)
        {
            for(var i in gishatichArr)
            {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) 
                {
                    matrix[this.y][this.x] = 0;
                    gishatichArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}