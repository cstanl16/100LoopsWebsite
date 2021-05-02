import React, { Component } from 'react'
import Chart from "chart.js";
import TempoVsPopularityData from '../Chart Files/TempoVsPopularity.csv';
import * as d3 from "d3";
import chartTrendline from "chartjs-plugin-trendline";

export default class TempoVsPopularity extends Component {
    
    componentDidMount() {

        d3.csv(TempoVsPopularityData)
			.then(makeChart);
	
		function makeChart(TempoVsPopularityChart) {

			var popularity = TempoVsPopularityChart.map(function(d) {return d.popularity});
			var tempo = TempoVsPopularityChart.map(function(d) {return d.tempo});

			TempoVsPopularityChart = new Chart('TempoVsPopularityChart', {
				type: 'line',
				data: {
					labels: tempo,
					datasets: [{ 
						label: 'Tempo vs Popularity',
						data: popularity,
						backgroundColor: [
							'rgba(30, 215, 96, 1)'
						],
						trendlineLinear: {
							style: "rgba(255 , 255, 255, 1)",
							lineStyle: "solid",
							width: 5
						},
					}],
				},
				options: {
					scales: {
					  	xAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'Tempo'
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
                id="TempoVsPopularityChart"
                />

            </div>
        )
    }
}