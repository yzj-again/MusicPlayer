// pages/main-music/index.js
import {getMusicBanner, getRcommendList, getHotList } from "../../services/music/index"
import {querySelect} from "../../utils/query-select"
import throttle from "../../utils/throttle"
import {createStoreBindings} from 'mobx-miniprogram-bindings'
import {store} from '../../store/recommendMusic'
const querySelectThrottle = throttle(querySelect,100)
const app = getApp()
Page({
	data: {
		searchValue:"",
		bannerLists:[],
		bannerHeight:150,
		screenWidth:375,
		recommendSongsList:[],
		hotSongList:[],
		recommendList:[]
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
		wx.navigateTo({
		  url: '/pages/detail-song/index',
		})
	},
	// 发送网络请求
	onLoad(){
		this.fetchMusicBanner()
		this.storeBindings = createStoreBindings(this, {
			store,
			fields: ['recommendMusic'],
			actions: ['setDataAction']
		  })
		  console.log(2)
		  this.fetchRecommendList()
		  console.log(3)
		  this.fetchHotList()
		  // 获取屏幕尺寸
		  this.setData({screenWidth:app.globalData.screenWidth})
	},
	onUnload(){
		this.storeBindings.destroyStoreBindings();
	},
	// 网络请求的封装
	async fetchMusicBanner(){
		const res = await getMusicBanner()
		this.setData({bannerLists:res.banners})
	},
	async fetchRecommendList(){
		console.log(1)
		const res = await getRcommendList(3778678)
		console.log(res)
		const playlist= res.playlist
		const recommendSongsList=playlist.tracks
		this.setDataAction(recommendSongsList)
		this.storeBindings.updateStoreBindings()
		this.setData({recommendSongsList:this.data.recommendMusic.slice(0,6)})
	},
	async fetchHotList(){
		const res = await getHotList()
		this.setData({hotSongList:res.playlists})
	},
	async fetchRecommendList(){
		const res = await getHotList("华语")
		this.setData({recommendList:res.playlists})
	}
	
})