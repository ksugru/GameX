import React from 'react';

export default class ClassComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    incCounter() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div className="shopping-list">
                 {this.state.counter}
                <button onClick={() => this.incCounter()}> Up </button>
            </div>
        );
    }
}

