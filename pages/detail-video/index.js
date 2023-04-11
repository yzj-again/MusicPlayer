// pages/detail-video/index.js
import {getMvUrl, getMvInfo, getMvRecommend } from "../../services/videos/index"
Page({
	data: {
		id:0,
		mvUrl:'',
		mvInfos:{},
		recommendMvList:[]
	},
	onLoad(options){
		// 1.获取id
		const id = options.id
		this.data.id=id
		// 2.请求数据
		this.fetchMvUrl(id)
		this.fetchMvInfo(id)
		this.fetchMvRecommend(id)
	},
	async fetchMvUrl(id){
		const res = await getMvUrl(id)
		this.setData({mvUrl:res.data.url})
	},
	async fetchMvInfo(id){
		const res = await getMvInfo(id)
		this.setData({mvInfos:res.data})
	},
	async fetchMvRecommend(id){
		const res = await getMvRecommend(id)
		this.setData({recommendMvList:res.data})
	}

})