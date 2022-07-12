
var display= document.getElementById("display");
var buttons=Array.from(document.getElementsByClassName("buttons"));
buttons.map(button => {
    button.addEventListener('click', (r)=>{
        switch(r.target.innerText){
            case 'c':
                display.innerText='';
                break;
                case 'clear':
                    if(display.innerText){
                    display.innerText=display.innerText.slice(0, -1);}
                    break;
                    case '=':
                        try{
                        display.innerText=eval(display.innerText);}
                        catch{display.innerText='SyntaxError';}
                        break;
            default:
                display.innerText+=r.target.innerText;
        }
    })
})