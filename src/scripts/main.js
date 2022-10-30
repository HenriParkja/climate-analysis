import switchCharts from './switchCharts';
import highchart from './highchart';
import AOS from 'aos';
import typeit from 'typeit';

highchart(); // Init Highcharts
AOS.init(); // Init AOS
    

document.addEventListener('DOMContentLoaded', () => {
    switchCharts(); // Init switch chart functionality


    const heroText = new typeit('.js-heroText', {
        startDelay: 300,
        speed: 80,
        strings: "Globaalsest soojenemisest tulenevad kliimamuutused on inimkonna suurim väljakutse 21.sajandil."
    })
    .go();

    const heroSubText = new typeit('.js-heroSubText', {
        startDelay: 500,
    })
    .type("Climate change is real. ")
    .move(null, { to: "END" })
    .type("And it's affecting everyone.")
    .go()


    let subHeroObserver = new IntersectionObserver(function(entries) {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap
        if(entries[0].isIntersecting)
            heroSubText.reset().go();
    }, { threshold: [0] });
    
    subHeroObserver.observe(document.querySelector(".js-heroSubText"));

    let heroObserver = new IntersectionObserver(function(entries) {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap
        if(entries[0].isIntersecting)
            heroText.reset().go();
    }, { threshold: [0] });
    
    heroObserver.observe(document.querySelector(".js-heroText"));


})
