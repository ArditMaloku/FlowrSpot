import { defineComponent } from '@vue/runtime-core';
import { parse } from 'date-fns';

export default defineComponent({
    name: 'ValidateDateMixin',
    methods: {
        validateDate(date: string): boolean {
            const dateInput = new Date(date!).toString();
            const formatedDate = parse(date!, 'MMMM d, yyyy', new Date()).toString();
        
            if (dateInput === 'Invalid Date' || formatedDate === 'Invalid Date') return false;
        
            return dateInput === formatedDate;
        }
    }
});