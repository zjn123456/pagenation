import React, { Component } from 'react';


class Page extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return(
            <div className='table'>
                <table className='tab' border='1' cellSpacing="0" bgcolor="#eee">
                    <thead>
                        <tr>
                            <th>Rendering engine</th>
                            <th>Browser</th>
                            <th>Platform(s)</th>
                            <th>English version</th>
                            <th>CSS grage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((item,index)=>{  
                            return(
                                <tr key={index}>
                                    <td>{item.tit}</td>
                                    <td>{item.bar}</td>
                                    <td>{item.con}</td>
                                    <td>{item.num}</td>
                                    <td>{item.grade}</td>
                                </tr>    
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Page;