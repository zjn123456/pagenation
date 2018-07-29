import React, { Component } from 'react';
import Pubsub from 'pubsub-js'

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newArr: [],
            index: 0,
            active_index:0,
        };
        
    }
    //点击上一页
    prevPage(){
        this.setState({
            index: this.state.index - 1,
        },function () {
            if(this.state.index==-1){
                this.state.index=this.props.newArr.length-1;
            }
            this.props.setPage(this.state.index)
            this.Change(this.state.index)
        })
    }
    //点击下一页
    nextPage(){
        this.setState({
            index: this.state.index + 1,
        },function(){
            if(this.state.index==this.props.newArr.length){
                this.state.index=0;
            }
            this.props.setPage(this.state.index)
            this.Change(this.state.index)
        })
    }
    //当前第几页
    Change(i){
        this.state.active_index=i;
    }
    render() {
        return (
            <div className="btns">
                <button
                    onClick ={() => {
                        this.prevPage()
                    }}
                >上一页
                </button>
                {
                    this.props.newArr.map((item, i) => {
                        return (
                            <button 
                                key={i}
                                onClick={(e) => {
                                    this.props.setPage(i)
                                    this.Change(i)
                                }}style={{background:(i===this.state.active_index?"orange":"")}}>{item}</button>
                        )
                    })
                }
                <button
                    onClick={()=>{
                        this.nextPage()
                    }}
                >下一页</button> </div>
        )
    }
}
export default Order;
