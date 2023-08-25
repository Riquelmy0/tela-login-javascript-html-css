const buttonSubmit = document.getElementById('date-button');
const inputEmail = document.getElementById('dateInput');





const alterValur = () => {
    const valueInput = inputEmail.value
    
    if(valueInput.length > 8){
        buttonSubmit.className = 'newClassButton';
        buttonSubmit.removeAttribute('disabled');
    }
    else{
        buttonSubmit.className = 'date button';
    }
}


const verification = () => {
    let valores = inputEmail.value;

    if(valores){
        console.log('good morning')
    }
    
    else{
        inputEmail.style.background = 'rgba(246, 107, 107, 0.2)'
        inputEmail.style.border = 'solid 1px rgba(246, 107, 107, 0.9)'
    }
    
}

export let exportValue = inputEmail.value




buttonSubmit.addEventListener('click', verification);
inputEmail.addEventListener('input', alterValur)