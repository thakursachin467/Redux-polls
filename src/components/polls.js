import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handlepolls } from '../actions/pools';
class Addpolls extends Component {
    state = {
        question: '',
        a: '',
        b: '',
        c: '',
        d: ''
    }

    handleInputChange = (e) => {

        const { value, name } = e.target;
        this.setState(() => ({
            [name]: value
        }))

    }

    isDisaled = () => {
        const { question, a, b, c, d } = this.state;
        return question === '' || a === '' || b === '' || c === '' || d === '';
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.dispatch(handlepolls(this.state))
        this.props.history.push('/');
    }
    render() {
        const { question, a, b, c, d } = this.state
        return (
            <form className="add-form" onSubmit={this.submitHandler}>
                <h3 style={{ marginBottom: 5 }}>What is Your Question</h3>
                <input
                    onChange={this.handleInputChange}
                    value={question}
                    name='question'
                    className="input"
                    type="text" />
                <h3>What are the options</h3>
                <label className='label' htmlFor='a' >A.</label>
                <input value={a} onChange={this.handleInputChange} name='a' className='input' id='a' type='text' />
                <label className='label' htmlFor='b' >B.</label>
                <input value={b} onChange={this.handleInputChange} name='b' className='input' id='b' type='text' />
                <label className='label' htmlFor='c' >C.</label>
                <input value={c} onChange={this.handleInputChange} name='c' className='input' id='c' type='text' />
                <label className='label' htmlFor='d' >D.</label>
                <input value={d} onChange={this.handleInputChange} name='d' className='input' id='d' type='text' />
                <button className="btn" type="submit" disabled={this.isDisaled()}>Submit</button>
            </form>
        )
    }
}
export default connect()(Addpolls);