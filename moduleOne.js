const quizData = [
    {
        question: "which statement will print 'Hello world!'",
        a: "print('Hello world!');",
        b: "System.print('Hello world!');",
        c: "out.print('Hello world!');",
        d: "System.out.print('Hello world!');",
        correct: "d",
    },
    {
        question: "what is the driver function?",
        a: "a function which opens up folders",
        b: "a function which allows the program to run other classes",
        c: "a function which will only open when called on",
        d: "there is no such thing",
        correct: "b"
    },
    {
        question: "what type of programming language is java?",
        a: "java is an object oriented programming language",
        b: "java is an object based programming language",
        c: "java is a platform dependent programming language",
        d: "all of the above",
        correct: "a",
    },
    {
        question: "what has java been used to program?",
        a: "mobile applications",
        b: "video games",
        c: "desktop applications",
        d: "all of the above",
        correct: "d",
    }
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})