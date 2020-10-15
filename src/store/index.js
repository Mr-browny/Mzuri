import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user_profile: {
      first_name: 'Fariq',
      last_name: 'FreeLance',
      email: 'fariq.umar@gmail.com',
      number: '08012345678',
    },
    registered_business: [
      { id: 0, name: 'Boldseams Stitches', number: '08012345678', business_type: 'B', email: 'fariq.umar@gmail.com', business_industry: 'B', selected_country: 'B', RC_number: 'RC-906374', selected_state: 'B', selected_LGA: 'B',  address: '5 Abiola Way, Ikeja'},
      { id: 1, name: 'East West Farmers', number: '08012345678', business_type: 'B', email: 'fariq.umar@gmail.com', business_industry: 'B', selected_country: 'B', RC_number: 'BN-905374', selected_state: 'B', selected_LGA: 'B',  address: '5 Abiola Way, Ikeja'},
      { id: 2, name: 'Mizzle Pharmaceuticals', number: '08012345678', business_type: 'B', email: 'fariq.umar@gmail.com', business_industry: 'B', selected_country: 'B', RC_number: 'RC-907864', selected_state: 'B', selected_LGA: 'B',  address: '5 Abiola Way, Ikeja'},
      { id: 3, name: 'Wigan Automobiles', number: '08012345678', business_type: 'B', email: 'fariq.umar@gmail.com', business_industry: 'B', selected_country: 'B', RC_number: 'BN-524374', selected_state: 'B', selected_LGA: 'B',  address: '5 Abiola Way, Ikeja'},
    ]
  },
  mutations: {
    update_user(state, payload){
      state.user_profile = payload 
    },
    add_business(state, payload){
      state.registered_business.push(payload)
    },
    edit_business(state, payload){
       state.registered_business.forEach(bus => {
        if(bus.id == payload.id){
          bus = payload
        }

      })
      // state.registered_business = edited
    }
  },
  actions: {
    update_user({commit}, payload){
      commit('update_user', payload)
    },
    add_business({commit}, payload){
      commit('add_business', payload)
    },
    edit_business({commit}, payload){
      commit('edit_business', payload)
    },
  },
  modules: {}
});
