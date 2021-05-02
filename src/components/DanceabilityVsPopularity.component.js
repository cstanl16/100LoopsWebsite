import React, { Component } from 'react'
import Chart from "chart.js";
import DanceabilityVsPopularityData from '../Chart Files/DanceVsPopularity.csv';
import * as d3 from "d3";

export default class DanceabilityVsPopularity extends Component {
    
    componentDidMount() {

        d3.csv(DanceabilityVsPopularityData)
			.then(makeChart);
	
		function makeChart(DanceabilityVsPopularityChart) {

			var popularity = DanceabilityVsPopularityChart.map(function(d) {return d.popularity});
			var danceability = DanceabilityVsPopularityChart.map(function(d) {return d.danceability});

			DanceabilityVsPopularityChart = new Chart('DanceabilityVsPopularityChart', {
				type: 'line',
				data: {
					labels: danceability,
					datasets: [{ 
						label: 'Danceability vs Popularity',
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
								labelString: 'Danceability'
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
                id="DanceabilityVsPopularityChart"
                />

            </div>
        )
    }
}