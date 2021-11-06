import { computed, ref } from '@vue/reactivity';
import { defineComponent } from '@vue/runtime-core';
import { useStore } from 'vuex';
import ModalComponent from '../shared/Modal/index.vue';
import InputComponent from '../shared/Input/index.vue';
import ButtonComponent from '../shared/Button/index.vue';
import UserInfoModalComponent from '@/components/UserInfoModal/index.vue';

export default defineComponent({
    name: 'UserInfoComponent',
    components: {
        ModalComponent,
        InputComponent,
        ButtonComponent,
        UserInfoModalComponent,
    },
    setup() {
        const store = useStore();
        const user = computed(() => store.state.users.user);

        const modalVisible = ref(false);

        return {
            modalVisible,
            user,
        };
    },
});
