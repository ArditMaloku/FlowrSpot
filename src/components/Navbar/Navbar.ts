import { defineComponent } from '@vue/runtime-core';
import LoginComponent from '../Login/index.vue';
import UserInfoComponent from '../UserInfo/index.vue';
import RegisterComponent from '../Register/index.vue';
import { ref } from '@vue/reactivity';
export default defineComponent({
    name: 'Navbar',
    components: {
        LoginComponent,
        RegisterComponent,
        UserInfoComponent,
    },
    setup() {
        const isDesktop = window.innerWidth > 767;
        const showMenu = ref(false);

        if (isDesktop) showMenu.value = true;

        return { showMenu };
    },
});
