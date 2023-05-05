// (c) 2023 Brian Henderson
// This code is licensed under MIT license (see LICENSE.txt for details)

import React, { Component } from "react"

export default class Quotes extends Component { 
    constructor(props) {
        super(props)
        this.quotes = [
            { quote: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.", person: "Antoine de Saint-Exupery" },
            { quote: "Any idiot can build a bridge that stands, but it takes an engineer to build a bridge that barely stands.", person: "Unknown" },
            { quote: "It is not knowledge but the act of learning, not possession but the act of getting there, which grants the greatest enjoyment.", person: "Carl Friedrich Gauss" },
            { quote: "When you want to know how things really work, study them when they're coming apart.", person: "William Gibson" },
            { quote: "Normal people believe that if it ain't broke, don't fix it. Engineers believe that if it ain't broke, it doesn't have enough features yet.", person: "Scott Adams" },
            { quote: "Computers are useless.  They can only give you answers.", person: "Pablo Picasso" },
            { quote: "The question of whether computers can think is like the question of whether submarines can swim.", person: "Edsger W. Dijkstra" },
            { quote: "...the only laws of matter are those which our minds must fabricate, and the only laws of mind are fabricated for it by matter.", person: "James Clerk Maxwell" },
            { quote: "Creativity is seeing what others see and thinking what no one else ever thought.", person: "Albert Einstein" },
            { quote: "If I have seen further than others, it is by standing upon the shoulders of giants.", person: "Isaac Newton" },
            { quote: "Just because we can't find a solution it doesn't mean that there isn't one.", person: "Andrew Wiles" },
            { quote: "Give me a lever long enough and a fulcrum on which to place it, and I shall move the world.", person: "Archimedes" },
            { quote: "It is impossible to be a mathematician without being a poet in soul.", person: "Sofia Kovalevskaya" },
            { quote: "I was taught that the way of progress was neither swift nor easy.", person: "Marie Curie" },
            { quote: "All sorts of things can happen when you’re open to new ideas and playing around with things.", person: "Stephanie Kwolek" },
            { quote: "As always in life, people want a simple answer... and it’s always wrong.", person: "Susan Greenfield" },
            { quote: "I didn’t want just to know the names of things. I remember really wanting to know how it all worked.", person: "Elizabeth Blackburn" }
        ]
    }
    componentDidMount() {
        const len = this.quotes.length
        const randomIndex = Math.floor(Math.random() * 100) % len
        this.setState({
            quote: this.quotes[randomIndex % len].quote,
            person: this.quotes[randomIndex % len].person
        })
    }

    render()
    {
        return (
            <div>
                <p>"{this.state?.quote ?? "You miss 100% of the shots you dont take - Wayne Gretzky"}"</p>
                <p>&emsp;- {this.state?.person ?? "Michael Scott"}</p>
            </div>
        )
    }
};
