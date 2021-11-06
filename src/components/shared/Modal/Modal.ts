import { ref } from '@vue/reactivity';
import { defineComponent } from '@vue/runtime-core';
import { onClickOutside } from '@vueuse/core';

export default defineComponent({
    name: 'ModalComponent',
    props: {
        otherClasses: String,
    },
    emits: ['clickOutside'],
    setup(_, { emit }) {
        const modalRef = ref(null);
        onClickOutside(modalRef, (event) => {
            emit('clickOutside');
        });

        return { modalRef };
    },
});
