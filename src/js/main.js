import groupList from "./components/group-list";
import groupInfo from "./components/group-info";
import messages from "./components/messages";

import changeState from './components/changeState'
import GetService from "./services/GetService";

window.addEventListener('DOMContentLoaded', () => {
    const state = {
        currentGroup: 0,
        currentChannel: 0,
        data: {

        },
        getCurrentGroup() {
            return this.data.servers[this.currentGroup];
        },
        getCurrentChannel() {
            return this.getCurrentGroup().channels[this.currentChannel];
        }
    }

    const changeStates = (key, value) => {
        state[key] = value;

        getService.getResource('/quadath')
            .then(res => {
                state.data = res;
                update();
            });
        console.log(state);
    }

    const getService = new GetService();
    getService.getResource('/quadath')
        .then(res => {
            state.data = res;
            update();
        });

    function update() {
        groupList(state);
        groupInfo(state);
        messages(state);

        changeState(state, changeStates);
    }

});
