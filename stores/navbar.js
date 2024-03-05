import { defineStore } from 'pinia'

export const useNavbarStore = defineStore('navbar', {
	state: () => {
		return { require: true }
	},
	actions: {
		include() {
			this.require = true
		},
		exclude() {
			this.require = false
		}
	}
})