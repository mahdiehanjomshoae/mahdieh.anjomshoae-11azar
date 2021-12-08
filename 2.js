const rectangle={
    tol:6,
    arz:10,
    masahat:function(){
        console.log (this.arz * this.tol)

     },
    centerPoint:function(){
        console.log(this.arz/2)
        console.log(this.tol/2)
     } 

 };
 rectangle.masahat()
 rectangle.centerPoint()
 
