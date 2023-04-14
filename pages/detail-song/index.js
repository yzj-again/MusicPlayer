// pages/detail-song/index.js
import {createStoreBindings} from 'mobx-miniprogram-bindings'
import {store} from '../../store/recommendMusic'
Page({
	onLoad(){
		this.storeBindings = createStoreBindings(this, {
			store,
			fields: ['recommendMusic'],
			actions: ['setDataAction']
		  })
	},
	onUnload() {
		this.storeBindings.destroyStoreBindings();
	  }
})