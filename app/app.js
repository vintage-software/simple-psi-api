var psi = require('psi');

// get the PageSpeed Insights report
psi('www.estatesales.net', function (err, data) {
  console.log(data.score);
  console.log(data.pageStats);
});

// output a formatted report to the terminal
psi.output('www.estatesales.net', function (err) {
  console.log('done');
});