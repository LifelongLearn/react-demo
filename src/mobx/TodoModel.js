/**
 * Created by SamMFFL on 2018/1/22.
 */
import { observable } from "mobx";

export default class TodoModel {
    id = Math.random();
    @observable title;
    @observable finished = false;

    constructor(title) {
        this.title = title;
    }
}
