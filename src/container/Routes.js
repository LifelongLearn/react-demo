/**
 * Created by SamMFFL on 2017/10/16.
 */
import HelloWorld from 'src/views/HelloWorld';
import NotFound from 'src/views/NotFound';
import UseMobxView from 'src/views/UseMobxView';

export default [
    {
        path: '/',
        exact: true, // 默认首页
        component: HelloWorld,
    },
    {
        path: '/mobx',
        component: UseMobxView,
    }
];