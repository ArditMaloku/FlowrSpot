import { MutationTree } from 'vuex';
import { State } from './state';
import UserInterface from '@/types/UserInterface';

export enum UserMutationType {
    SET_USER = 'SET_USER',
}

export type UserMutations = {
    [UserMutationType.SET_USER](state: State, User: UserInterface): void;
};

export const mutations: MutationTree<State> & UserMutations = {
    [UserMutationType.SET_USER](state, User) {
        state.user = User;
    },
};
