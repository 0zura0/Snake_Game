function Snake() {
    this.x = 0;
    this.y = 0;
    this.Xspeed = 1;
    this.Yspeed = 0;
    this.total = 0;
    this.tail = [];


    this.update = function () {
        if(this.total===this.tail.length){

            for (let i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }
        }
        this.tail[this.total - 1] =createVector(this.x,this.y)

        this.x += this.Xspeed * scl
        this.y += this.Yspeed * scl
        if (this.x % scl !== 0) {
            this.x -= this.x % scl;
        }
        if (this.y % scl !== 0) {
            this.y -= this.y % scl;
        }

        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);

    };

    this.show = function () {
        fill(255);

        for (let i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }

        // if(this.x % scl !==)
        rect(this.x, this.y, scl, scl);
    };

    this.dir = function (x, y) {
        this.Xspeed = x;
        this.Yspeed = y;
    }


    this.eat = function (food) {
        let d = dist(this.x, this.y, food.x, food.y);
        if (d < scl) {
            this.total++;
            return true
        } else {
            return false
        }
    }

    this.death = function (){
    for(let i = 0; i < this.tail.length;i++) {
        let pos = this.tail[i];
        let distance = dist(this.x, this.y, pos.x, pos.y);
        if(distance < 1) {
            this.total =0;
            this.tail = [];
        }
    }
    }
}