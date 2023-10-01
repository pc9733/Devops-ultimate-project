// Add your JavaScript code here
document.addEventListener('DOMContentLoaded', function () {
    const myButton = document.getElementById('myButton');
    const myMessage = document.getElementById('myMessage');

    myButton.addEventListener('click', function () {
        myMessage.textContent = 'Hello, Web World!';
    });
});
