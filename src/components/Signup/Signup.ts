import { ref } from '@vue/reactivity';
import { defineComponent } from '@vue/runtime-core';
import { useStore } from 'vuex';
import ModalComponent from '../shared/Modal/index.vue';
import InputComponent from '../shared/Input/index.vue';
import ButtonComponent from '../shared/Button/index.vue';
import LoginComponent from '../Login/index.vue';
import UserInterface from '@/types/UserInterface';
import { Form } from 'vee-validate';
import * as Yup from 'yup';
import StoreNames from '@/store/enums/StoreNames';
import { UserActionTypes } from '@/store/modules/users/actions';
import LoginSignupResponseInterface from '@/types/LoginSignupResponseInterface';
import ValidateDateMixin from "@/mixins/ValidateDateMixin";

export default defineComponent({
    name: 'SignupComponent',
    components: {
        ModalComponent,
        InputComponent,
        ButtonComponent,
        LoginComponent,
        Form,
    },
    mixins: [ValidateDateMixin],
    setup() {
        const store = useStore();
        
        const schema = Yup.object().shape({
            first_name: Yup.string().required('First name is required'),
            last_name: Yup.string().required('Last name is required'),
            date_of_birth: Yup.string().test({
                name: 'dateValidation',
                test: function (date) {
                    const isValid = ValidateDateMixin.methods!.validateDate(date!);
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
        const successModalVisible = ref(false);
        const loginModalVisible = ref(false);
        const formSubmitted = ref(false);

        const onSubmit = (form: UserInterface) => {
            errorMessage.value = false;
            formSubmitted.value = true;

            store.dispatch(StoreNames.USERS + '/' + UserActionTypes.SIGNUP, form)
            .then((response: LoginSignupResponseInterface) => {
                modalVisible.value = false;
                successModalVisible.value = true;
                formSubmitted.value = false;
            })
            .catch((error: any) => {
                errorMessage.value = error.response.data.error;
                formSubmitted.value = false;
            });
        };

        const hideModal = () => {
            modalVisible.value = false;
            errorMessage.value = false;
        }

        return {
            hideModal,
            schema,
            modalVisible,
            onSubmit,
            errorMessage,
            successModalVisible,
            loginModalVisible,
            formSubmitted
        };
    },
});
