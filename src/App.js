// (c) 2023 Brian Henderson
// This code is licensed under MIT license (see LICENSE.txt for details)
//
// Description:
// A placeholder front page for Hendy.ca.
// This app displays a random(ish) quote from a static predefined list.
//
// Contact:
// brian@hendy.ca

import React from 'react'

import Quotes from './Quotes';

import './App.css';
import Footer from './Footer';

function App() {
    return (
        <div>
            <div className="App">
                <h1>Hendy.ca </h1>
                <Quotes />
            </div>
            <div className="Footer">
                <Footer />
            </div>
        </div>
    );
}

export default App;
