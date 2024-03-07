 let a = 0;
 mbtn.onclick =()=>{
    if(a == 0){
        a = 1;
        nav.style.height = "500px";
        head.style.height = "1471px";
//  1471
    }
    else{
        nav.style.height = "80px";
        head.style.height = "1100px";

        a = 0;
        // 1100
    }
 }