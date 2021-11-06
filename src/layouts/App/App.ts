import NavbarComponent from '@/components/Navbar/index.vue';
import { defineComponent, onBeforeMount } from '@vue/runtime-core';
import { useStore } from 'vuex';
import StoreNames from '@/store/enums/StoreNames';
import { UserActionTypes } from '@/store/modules/users/actions';

export default defineComponent({
    components: {
        NavbarComponent,
    },
    setup() {
        const store = useStore();

        onBeforeMount(() => {
            if (localStorage.getItem('authToken')) {
                store.dispatch(StoreNames.USERS + '/' + UserActionTypes.SET_USER);
            }
        });
    },
});
