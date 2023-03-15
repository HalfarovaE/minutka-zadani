console.log('funguju!');

const timeIsUp = () => {
const alarm = document.querySelector(".alarm")
alarm.classList.add("alarm--ring")
}

setTimeout(timeIsUp, 5000)

const userQuestion = prompt("Kdy má začít zvonit minutka?")

const zvoneni = document.querySelector(".zvukMinutky")

function spustAudio(){
    zvoneni.play()
}
/*
const stopRinging= ()=>
{
    const button = document.querySelector (".btn_stop")
    button.classList.add("alarm")
}

document.addEventListener("click", stopRinging)
*/