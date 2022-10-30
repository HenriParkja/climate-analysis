import data from './data.js';
import Highcharts from "highcharts";
import more from 'highcharts/highcharts-more';

more(Highcharts);

const highchart = () => {
    const summerTempAverage = () => { Highcharts.chart('chartSummer', {
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
            crosshairs: false,
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
            animation: {
                duration: 2000
            },
            marker: {
                enabled: false,
                fillColor: 'white',
                lineWidth: 1,
                symbol: 'circle',
                lineColor: '#ffa500'
            },
            color: '#ffa500',
            name: 'Time average of summer Tmean under RCP 8.5',
            data: data.timeAverageSummerRCP85
        },
        {
            type: 'arearange',
            name: 'Dispersion RCP 8.5',
            animation: {
                duration: 2000
            },
            marker: {
                enabled: false,
                states: {
                    hover: {
                        enabled: false
                    }
                }
            },
            linkedTo: ':previous',
            fillOpacity: 0.3,
            color: '#ffa500',
            lineWidth: 0,
            data: data.timeAverageSummerRCP85StdDev
        },
        {
            type: 'line',
            animation: {
                duration: 2000
            },
            color: '#0884E9',
            marker: {
                enabled: false,
                fillColor: 'white',
                lineWidth: 1,
                symbol: 'circle',
                lineColor: '#0884E9',
            },
            name: 'Time average of summer Tmean under RCP 4.5',
            data: data.timeAverageSummerRCP45
        },
        {
            type: 'arearange',
            name: 'Dispersion of RCP 4.5',
            animation: {
                duration: 2000
            },
            marker: {
                enabled: false,
                states: {
                    hover: {
                        enabled: false
                    }
                }
            },
            linkedTo: ':previous',
            fillOpacity: 0.3,
            color: '#0884E9',
            lineWidth: 0,
            data: data.timeAverageSummerRCP45StdDev
        }]
    })
    }
    
    const winterTempAverage = () => { Highcharts.chart('chartWinter', {
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
            animation: {
                duration: 1000
            },
            marker: {
                enabled: false,
                fillColor: 'white',
                lineWidth: 1,
                symbol: 'circle',
                lineColor: '#ffa500'
            },
            color: '#ffa500',
            name: 'Time average of winter Tmean under RCP 8.5',
            data: data.timeAverageWinterRCP85
        },
        {
            type: 'arearange',
            name: 'Dispersion of RCP 8.5',
            marker: {
                enabled: false,
                states: {
                    hover: {
                        enabled: false
                    }
                }
            },
            linkedTo: ':previous',
            fillOpacity: 0.3,
            color: '#ffa500',
            lineWidth: 0,
            data: data.timeAverageWinterRCP85StdDev
        },
        {
            type: 'line',
            animation: {
                duration: 1000
            },
            color: '#0884E9',
            marker: {
                enabled: false,
                fillColor: 'white',
                lineWidth: 1,
                symbol: 'circle',
                lineColor: '#0884E9',
            },
            name: 'Time average of summer Tmean under RCP 4.5',
            data: data.timeAverageWinterRCP45
        },
        {
            type: 'arearange',
            name: 'Standard deviation RCP 4.5',
            marker: {
                enabled: false,
                states: {
                    hover: {
                        enabled: false
                    }
                }
            },
            linkedTo: ':previous',
            fillOpacity: 0.3,
            color: '#0884E9',
            lineWidth: 0,
            data: data.timeAverageWinterRCP45StdDev
        }]
    });
}

    const wind = () => {
        Highcharts.chart('chartWind', {
        chart: {
            
        },
        title: {
            text: "Wind speed"
        },
        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 1986 to 2085'
            },
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: 'Wind speed [m/s]'
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
                pointStart: 1986,
            }
        },
        series: [{
            type: 'line',
            animation: {
                duration: 2000
            },
            marker: {
                enabled: false,
                fillColor: 'white',
                lineWidth: 1,
                symbol: 'circle',
                lineColor: '#ffa500'
            },
            color: '#ffa500',
            name: 'Average wind speed under RCP 8.5',
            data: data.windRCP45
        }]
        });
    }
    let chartObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                let funcName = entry.target.getAttribute('data-function')
                switch(funcName) {
                    case 'summerTempAverage' : summerTempAverage()
                    case 'winterTempAverage' : winterTempAverage()
                    case 'wind' : wind()
                    default: return
                }
                if (typeof fn === 'function') fn()
            }
        })
    });
    
    chartObserver.observe(document.querySelector(".js-heroText"));
    document.querySelectorAll('.js-chart').forEach((el)=> {
        if(el) {
            chartObserver.observe(el);
        }
    })
}

export default highchart;