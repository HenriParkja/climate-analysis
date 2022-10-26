import data from './data.js';
import Highcharts from "highcharts";
import more from 'highcharts/highcharts-more';

more(Highcharts);

const highchart = () => {
    document.addEventListener('DOMContentLoaded', () => {
    const chartSummer = Highcharts.chart('chartSummer', {
        chart: {
            
        },
        title: {
            text: "Summer Time Average"
        },
        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 1986 to 2085'
            },
            title: {
                text: 'Year'
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
    })

    
    const chartWinter = Highcharts.chart('chartWinter', {
        chart: {
            
        },
        title: {
            text: "Winter Time Average"
        },
        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 1986 to 2085'
            },
            title: {
                text: 'Year'
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
            data: data.timeAverageWinterRCP85
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
            data: data.timeAverageWinterRCP85StdDev
        },
        {
            type: 'line',
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0]
            },
            name: 'Time average of summer Tmean under RCP 4.5',
            data: data.timeAverageWinterRCP45
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
            data: data.timeAverageWinterRCP45StdDev
        }]
    });
})
}

export default highchart;