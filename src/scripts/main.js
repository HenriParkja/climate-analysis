import Highcharts from "highcharts";
import more from 'highcharts/highcharts-more';
import data from './data.js';

more(Highcharts);

document.addEventListener('DOMContentLoaded', () => {
    const chart = Highcharts.chart('chart', {
        chart: {
            
        },
        title: {
            text: "Projected Mean Temperature, Estonia; (Ref. Period: 1986-2085)"
        },
        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 1986 to 2085'
            }
        },
        yAxis: {
            title: {
                text: 'Temperature [deg C]'
            }
        },
        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: '°C'
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: true
                },
                pointStart: 1986
            }
        },
        series: [{
            type: 'line',
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3]
            },
            name: 'Time average of summer Tmean under RCP 8.5',
            data: data.timeAverageSummerRCP85
        },
        {
            type: 'arearange',
            name: 'Standard deviation RCP 8.5',
            marker: {
                enabled: false
            },
            linkedTo: ':previous',
            fillOpacity: 0.3,
            color: Highcharts.getOptions().colors[3],
            lineWidth: 0,
            data: data.timeAverageSummerRCP85StdDev
        },
        {
            type: 'line',
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0]
            },
            name: 'Time average of summer Tmean under RCP 4.5',
            data: data.timeAverageSummerRCP45
        },
        {
            type: 'arearange',
            name: 'Standard deviation RCP 4.5',
            marker: {
                enabled: false
            },
            linkedTo: ':previous',
            fillOpacity: 0.3,
            color: Highcharts.getOptions().colors[0],
            lineWidth: 0,
            data: data.timeAverageSummerRCP45StdDev
        }]
    });
})