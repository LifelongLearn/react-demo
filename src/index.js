/**
 * Created by SamMFFL on 2017/9/23.
 */

import "babel-polyfill";
import 'flexible';
import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import DevTools from 'mobx-react-devtools';
import './assets/styles/index.css';
import App from './container/Layout';


render([
        <App key="0"/>,
        <DevTools key="1"/>
    ],
    document.querySelector("#root"));