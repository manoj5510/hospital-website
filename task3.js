 // Run this function whenever the user scrolls
    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY; // How far the page is scrolled vertically
        let meno=document.getElementById("cbox")
        let b=document.getElementById("txt1")
        let c=document.getElementById("txt2")
        let d=document.getElementById("txt3");

            
       let f=0;
        let e=500;
        let g=300;
        let h=0;
        // Example: Run some action after scrolling 200px
        
        if (scrollY > 1250 && scrollY <1350 && meno.innerText==0) {
           console.log(f);
           

             let gopal= setInterval(function(){

    
         meno.innerText=f++ 

         

         if(meno.innerText>=0 && meno.innerText<9){

            meno.innerText="0" + f 

            if( meno.innerText==9){

            f=10

         }

         

         }

         else if(meno.innerText==20){
            clearInterval(gopal) ;
            
         }
         
       
         
    },80)


     let child= setInterval(function(){

    
         b.innerText=e++ 

         if(b.innerText>=0 && b.innerText<9){

            b.innerText="0" + e 

            


       

         if( b.innerText==9){

            e=10

         }

         }

         else if(b.innerText==700){
            clearInterval(child) 
         }
    },0)


    let perumal= setInterval(function(){

    
         c.innerText=g++ 

         if(c.innerText>=0 && c.innerText<9){

            c.innerText="0" + g

         if( c.innerText==9){

            g=10

         }

         }

        

         else if(c.innerText==500){
            clearInterval(perumal) 
         }
    },7.5)

     let pattanii= setInterval(function(){

    
         d.innerText=h++ 

      
         if(d.innerText>=0 && d.innerText<9){

            d.innerText="0" + h 

            


         

         if( d.innerText==9){

            h=10

         }

         }
         

         
         else if(d.innerText==12){
            clearInterval(pattanii) 
         }
    },100)
            
        } 
       
        
    });
