import React, { Component } from 'react'
const allNumerals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


//rcc is the shortcut foor this part
export default class Filter extends Component {
    // rconst is the shortcut for this part
    constructor(props) {
        super(props)

        this.state = {
            numbers: allNumerals
        }
    }

    handleChange = (event) => {
        //User makes Selection
        const selectedNum = event.target.value;
        let newNums;
        //Selection is checked
        if (selectedNum === "odd") {
            newNums = allNumerals.filter(number => number % 2 === 1);
            this.setState({ numbers: newNums })
        }
        else if (selectedNum === "even") {
            newNums = allNumerals.filter(number => number % 2 === 0);
            this.setState({ numbers: newNums })
        }
        else {
            this.setState({ numbers: allNumerals })
        };
    }
    //Selection is returned to the user
    render() {
        return (
            <>
                <form>
                    <select onChange={this.handleChange}>
                        <option value="none">All</option>
                        <option value="even">Even</option>
                        <option value="odd">Odd</option>
                    </select>
                </form>
                {this.state.numbers.map(number => {
                    return (
                        <h1>{number}</h1>
                    )
                })}
            </>
        )
    }
}
