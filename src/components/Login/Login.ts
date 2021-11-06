import { reactive, ref } from '@vue/reactivity';
import { defineComponent } from '@vue/runtime-core';
import { useStore } from 'vuex';
import ModalComponent from '../shared/Modal/index.vue';
import InputComponent from '../shared/Input/index.vue';
import ButtonComponent from '../shared/Button/index.vue';
import LoginPayloadInterface from '@/types/LoginPayloadInterface';
import StoreNames from '@/store/enums/StoreNames';
import { UserActionTypes } from '@/store/modules/users/actions';
import { Form } from 'vee-validate';
import * as Yup from 'yup';

export default defineComponent({
    name: 'LoginComponent',
    components: {
        ModalComponent,
        InputComponent,
        ButtonComponent,
        Form,
    },
    setup() {
        const store = useStore();

        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
        });

        const modalVisible = ref(false);

        const onSubmit = (form: LoginPayloadInterface) => {
            store.dispatch(StoreNames.USERS + '/' + UserActionTypes.LOGIN, form);
        };

        return {
            modalVisible,
            onSubmit,
            schema,
        };
    },
});
