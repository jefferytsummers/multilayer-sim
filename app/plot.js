
var x_axis = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90];
var y_axis = [0.0, 0.2, 0.4, 0.6, 0.8, 1.0];

var refPlot = {
    x: x_axis,
    y: y_axis,
    // yaxis: 'Reflection',
    type: 'scatter'
}
var tranPlot = {
    x: x_axis,
    y: y_axis,
    yaxis: 'y2',
    type: 'scatter'
}

var data = [refPlot, tranPlot];
var layout = {
    // legend: {traceorder: 'reversed'},
    yaxis: {domain: [0.0, 0.5],
            title: "Reflection"
           },
    yaxis2: {domain: [0.5, 1.0],
             title: "Transmission"
           }
    }
Plotly.newPlot('plot', data, layout, {responsive: true})