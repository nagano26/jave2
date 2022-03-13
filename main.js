
let display=document.getElementById("display");
let target_val
let operator=["+","-","*","/","."]
console.log(operator.includes("display"))

function clickbutton(target){
    target_val=target.innerHTML
    
    if(target_val =="AC"){
        display.innerHTML="0"
    }else if(target_val =="="){
        display.innerHTML=eval(display.innerHTML)
    }else{
        if(display.innerHTML == "0"){
            display.innerHTML = target_val
        }else if(operator.includes(display.innerHTML.slice(-1)) == true){
            display.innerHTML
        }else{
            display.innerHTML += target_val
        }
    }

}
    





        
        // if(display.innerHTML.slice(-1) === "+"){
        // return;
        // }else{
        //     display.innerHTML += target_val
        // }
        
    


// function clickbutton(target){
//     target_val=target.innerHTM
    
//     if(display.innerHTML.slice(-1) ==="+"){
//         return
//     }
// }
// display.innerHTML +=target_val