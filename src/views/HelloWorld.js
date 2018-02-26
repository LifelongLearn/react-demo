/**
 * Created by SamMFFL on 2017/10/16.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Dialog from '../components/Dialog';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css'
import {observer, inject} from 'mobx-react'

@inject('appStore')
@observer
export default class HelloWorld extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        console.log(props);
    }

    render() {
        const {show} = this.state;
        const {appStore} = this.props;
        const {TodoListCount}  = appStore;

        return (<div>
            <address> 华展路</address>
            <DatePicker />
            <div otitle="asdf">Hello World!</div>
            <Link to={'/mobx'}> mobx</Link>
            {!!show && <Dialog >
                <Child />
            </Dialog>}
            <button onClick={() => {
                this.setState({show: true});
            }}>显示弹框 {TodoListCount}
            </button>
        </div>)
    }

    componentDidMount() {


    }
};

function Child() {
    // The click event on this button will bubble up to parent,
    // because there is no 'onClick' attribute defined
    return (
        <div className="modal">
            <button>Click</button>
        </div>
    );
}