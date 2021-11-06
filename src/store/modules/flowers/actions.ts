import { ActionContext, ActionTree } from 'vuex';
import { Mutations } from './mutations';
import { State } from './state';

export enum FlowerActionTypes {
    SET_USER = 'SET_USER',
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
    commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]>;
};

export type Actions = {
    [FlowerActionTypes.SET_USER](context: ActionAugments): void;
};

export const actions: ActionTree<State, State> = {
    [FlowerActionTypes.SET_USER]({ commit }): void {},
};
