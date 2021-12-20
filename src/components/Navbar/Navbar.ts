import { defineComponent, onMounted, watch, onUnmounted } from '@vue/runtime-core';
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
        const showMenu = ref(false);
        const isMobile = ref(false);
        const loginModalVisible = ref(false);

        onMounted(() => {
            if (window.innerWidth > 767) {
                showMenu.value = true;
            } else {
                isMobile.value = true;
            }

            window.addEventListener('resize', resizeHandler);
        });

        onUnmounted(() => {
            window.removeEventListener('resize', resizeHandler);
        });

        const resizeHandler = () => {
            if (window.innerWidth > 767) {
                showMenu.value = true;
                isMobile.value = false;
            } else {
                isMobile.value = true;
                showMenu.value = false;
            }
        };

        watch(showMenu, (currentValue: boolean) => {
            if (currentValue) {
                if (isMobile.value) document.documentElement.style.overflow = 'hidden';
            } else {
                document.documentElement.style.overflow = 'auto';
            }
        });

        return { showMenu, loginModalVisible };
    },
});
