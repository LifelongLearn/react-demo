/**
 * Created by SamMFFL on 2018/1/24.
 */
import {observable, computed, action, autorun} from 'mobx';
class AppStore {
    @observable todos = []; // todo列表
    @observable loading = false;
    @observable _key = 0; // key
    @observable total = 0; // 数据量

    @action AddTodo = (title, content) => {
        this._key += 1;
        this.todos.push({title, content})
    };

    @computed get TodoListCount(){
        return this.todos.length;
    }
}

export default AppStore;