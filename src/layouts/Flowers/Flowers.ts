import FlowerInterface from '@/types/FlowerInterface';
import FlowerItem from '@/components/FlowerItem/index.vue';
import { ref } from '@vue/reactivity';
import FlowerService from '@/services/FlowerService';
import { defineComponent } from '@vue/runtime-core';
import FlowerResponse from '@/types/FlowerResponse';

export default defineComponent({
    name: 'FlowersLayout',
    setup() {
        const flowers = ref<FlowerInterface[]>([]);
        const page = 1;

        FlowerService.getAll(page)
            .then((response: FlowerResponse) => {
                flowers.value = response.flowers;
            })
            .catch((e: Error) => {
                console.log(e);
            });

        return { flowers };
    },
    components: {
        FlowerItem,
    },
});
