let index = 0;
let points = 0;

let result = document.querySelector('#result');
let question = document.querySelector('#question');
let form = document.querySelector('form');
form.addEventListener('submit', answer);

//Asetetaan ensimmäinen kysymys
setQuestion();

//Vastauksen käsittely
function answer(e){
    e.preventDefault();

    //Haetaan pelaajan vastaus
    let fData = new FormData(form);
    let a = fData.get('answer');

    //Onko vastaus oikea.
    if(question[index].a == a){
        points++;
        question.classList.add('correct');
    }else{
         question.classList.add('incorrect');
    }

    //Näytetään kokonaistulos
    result.textContent = 
        'Sinulla on pisteitä ' + points + '/'+answers.length;

    //Päivitetään seuraavan kysymyksen id.
    index++;

    //Näytetään seuraava kysymys 4sek viiveellä.
    setTimeout(setQuestion, 4000);
}

//Kysymyksen asettaminen
function setQuestion(){
    //Poistetaan edellisen vastauksen muotoilut.
    question.classList.remove('correct','incorrect');

    //Tarkistetaan loppuivatko kysymykset.
    //Jos loppuivat, piilotetaan lomake.
    if(index > questions.length-1){
        form.classList.add('hidden');
        result.textContent = 
              'Peli päättyi. Sait ' + points + '/'+ answers.length + ' pistettä.';
    }else{
        question.textContent = questions[index].q;

        let labels = document.querySelectorAll('label');
        labels[0].textContent = questions[index].options[0]; 
        labels[1].textContent = questions[index].options[1]; 
        labels[2].textContent = questions[index].options[2]; 
    }
}
