import User from '@/types/UserInterface';

export type State = {
    user: User | null;
    search: String | '';
};

export const state: State = {
    user: null,
    search: '',
};
