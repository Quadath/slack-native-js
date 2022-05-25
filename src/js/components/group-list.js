import GetService from "../services/GetService";

const groupList = () => {
    const getService = new GetService();
    const groupList = document.querySelector('.group-list');

    let data;

    getService.getResource('/quadath')
        .then((res) => data = res);
    console.log(data);
}
export default groupList;