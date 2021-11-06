import { computed, reactive } from '@vue/reactivity';
import { defineComponent } from '@vue/runtime-core';
import { useStore } from 'vuex';
import ModalComponent from '../shared/Modal/index.vue';
import InputComponent from '../shared/Input/index.vue';
import ButtonComponent from '../shared/Button/index.vue';
import UserInterface from '@/types/UserInterface';
import { UserMutationType } from '@/store/modules/users/mutations';
import StoreNames from '@/store/enums/StoreNames';

export default defineComponent({
    name: 'UserInfoModalComponent',
    components: {
        ModalComponent,
        InputComponent,
        ButtonComponent,
    },
    props: {
        modalVisible: {
            type: Boolean,
            required: true,
        },
    },
    emits: ['hideModal'],
    setup(_, { emit }) {
        const store = useStore();
        const user = computed(() => store.state.users.user);

        const form = reactive<UserInterface>({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            date_of_birth: '',
        });

        const logout = () => {
            emit('hideModal');
            store.commit(StoreNames.USERS + '/' + UserMutationType.SET_USER, null);
            localStorage.removeItem('authToken');
        };

        return {
            form,
            user,
            logout,
        };
    },
});
