// (c) 2023 Brian Henderson
// This code is licensed under MIT license (see LICENSE.txt for details)

import React, { Component } from "react"

export default class Footer extends Component { 

    linkedIn = { Label: "LinkedIn", Url: "https://www.linkedin.com/in/brianrosshenderson/" }
    contact = { Label: "Contact", Url: "mailto:brian@hendy.ca" }

    render()
    {
        return (
            <p>
                <a href={this.linkedIn.Url}>{this.linkedIn.Label}</a> | <a href={this.contact.Url}>{this.contact.Label}</a>
            </p>
        )
    }
};
