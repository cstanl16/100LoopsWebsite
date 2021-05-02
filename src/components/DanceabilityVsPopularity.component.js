import React, { Component } from 'react'
import Chart from "chart.js";
import DanceabilityVsPopularityData from '../Chart Files/DanceVsPopularity.csv';
import * as d3 from "d3";
import chartTrendline from "chartjs-plugin-trendline";

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
			<main className="center" id="main">
				
				<div className="page-area">
					<div className="chartDescription">
						<h1>Chart Description: </h1>
						<p>
						This graph shows the relationship between the danceability of a song (as determined by the Spotify API)
						 and the popularity of the song. The graph shows five hundred data points randomly selected from a pool 
						 of forty-thousand. The white line represents the line of best fit. If the line is slanted up, there is 
						 a positive correlation between the danceability of a song and popularity. If the line is slanted down, 
						 there is a negative correlation between the danceability of a song and popularity. If the line is flat, 
						 there is no correlation between the two.
						</p>
					</div>
					
					<canvas
					id="DanceabilityVsPopularityChart"
					/>

				</div>
			</main>
        )
    }
}