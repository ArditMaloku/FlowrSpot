import UserService from '@/services/UserService';
import LoginPayloadInterface from '@/types/LoginPayloadInterface';
import LoginRegisterResponseInterface from '@/types/LoginRegisterResponseInterface';
import UserInterface from '@/types/UserInterface';
import { ActionContext, ActionTree } from 'vuex';
import { UserMutations, UserMutationType } from './mutations';
import { State } from './state';
import apiClient from '@/apiClient';

export enum UserActionTypes {
    SET_USER = 'SET_USER',
    LOGIN = 'LOGIN',
    REGISTER = 'REGISTER',
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
    commit<K extends keyof UserMutations>(
        key: K,
        payload: Parameters<UserMutations[K]>[1],
    ): ReturnType<UserMutations[K]>;
};

export type UserActions = {
    [UserActionTypes.SET_USER](context: ActionAugments, user: UserInterface): void;
    [UserActionTypes.LOGIN](context: ActionAugments, form: LoginPayloadInterface): void;
    [UserActionTypes.REGISTER](context: ActionAugments, form: UserInterface): void;
};

export const actions: ActionTree<State, State> & UserActions = {
    [UserActionTypes.LOGIN]({ dispatch }, form: LoginPayloadInterface): void {
        UserService.login(form)
            .then((response: LoginRegisterResponseInterface) => {
                localStorage.setItem('authToken', response.auth_token);

                dispatch(UserActionTypes.SET_USER);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    },
    [UserActionTypes.REGISTER]({ dispatch }, form: UserInterface): Promise<any> {
        return new Promise((resolve, reject) => {
            UserService.register(form)
                .then((response: LoginRegisterResponseInterface) => {
                    localStorage.setItem('authToken', response.auth_token);
                    resolve(response);

                    dispatch(UserActionTypes.SET_USER);
                })
                .catch((error: Error) => {
                    reject(error);
                });
        });
    },
    [UserActionTypes.SET_USER]({ commit }): void {
        UserService.getLoggedInUser()
            .then((response: any) => {
                commit(UserMutationType.SET_USER, response.user);
            })
            .catch((error: Error) => {
                console.log(error);
            });
    },
};
