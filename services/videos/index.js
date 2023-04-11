import {requestInstance} from "../request/index"
export function getTopMv(offset=0,limit=20){
	return requestInstance.get({
		url:"/top/mv",
			data:{
				limit:limit,
				offset:offset
			}
	})
}
export function getMvUrl(id){
	return requestInstance.get({
		url:"/mv/url",
		data:{
			id
		}
	})
}
export function getMvInfo(mvid){
	return requestInstance.get({
		url:"/mv/detail",
		data:{
			mvid
		}
	})
}
export function getMvRecommend(id){
	return requestInstance.get({
		url:"/related/allvideo",
		data:{
			id
		}
	})
}
