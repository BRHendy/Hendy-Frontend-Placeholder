import React, { Component } from "react"

export default class Quotes extends Component { 
    constructor(props) {
        super(props)
        this.quotes = [
            { quote: "\"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.\"", person: "Antoine de Saint-Exupery" },
            { quote: "\"Any idiot can build a bridge that stands, but it takes an engineer to build a bridge that barely stands.\"", person: "Unknown" },
            { quote: "\"It is not knowledge but the act of learning, not possession but the act of getting there, which grants the greatest enjoyment.\"", person: "Carl Friedrich Gauss" },
            { quote: "\"When you want to know how things really work, study them when they're coming apart.\"", person: "William Gibson" },
            { quote: "\"Normal people believe that if it ain't broke, don't fix it. Engineers believe that if it ain't broke, it doesn't have enough features yet.\"", person: "Scott Adams" },
            { quote: "\"Computers are useless.  They can only give you answers.\"", person: "Pablo Picasso" },
            { quote: "\"The question of whether computers can think is like the question of whether submarines can swim.\"", person: "Edsger W. Dijkstra" },
            { quote: "\"It is a good thing to have two ways of looking at a subject, and to admit that there are two ways of looking at it.\"", person: "James Clerk Maxwell" },
            { quote: "\"Creativity is seeing what others see and thinking what no one else ever thought.\"", person: "Albert Einstein" }
        ]
    }
    componentDidMount() {
        // Buying some extra ticks to ensure quotes is defined.
        const len = 8
        const randomIndex = Math.round(Math.random() * 100)
        this.setState({
            quote: this.quotes[randomIndex % len].quote,
            person: this.quotes[randomIndex % len].person
        })
    }

    render()
    {
        return (
            <p>{this.state?.quote}<br />
                - {this.state?.person}</p>
        )
    }
};
