const settingsModal = (state) => {
    const settingsButton = document.querySelector('.group-info-settings'),
        modal = document.querySelector('.server-settings'),
        createChannel = modal.querySelector('[data-create-channel]'),
        invitePeople = modal.querySelector('[data-invite-people]'),
        leaveServer = modal.querySelector('[data-leave-server]');

    settingsButton.addEventListener('click', () => {
        modal.classList.toggle('active');
    });

    
}
export default settingsModal;