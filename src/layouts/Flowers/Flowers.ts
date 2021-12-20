import FlowerInterface from '@/types/FlowerInterface';
import FlowerItem from '@/components/FlowerItem/index.vue';
import { computed, ref } from '@vue/reactivity';
import FlowerService from '@/services/FlowerService';
import { defineComponent, watch } from '@vue/runtime-core';
import FlowerResponse from '@/types/FlowerResponse';
import { useStore } from 'vuex';
import StoreNames from '@/store/enums/StoreNames';
// import { state } from '@/store/modules/flowers/state';

export default defineComponent({
    name: 'FlowersLayout',
    setup() {
        let flowers = ref<FlowerInterface[]>([]);
        const page = 1;
        const store = useStore();

        FlowerService.getAll(page)
            .then((response: FlowerResponse) => {
                flowers.value = response.flowers;
            })
            .catch((e: Error) => {
                console.log(e);
            });

        const filteredFlowers = computed(() =>
            flowers.value.filter((flower: FlowerInterface) =>
                flower.name.toLowerCase().includes(store.state[StoreNames.FLOWERS].search.toLowerCase()),
            ),
        );

        return { filteredFlowers };
    },
    components: {
        FlowerItem,
    },
});
