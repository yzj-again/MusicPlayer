// pages/main-video/index.js
import {getTopMv} from "../../services/video/index"
Page({
	data:{
		videoList:[]
	},
	onLoad(){
		// 请求视频数据
		this.fetchTopMv()
	},
	// 发送视频的网络请求
	async fetchTopMv(){
		// getTopMv().then(res=>{
		// 	this.setData({videoList:res.data})
		// })
		const res = await getTopMv()
		this.setData({videoList:res.data})
	}
})