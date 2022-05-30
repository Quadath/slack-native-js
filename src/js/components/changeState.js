const changeState = (state, changeState) => { 
    const channels = document.querySelectorAll('.group-info-channels-list-item span');
    
    channels.forEach(item => {
        item.addEventListener('click', () => {
            const index = state.data.servers[state.currentGroup].channels.findIndex((chan) => {
                return chan.name == item.childNodes[0].textContent.slice(2);
            })
            // console.log(`${state.data.servers[state.currentGroup].channels[0].name} ${item.childNodes[0].textContent.slice(2)}`)
            // console.log(state.data.servers[state.currentGroup].channels[0].name == item.childNodes[0].textContent.slice(2))
            changeState('currentChannel', index);
        })
    })
}

export default changeState;