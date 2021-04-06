import React from 'react'

class Form extends React.Component{
    initialState={
        name:'',
        job:''
    }
    state= this.initialState

    handleChange=(event)=>{
        const {name, value}= event.target

        this.setState({
            [name]:value
        })
    }

    formSubmit=()=>{
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render(){
        const {name, job}= this.state
        return(
            <form>
                <label htmlFor="name">Name</label>
                <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={this.handleChange}/>
                <label htmlFor="job">Job</label>
                <input
                type="text"
                name="job"
                id="job"
                value={job}
                onChange={this.handleChange}/>
                <input type='button' value="submit" onClick={this.formSubmit}/>
            </form>
        )
    }
}
export default Form