const calculator = document.querySelector('.calculator');
const history = [];
let tempNumber = '';
let operationType = '';

calculator.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('calculator__col')) {
        const data = target.dataset.type;
        operation(data)
        console.log(tempNumber)


        // tempNumber = tempNumber + data;
        // console.log(tempNumber)
    }
});
/*history.push(target.innerHTML);*/


function operation(data) {
    if (data >= 0) {
        operationType = 'number';
        tempNumber = tempNumber + data;
    } else if (data == 'float') {
        operationType = data;
        if (!/\./.test(tempNumber)) {
            if (tempNumber) {
                tempNumber = tempNumber + '.';
            } else {
                tempNumber = '0.';
            }
        }
    }
};