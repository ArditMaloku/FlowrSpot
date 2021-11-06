import { defineComponent } from '@vue/runtime-core';
import LoginComponent from '../Login/index.vue';
import UserInfoComponent from '../UserInfo/index.vue';
import SignupComponent from '../Signup/index.vue';
import { ref } from '@vue/reactivity';

export default defineComponent({
    name: 'Navbar',
    components: {
        LoginComponent,
        SignupComponent,
        UserInfoComponent,
    },
    setup() {
        const isDesktop = window.innerWidth > 767;
        const showMenu = ref(false);
        const loginModalVisible = ref(false);

        if (isDesktop) showMenu.value = true;

        return { showMenu, loginModalVisible };
    },
});
