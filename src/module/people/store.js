import service from './service'
const module = {
    store: {
        
    },
    getters: {
       
    },
    mutations: {
        
    },
    actions:{
        loadPreOrderData({commit}, payload){
            return new Promise((resolve, reject) =>{
                service.get_list_of_people(payload).then(response =>{
                    commit('SET_PRE_ORDER_LIST', response.data);
                    resolve(response.data)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default module