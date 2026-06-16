const inputs = document.querySelectorAll('.input-box');

const buttons = document.querySelectorAll('.operation-button');

const result = document.querySelector('.result-box');


buttons[0].addEventListener('click', function()
{
    let num1 = Number(inputs[0].value);
    let num2 = Number(inputs[1].value);

    if(inputs[0].value === '' || inputs[1].value === '')
    {
        result.innerHTML = 'Please enter both numbers';
        return;
    }

    result.innerHTML = 'Result: ' + (num1 + num2);
});


buttons[1].addEventListener('click', function()
{
    let num1 = Number(inputs[0].value);
    let num2 = Number(inputs[1].value);

    if(inputs[0].value === '' || inputs[1].value === '')
    {
        result.innerHTML = 'Please enter both numbers';
        return;
    }

    result.innerHTML = 'Result: ' + (num1 - num2);
});


buttons[2].addEventListener('click', function()
{
    let num1 = Number(inputs[0].value);
    let num2 = Number(inputs[1].value);

    if(inputs[0].value === '' || inputs[1].value === '')
    {
        result.innerHTML = 'Please enter both numbers';
        return;
    }

    result.innerHTML = 'Result: ' + (num1 * num2);
});


buttons[3].addEventListener('click', function()
{
    let num1 = Number(inputs[0].value);
    let num2 = Number(inputs[1].value);

    if(inputs[0].value === '' || inputs[1].value === '')
    {
        result.innerHTML = 'Please enter both numbers';
        return;
    }

    if(num2 === 0)
    {
        result.innerHTML = 'Cannot divide by zero';
        return;
    }

    result.innerHTML = 'Result: ' + (num1 / num2);
});