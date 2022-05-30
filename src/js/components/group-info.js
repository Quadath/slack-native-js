const groupInfo = (state) => {
    const data = state.data;
    const index = state.currentGroup;

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


        channelListItem.classList.add('group-info-channels-list-item');
        span.textContent = `# ${item.name}`
        channelListItem.append(span);

        channelList.append(channelListItem);
    })
}

export default groupInfo;