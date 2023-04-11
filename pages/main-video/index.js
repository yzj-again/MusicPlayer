// pages/main-video/index.js
import {getTopMv} from "../../services/videos/index"
Page({
	data:{
		videoList:[],
		offset:0,
		hasMore:true
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
		const res = await getTopMv(this.data.offset)
		// 追加原来的数据
		const totalRes = [...this.data.videoList,...res.data]
		this.setData({videoList:totalRes})
		this.data.offset=this.data.videoList.length
		this.data.hasMore=res.hasMore
	},
	// 监听上拉和下拉功能
	onReachBottom(){
		// 下拉发送请求
		// 判断后台是否还有数据,有数据才加载
		if(!this.data.hasMore) return
		this.fetchTopMv()
	},
	async onPullDownRefresh(){
		// 1.清空之前的数据
		this.setData({videoList:[]})
		this.data.offset=0
		this.data.hasMore=true
		// 2.重新请求数据，等到有结果才停止刷新
		await this.fetchTopMv()
		// 停止下拉刷新
		wx.stopPullDownRefresh()
	},
	onVideoItemTap(event){
		const item = event.currentTarget.dataset.item
		wx.navigateTo({
		  url: `/pages/detail-video/index?id=${item.id}`,
		})
	}
})