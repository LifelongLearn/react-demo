/**
 * Created by SamMFFL on 2018/1/22.
 */
import React, {Component} from 'react';
import {observer, inject} from 'mobx-react'
import {Link} from 'react-router-dom'
import {observable, action, autorun} from "mobx";
import autoBind from 'autobind-decorator';

@inject('appStore')
@observer
export default class UseMobxView extends Component {

    componentDidMount() {
        console.log(this.props);
        const {appStore} = this.props;
        let count =0 ;
        setInterval(()=>{
            appStore.AddTodo(`标题${count}`,`内容${count}`);
            count++;
        },2000)
    }

    render() {
        const {appStore} = this.props;
        const {todos,TodoListCount}  = appStore;

        return (<div>
            <Link to="/">查看总数:{TodoListCount}</Link>
            {todos.map((item,index)=>(<div key={index}>{item.title} - {item.content}</div>))}
        </div> );
    }

}