class Ground {


    constructor(x,y,w,h) {

        let options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        //w/hs
        this.w = w
        this.h = h

        World.add(world,this.body);



    }

    display () {
        
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
        
    }
    


 }