let opt= document.querySelector("select");
opt.addEventListener('mousedown', function() {
  this.size = 6;
});
opt.addEventListener('change', function() {
  this.blur();
});
opt.addEventListener('blur', function() {
  this.size = 0;
});


//for individual colors
let red=document.getElementById("red-opt");
let green=document.getElementById("green-opt"); 
let gold=document.getElementById("gold-opt");
let pink=document.getElementById("pink-opt");
let silver=document.getElementById("silver-opt");
let blue=document.getElementById("blue-opt");
let aqua=document.getElementById("aqua-opt");
let gray=document.getElementById("gray-opt");



red.addEventListener("click", function(){
        document.body.style.background="red"
       
})
green.addEventListener("click", function(){
    document.body.style.background="green"
    console.log("you've click green")
})
gold.addEventListener("click", function(){
    document.body.style.background="gold"
    
})
pink.addEventListener("click", function(){
    document.body.style.background="pink"
    
})
silver.addEventListener("click", function(){
    document.body.style.background="silver"
    
})
blue.addEventListener("click", function(){
    document.body.style.background="blue"
 
})
aqua.addEventListener("click", function(){
    document.body.style.background="aqua"
    
})
gray.addEventListener("click", function(){
    document.body.style.background="grey"
    
})

//To select colors at random
let random=document.getElementById("random")

let colors=["red", "green", "gold", "pink","silver","blue","aqua","gray"];



random.addEventListener("click",function(){
    let ranCol= getRandom();
    document.body.style.background=colors[ranCol]
})

function getRandom(){
    return Math.floor(Math.random()*colors.length)
};


let congrat=document.getElementById('congartDiv')
let congratBtn= document.getElementById("congart-btn")
let sorry=document.getElementById('sorryDiv')

let sorryBtn= document.getElementById("sorry-btn")

let bragWord=document.getElementById("brag-word")

let brags=["Amazing",'Fantastic',"Perfect","Elegent","Excellent","Fasitanting"]

let userPal= document.getElementById('userPal')
let sorryPal= document.getElementById('sorryPal')

congratBtn.addEventListener("click",function(ev){
    ev.preventDefault()
    congrat.style.display="none"
    // congrat.style.background=""
})
sorryBtn.addEventListener("click",function(ev){
    ev.preventDefault()
    sorry.style.display="none"
})



let palWord = document.getElementById("pal-space");
let palBtn= document.getElementById("pal-submit")

// let palidrome;


palBtn.addEventListener("click",function(){

if(palWord.value == "" || palWord.value == null){
    alert("Hi dear! please add a palindrome")   
}
let regex= /[A-Za-z0-9]/g
let palString = palWord.value.match(regex).join('').toLowerCase()

let reversedPalString = palString.split('').reverse().join('')
      if(palString === reversedPalString){

        congrat.style.display="block" 
        userPal.textContent=document.getElementById("pal-space").value
        
       console.log("got it")
      }else{
        sorry.style.display="block"
        sorryPal.textContent=document.getElementById("pal-space").value
        console.log("suck")
      }
      
        
    document.querySelector("form").reset()
   
   let randomCong=congWord()
 
   bragWord.textContent=brags[randomCong]
    
})

function congWord(){
    return Math.floor(Math.random()*brags.length)
}



