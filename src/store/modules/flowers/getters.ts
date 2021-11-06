import { GetterTree } from 'vuex';
import { State } from './state';
import UserInterface from '@/types/UserInterface';

export type FlowerGetters = {
    getLoggedUser(state: State): () => UserInterface | null;
};

export const getters: GetterTree<State, State> & FlowerGetters = {
    getLoggedUser: (state) => () => {
        return state.user;
    },
};
