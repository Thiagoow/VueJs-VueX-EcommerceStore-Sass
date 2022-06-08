import { createStore } from 'vuex';

import state from './state';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './remoteActions';

/* IF using localActions: 
add params to function inside all mounted() 

  IF using remoteActions:
remove params in function inside all mounted()
-------------------&&------------------
change function insertOnVueX to insertOnAPI 
on AppStateBtns component */

export default createStore({
  state,
  getters,
  mutations,
  actions
});
