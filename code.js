let index = 0;
let points = 0;
let questions = [
    'Onko html vaikeaa?', 
    'Onko sanna Marin Suomen presidentti?',
    'Lasi tehdään hiekasta'
];



let answers = ['no', 'no', 'yes'];

let result = document.querySelector('#result');
let question = document.querySelector('#question');
let form = document.querySelector('form');
form.addEventListener('submit', answer);

setQuestion();

function answer(e){
    e.preventDefault();

    //Haetaan pelaajan vastaus
    let fData = new FormData(form);
    let a = fData.get('answer');

    //Onko vastaus oikea
    if(answers[index] == a){
        points++;
        question.classList.add('correct');
    }else{
         question.classList.add('incorrect');
    }

    //Näytetään kokonaistulos
    result.textContent = 
        'Sinulla on pisteitä ' + points + '/'+answers.length;

    index++;

    setTimeout(setQuestion, 4000);
}

function setQuestion(){

    question.classList.remove('correct','incorrect');

    if(index > questions.length-1){
        form.classList.add('hidden');
        result.textContent = 
              'Peli päättyi. Sait ' + points + '/'+ answers.length + ' pistettä.';
    }else{
        question.textContent = questions[index];
    }
}
