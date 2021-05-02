import React, { Component } from 'react'
import Chart from "chart.js";
import KeyVsPopularityData from '../Chart Files/KeyVsPopularity.csv';
import * as d3 from "d3";
import chartTrendline from "chartjs-plugin-trendline";

export default class KeyVsPopularity extends Component {
    
    componentDidMount() {

        d3.csv(KeyVsPopularityData)
			.then(makeChart);
	
		function makeChart(KeyVsPopularityChart) {

			var popularity = KeyVsPopularityChart.map(function(d) {return d.popularity});
			var key = KeyVsPopularityChart.map(function(d) {return d.key});

			KeyVsPopularityChart = new Chart('KeyVsPopularityChart', {
				type: 'line',
				data: {
					labels: key,
					datasets: [{ 
						label: 'Key vs Popularity',
						data: popularity,
                        trendlineLinear: {
							style: "rgb(255 , 255, 255, 1)",
							lineStyle: "solid",
							width: 5
						},
						backgroundColor: [
							'rgba(30, 215, 96, 1)'
						]
					}],
				},
				options: {
					scales: {
					  	xAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'Key'
							}
					    }],
					  	yAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'Popularity'
							}
					  	}]
					}
				}
			});
		}
    }

    render() {
        return (
            <div className="chartContainer">

                <canvas
                id="KeyVsPopularityChart"
                />

            </div>
        )
    }
}