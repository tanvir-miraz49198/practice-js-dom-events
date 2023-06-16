// onclick event rule :- 1
function changeBg(){
    const changeColor = document.getElementById("selfIntro");

    changeColor.style.color = ('white')
    changeColor.style.backgroundColor = ('green')
}


// onclick event rule :- 2
const makeTextPurple = document.getElementById("make-purple");

makeTextPurple.onclick = changeTextColor;

function changeTextColor(){
    const changeColor2 = document.getElementById("school");

    changeColor2.style.color = ('purple');
    
}



// onclick event rule :- 3
let changeColor3 = document.getElementById("make-cyan")

changeColor3.onclick = function changeBgColor(){
    let collegeBg = document.getElementById("college")
    
    collegeBg.style.backgroundColor = "cyan"
    
}




// add event listener rule :- 1

let homeTown = document.getElementById("make-coral")

homeTown.addEventListener('click', myHome);
function myHome(){
    let home = document.getElementById("home");
    home.style.background = "coral"
    home.style.color = "white"
}





// add event listener rule :- 2
let myProfession = document.getElementById("make-greenyellow");

myProfession.addEventListener('click', function myProfession(){

    const profession = document.getElementById("profession");
    profession.style.backgroundColor = "greenyellow"

})



// add event listener rule :- 3 {required to use}
document.getElementById("make-darkorange").addEventListener('click', 

function(){
    const myFruit = document.getElementById("fevourite-fruit");
    myFruit.style.backgroundColor = "darkorange"
})




// text replace

document.getElementById("post-btn").addEventListener('click',function(){

    let mainInput = document.getElementById("input-text")
    let inputValue = mainInput.value 
    let placeText = document.getElementById("my-name");
    placeText.innerText = inputValue;
    mainInput.value = ""
})



// github like delete

let inputTg = document.getElementById("input-tg").addEventListener

('keyup',function(event){

    let text = event.target.value;
    const dltBtn = document.getElementById("delete-btn")
    if (text == "delete") {
        dltBtn.removeAttribute("disabled")
    }else{
        dltBtn.setAttribute("disabled", true)
    }
});


let deleteBtn = document.getElementById("delete-btn").addEventListener

('click', function(){

    let secInfo = document.getElementById("secret-info");
    secInfo.style.display = 'none'
})