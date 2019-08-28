import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    data:null
}

const getters = {
    dataShow(state){
        return state.data;
    }
}
const mutations = {
    changeData(state,dataDetail){
        state.data = dataDetail;
    }
}
const store = new Vuex.Store({
    state,
    getters,
    mutations
});
 
export default store;