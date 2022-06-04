const groupInfo = (state) => {
    const data = state.data;
    const index = state.currentServer;
        const prevChannels = document.querySelectorAll('.group-info-channels-list-item'),
        channelList = document.querySelector('.group-info-channels-list'),
        channelCount = document.querySelector('#channel-count');

    channelCount.textContent = data.servers[index].channels.length;

    prevChannels.forEach(item => {
        item.remove();
    })

    data.servers[index].channels.forEach((item, i) => {
        const channelListItem = document.createElement('div'),
        span = document.createElement('span');

        if (i == state.currentChannel) {
            channelListItem.classList.add('active');
        }
        channelListItem.classList.add('group-info-channels-list-item');
        span.textContent = `# ${item.name}`
        channelListItem.append(span);

        channelListItem.addEventListener('click', () => {
            const index = state.getCurrentServer().channels.findIndex((chan) => {
                return chan.name == channelListItem.childNodes[0].textContent.slice(2);
            })
            state.setState('currentChannel', index);
        });
        channelList.append(channelListItem);
    })
}

export default groupInfo;