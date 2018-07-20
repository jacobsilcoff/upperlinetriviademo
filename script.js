let token = 0
let q_div
let a_div
let r_div
let correctSelected

function sendApiRequest()
{
    fetch('https://opentdb.com/api_token.php?command=request')
    .then(function(response)
    {
        return response.json()
    })
    .then(function(json)
    {
        token = json.token
        q_div = document.querySelector("#question")
        q_div.innerHTML = "QUESTION"
        a_div = document.querySelector("#answers")
        a_div.innerHTML = "ANSWERS HERE"
        r_div = document.querySelector("#response")
        r_div.addEventListener("click",e => {
            if (correctSelected){
                r_div.innerHTML = "..."
                displayNewQuestion()
            }
        })
        displayNewQuestion()
    })
}

sendApiRequest()

function displayNewQuestion()
{
    fetch(`https://opentdb.com/api.php?amount=1&token=${token}`)
    .then(function(response){
        return response.json()
    })
    .then(function(json){
        console.log(json)
        let q = json.results[0]
        let question = q.question
        let correctAnswer = q.correct_answer
        let others = q.incorrect_answers
        console.log(others)
        q_div.innerHTML = question
        let rightPos = Math.floor(Math.random() * (others.length + 1))
        others.splice(rightPos, 0, correctAnswer)
        let answers = others
        console.log(answers)
        a_div.innerHTML = ""
        answers.forEach(ans => {
            a_div.innerHTML += `<button type="button" class="btn btn-warning justify-content-center answer">${ans}</button>`
        })
        document.querySelectorAll(".answer").forEach(ans=>{
            ans.addEventListener("click", e => {
                answerChosen(ans.innerHTML, correctAnswer)
            })
        })
        r_div.innerHTML = ""
    })
}

function answerChosen(ans, correct)
{
    console.log(ans == correct)
    if (ans != correct)
    {
        correctSelected = false
        r_div.innerHTML = "WRONG. Try again."
    }
    else
    {
        correctSelected = true
        r_div.innerHTML = "<button class='btn btn-success'>That's correct. Click here for more!</button>"
    }
    
}