import React from 'react'

const TableHeader=()=>{
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody=({charecterData, removeCharecter})=>{
    const row= charecterData.map((el,index)=>{
        return(
                <tr key={index}>
                    <td>{el.name}</td>
                    <td>{el.job}</td>
                    <td>
                        <button onClick={()=> removeCharecter(index)}>Delete</button>
                    </td>
                </tr>
        )
    })
    return <tbody>{row}</tbody>
}

class Table extends React.Component{
    render(){
        const {charecterData, removeCharecter}=this.props
        return(
            <table>
               <TableHeader/>
               <TableBody charecterData={charecterData} removeCharecter={removeCharecter}/>
               </table>
        )
    }
}

export default Table;