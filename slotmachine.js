let value1=document.getElementById('value1')
let value2=document.getElementById('value2')
let value3=document.getElementById('value3')


let inpSpeed=document.getElementById('inpSpeed')
let btnstart=document.getElementById('btnstart')
let btnstop=document.getElementById('btnstop')

let myoutput=document.getElementById('myoutput')

let values=[
    "😊","😁","😉","😜","😎","🤢","😆"
]

function getRandomValue(){
    return values[Math.floor(Math.random()*7)]
}

let animationId=setInterval(()=>{
    value1.innerText=getRandomValue()
    value2.innerText=getRandomValue()
    value3.innerText=getRandomValue()
},1000)

function upadateAniamtion(newspeed){
    if(animationId) clearInterval(animationId)

    animationId=setInterval(()=>{
        value1.innerText=getRandomValue()
        value2.innerText=getRandomValue()
        value3.innerText=getRandomValue()
    },1000/newspeed)
}



inpSpeed.onchange=function(ev){
    document.documentElement.style.setProperty('--speed',ev.target.value)
    upadateAniamtion(ev.target.value)
    value1.classList.remove('animation')
    value2.classList.remove('animation')
    value3.classList.remove('animation')
    value1.classList.add('animation')
    value2.classList.add('animation')
    value3.classList.add('animation')

    myoutput.textContent='Game is Running'
}

function stopclick(){
    clearInterval(animationId)
    console.log("Stop button clicked")
    text=''
    if(value1.innerText==value2.innerText&&value2.innerText==value3.innerText){
        text='WOW! YOU WON'
    }else{
        text='OOPs Try again'
    }
    value1.classList.remove('animation')
    value2.classList.remove('animation')
    value3.classList.remove('animation')
    myoutput.textContent=text
}

function startclick(){
    upadateAniamtion(inpSpeed.value)
    value1.classList.add('animation')
    value2.classList.add('animation')
    value3.classList.add('animation')

    myoutput.textContent="Game is Running"
}
