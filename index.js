var interval
function rateStudentsPresentation(){

rolls = 0
interval = setInterval(randomize,50)
    
}

let rolls = 0
function randomize(){
    let rating = document.getElementById("score")

    rating.innerHTML = Math.round(Math.random() * 10)
    rolls++
    console.log(rolls)
    if(rolls >= 40 ){
        var student = document.getElementById("student").value
        clearInterval(interval)
        var number = Math.round(Math.random() * 10)

        if (student.toLowerCase() == "denis"){
            number = 10
        }


        rating.innerHTML = number + " / 10"
    }
}

