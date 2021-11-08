import { defineComponent, onMounted, watch } from '@vue/runtime-core';
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
        const loginModalVisible = ref(false);

        onMounted(() => {
            if (window.innerWidth > 767) {
                showMenu.value = true;
            }

            window.addEventListener('resize', function () {
                if (window.innerWidth > 767) {
                    showMenu.value = true;
                } else {
                    showMenu.value = false;
                }
            });
        });

        watch(showMenu, (currentValue) => {
            if (currentValue) {
                document.documentElement.style.overflow = 'hidden';
            } else {
                document.documentElement.style.overflow = 'auto';
            }
        });

        return { showMenu, loginModalVisible };
    },
});
