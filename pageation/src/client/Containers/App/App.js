import React, { Component } from 'react';
import Pubsub from 'pubsub-js'
import Order from './Order';
import Page from './page'
import './style.css'
const arr = [];
for (var i = 0; i < 30; i++) {
    arr.push({
        tit: i % 2 == 1 ? "Camino" + (i + 1) : "Kowqqq" + (i + 1),
        bar: 'Firefox3.0',
        con: "Win 98+/ OSX.1+",
        num: i,
        grade: i % 2 == 1 ? "A" : "B",

    })
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listData: arr,
            data: [],
            age: this.props.age,//引用父组件的age
            page: 0,
            pageSize: 10,
            newpageSize: 10,
            total: 30,
            newArr:[],
        }
        this.setPage = this.setPage.bind(this);
        this.setBtn = this.setBtn.bind(this);
    }
    componentDidMount(){
        this.setBtn()
        this.setPage(this.state.page)
    }
    //设置当前页面显示内容
    setPage(index) {
        let pageArr = this.state.listData.slice((index) * this.state.pageSize, (index + 1) * this.state.pageSize)
        this.setState({
            data: pageArr,
        })
    }
    //设置页脚按钮
    setBtn() {
        const arr = [];
        for (let i = 0; i <  Math.ceil(this.state.total / this.state.pageSize); i++) {
            arr.push((i+1)+"页");
        }
        this.setState({
            newArr: arr,
        });
        console.log(arr)
    }
    //折叠 显示/隐藏
    Show() {
        let table = this.refs['isShow'];
        let isShow = table.style.display;
        if (isShow == 'none') {
            table.style.display = 'block';
            this.refs['btn'].innerHTML = "┻"
        }
        else {
            table.style.display = 'none';
            this.refs['btn'].innerHTML = "┰"
        }
    }
    render() {
        return (
            <div className='box'>
                {/* {this.state.age} */}
                <div className='nav'><h4>Bassic Data Tables Example</h4><p><span ref={'btn'} onClick={() => {
                    this.Show()
                }}>┻</span><span>۞</span></p></div>
                <div>show<select ref='sele' defaultValue={this.state.pageSize} onChange={() => {
                    this.state.pageSize = this.refs.sele.value 
                    this.state.newpageSize = this.refs.sele.value     
                    this.setBtn()   
                    this.setPage(0)           
                    
                }}><option>5</option><option>10</option><option>15</option></select>条</div>
                <div>search<input type='text' ref={'input'} defaultValue={this.state.listData.bar} onKeyUp={()=>{
                    if(this.refs.input.value==""){
                        this.refs.search.innerHTML=''
                        this.refs.isShow.style.display='block'
                    } 
                    else{
                        this.refs.search.innerHTML=''//不赋值为空会渲染两次
                        for(var j = 0;j < this.state.listData.length;j++){
                            if(this.state.listData[j].tit.indexOf(this.refs.input.value)==0){
                                console.log(j)
                                this.refs.search.innerHTML+="<li>"+this.state.listData[j].tit+"</li>"
                            }
                        } 
                        this.refs.isShow.style.display='none' 
                    }
                    
                }}/></div>
                <div ref={'search'}></div>
                <div ref={'isShow'} style={{ display: 'block' }}>
                    <Page data={this.state.data} />
                    <Order 
                        total={this.state.total} 
                        newArr={this.state.newArr} 
                        pageSize={this.state.newpageSize} 
                        setPage={this.setPage} 
                        setBtn={this.setBtn}
                    />
                </div>
            </div>
        )
    }
}
export default App;
