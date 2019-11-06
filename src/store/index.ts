import Vue from 'vue'
import Vuex from 'vuex'

import {state, getters} from './todos'

Vue.use(Vuex)

export default new Vuex.Store({state, getters})