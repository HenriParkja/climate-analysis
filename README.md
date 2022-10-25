# climate-analysis

- index.html - basic HTML template 
- src/scripts/main.js - main JS file where Highcharts is being setup
- src/scripts/data.js - JS file to store data for Highcharts
- src/scripts/style.scss - styles 

## Asset compilation 
Assets (.js, .scss, etc) files are compiled using Laravel Mix (webpack.mix.js). 
During compilation dist folder is created where final content for the webpage is added. 

## Setup 
- "git clone" project to local environment
- In the root folder run yarn, or npm install 
- I'm using Laravel Valet on Mac for local server. On Windows it's possible to use 
