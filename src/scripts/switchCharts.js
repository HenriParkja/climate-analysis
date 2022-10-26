const State = {
    SHOW: 'st-show',
    ACTIVE: 'st-active'
}

const Selector = {
    BUTTON: '.js-switchChartBtn',
    CHART: '.js-chart'
}

const switchCharts = () => {
    document.querySelectorAll(Selector.BUTTON).forEach((btn) => {

        btn.addEventListener('click', () => {
            document.querySelectorAll(Selector.BUTTON).forEach((button) => {
                button.classList.remove(State.ACTIVE)
            })
            
            document.getElementById(btn.getAttribute('data-chart')).classList.add(State.SHOW)
            btn.classList.add(State.ACTIVE)

            document.querySelectorAll(Selector.CHART).forEach((chart) => {
                if(chart.getAttribute('id') !== btn.getAttribute('data-chart')) {
                    chart.classList.remove(State.SHOW)
                }
            })
            
        })
    })
}


export default switchCharts;