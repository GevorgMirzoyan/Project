var LivingCreature = require('./LivingCreature.js');

module.exports = class Mutant extends LivingCreature //done
{
    constructor(x, y) 
    {
        super(x, y);
        this.energy = 10;
        this.lvlUpScore = 0;
        this.lvl = 7;
        this.health = 10;
        this.cords = [];
        this.mahacox = false;
        this.healthPlusTimer = 0;
        this.duplicate_timeout = false;
        this.duplicate_score = 0;
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
        ];
    }

    yntrelVandak(ch) 
    {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }

    sharjvel() //done
    {
        if(weather != 'winter')
        {
            var datarkVandakner = this.yntrelVandak(0);
            var norVandak = this.getRandomArr(datarkVandakner);

            var virus = this.yntrelVandak(8);
            var norVandak2 = this.getRandomArr(virus);

            var virus_mutant = this.yntrelVandak(10);
            var norVandak3 = this.getRandomArr(virus_mutant);

            if (norVandak)
            {
                this.duplicate_score = 0;
                this.lvlUpScore = 0;

                if(matrix[this.y][this.x] != 10)
                {
                    matrix[this.y][this.x] = 10;

                    var virus = new Virus(this.x,this.y);
                    virusArr.push(virus);

                    norVirusner ++;
                }

                var norx = norVandak[0];
                var nory = norVandak[1];

                matrix[nory][norx] = 9;

                this.x = norx;
                this.y = nory;

                this.energy -= 1;

                if(this.energy <= 0)
                {
                    this.mahanal();
                }
            }

            else if (norVandak2 || norVandak3)
            {
                this.duplicate_score = 0;
                this.lvlUpScore = 0;
                
                if(matrix[this.y][this.x] != 10)
                {
                    matrix[this.y][this.x] = 10;

                    var virus = new Virus(this.x,this.y);
                    virusArr.push(virus);

                    norVirusner ++;
                }

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
            
                matrix[nory][norx] = 9;

                this.x = norx;
                this.y = nory;

                this.energy -= 1;

                if(this.energy <= 0)
                {
                    this.mahanal();
                }
            }

            else
            {
                this.duplicate_score = 0;
                this.lvlUpScore = 0;
                this.energy -= 1;

                if(this.energy <= 0)
                {
                    this.mahanal();
                }
            }
        }
    }

    mahanal() //done
    {
        for(var i in mutantArr)
        {
            if(this.x == mutantArr[i].x && this.y == mutantArr[i].y) 
            {
                this.mahacox = true;
                matrix[this.y][this.x] = 10;

                var virus = new Virus(this.x,this.y);
                virusArr.push(virus);

                norVirusner ++;
                
                mutantArr.splice(i, 1);
            }

            else if(this.health <= 0)
            {
                this.mahacox = true;

                matrix[this.y][this.x] = 10;

                var virus = new Virus(this.x,this.y);
                virusArr.push(virus);

                norVirusner ++;
                
                mutantArr.splice(i, 1);
            }
        }
    }

    timeout() //done
    {
        if(this.duplicate_timeout == false)
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
                this.duplicate_timeout = true;
            }
        }
    }

    bazmanal() //done
    {
        if(this.duplicate_timeout == true)
        {
            var datarkVandakner = this.yntrelVandak(0);
            var norVandak = this.getRandomArr(datarkVandakner);

            var xot = this.yntrelVandak(1);
            var norVandak2 = this.getRandomArr(xot);

            if(norVandak)
            {
                this.duplicate_timeout = false; 
                
                var norx = norVandak[0];
                var nory = norVandak[1];

                matrix[nory][norx] = 9;

                var norMutant = new Mutant(norx, nory);
                mutantArr.push(norMutant);

                norMutantner ++;
            }
                    
            else if(norVandak2)
            {
                this.duplicate_timeout = false; 
                
                var norx = norVandak2[0];
                var nory = norVandak2[1];

                matrix[nory][norx] = 9;

                var norMutant = new Mutant(norx, nory);
                mutantArr.push(norMutant);

                norMutantner ++;
                norMutant.lvlUpScore ++;

                for(var i in grassArr)
                {
                    if(norx.x == grassArr[i].x && nory.y == grassArr[i].y)
                    {
                        grassArr.splice(i, 1);
                    }
                }
            }
        }
    }

    utel() //done
    {
        if(weather != 'winter')
        {
            var xot = this.yntrelVandak(1);
            var norVandak = this.getRandomArr(xot);

            var xotaker = this.yntrelVandak(2);
            var norVandak2 = this.getRandomArr(xotaker);

            var xotaker2 = this.yntrelVandak(2.5);
            var norVandak3 = this.getRandomArr(xotaker2);

            var gishatich = this.yntrelVandak(3);
            var norVandak4 = this.getRandomArr(gishatich);

            var gishatich2 = this.yntrelVandak(3.5);
            var norVandak5 = this.getRandomArr(gishatich2);

            var mard = this.yntrelVandak(4)
            var norVandak6 = this.getRandomArr(mard);

            var mard2 = this.yntrelVandak(4.5)
            var norVandak7 = this.getRandomArr(mard2);

            var tree = this.yntrelVandak(5);
            var norVandak8 = this.getRandomArr(tree);

            if(norVandak6 || norVandak7)
            {
                this.energy += 1;

                if(this.lvl >= 5)
                {
                    this.duplicate_score ++;                    
                }

                if(this.duplicate_score >= 30)
                {
                    this.duplicate_score = 0;
                    this.bazmanal();
                }

                if(matrix[this.y][this.x] != 10)
                {
                    matrix[this.y][this.x] = 10;

                    var virus = new Virus(this.x,this.y);
                    virusArr.push(virus);

                    norVirusner ++;
                }

                if(this.lvl != 10)
                {
                    this.lvlUpScore += 1;
                }
                
                if(norVandak6)
                {
                    var norx = norVandak6[0];
                    var nory = norVandak6[1];
                }

                else if(norVandak7)
                {
                    var norx = norVandak7[0];
                    var nory = norVandak7[1];
                }

                for (var i in mardArr) 
                {
                    if (this.x == mardArr[i].x && this.y == mardArr[i].y) 
                    {
                        if(this.lvl >= 9)
                        {
                            var mutant = new Mutant(norx, nory);
                            mutantArr.push(mutant);

                            norMutantner ++;
                        }

                        mardArr.splice(i, 1);
                    }
                }
            }

            else if(norVandak4 || norVandak5)
            {
                this.energy += 1;

                if(this.lvl >= 5)
                {
                    this.duplicate_score ++;                    
                }

                if(this.duplicate_score >= 30)
                {
                    this.duplicate_score = 0;
                    this.bazmanal();
                }

                if(matrix[this.y][this.x] != 10)
                {
                    matrix[this.y][this.x] = 10;

                    var virus = new Virus(this.x,this.y);
                    virusArr.push(virus);

                    norVirusner ++;
                }
                
                if(this.lvl != 10)
                {
                    this.lvlUpScore += 1;
                }
                
                if(norVandak4)
                {
                    var norx = norVandak4[0];
                    var nory = norVandak4[1];
                }

                else if(norVandak5)
                {
                    var norx = norVandak5[0];
                    var nory = norVandak5[1];
                }

                for (var i in gishatichArr) 
                {
                    if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) 
                    {
                        if(this.lvl >= 9)
                        {
                            var mutant = new Mutant(norx, nory);
                            mutantArr.push(mutant);

                            norMutantner ++;
                        }

                        gishatichArr.splice(i, 1);
                    }
                }
            }

            else if(norVandak2 || norVandak3)
            {
                this.energy += 1;

                if(this.lvl >= 5)
                {
                    this.duplicate_score ++;                    
                }

                if(this.duplicate_score >= 30)
                {
                    this.duplicate_score = 0;
                    this.bazmanal();
                }

                if(matrix[this.y][this.x] != 10)
                {
                    matrix[this.y][this.x] = 10;

                    var virus = new Virus(this.x,this.y);
                    virusArr.push(virus);

                    norVirusner ++;
                }

                if(this.lvl != 10)
                {
                    this.lvlUpScore += 1;
                }
                
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

                for (var i in xotakerArr) 
                {
                    if (norx == xotakerArr[i].x && nory == xotakerArr[i].y) 
                    {
                        if(this.lvl >= 9)
                        {
                            var mutant = new Mutant(norx, nory);
                            mutantArr.push(mutant);

                            norMutantner ++;
                        }

                        xotakerArr.splice(i, 1);
                    }
                }
            }

            else if(norVandak)
            {
                this.energy += 1;

                if(this.lvl >= 5)
                {
                    this.duplicate_score ++;                    
                }

                if(this.duplicate_score >= 30)
                {
                    this.duplicate_score = 0;
                    this.bazmanal();
                }

                if(matrix[this.y][this.x] != 10)
                {
                    matrix[this.y][this.x] = 10;

                    var virus = new Virus(this.x,this.y);
                    virusArr.push(virus);

                    norVirusner ++;
                }

                if(this.lvl != 10)
                {
                    this.lvlUpScore += 1;
                }
                
                var norx = norVandak[0];
                var nory = norVandak[1];

                matrix[nory][norx] = 9;

                this.x = norx;
                this.y = nory;

                for (var i in grassArr) 
                {
                    if (this.x == grassArr[i].x && this.y == grassArr[i].y) 
                    {
                        grassArr.splice(i, 1);
                    }
                }
            }

            else if(norVandak8)
            {
                this.energy += 1;

                if(this.lvl >= 5)
                {
                    this.duplicate_score ++;
                }

                if(this.duplicate_score >= 30)
                {
                    this.duplicate_score = 0;
                    this.bazmanal();
                }

                if(matrix[this.y][this.x] != 10)
                {
                    matrix[this.y][this.x] = 10;

                    var virus = new Virus(this.x,this.y);
                    virusArr.push(virus);

                    norVirusner ++;
                }

                if(this.lvl != 10)
                {
                    this.lvlUpScore += 1;
                }

                var norx = norVandak8[0];
                var nory = norVandak8[1]; 

                matrix[nory][norx] = 9;

                this.x = norx;
                this.y = nory;

                for (var i in treeArr) 
                {
                    if (this.x == treeArr[i].x && this.y == treeArr[i].y) 
                    {
                        treeArr.splice(i, 1);
                    }
                }
            }

            else
            {
                this.sharjvel();
            }

            this.lvlChange();
        }
    }

    lvlChange() //done
    {
        if(weather != 'winter')
        {
            if(this.lvl != 10)
            {
                if(this.lvl == 1)
                {
                    if(this.energy > 10)
                    {
                        this.energy = 10;
                    }

                    if(this.health > 10)
                    {
                        this.energy = 10;
                    }
                }

                if(this.lvlUpScore > 10 && this.lvl == 1) 
                {
                    this.lvl = 2;   
                    this.lvlUpScore = 0;
                    this.energy = 20;
                    this.health = 20;

                    if(this.energy > 20)
                    {
                        this.energy = 20;
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
                    this.health = 30;

                    if(this.energy > 30)
                    {
                        this.energy = 30;
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
                    this.health = 40;

                    if(this.energy > 40)
                    {
                        this.energy = 40;
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
                    this.health = 50;

                    if(this.energy > 50)
                    {
                        this.energy = 50;
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
                    this.health = 60;

                    if(this.energy > 60)
                    {
                        this.energy = 60;
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
                    this.health = 70;

                    if(this.energy > 70)
                    {
                        this.energy = 70;
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
                    this.health = 80;

                    if(this.energy > 80)
                    {
                        this.energy = 80;
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
                    this.health = 90;

                    if(this.energy > 90)
                    {
                        this.energy = 90;
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
                    this.health = 100;
                }
            }

            else
            {
                if(this.energy > 100)
                {
                    this.energy = 100;
                }

                if(this.health > 100)
                {
                    this.health = 100;
                }
            }
        }
    }

    healthPlus() //done
    {
        if(weather != 'winter')
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
    }
}