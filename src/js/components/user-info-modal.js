const userInfoModal = (state) => {
    const modal = document.querySelector('.user-info-modal'),
        profilepic = document.querySelector('.user-info-modal-profilepic'),
        username = document.querySelector('.user-info-modal-name'),
        description = document.querySelector('.user-info-modal-about');

    user = state.data.users.find(item => item.name == state.selectedUser);

    username.textContent = user.name;
    profilepic.setAttribute('src', user.profilepic);
    description.textContent = 'Hello!';
}
export default userInfoModal;