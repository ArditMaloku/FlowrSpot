import User from '@/types/UserInterface';

export type State = {
    user: User | null;
};

export const state: State = {
    user: null,
};
