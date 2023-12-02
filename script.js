let div = document.querySelector("div");    //selected by element
let btn = document.querySelector("button"); //selected by element

flag =0;
btn.addEventListener("click", function(){
    if (flag==0){
        div.style.backgroundColor = "yellow";
        console.log("on")
        flag=1;
    }
    else{
        div.style.backgroundColor = "transparent";
        console.log("off")
        flag=0;
    }
    

})