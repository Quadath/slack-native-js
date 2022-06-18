const userActionsModal = () => {
    const profileButton = document.querySelector('[data-user-profile]'),
    actionsButton = document.querySelector('.user-info-actions-other'),
    actionsModal = document.querySelector('.user-info-actions-modal');
    userInfoModalClose = document.querySelector('[data-user-profile-close]'),
    userInfoModal = document.querySelector('.user-info-modal');

    actionsButton.addEventListener('click', () => {
        actionsModal.classList.toggle('active');
    });

    userInfoModalClose.addEventListener('click', () => {
        userInfoModal.classList.toggle('active');
    });

        // friendButton = document.querySelector('.'),
        // blockButton = document.querySelector('.'),
        // idButton = document.querySelector('.');

    profileModal = document.querySelector('.user-info-modal');

    profileButton.addEventListener('click', () => {
        profileModal.classList.toggle('active');
    })
}
export default userActionsModal;