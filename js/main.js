const calculator = document.querySelector('.calculator');
const history = [];

calculator.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('calculator__col')) {
        alert(target.dataset.type)
    }
});

