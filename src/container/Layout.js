/**
 * Created by SamMFFL on 2017/10/16.
 */
import React, {
    Component,
    cloneElement
} from 'react';
import PropTypes from 'prop-types';
import {
    Switch,
    Route,
    HashRouter,
    withRouter,
    // hashHistory,
} from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';

import {Provider, observer} from 'mobx-react';

import AppStore from '../stores/AppStore';
import routes from './routes';
import NotFound from 'src/views/NotFound';


const appStore = new AppStore();

const store = {
    appStore: appStore,
};


class Layout extends Component {

    render() {
        return (
            <Provider {...store}>
                <HashRouter>
                    <div>
                        <Switch>
                            {routes.map((route, i) => <Route key={i} exact={!!route.exact} path={route.path}
                                                             component={route.component}/>)}
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </HashRouter>
            </Provider>
        );
    }
}

export default Layout;

