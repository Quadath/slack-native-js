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
        currentServer: loadKey('currentServer', 0),
        currentChannel: loadKey('currentChannel', 0),
        messageInputValue: loadKey('messageInputValue', ''),
        selectedUser: loadKey('selectedUser', ''),
        searchQuery: loadKey('searchQuery', ''),
        data: {

        },

        getCurrentServer() {
            if (this.data.servers[this.currentChannel]) {
                return this.data.servers[this.currentServer];
            } else {
                return {
                    id: 0,
                    name: 'No server',
                    serverpic: '',
                    channels: [
                        {
                            name: 'no channels',
                            messages: [
                                
                            ]
                        }
                    ]
                }
            }
        },
        getCurrentChannel() {
            return this.getCurrentServer().channels[this.currentChannel];
        },
        setStates(value) {
            Object.keys(value).forEach(item => {
                this[item] = value[item];
            })
            update();
            this.saveData();
            // console.log(this);
        },
        setState(key, value) {
            this[key] = value;
            update();
            this.saveData();
            // console.log(this);   
        },
        saveData() {
            localStorage.setItem('currentServer', this.currentServer);
            localStorage.setItem('currentChannel', this.currentChannel);
            localStorage.setItem('messageInputValue', this.messageInputValue);
            localStorage.setItem('selectedUser', this.selectedUser);
            localStorage.setItem('searchQuery', this.searchQuery);
        },
        setValueFromObject(key) {
            console.log(key);
        }
    }
    function loadKey(key, def) {
        if(localStorage.getItem(key)) {
            value = localStorage.getItem(key);
            if (typeof(value) === typeof(def)) {
                return value
            } else {
                return parseInt(value);
            }
        } else {
            return def;
        }
    }

    const getService = new GetService();
    getService.getResource('/quadath')
    .then(res => {
        state.data = res;
        update();
    });

    settingsModal(state);
    changeState(state);
    
    function update() {
        groupList(state);
        groupInfo(state);
        dialogueWindow(state);
        messages(state);
        userInfo(state);
    }

});
if (0 === 1) {
    console.log('')
}
