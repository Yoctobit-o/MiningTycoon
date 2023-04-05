let money = 0;

let copperMineBought = false;
let copperMiner = 1;
let copper = 1;
let copperCost = 5;

let count = 1000;
let seconds = count/1000;

console.log(copperMineBought);

function buyCopperMine(){
    
    copperMineBought = true;
    console.log(copperMineBought);
    showText();
    showButtons();
   
}

function showButtons(){
    document.getElementById("upgradeBatch1").style.display="inline";
}

function mineCopper(){
    copper += 1;
    document.getElementById("copper").innerHTML = "Copper count: " + copper;
}

function sellCopper1(){
        
        money += copperCost*copper;
        copper -= copper;
        showText();
    
}

function sellCopper2(){
    if (copper >= 2){
    money += copperCost*(copper/2);
    copper -= (copper/2);
    showText();
    }

}

function buyMiner(){
    if (money >= 150){
        money -= 150;
        copperMiner += 1;
        showText();

    }
}

function showText(){
    document.getElementById("copperMineTitle").innerHTML = "COPPER MINE (" + 1*copperMiner/seconds + " copper/s)";
    document.getElementById("copper").innerHTML = "Copper count: " + copper;
    document.getElementById("copperMiners").innerHTML = "Miners: " + copperMiner;
    document.getElementById("money").innerHTML = "$" + money + " Cash";
}

function copperMine(){
        if (copperMiner){
            return copper += 1*copperMiner;
        }
       
}

setInterval(function() {
    if (copperMineBought){
        copperMine(copperMiner);
        showText();
    }
    
    

}, count)


  