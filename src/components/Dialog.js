/**
 * Created by SamMFFL on 2018/1/19.
 */

import React from 'react';
import {createPortal} from 'react-dom';
export default class Dialog extends React.Component {
    constructor() {
        super(...arguments);

        const doc = window.document;
        this.node = doc.createElement('div');
        this.node.id = 'tt'
        doc.body.appendChild(this.node);
    }

    render() {
        return createPortal(
            <div className="dialog">
                {this.props.children}
            </div>, //塞进传送门的JSX
            this.node //传送门的另一端DOM node
        );
    }

    componentWillUnmount() {
        window.document.body.removeChild(this.node);
    }
}