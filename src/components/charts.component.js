import React, { Component } from 'react'
import Chart from "chart.js";
import ArtistVsDanceabilityData from '../Chart Files/ArtistVsDanceability.csv';
import DanceabilityVsPopularityData from '../Chart Files/DanceVsPopularity.csv';
import GenreVsPopularityData from '../Chart Files/GenreVsPopularity.csv';
import KeyVsPopularityData from '../Chart Files/KeyVsPopularity.csv';
import LoudnessVsPopularityData from '../Chart Files/LoudnessVsPopularity.csv';
import TempoVsPopularityData from '../Chart Files/TempoVsPopularity.csv';
import AcousticnessVsPopularityData from '../Chart Files/AcousticnessVsPopularity.csv';
import * as d3 from "d3";

export default class ChartPage extends Component {
    
    componentDidMount() {

		d3.csv(ArtistVsDanceabilityData)
			.then(makeChart);

		function makeChart(ArtistVsDanceabilityChart) {

			var artist = ArtistVsDanceabilityChart.map(function(d) {return d.artists});
			var danceability = ArtistVsDanceabilityChart.map(function(d) {return d.danceability});

			ArtistVsDanceabilityChart = new Chart('ArtistVsDanceabilityChart', {
				type: 'bar',
				data: {
					labels: artist,
					datasets: [{ 
						label: 'Artist vs Danceability',
						data: danceability,
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
								labelString: 'Artist'
							}
					    }],
					  	yAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'Danceability'
							}
					  	}]
					}
				}
			});
		}

//------------------------------------ Dance Vs Popularity -----------------------------------------
		d3.csv(DanceabilityVsPopularityData)
			.then(makeChart1);
	
		function makeChart1(DanceabilityVsPopularityChart) {

			var popularity = DanceabilityVsPopularityChart.map(function(d) {return d.popularity});
			var danceability = DanceabilityVsPopularityChart.map(function(d) {return d.danceability});

			DanceabilityVsPopularityChart = new Chart('DanceabilityVsPopularityChart', {
				type: 'line',
				data: {
					labels: danceability,
					datasets: [{ 
						label: 'Danceability vs Popularity',
						data: popularity,
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

						],
						trendlineLinear: {
							style: "rgb(255 , 255, 255, 1)",
							lineStyle: "solid",
							width: 5
						}
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

//------------------------------------ Genre Vs Popularity -----------------------------------------

		//FIX THIS CHART TO USE AVERAGES OF DATA
		d3.csv(GenreVsPopularityData)
			.then(makeChart2);
	
		function makeChart2(GenreVsPopularityChart) {
	
				var popularity = GenreVsPopularityChart.map(function(d) {return d.popularity});
				var genre = GenreVsPopularityChart.map(function(d) {return d.genre});
	
				GenreVsPopularityChart = new Chart('GenreVsPopularityChart', {
				type: 'line',
				data: {
					labels: genre,
					datasets: [{ 
						label: 'Genre vs Popularity',
						data: popularity,
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

						],
						trendlineLinear: {
							style: "rgb(255 , 255, 255, 1)",
							lineStyle: "solid",
							width: 5
						}
					}],
				},
				options: {
					scales: {
					  	xAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: 'Genre'
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

//------------------------------------ Key Vs Popularity -----------------------------------------

		d3.csv(KeyVsPopularityData)
			.then(makeChart3);
	
			function makeChart3(KeyVsPopularityChart) {
	
				var popularity = KeyVsPopularityChart.map(function(d) {return d.popularity});
				var key = KeyVsPopularityChart.map(function(d) {return d.key});
	
				KeyVsPopularityChart = new Chart('KeyVsPopularityChart', {
				type: 'line',
				data: {
					labels: key,
					datasets: [{ 
						label: 'Key vs Popularity',
						data: popularity,
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

						],
						trendlineLinear: {
							style: "rgb(255 , 255, 255, 1)",
							lineStyle: "solid",
							width: 5
						}
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
	
//------------------------------------ Acousticness Vs Popularity -----------------------------------------

		d3.csv(AcousticnessVsPopularityData)
			.then(makeChart4);
	
		function makeChart4(AcousticnessVsPopularityChart) {

			var popularity = AcousticnessVsPopularityChart.map(function(d) {return d.popularity});
			var acousticness = AcousticnessVsPopularityChart.map(function(d) {return d.acousticness});

			AcousticnessVsPopularityChart = new Chart('AcousticnessVsPopularityChart', {
				type: 'line',
				data: {
					labels: acousticness,
					datasets: [{ 
						label: 'Acousticness vs Popularity',
						data: popularity,
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

						],
						trendlineLinear: {
							style: "rgb(255 , 255, 255, 1)",
							lineStyle: "solid",
							width: 5
						}
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

//------------------------------------ Loudness Vs Popularity -----------------------------------------         
			
		d3.csv(LoudnessVsPopularityData)
			.then(makeChart5);
	
			function makeChart5(LoudnessVsPopularityChart) {
	
				var popularity = LoudnessVsPopularityChart.map(function(d) {return d.popularity});
				var loudness = LoudnessVsPopularityChart.map(function(d) {return d.loudness});
	
				LoudnessVsPopularityChart = new Chart('LoudnessVsPopularityChart', {
				type: 'line',
				data: {
					labels: loudness,
					datasets: [{ 
						label: 'Loudness vs Popularity',
						data: popularity,
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

						],
						trendlineLinear: {
							style: "rgb(255 , 255, 255, 1)",
							lineStyle: "solid",
							width: 5
						}
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

	//------------------------------------ Tempo Vs Popularity -----------------------------------------         
			
		d3.csv(TempoVsPopularityData)
			.then(makeChart6);

			function makeChart6(TempoVsPopularityChart) {

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

					],
					trendlineLinear: {
						style: "rgb(255 , 255, 255, 1)",
						lineStyle: "solid",
						width: 5
					}
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
	
	}//component did mount end

}//export end

//------------------------------------ Render Charts -----------------------------------------    
    
    render() {
        return (
            <div className="chartContainer">
				<canvas className="charts"
					id="ArtistVsDanceabilityChart"
				/>

				<canvas
				id="DanceabilityVsPopularityChart"
				/>

				<canvas
					id="GenreVsPopularityChart"
				/>

				<canvas
					id="KeyVsPopularityChart"
				/>

				<canvas
					id="AcousticnessVsPopularityChart"
				/>

				<canvas
					id="LoudnessVsPopularityChart"
				/>

				<canvas className="charts"
					id="TempoVsPopularityChart"
				/>
            </div>
        )
    }
}