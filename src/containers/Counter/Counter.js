import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:return
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.decrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.incrementFive}  />
                <CounterControl label="Subtract 5" clicked={this.props.decrementFive}  />

                <hr/>
                <button onClick={this.props.onStoreResult}>Store Result</button>
                
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li onClick={this.props.deleteStoreResult}>{strResult}</li>
                    ))}
                </ul>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    }
};

const mapDispatchToProps = dispatch => {
    return{
      onIncrementCounter: () => dispatch({type:'INCREMENT'}),
      decrementCounter: () => dispatch({type:'DECREMENT'}),
      incrementFive: () => dispatch({type:'ADD', value:5}),
      decrementFive: () => dispatch({type:'SUBSTRACT', value:5}),
      onStoreResult: () => dispatch({type:'STORE_RESULT'}),
      deleteStoreResult: () => dispatch({type:'DELETE_RESULT'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);