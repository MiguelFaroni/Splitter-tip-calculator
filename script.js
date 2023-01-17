let billInput = document.querySelector(".bill__input")
let peopleInput = document.querySelector(".people__input")
let tipPerPerson = document.querySelector("#tip__amount--person")
let totalPerPerson = document.querySelector("#total__amount")
let tips = document.querySelectorAll(".tips")
let tipCustom = document.querySelector(".tip__custom")
let reset = document.querySelector(".reset")



billInput.addEventListener("input", valorConta)
peopleInput.addEventListener("input",numeroPessoas)
tips.forEach(function(val){
    val.addEventListener("click",handleClick)
})
tipCustom.addEventListener("input",customTip)
reset.addEventListener("click",resetAll)

let billValue = 0.0
let peopleValue = 1
let tipValue = 0.15

function valorConta(){
    billValue = parseFloat(billInput.value)
    calculateTip()
    //console.log(billValue)
}

function numeroPessoas(){
    peopleValue = parseInt(peopleInput.value)
    if(peopleValue < 1){
        peopleInput.style.outlineColor = "#d83e20"
    }
    else{
        peopleInput.style.outlineColor = "hsl(172, 67%, 45%)"        
        calculateTip()
    }
    
    //console.log(peopleValue)
}

function customTip(){
    tipValue = parseFloat(tipCustom.value / 100)
    
    tips.forEach(function(val){
        val.classList.remove("active__tip")
    })
    calculateTip()
}

function resetAll(){
    billInput.value = "0.0"
    valorConta()
    peopleInput.value = "0"
    numeroPessoas()
    tipCustom.value = " "
}

function handleClick(event){
    tips.forEach(function(val){
        val.classList.remove("active__tip")
        if(event.target.innerHTML == val.innerHTML){
            val.classList.add("active__tip")
            tipValue = parseFloat(val.innerHTML)/100
        }
    })
    calculateTip()
    //console.log(tipValue)
}

function calculateTip(){
    if(peopleValue > 0 ){
        let tipAmount = (billValue * tipValue) / peopleValue
        let total = (billValue / peopleValue) + tipAmount
        tipPerPerson.innerHTML = tipAmount.toLocaleString('en', {style: 'currency' , currency: 'USD'})
        totalPerPerson.innerHTML = total.toLocaleString('en', {style: 'currency' , currency: 'USD'})
        
    }
}

