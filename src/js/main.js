import groupList from "./components/group-list";
import groupInfo from "./components/group-info";
import dialogueWindow from "./components/dialogue-window";
import messages from "./components/messages";
import userInfo from "./components/user-info";

import settingsModal from "./components/settingsModal";
import changeState from './components/changeState'
import GetService from "./services/GetService";

window.addEventListener('DOMContentLoaded', () => {
    const state = {
        currentServer: 0,
        currentChannel: 0,
        selectedUser: '',
        searchQuery: '',
        data: {

        },
        getCurrentServer() {
            return this.data.servers[this.currentServer];
        },
        getCurrentChannel() {
        return this.getCurrentServer().channels[this.currentChannel];
        },
        setState(key, value) {
            this[key] = value;
            update();
            console.log(this);
        }
    }
    
    const setState = (key, value) => {
        state[key] = value;
        update();
    }
    
    const getService = new GetService();
    getService.getResource('/quadath')
    .then(res => {
        state.data = res;
        update();
    });

    settingsModal(state);
    changeState(state, setState);
    
    function update() {
        groupList(state);
        groupInfo(state);
        dialogueWindow(state);
        messages(state);
        userInfo(state);
    }

});
