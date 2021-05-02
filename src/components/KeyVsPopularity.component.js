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
			<main className="center" id="main">
				
				<div className="page-area">
					<div className="chartDescription">
						<h1>Chart Description: </h1>
						<p>
							This graph shows the relationship between the key of a song (as determined by the Spotify API)
							and the popularity of the song. The graph shows five hundred data points randomly selected from a pool 
							of forty-thousand. The white line represents the line of best fit. If the line is slanted up, there is 
							a positive correlation between the danceability of a song and popularity. If the line is slanted down, 
							there is a negative correlation between the danceability of a song and popularity. If the line is flat, 
							there is no correlation between the two.
						</p>
					</div>
					
					<canvas
					id="KeyVsPopularityChart"
					/>

				</div>
			</main>
        )
    }
}