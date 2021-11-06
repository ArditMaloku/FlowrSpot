import { createStore } from 'vuex';
import UserModule from './modules/users';
import FlowerModule from './modules/flowers';
import StoreNames from './enums/StoreNames';

export default createStore({
    modules: {
        [StoreNames.USERS]: UserModule,
        [StoreNames.FLOWERS]: FlowerModule,
    },
});
