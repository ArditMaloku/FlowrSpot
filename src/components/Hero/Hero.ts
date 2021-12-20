import StoreNames from '@/store/enums/StoreNames';
import { FlowerMutationType } from '@/store/modules/flowers/mutations';
import { defineComponent } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';

export default defineComponent({
    name: 'HeroComponent',
    setup() {
        const store: any = useStore();

        const filterFlowers = (event: any) => {
            const search = event.target.value;

            store.commit(StoreNames.FLOWERS + '/' + FlowerMutationType.SET_SEARCH, search);
        };

        const search = computed(() => store.state[StoreNames.FLOWERS].search ?? '');

        return { filterFlowers, search };
    },
});
