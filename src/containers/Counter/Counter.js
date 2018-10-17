import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

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
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.deleteStoreResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counterCombine.counter,
        storedResults: state.resultsCombine.results
    }
};

const mapDispatchToProps = dispatch => {
    return{
      onIncrementCounter: () => dispatch({type:actionTypes.INCREMENT}),
      decrementCounter: () => dispatch({type:actionTypes.DECREMENT}),
      incrementFive: () => dispatch({type:actionTypes.ADD, value:5}),
      decrementFive: () => dispatch({type:actionTypes.SUBSTRACT, value:5}),
      onStoreResult: (result) => dispatch({type:actionTypes.STORE_RESULT, result: result}),
      deleteStoreResult: (id) => dispatch({type:actionTypes.DELETE_RESULT, elementId:id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);