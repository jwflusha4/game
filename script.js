const canvas = document.getElementById('laptop');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
function Circle(a,b,r,co){
    this.a = a;
    this.b = b;
    this.r = r;
    this.co = co;
    this.da = 4;
    this.da *= Math.floor(Math.random()*2)==1 ? 1 : -1;
    this.db = 4;
    this.db *= Math.floor(Math.random()*2)==1 ? 1 : -1;
    this.drawc = function(){
        ctx.beginPath();
        ctx.fillStyle = this.co;
        ctx.arc(this.a,this.b,this.r,0,Math.PI *2);
        ctx.fill();
    }
    this.animate = function(){
        this.a += this.da;
        this.b += this.db;
        console.log(this.b);
        if(this.b == (rec.y - this.r)){
            var len = this.a - rec.x;
            if(len >= 0 && len<=rec.w){
            
                this.db = -this.db;
            }
        }
        else{
            if(this.a + this.r > canvas.width || this.a-this.r< 0){
                this.da = -this.da;
            }
            if(this.b-this.r< 0){
               this.db = -this.db;
           }
        }  
        this.drawc();   
    }
    this.calchyp = function(x1,y1,x2,y2){
        let side1 = x2-x1;
        let side2 = y2-y1;
        return Math.sqrt(Math.pow(side1,2)+Math.pow(side2,2));
    }  
}
function Rectangle(x,y,w,h,c){
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.c=c;
    this.dx =2;
    this.draw = function (){
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.rect(this.x,this.y,this.w,this.h);
        ctx.fill();
    }   
}
let rec = new Rectangle(600,750,300,100,'brown');
let cir = new Circle(450,390,60,'orange');
document.addEventListener('keydown', function(event) {
    //left
    if(event.keyCode == 37) {
        rec.x -= 20;
        rec.draw();
        cir.animate();
    }
    //top
    /*else if(event.keyCode == 38) {
        rec.y -= 4;
        rec.draw();
    }*/
    //right
    else if(event.keyCode == 39) {
        rec.x += 20;
        rec.draw();
        cir.animate();
    }
    /*//bottom
    else if(event.keyCode == 40) {
        rec.y += 4;
        rec.draw();
    }*/
    if(rec.x + rec.w > canvas.width){
        rec.x = canvas.width - rec.w;
        rec.draw();
        cir.animate();
    }
    if(rec.x < 0){
        rec.x = 0;
        rec.draw();
        cir.animate();
    }
});
function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    requestAnimationFrame(update);
    rec.draw();
    cir.animate();
}
update();
