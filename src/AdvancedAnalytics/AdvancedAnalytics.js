import React from 'react';

function HomePage() {
  return (
    <div>
        <main className="center" id="main">
            <div className="page-area">

                <div className="homepageText">
                    <h1>Attributes to target in songs: </h1>
                    <p>
                        When trying to find the next big artist, it's important to analyze attributes 
                        present in their songs. Through machine learning, the attributes below have been 
                        generated for ideal popular songs. It would be advisable tp follow the pattern 
                        presented by the attributes to check if they match with the targeted artists' songs.
                    </p>
                </div>

                <div className="homepageTextLeft">
                    <h1>Possible Attributes</h1>
                    <ul>
                        <li>Acoustic / Non-Acoustic</li>
                        <li>Danceable / Non-Danceable</li>
                        <li>Loud / Medium / Quiet</li>
                        <li>Slow / Medium / Fast Tempo</li>
                        <li>Key Signatures</li>
                    </ul>
                </div>

                <div className="homepageTextRight">
                    <h1>AI Suggested Attributes</h1>
                    <ul>
                        <li>Non-Acoustic</li>
                        <li>Danceable</li>
                        <li>Loud</li>
                        <li>Medium Tempo</li>
                        <li>Key of C</li>
                    </ul>
                </div>

            </div>
        </main>
    </div>
  );
}

export default HomePage;
