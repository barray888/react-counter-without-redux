import React from 'react'
import ReactDOM from 'react-dom'

import Counter from './components/Counter'

class Par extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        }
    }
    handleIncrement() {
        let tmpNum = this.state.num;
        this.setState({
            num: ++tmpNum
        })
    }
    handleDecrement() {
        let tmpNum = this.state.num;
        this.setState({
            num: --tmpNum
        })
    }
    render() {
        return (
            <Counter
                value={this.state.num}
                onIncrement={() => this.handleIncrement()}
                onDecrement={() => this.handleDecrement()}
            />
        );
    }
}

ReactDOM.render(
    <Par />,
    document.getElementById('root')
);