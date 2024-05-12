const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Staten Island', 'Queens', 'Brooklyn', 'Manhattan', 'Bronx'],
    datasets: [{
    label: 'NYPD Total Arrests by Borough (as of April 22, 2024)',
    data: [2892, 13782, 14221, 15324, 17402],
      backgroundColor: '#9146FF',
      borderColor: '#FFFFFF',
      hoverBackgroundColor: '#a86dff',
      borderWidth: 2
    }]
  },
  options: {
    indexAxis: 'y',
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2],
        borderWidth: 1
      }]
    }
});