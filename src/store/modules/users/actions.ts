import UserService from '@/services/UserService';
import LoginPayloadInterface from '@/types/LoginPayloadInterface';
import LoginSignupResponseInterface from '@/types/LoginSignupResponseInterface';
import UserInterface from '@/types/UserInterface';
import { ActionContext, ActionTree } from 'vuex';
import { UserMutations, UserMutationType } from './mutations';
import { State } from './state';

export enum UserActionTypes {
    SET_USER = 'SET_USER',
    LOGIN = 'LOGIN',
    SIGNUP = 'SIGNUP',
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
    commit<K extends keyof UserMutations>(
        key: K,
        payload: Parameters<UserMutations[K]>[1],
    ): ReturnType<UserMutations[K]>;
};

export type UserActions = {
    [UserActionTypes.LOGIN](context: ActionAugments, form: LoginPayloadInterface): Promise<any>;
    [UserActionTypes.SIGNUP](context: ActionAugments, form: UserInterface): Promise<any>;
    [UserActionTypes.SET_USER](context: ActionAugments, user: UserInterface): void;
};

export const actions: ActionTree<State, State> & UserActions = {
    [UserActionTypes.LOGIN]({ dispatch }, form: LoginPayloadInterface): Promise<any> {
        return new Promise((resolve, reject) => {
            UserService.login(form)
                .then((response: LoginSignupResponseInterface) => {
                    localStorage.setItem('authToken', response.auth_token);

                    resolve(response);
                    dispatch(UserActionTypes.SET_USER);
                })
                .catch((error: Error) => {
                    reject(error);
                });
        });
    },

    [UserActionTypes.SIGNUP]({}, form: UserInterface): Promise<any> {
        return new Promise((resolve, reject) => {
            UserService.signup(form)
                .then((response: LoginSignupResponseInterface) => {
                    resolve(response);
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
