import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import state from './state';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './localActions';

/* IF using localActions: 
add params to function inside all mounted() 
  IF using remoteActions:
remove params in function inside all mounted()
-------------------&&------------------
change function insertOnVueX to insertOnAPI 
+ change clear functions on Cart & Favorites Page
+ insert IDsArray inside () on clearAllRoutes()
on AppStateBtns component */

export default createStore({
  state,
  getters,
  mutations,
  actions,
  plugins: [createPersistedState()]
});
