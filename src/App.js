import React from 'react';
import Table from './Table'
import Form from './Form'

class App extends React.Component{
    state={
        charecters:[
        ]
    }

    removeCharecter=(index)=>{
        const {charecters}= this.state
        
        this.setState({
            charecters: charecters.filter((el, i)=> {
                return i!= index
            })
        })

    }

    handleSubmit=(charecters)=>{
        this.setState({
            charecters: [...this.state.charecters, charecters]
        })
    }

    render(){
        return(
            <div className="container">
                    <Table charecterData={this.state.charecters} removeCharecter={this.removeCharecter}/>
                    <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default App