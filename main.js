
let display=document.getElementById("display");
let perator=document.getElementById("operator")
console.log(perator);

let target_val
let operators=["+","-","*","/","."]

function clickbutton(target){
    target_val=target.innerHTML
    
  
    if(target_val =="AC"){
        display.innerHTML="0"
    }else if(target_val =="="){
        display.innerHTML=eval(display.innerHTML)
    }else{
        if(display.innerHTML == "0"){
             display.innerHTML =target_val   
            }else if(display.innerHTML == "00"){
                display.innerHTML = target_val
            }
            else if(display.innerHTML.slice(-1) == "+"){
                if(target_val == "0"){
                    return;
                }else if(target_val =="00"){
                    return;
                }else display.innerHTML += target_val
            
                
            }else if(display.innerHTML.slice(-1) == "-"){
                if(target_val == "0"){
                    return;
                }else if(target_val == "00"){
                    return;
                }else display.innerHTML += target_val
            
                
            }else if(display.innerHTML.slice(-1) == "*"){
                if(target_val == "0"){
                    return;
                }else if(target_val == "00"){
                    return;
                }else display.innerHTML += target_val
            
                
            }else if(display.innerHTML.slice(-1) == "/"){
                if(target_val == "0"){
                    return;
                }else if(target_val =="00"){
                    return;
                }else display.innerHTML += target_val
            }else{
            display.innerHTML += target_val
        }
    }
}

function plus(){
    if(target_val == '+'){
        return;
    }else{
        display.innerHTML=eval(display.innerHTML)
    }
    target_val = "+"
     display.innerHTML += target_val
}

function minus(){
    if(target_val == '-'){
        return;
    }else{
        display.innerHTML=eval(display.innerHTML)
    }
    target_val = "-"
    display.innerHTML += target_val
}

function times(){
    if(target_val == '*'){
        return;
    }else{
        display.innerHTML=eval(display.innerHTML)
    }
    target_val = "*"
    display.innerHTML += target_val
}

function divided(){
    if(target_val == '/'){
        return;
    }else{
        display.innerHTML=eval(display.innerHTML)
    }
    target_val = "/"
    display.innerHTML += target_val
}

function con(){
    if(target_val == '.'){
        return;
    }else{
        display.innerHTML=eval(display.innerHTML)
    }
    target_val = "."
    display.innerHTML += target_val
}


function update(){
    display.innerHTML="";
}
