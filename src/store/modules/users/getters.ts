import { GetterTree } from 'vuex';
import { State } from './state';
import UserInterface from '@/types/UserInterface';

export type UserGetters = {
    getLoggedUser(state: State): () => UserInterface | null;
};

export const getters: GetterTree<State, State> & UserGetters = {
    getLoggedUser: (state) => () => {
        return state.user;
    },
};
