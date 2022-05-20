import { defineStore } from 'pinia'
export const useStore = defineStore('main', {
    state: () => {
        return {
            collapse: false
        }
    },
    actions: {
        handleCollapse(data) {
            this.collapse = data;
        }
    }
})
