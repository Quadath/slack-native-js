const userInfo = (state) => {
    const name = document.querySelector('.user-info-name'),
        username = document.querySelector('.user-info-details-username'),
        email = document.querySelector('.user-info-details-email'),
        skype = document.querySelector('.user-info-details-skype'),
        actionsButton = document.querySelector('.user-info-actions-other'),
        actionsModal = document.querySelector('.user-info-actions-modal');

    actionsButton.addEventListener('click', () => {
        actionsModal.classList.toggle('active');
    });

    users = state.data.users;
    if(state.selectedUser) {
        user = users.find(item => item.name == state.selectedUser)
        if(user) {
            name.textContent = user.name;
            username.textContent = `@${user.username}`;
            email.textContent = user.email;
            skype.textContent = user.skype
        }
    }
}
export default userInfo;

