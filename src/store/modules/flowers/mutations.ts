import { MutationTree } from 'vuex';
import { State } from './state';
import UserInterface from '@/types/UserInterface';

export enum FlowerMutationType {
    SET_USER = 'SET_USER',
    SET_SEARCH = 'SET_SEARCH',
}

export type Mutations = {
    [FlowerMutationType.SET_USER](state: State, User: UserInterface): void;
    [FlowerMutationType.SET_SEARCH](state: State, search: String): void;
};

export const mutations: MutationTree<State> & Mutations = {
    [FlowerMutationType.SET_USER](state, User) {
        state.user = User;
    },
    [FlowerMutationType.SET_SEARCH](state, search) {
        state.search = search;
    },
};
