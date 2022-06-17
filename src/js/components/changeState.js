const changeState = (state) => {
    const channels = document.querySelectorAll('.group-info-channels-list-item span'),
        searchInput = document.querySelector('.group-dialogue-header input'),
        messageInput = document.querySelector('#send-message');

    messageInput.value = state.messageInputValue;
    channels.forEach(item => {
        console.log('called')
        item.addEventListener('click', () => {
            const index = state.getCurrentServer().channels.findIndex((chan) => {
                return chan.name == item.childNodes[0].textContent.slice(2);
            })
            setState('currentChannel', index);
        })
    });

    searchInput.addEventListener('input', () => {
        state.setState('searchQuery', searchInput.value);
    });
    messageInput.addEventListener('input', () => {
        state.setState('messageInputValue', messageInput.value);
    });
    document.addEventListener('keyup', (e) => {
        if (e.code == 'Enter') {
            let str = messageInput.value;

            if (str.replace(/\s/g, "").length > 0 && !messageInput.value == '') {
                newData = state.data;

                const newMessage = {
                    order: {
                        name: "Quadath",
                        profilepic: "https://avatars.githubusercontent.com/u/91686101?s=96&v=4"
                    },
                    time: new Date().getTime(),
                    text: messageInput.value
                }
                messageInput.value = '';
                newData.servers[state.currentServer].channels[state.currentChannel].messages.push(newMessage);
                state.setStates({
                    messageInputValue: '',
                    data: newData
                });
            }
        }
    })
}

export default changeState;