const groupList = (state) => {
    const prevElemets = document.querySelectorAll('.group-list-icon'),
        groupList = document.querySelector('.group-list')
    
    prevElemets.forEach(item => {
        item.remove();
    })

    state.data.servers.forEach((item ,i) => {
        const groupListItem = document.createElement("div"),
        icon = document.createElement('img');
        icon.setAttribute('src', item.serverpic);
        
        groupListItem.append(icon);
        groupListItem.classList.add('group-list-icon');
        groupListItem.setAttribute('index', i);
        
        groupListItem.addEventListener('click', () => {
            state.setState('currentServer', i);
            state.setState('currentChannel', 0);
        })

        groupList.append(groupListItem);
    })
  
}
export default groupList;