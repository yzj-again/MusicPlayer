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