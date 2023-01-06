const calculator = document.querySelector('.calculator');

calculator.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('calculator__col')) {
        alert(target.dataset.type)
    }
});

