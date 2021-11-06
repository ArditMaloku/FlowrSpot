import { MutationTree } from 'vuex';
import { State } from './state';
import UserInterface from '@/types/UserInterface';

export enum FlowerMutationType {
    SET_USER = 'SET_USER',
}

export type Mutations = {
    [FlowerMutationType.SET_USER](state: State, User: UserInterface): void;
};

export const mutations: MutationTree<State> & Mutations = {
    [FlowerMutationType.SET_USER](state, User) {
        state.user = User;
    },
};
