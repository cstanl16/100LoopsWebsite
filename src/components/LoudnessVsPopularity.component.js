import React, { Component } from 'react'
import Chart from "chart.js";
import LoudnessVsPopularityData from '../Chart Files/LoudnessVsPopularity.csv';
import * as d3 from "d3";

export default class LoudnessVsPopularity extends Component {
    
    componentDidMount() {

        d3.csv(LoudnessVsPopularityData)
			.then(makeChart);
	
		function makeChart(LoudnessVsPopularityChart) {

			var popularity = LoudnessVsPopularityChart.map(function(d) {return d.popularity});
			var loudness = LoudnessVsPopularityChart.map(function(d) {return d.loudness});

			LoudnessVsPopularityChart = new Chart('LoudnessVsPopularityChart', {
				type: 'line',
				data: {
					labels: loudness,
					datasets: [{ 
						label: 'Loudness vs Popularity',
						data: popularity,
                        trendlineLinear: {
							style: "rgb(255 , 255, 255, 1)",
							lineStyle: "solid",
							width: 5
						},
						backgroundColor: [

							'rgba(30, 215, 96, 1)',
							'rgba(30, 215, 96, 1)',
							'rgba(30, 215, 96, 1)',
							'rgba(30, 215, 96, 1)',
							'rgba(30, 215, 96, 1)',
							'rgba(30, 215, 96, 1)',
							'rgba(30, 215, 96, 1)',
							'rgba(30, 215, 96, 1)',
							'rgba(30, 215, 96, 1)',
							'rgba(30, 215, 96, 1)',
							'rgba(30, 215, 96, 1)',
							'rgba(30, 215, 96, 1)',
							'rgba(30, 215, 96, 1)',
							'rgba(30, 215, 96, 1)',
							'rgba(30, 215, 96, 1)',
							'rgba(30, 215, 96, 1)',
							'rgba(30, 215, 96, 1)',
							'rgba(30, 215, 96, 1)',
							'rgba(30, 215, 96, 1)',
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
								labelString: 'Loudness'
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
                id="LoudnessVsPopularityChart"
                />

            </div>
        )
    }
}