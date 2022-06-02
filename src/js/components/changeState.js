const changeState = (state, setState) => { 
    const channels = document.querySelectorAll('.group-info-channels-list-item span'),
        searchInput = document.querySelector('.group-dialogue-header input');
    
    channels.forEach(item => {
        item.addEventListener('click', () => {
            const index = state.getCurrentGroup().channels.findIndex((chan) => {
                return chan.name == item.childNodes[0].textContent.slice(2);
            })
            setState('currentChannel', index);
        })
    });

    searchInput.addEventListener('input', () => {
        setState('searchQuery', searchInput.value);
    });
}

export default changeState;