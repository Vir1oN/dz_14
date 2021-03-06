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

const form = document.forms.textForm;
const userText = document.forms.textForm.userText;
const displayBlock = document.querySelector('#displayText h1');
const btn = document.querySelector('#btn');

btn.onclick = async () => {
    btn.disabled = true;

    let newInput = userText.value;
    let charToPrint;
    for (const newChar of newInput) {
        charToPrint = await WaitAndGetChar(newChar);
        displayBlock.innerText += charToPrint;
    }

    form.reset();
    btn.disabled = false;
}

function WaitAndGetChar(char) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(char);
        }, Math.random() * 1000);
    });
}

