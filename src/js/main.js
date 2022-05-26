import groupList from "./components/group-list";
import GetService from "./services/GetService";

window.addEventListener('DOMContentLoaded', () =>{
    const getService = new GetService();
    getService.getResource('/quadath')
        .then(res => update(res));

    function update(data) {

        groupList(data);
    }

});
