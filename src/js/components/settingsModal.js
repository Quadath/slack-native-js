const settingsModal = (state) => {
    const settingsButton = document.querySelector('.group-info-settings'),
        modal = document.querySelector('.server-settings'),
        createChannelForm = document.querySelector('.create-channel-form'),
        createChannel = modal.querySelector('[data-create-channel]'),
        invitePeople = modal.querySelector('[data-invite-people]'),
        leaveServer = modal.querySelector('[data-leave-server]');

    settingsButton.addEventListener('click', () => {
        modal.classList.toggle('active');
        createChannelForm.classList.remove('active');
    });

    createChannel.addEventListener('click', () => {
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
    })
}
export default settingsModal;