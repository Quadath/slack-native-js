const changeState = (state, setState) => { 
    const channels = document.querySelectorAll('.group-info-channels-list-item span'),
        searchInput = document.querySelector('.group-dialogue-header input'),
        messageInput = document.querySelector('#send-message');
    
    channels.forEach(item => {
        item.addEventListener('click', () => {
            const index = state.getCurrentServer().channels.findIndex((chan) => {
                return chan.name == item.childNodes[0].textContent.slice(2);
            })
            setState('currentChannel', index);
        })
    });

    searchInput.addEventListener('input', () => {
        setState('searchQuery', searchInput.value);
    });

    document.addEventListener('keyup', (e) => {
        if (e.code == 'Enter') {
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
            console.log(newData.servers[state.currentChannel].channels[state.currentChannel].messages);
            newData.servers[state.currentChannel].channels[state.currentChannel].messages.push(newMessage);
            setState('data', newData);
        }
    })
}

export default changeState;