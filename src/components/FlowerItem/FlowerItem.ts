import FlowerInterface from '@/types/FlowerInterface';
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
    name: 'FlowerComponent',
    props: {
        flower: {
            type: Object as () => FlowerInterface,
            required: true,
        },
    },
});
