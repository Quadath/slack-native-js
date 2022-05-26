import GetService from "../services/GetService";

const groupList = (data) => {
    const groupList = document.querySelector('.group-list');

    data.servers.forEach((item ,i) => {
        const groupListItem = document.createElement("div"),
        icon = document.createElement('img');
        icon.setAttribute('src', item.serverpic);
        
        groupListItem.append(icon);
        groupListItem.classList.add('group-list-icon');
        
        groupList.append(groupListItem);
    })
  
}
export default groupList;