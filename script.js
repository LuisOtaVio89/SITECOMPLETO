
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    window.onscroll = function() {
        const button = document.getElementById('backToTop');
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    };



document.getElementById('enviarBtn').onclick = function() {
    let envio = true;
    if (envio) {
        alert("Sua mensagem foi enviada");
       
    } else {
        alert("Falha no envio da mensagem");
    }
};


function disableOptions(questionName) {
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        if (!option.checked) {
            option.disabled = true;
        }
    });
}

function playsound() {
    let clicksound = document.getElementById('selecionasom');
    if (clicksound) {
        clicksound.play().catch(error => {
            console.error('Erro ao tentar reproduzir o som:', error);
        });
    }
}

function handleAnswer(questionName, selectedValue) {
    document.querySelectorAll('.result-image').forEach(img => img.style.display = 'none');
    
   
    const selectedImage = document.getElementById(selectedValue);
    if (selectedImage) {
        selectedImage.style.display = 'block';
    }
}

function SubmitQuiz() {
    let correctAnswers = {
        q1: "A",
        q2: "A",
        q3: "B",
        q4: "B",
        q5: "B",
        q6: "B",
        q7: "B",
        q8: "B",
        q9: "B",
        q10: "B",
    };

    let score = 0;

    for (let key in correctAnswers) {
        let selectedOption = document.querySelector(`input[name="${key}"]:checked`);

        if (selectedOption) {
            let userAnswer = selectedOption.value;
            if (userAnswer === correctAnswers[key]) {
                score++;
            }
        }
    }

    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 10 perguntas`;

    if (score === 10) {
        let successSound = document.getElementById('venceusom');
        successSound.play().catch(error => {
            console.error('Erro ao tentar reproduzir o som de vitória:', error);
        });
    } else {
        let perdeuSound = document.getElementById('perdeuSom');
        perdeuSound.play().catch(error => {
            console.error('Erro ao tentar reproduzir o som de derrota:', error);
        });
    }

  
    document.querySelector('button[onclick="SubmitQuiz()"]').disabled = true;
    document.getElementById('resetbutton').disabled = false;

    document.querySelectorAll('.result-image').forEach(img => img.style.display = 'none');

    let options = document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled = true);
}

function resetQuiz() {
    let form = document.querySelector('form');
    form.reset();

    let options = document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled = false);

    document.querySelector('button[onclick="SubmitQuiz()"]').disabled = false;

    document.getElementById('resetbutton').disabled = true;

    document.getElementById('result').innerHTML = "";
}



