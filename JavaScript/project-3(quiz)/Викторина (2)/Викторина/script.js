'use strict';

const DATA = [
    {
        question: '2 + 2 = ? ',
        answers: [
            {
                id: '1',
                value: '4',
                correct: true,
            },
            {
                id: '2',
                value: '6',
                correct: false,
            },
            {
                id: '3',
                value: '8',
                correct: false,
            },
        ]
    },
    {
        question: 'Question 2',
        answers: [
            {
                id: '4',
                value: 'Answer 4',
                correct: false,
            },
            {
                id: '5',
                value: 'Answer 5',
                correct: true,
            },
        ]
    },
    {
        question: 'Question 3',
        answers: [
            {
                id: '6',
                value: 'Answer 4',
                correct: false,
            },
            {
                id: '7',
                value: 'Answer 5',
                correct: true,
            },
        ]
    },
    {
        question: 'Question 4',
        answers: [
            {
                id: '8',
                value: 'Answer 4',
                correct: false,
            },
            {
                id: '9',
                value: 'Answer 5',
                correct: true,
            },
        ]
    },
];

let Localresults = {};

const quis = document.getElementById('quiz'),
      questions = document.getElementById('questions'),
      indicator = document.getElementById('indicator'),
      btn_next = document.getElementById('btn-next'),
      btn_restart = document.getElementById('btn-restart'),
      results = document.getElementById('results');


const renderQuestions = (index) => {
    renderIndicator(index + 1);

    questions.dataset.currentStep = index;

    const renderAnswers = () => DATA[index].answers
        .map((answer) =>  `
                <li>
                    <label>
                        <input class="answer-input" type="radio" name=${index} value=${answer.id}>
                        ${answer.value}
                    </label>
                </li>
          `)
        .join('');
    
        questions.innerHTML = `
            <div class="quiz-qustions-item">
            <div class="quiz-qustions-item__question">${DATA[index].question}</div>
            <ul class="quiz-qustions-item__answers">${renderAnswers()}</ul>
        </div>
    `;
};

const renderResults = () => {
    let content = '';

    const getClassName = (answer, questionIndex) => {
        let className = '';

        if (!answer.correct && answer.id === Localresults[questionIndex]) {
            className = 'answer--invalid';
        } else if (answer.correct){
            className = 'answer--valid'
        }
        return className;
    }

    const getAnswers = (questionIndex) => DATA[questionIndex].answers
    .map((answer) =>  `<li class=${getClassName(answer, questionIndex)}>${answer.value}</li>`)
    .join('');

    DATA.forEach((question, index) => {
         content += `
                <div class="quiz-results-item">
                <div class="quiz-result-sitem__question">${question.question}</div>
                <ul class="quiz-results-item__answers">${getAnswers(index)}</ul>
            </div>
         `;
    });

    results.innerHTML = content;
};

const renderIndicator = (currentStep) => {
    indicator.innerHTML = `${currentStep}/${DATA.length}`;
};


quis.addEventListener('change', (e) => {
    if(e.target.classList.contains('answer-input')){
        Localresults[e.target.name] = e.target.value
        btn_next.disabled = false;
        }
});


quis.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn-next')){
    const nextQuestionIndex = Number(questions.dataset.currentStep) + 1; 
        if(DATA.length === nextQuestionIndex){
            // to result
            renderResults();
            questions.classList.add('questions--hidden');
            indicator.classList.add('indicator--hidden');
            results.classList.add('results--visible');
            btn_next.classList.add('btn-next--hidden');
            btn_restart.classList.add('btn-restart--visible');

        } else{
            // to next question
            renderQuestions(nextQuestionIndex);
        }

        btn_next.disabled = true;
    }

    if(e.target.classList.contains('btn-restart')){
        Localresults = {};
        results.innerHTML = '';
        
        questions.classList.remove('questions--hidden');
        indicator.classList.remove('indicator--hidden');
        results.classList.remove('results--visible');
        btn_next.classList.remove('btn-next--hidden');
        btn_restart.classList.remove('btn-restart--visible');
        
        renderQuestions(0);
        }
});
renderQuestions(0);