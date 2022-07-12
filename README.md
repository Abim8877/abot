<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .container{width: 400px;
    margin: 10vh auto 0 auto;
    box-shadow: 0px 0px 15px 5px blueviolet;
}
#display{height: 80px;
    text-align: right;
    font-size: 30px;
}
.buttons{display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: -10px;
}
.button{border: 1px solid blueviolet;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
}
#equal{background-color: greenyellow;
    color: white;
}
.button:hover{background-color: blueviolet;
    color: white;
    transition: 0.5s ease-in-out;
}
    </style>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CALCULATOR</title>
    <link rel="stylesheet" href="calculator.css">
</head>
<body>
    <div class="container"><header>CALCULATOR</header>
        <div id="display"></div><hr>
        <div class="buttons">
            <div class="button">c</div>
            <div class="button">/</div>
            <div class="button">*</div>
            <div class="button">clear</div>
            <div class="button">7</div>
            <div class="button">8</div>
            <div class="button">%</div>
            <div class="button">-</div>
            <div class="button">4</div>
            <div class="button">5</div>
            <div class="button">6</div>
            <div class="button">+</div>
            <div class="button">1</div>
            <div class="button">2</div>
            <div class="button">3</div>
            <div class="button">.</div>
            <div class="button">(</div>
            <div class="button">0</div>
            <div class="button">)</div>
            <div id="equal" class="button">=</div>
        </div>
    </div>
    <script>
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
    </script>
</body>
</html>
