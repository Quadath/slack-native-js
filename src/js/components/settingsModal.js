const settingsModal = (state) => {
    const settingsButton = document.querySelector('.group-info-settings'),
        modal = document.querySelector('.server-settings'),
        createChannelForm = document.querySelector('.create-channel-form'),
        leaveServerModal = document.querySelector('.leave-server-modal'),
        createChannel = modal.querySelector('[data-create-channel]'),
        invitePeople = modal.querySelector('[data-invite-people]'),
        leaveServer = modal.querySelector('[data-leave-server]');

    settingsButton.addEventListener('click', () => {
        modal.classList.toggle('active');
        createChannelForm.classList.remove('active');
        leaveServerModal.classList.remove('active');
    });

    createChannel.addEventListener('click', (e) => {
        e.preventDefault();
        leaveServerModal.classList.remove('active');
        createChannelForm.classList.toggle('active');
    })
    createChannelForm.addEventListener('submit', (e) => {
        const nameInput = createChannelForm.querySelector('input');
        if (nameInput.value.replace(/\s/g, "").length > 0 && !nameInput.value == '') {
            e.preventDefault();
            const newData = state.data;
    
            const channel = {
                name: nameInput.value,
                messages: []
            }
            modal.classList.remove('active');
            createChannelForm.classList.remove('active');
            nameInput.value = '';

            newData.servers[state.currentServer].channels.push(channel);
            state.setState('data', newData);
        }
    });
    
    leaveServer.addEventListener('click', (e) => {
        e.preventDefault();
        createChannelForm.classList.remove('active');
        leaveServerModal.classList.toggle('active');
    });
    leaveServerModal.querySelector('button').addEventListener('click', (e) => {
        e.preventDefault();
        const newData = state.data;

        newServers = newData.servers.filter(item => item.name != state.getCurrentServer().name);
        newData.servers = newServers;
        state.setState('data', newData);
        
        modal.classList.remove('active');
        leaveServerModal.classList.remove('active');
    });
}
export default settingsModal;