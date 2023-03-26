let monthInput = document.querySelector("#month")
let dayInput = document.querySelector("#day")
let button = document.querySelector("#check")
let message = document.querySelector(".message")

button.addEventListener("click", check)

function check(){
    let month = Number(monthInput.value)
    let day = Number(dayInput.value)
    if (month === 12 && day >=22 || month === 01 && day <=19 ){
        message.innerText="You're a Capricorn!"
    }
    else if (month === 01 && day >= 20 || month === 02 && day <=18){
        message.innerText="You're an aquarius!"
    }
    else if (month === 02 && day >= 19 || month === 03 && day <=20){
        message.innerText="You're a Pisces!"
    }
    else if (month === 03 && day >= 21 || month === 04 && day <=19){
        message.innerText="You're an Aries!"
    }
    else if (month === 04 && day >= 20 || month === 05 && day <=20){
        message.innerText="You're a Taurus!"
    }
    else if (month === 05 && day >= 21 || month === 06 && day <=20){
        message.innerText="You're a Gemini!"
    }
    else if (month === 06 && day >= 21 || month === 07 && day <=22){
        message.innerText="You're a Cancer!"
    }
    else if (month === 07 && day >= 23 || month === 08 && day <=22){
        message.innerText="You're a Leo!"
    }
    else if (month === 08 && day >= 23 || month === 09 && day <=22){
        message.innerText="You're a Virgo!"
    }
    else if (month === 09 && day >= 23 || month === 10 && day <=22){
        message.innerText="You're a Libra!"
    }
    else if (month === 10 && day >= 23 || month === 11 && day <=21){
        message.innerText="You're a Scorpio!"
    }
    else if (month === 11 && day >= 22 || month === 12 && day <=21){
        message.innerText="You're a Sagittarius!"
    }
    else{
        alert("Please retry entering in the correct format (mm) (dd) i.e (06) (13)")
    }
}

// (june && day >= 21 && day <= 31 || july && day <=22)