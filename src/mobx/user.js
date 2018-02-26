/**
 * Created by SamMFFL on 2018/1/23.
 */
import {types} from 'mobx-state-tree';

const UserStore = types.model("UserStore", {
    id: types.identifier(),
    name: types.string,
    lastName: types.string,
    age: types.number,
    xp: types.number,
}).views(self => {
    return {
        get fullName() {
            return `${self.name} ${self.lastName}`;
        }
    };
}).actions(self => {
    return {
        changeName(name){
            self.name = name;
        },
        changeLastName(lastName){
            this.lastName = lastName;
        },
        increaseXp(amount){
            self.xp += amount;
        }
    };
});


export default UserStore;