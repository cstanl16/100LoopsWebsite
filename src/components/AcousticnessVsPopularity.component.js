import React, { Component } from 'react'
import Chart from "chart.js";
import AcousticnessVsPopularityData from '../Chart Files/AcousticnessVsPopularity.csv';
import * as d3 from "d3";

export default class AcousticnessVsPopularity extends Component {
    
    componentDidMount() {

        d3.csv(AcousticnessVsPopularityData)
			.then(makeChart);
	
		function makeChart(AcousticnessVsPopularityChart) {

			var popularity = AcousticnessVsPopularityChart.map(function(d) {return d.popularity});
			var acousticness = AcousticnessVsPopularityChart.map(function(d) {return d.acousticness});

			AcousticnessVsPopularityChart = new Chart('AcousticnessVsPopularityChart', {
				type: 'line',
				data: {
					labels: acousticness,
					datasets: [{ 
						label: 'Acousticness vs Popularity',
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
								labelString: 'Acousticness'
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
                id="AcousticnessVsPopularityChart"
                />

            </div>
        )
    }
}