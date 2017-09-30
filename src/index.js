"use strict";
//https://memz.co/typescript-nodejs-intellij-idea-webstorm/
var fs = require('fs');
var index_1 = require("metrix-js/lib/index");
// read and parse data file
var inputData = JSON.parse(fs.readFileSync('./data.json').toString());
// define metric rules
var metricRules = [
    { field: 'code', matcher: 'regex', match: '(\\d)\\d\\d', metric: 'router.hit.$100' },
    { field: 'code', matcher: 'regex', match: '\\d{3}', metric: 'router.hit' },
    { field: 'url', matcher: 'substring', match: 'api/note', metric: 'api.note.hit' },
    { field: 'url', matcher: 'substring', match: 'api/note', metric: 'api.hit' },
    { field: 'url', matcher: 'substring', match: 'api/policy', metric: 'api.hit' }
];
// create and configure metrics collector
var collector = new index_1.MetricsCollector(function (metric) { return console.log(metric); });
collector.addMetrics(metricRules);
console.log("For input:\n---------------------\n" + JSON.stringify(inputData, null, 3) + "\n \nhits:\n---------------------");
// process input data
inputData.forEach(function (item) { return collector.measure(item); });
var num = [1, 3, 4, 5, 6, 7];
num.forEach(function (x) { return console.log(x); });
//# sourceMappingURL=index.js.map