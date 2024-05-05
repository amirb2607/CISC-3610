document.getElementById('interestForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value);
    var year = parseFloat(document.getElementById('year').value);

    var amount = principal * Math.pow((1 + rate / 100), year);

    document.getElementById('result').innerHTML = 'After ' + year + ' years, your investment will be worth $' + amount.toFixed(2);
    document.getElementById('return').innerHTML = 'Total Return of $' + (amount.toFixed(2) - principal);

    localStorage.setItem('principal', principal);
    localStorage.setItem('rate', rate);
    localStorage.setItem('year', year);
});

document.getElementById('interestForm').addEventListener('reset', function(event) {
    localStorage.removeItem('principal');
    localStorage.removeItem('rate');
    localStorage.removeItem('year');
});

window.onload = function() {
    var principal = localStorage.getItem('principal');
    var rate = localStorage.getItem('rate');
    var year = localStorage.getItem('year');

    if(principal !== null) {
        document.getElementById('principal').value = principal;
    }

    if(rate !== null) {
        document.getElementById('rate').value = rate;
    }

    if(year !== null) {
        document.getElementById('year').value = year;
    }
};