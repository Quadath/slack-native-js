const dialogueWindow = (state) => {
    const groupName = document.querySelector('.group-dialogue-title'),
        searchInput = document.querySelector('.group-dialogue-header input');

    

    groupName.textContent = "#" + state.getCurrentChannel().name;
}
export default dialogueWindow;