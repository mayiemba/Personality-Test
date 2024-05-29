const questions = [
    {
        question: "How do you feel about new challanges ?",
        answers: [
            { text: "Very poorly", value: 1 },
            { text: "Poorly", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Well", value: 4 },
            { text: "Very well", value: 5 }
        ]
    },
    {
        question: "How do you handle stress ?",
        answers: [
            { text: "Very poorly", value: 1 },
            { text: "Poorly", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Well", value: 4 },
            { text: "Very well", value: 5 }
        ]
    },
    {
        question: "How do you feel about being around people ?",
        answers: [
            { text: "Very poorly", value: 1 },
            { text: "Poorly", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Well", value: 4 },
            { text: "Very well", value: 5 }
        ]
    },
    {
        question: "How well do you respond to critisicm ?",
        answers: [
            { text: "Very poorly", value: 1 },
            { text: "Poorly", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Well", value: 4 },
            { text: "Very well", value: 5 }
        ]
    },
    {
        question: "How do you prioritize responsibilities ?",
        answers: [
            { text: "Very poorly", value: 1 },
            { text: "Poorly", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Well", value: 4 },
            { text: "Very well", value: 5 }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML.add = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion .question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        button.dataset.value = answer.value;
        answerButtons.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    
    // const buttons = answerButtons.querySelectForAll("button");
    // buttons.forEach(button => {
    //     button.classList.remove("selected");
    // });

    selectedBtn.classList.add("selected");

    const selectedValue = parseInt(selectedBtn.dataset.value);
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    localStorage.setItem('totalScore', score);
    window.location.href = "result.html";

    // resetState();
    // questionElement.innerHTML = `Quiz completed!`;
    // nextButton.innerHTML = "Restart";
    // nextButton.style.display = "block"; // Show the restart button
    // nextButton.removeEventListener("click", handleNextButtonClick); // Remove previous event listener
    // nextButton.addEventListener("click", startQuiz); // Add the start quiz event listener
}

function handleNextButtonClick() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

startQuiz();

const result = getElementById('results');

document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.endsWith("result.html")) {
        const name = localStorage.getItem('name');
        const zodiac = localStorage.getItem('zodiac');
        const totalScore = localStorage.getItem('totalScore');

        let resultText = '';
        if (totalScore <= 0) {
            resultText = 'Your personality is calm and collected.';
        } else if (totalScore <= 5) {
            resultText = 'Your personality is balanced and thoughtful.';
        } else if(totalScore <= 10) {
            resultText = 'Your personality is energetic and enthusiastic.';
        } else if (totalScore <= 15){
            resultText = 'Your are good.'
        } else if(totalScore <= 20){
            resultText = 'Your very good.'
        } else {
           resultText = 'Your excellent.' 
        }

        const zodiacData = {
            "Aries": "Aries are known for their courage and determination.",
            "Taurus": "Taurus are known for their reliability and patience.",
            "Gemini": "Gemini are known for their adaptability and communication skills.",
            "Cancer": "Cancer are known for their tenacity and loyalty.",
            "Leo": "Leo are known for their confidence and charisma.",
            "Virgo": "Virgo are known for their analytical and practical nature.",
            "Libra": "Libra are known for their diplomacy and fairness.",
            "Scorpio": "Scorpio are known for their passion and resourcefulness.",
            "Sagittarius": "Sagittarius are known for their optimism and independence.",
            "Capricorn": "Capricorn are known for their discipline and ambition.",
            "Aquarius": "Aquarius are known for their innovation and humanitarianism.",
            "Pisces": "Pisces are known for their empathy and artistic nature."
        };

        const zodiacInfo = zodiacData[zodiac] || 'Unknown zodiac sign.';

        document.getElementById('resultText').textContent = resultText;
        document.getElementById('zodiacInfo').textContent = zodiacInfo;
    }
});