window.addEventListener('DOMContentLoaded', event => {
    let textBox = document.querySelector('.textbox')
    let submitBut = document.getElementById('submit')
    let textBoxFinal = document.querySelector('.textbox-final')
    submitBut.addEventListener('click', event => {
        let result = vowelRemover(textBox.value);
        textBoxFinal.innerHTML = result;
    })


    function vowelRemover(sentence){
        let vowels = "AaEeIiOoUu";
        let final = [];
        let newSent = sentence.split(' ');
        for (let i = 0; i < newSent.length; i++){
            let word = newSent[i];
            for(let j = 0; j < word.length; j++){
                let letter = word[j];
                if(!vowels.includes(letter)){
                    final.push(letter);
                };
            }
            final.push(' ')
        };
        return final.join('');
    };
})
