const hours = document.getElementById("hrs")
const minutes = document.getElementById("mins")
const seconds = document.getElementById("secs")

setInterval(function(){
    let myTime = new Date()
    hours.innerHTML = (myTime.getHours()<10?"0":"") +  myTime.getHours();
    minutes.innerHTML = (myTime.getMinutes()<10?"0":"") + myTime.getMinutes();
    seconds.innerHTML = (myTime.getSeconds()<10?"0":0) + myTime.getSeconds();
}, 1000)