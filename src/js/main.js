import groupList from "./components/group-list";
import groupInfo from "./components/group-info";
import GetService from "./services/GetService";

window.addEventListener('DOMContentLoaded', () =>{
    let currentGroup = 0;

    const getService = new GetService();
    getService.getResource('/quadath')
        .then(res => update(res));

    function update(data) {
        groupList(data);
        groupInfo(data, currentGroup);
    }

});
