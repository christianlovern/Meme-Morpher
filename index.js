window.addEventListener('DOMContentLoaded', event => {
    let textBox = document.querySelector('.textbox')
    let vowelBut = document.getElementById('vowels')
    let textBoxFinal = document.querySelector('.textbox-final')
    let spongeBut = document.getElementById('sponge')
    let uwuBut = document.getElementById('uwu')
    vowelBut.addEventListener('click', event => {
        let result = vowelRemover(textBox.value);
        textBoxFinal.innerHTML = result;
    });

    spongeBut.addEventListener('click', event => {
        let result = spongeMock(textBox.value);
        textBoxFinal.innerHTML = result;
    });

    uwuBut.addEventListener('click', event => {
        console.log('here')
        let result = uwuMaker(textBox.value);
        textBoxFinal.innerHTML = result;
    });






    function uwuMaker(str){
        let final = [];
        let newSent = str.split(' ');
        for (let i = 0; i < newSent.length; i++){
            let word = newSent[i];
            for(let j = 0; j < word.length; j++){
                let letter = word[j];
                if(letter.toLowerCase() === 'l'  || letter.toLowerCase() === 'r'){
                    letter = 'w';
                    final.push(letter);
                } else if(letter === 'e'){
                    final.push(`y${letter}`)
                } else{
                final.push(letter)
                }
            }
            final.push(' ')
        };
        return final.join('');
    };

    function toggleCase(str) {
        if (str.length !== 1) return str;

        if (str.match(/^[A-z]$/)) {
          if (str.toUpperCase() === str) {
            return str.toLowerCase();
          } else {
            return str.toUpperCase();
          }
        }

        return str;
      }

    function spongeMock(str) {
        return str
          .split("")
          .map((char, index) => {
            if (index % 2 === 0) return toggleCase(char);
            return char;
          })
          .join("");
      }



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




// l = w
// r = w
// e is followed by y
