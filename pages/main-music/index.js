// pages/main-music/index.js
import {getMusicBanner} from "../../services/music/index"
import {querySelect} from "../../utils/query-select"
import throttle from "../../utils/throttle"
const querySelectThrottle = throttle(querySelect,100)
Page({
	data: {
		searchValue:"",
		bannerLists:[],
		bannerHeight:150
	},
	// 界面的事件监听方法
	onSearchClick(){
		wx.navigateTo({
		  url: '/pages/detail-search/index'
		})
	},
	onBannerImageLoad(event){
		querySelectThrottle(".banner-image").then(res=>{
			this.setData({bannerHeight:res[0].height})
		})
	},
	onRecommendMoreClick(){
		console.log(1)
	},
	// 发送网络请求
	onLoad(){
		this.fetchMusicBanner()
	},
	// 网络请求的封装
	async fetchMusicBanner(){
		const res = await getMusicBanner()
		this.setData({bannerLists:res.banners})
	}
})