var myVar;

function loadingFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loaderText").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


let rand;
let x = Math.floor((Math.random() * 19) + 1);
if(x == 1){
    rand = "It is certain.";
} else if(x == 2){
    rand = "It is decidedly so.";
    } else if(x == 3){
        rand = "Without a doubt.";
    } else if(x == 4){
        rand = "Yes - definitely";
    } else if(x == 5){
        rand = "You may rely on it.";
    } else if(x == 6){
        rand = "As I see it, yes.";
    } else if(x == 7){
        rand = "Most likely.";
    } else if(x == 8){
        rand = "Outlook good.";
    } else if(x == 9){
        rand = "Yes.";
    } else if(x == 10){
        rand = "Signs point to yes.";
    } else if(x == 11){
        rand = "Reply hazy, try again.";
    } else if(x == 12){
        rand = "Ask again later.";
    } else if(x == 13){
        rand = "Better not tell you now.";
    } else if(x == 14){
        rand = "Cannot predict now.";
    } else if(x == 15){
        rand = "Concentrate and ask again.";
    } else if(x == 16){
        rand = "Concentrate and ask again.";
    } else if(x == 17){
        rand = "My sources say no.";
    } else if(x == 18){
        rand = "Outlook not so good.";
    } else if(x == 19){
        rand = "Very doubtful.";
    }
document.getElementById("generatedAnswer").innerHTML = rand;
  
