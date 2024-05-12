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
      borderColor: '#000000',
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
      labels: ['Malignant Neoplasms (Cancer)', 'Influenza (Flu) and Pneumonia', 'Diseases of Heart', 
      'All Other Causes', 'Diabetes Mellitus', 'Cerebrovascular Disease (Stroke)', 'Chronic Lower Respiratory Diseases', 
      'Accidents Except Drug Posioning', 'Essential Hypertension and Renal Diseases', 'Human Immunodeficiency Virus Disease (HIV)'],
      datasets: [{
        label: 'New York City Leading Causes of Death (as of December 11, 2023)',
        data: [96, 96, 96, 96, 92, 90, 88, 80, 75, 45],
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: [
            'rgb(25, 25, 112)',   // midnight blue
            'rgb(47, 79, 79)',    // dark slate gray
            'rgb(72, 61, 139)',   // dark slate blue
            'rgb(85, 107, 47)',   // dark olive green
            'rgb(128, 0, 0)',     // maroon
            'rgb(139, 0, 139)',   // dark magenta
            'rgb(0, 100, 0)',     // dark green
            'rgb(100, 0, 0)',     // dark red
            'rgb(105, 105, 105)', // dim gray
            'rgb(0, 0, 128)'      // navy
        ],        
      }]
    }
});