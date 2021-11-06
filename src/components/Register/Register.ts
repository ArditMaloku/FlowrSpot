import UserService from '@/services/UserService';
import LoginRegisterResponseInterface from '@/types/LoginRegisterResponseInterface';
import { reactive, ref } from '@vue/reactivity';
import { defineComponent } from '@vue/runtime-core';
import { useStore } from 'vuex';
import ModalComponent from '../shared/Modal/index.vue';
import InputComponent from '../shared/Input/index.vue';
import ButtonComponent from '../shared/Button/index.vue';
import UserInterface from '@/types/UserInterface';
import { Form } from 'vee-validate';
import * as Yup from 'yup';
import { parse, isDate } from 'date-fns';
import StoreNames from '@/store/enums/StoreNames';
import { UserActionTypes } from '@/store/modules/users/actions';

export default defineComponent({
    name: 'RegisterComponent',
    components: {
        ModalComponent,
        InputComponent,
        ButtonComponent,
        Form,
    },
    setup() {
        const store = useStore();

        const schema = Yup.object().shape({
            first_name: Yup.string().required('First name is required'),
            last_name: Yup.string().required('Last name is required'),
            date_of_birth: Yup.string().test({
                name: 'dateValidation',
                test: function (date) {
                    const isValid = validateDate(date!);
                    if (isValid) return true;

                    return this.createError({
                        path: 'date_of_birth',
                        message: 'Date must be in format: May 20, 1980',
                    });
                },
            }),
            email: Yup.string().email('Please enter a valid email!').required('Email is required'),
            password: Yup.string().min(6, 'Password should be more than 6 letters').required('Password is required'),
        });
        const modalVisible = ref(false);
        const errorMessage = ref(false);

        const onSubmit = (form: UserInterface) => {
            errorMessage.value = false;

            store.dispatch(StoreNames.USERS + '/' + UserActionTypes.REGISTER, form).catch((error: any) => {
                errorMessage.value = error.response.data.error;
            });
        };

        const validateDate = (date: string) => {
            const dateInput = new Date(date!).toString();
            const formatedDate = parse(date!, 'MMMM d, yyyy', new Date()).toString();

            if (dateInput === 'Invalid Date' || formatedDate === 'Invalid Date') return false;

            return dateInput === formatedDate;
        };
        return {
            schema,
            modalVisible,
            onSubmit,
            errorMessage,
        };
    },
});
