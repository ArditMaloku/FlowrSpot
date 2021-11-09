import { ref } from '@vue/reactivity';
import { defineComponent } from '@vue/runtime-core';
import { useStore } from 'vuex';
import ModalComponent from '../shared/Modal/index.vue';
import InputComponent from '../shared/Input/index.vue';
import ButtonComponent from '../shared/Button/index.vue';
import UserInfoModalComponent from '../UserInfoModal/index.vue';
import LoginPayloadInterface from '@/types/LoginPayloadInterface';
import LoginSignupResponseInterface from '@/types/LoginSignupResponseInterface';
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
        UserInfoModalComponent,
        Form,
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

        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
        });

        const successModalVisible = ref(false);
        const profileModalVisible = ref(false);
        const errorMessage = ref(false);
        const formSubmitted = ref(false);

        const onSubmit = (form: LoginPayloadInterface) => {
            errorMessage.value = false;
            formSubmitted.value = true;
            store
                .dispatch(StoreNames.USERS + '/' + UserActionTypes.LOGIN, form)
                .then((response: LoginSignupResponseInterface) => {
                    emit('hideModal');
                    successModalVisible.value = true;
                    formSubmitted.value = false;
                })
                .catch((error: any) => {
                    errorMessage.value = error.response.data.error;
                    formSubmitted.value = false;
                });
        };

        return {
            successModalVisible,
            profileModalVisible,
            onSubmit,
            schema,
            errorMessage,
            formSubmitted,
        };
    },
});
