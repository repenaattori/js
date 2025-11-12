let index = 0;
let points = 0;
let questions = [
    'Onko html vaikeaa?', 
    'Onko sanna Marin Suomen presidentti?',
    'Lasi tehdään hiekasta'
];
let answers = ['no', 'no', 'yes'];

let result = document.querySelector('#result');
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
    }

    //Näytetään kokonaistulos
    result.textContent = 
        'Sinulla on pisteitä ' + points + '/'+answers.length;

    index++;
    setQuestion();
}

function setQuestion(){
    if(index > questions.length-1){
        form.classList.add('hidden');
        result.textContent = 
              'Peli päättyi. Sait ' + points + '/'+ answers.length + ' pistettä.';
    }else{
        document.querySelector('#question').textContent = questions[index];
    }
}
