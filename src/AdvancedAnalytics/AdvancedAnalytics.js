import React from 'react';

function HomePage() {
  return (
    <div>
        <main className="center" id="main">
            <div className="page-area">

                <div className="homepageText">
                    <h1>TEST</h1>
                    <p>
                        Deep Music Dive is a web-based product that provides insight towards upcoming trends 
                        and artists using graphs, charts, and other power visualizations of data. Here you can 
                        view trends in the music industry and use that information to pick out the next big artist.
                    </p>
                </div>

                <div className="homepageText">
                    <h1>How to Use</h1>
                    <p>
                        Click on the Tabs above to get started. Visual Analysis will show you charts and graphs
                        comparing the popularity of an artist to attributes of their songs, such as danceability,
                        loudness, etc. Attribute Analysis will show you AI generated attributes that are associated
                        with the most popular artists.
                    </p>
                </div>

            </div>
        </main>
    </div>
  );
}

export default HomePage;
