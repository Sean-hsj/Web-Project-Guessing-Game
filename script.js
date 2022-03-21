var sys_num = Math.floor(Math.random() * 20) + 1;
var high = 0;
result = false;
score = 20;

function compare(input_num){
        console.log(input_num);
        console.log(sys_num);
    if(input_num == sys_num){
        console.log("equal")
        result = true;
        document.getElementById('message').innerHTML = "🎉 Correct Number!";
        document.body.style.backgroundColor = "Green";
    }
    else if(input_num < sys_num){
        console.log("less than")
        document.getElementById('message').innerHTML = "📉 Too low!";
    }
    else if(input_num > sys_num){
        console.log("greater than")
        document.getElementById('message').innerHTML = "📈 Too high!";
    }    
}

function change_score(){
    // console.log(document.getElementById("score").value)
    if (result == false){
        score -= 1; 
        document.getElementById("score").innerHTML = score;
    }
    if (result == true){
        if (high <= score){
            high = score;
            document.getElementById("highscore").innerHTML = high;
        }
    }
}

function reset(){
    document.getElementById("score").innerHTML = 20;
    document.getElementById("message").innerHTML = "Start guessing";
    document.body.style.backgroundColor = "#222";
    document.getElementById("guess").value = "";
}

