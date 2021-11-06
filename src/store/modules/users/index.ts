import { Module } from 'vuex';
import { state, State } from './state';
import { mutations } from './mutations';
import { getters } from './getters';
import { actions } from './actions';

const UserModule: Module<State, State> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};

export default UserModule;
