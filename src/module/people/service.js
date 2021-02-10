import Api from '../../services/Api'
function get_list_of_people(){
    const url = '/store/pre-orders';
    const headers = {
        'Accept': 'application/json',
        'X-Requested-with': 'XMLHttpRequest'
    };
    return Api.get(url, headers);
}




export default{
    get_list_of_people
}