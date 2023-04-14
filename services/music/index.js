import {requestInstance} from "../request/index"
export function getMusicBanner(type=2){
	return requestInstance.get({
		url:"/banner",
		data:{
			type
		}
	})
}
export function getRcommendList(id){
	return requestInstance.get({
		url:"/playlist/detail",
		data:{
			id
		}
	})
}
export function getHotList(cat="全部",limit=6,offset=0){
	return requestInstance.get({
		url:"/top/playlist",
		data:{
			cat,
			limit,
			offset
		}
	})
}