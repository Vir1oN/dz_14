// Реалізувати друкарську машинку.
//     У вас є текст "Hello World".
//     Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

let userText = document.forms.textForm.userText;
let displayBlock = document.querySelector('#displayText h1');

let printingIsOver = true;

userText.oninput = () => {
    let newInput = [...userText.value];
    let charToPrint = newInput[newInput.length - 1];

    do
    {
        printCharacter(charToPrint)
            .then(value => { printingIsOver = true; });
    } while (!printingIsOver);
}

function printCharacter(char) {
    return new Promise((resolve, reject) => {
        if (printingIsOver) {
            printingIsOver = false;

            setTimeout(() => {
                displayBlock.innerText += char;
                resolve();
            }, Math.random() * 1000);
        } else {
            reject();
        }
    });
}

