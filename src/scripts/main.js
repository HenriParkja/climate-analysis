import switchCharts from './switchCharts';
import highchart from './highchart';

highchart(); // Init Highcharts

document.addEventListener('DOMContentLoaded', () => {
    switchCharts(); // Init switch chart functionality
})
