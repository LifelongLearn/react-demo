/**
 * Created by SamMFFL on 2018/1/19.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class demo1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }

    }

    render() {
        const {show} = this.state;

        return (<div>
            <div>Hello DE!</div>
            <Link to={'/test'}> test
            </Link>
        </div>)
    }

    componentDidMount() {


    }
};