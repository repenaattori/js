document.querySelector('form').addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();

    let form = event.currentTarget;
    let formData = new FormData(form);

    let country = formData.get('country');
    let fname = formData.get('fname');
    let lname = formData.get('lname');
    let opinion = formData.get('opinion');
    let java = formData.get('java');

    console.log("Country is " + country);
    console.log("Your name is " + fname + " " + lname);
    console.log("Opinion is " + opinion);
    if(java){
        console.log('Java valittu!!');
    }
    
    //Nollataan formin kentät
    form.reset();
}
