import {requestInstance} from "../request/index"
export function getTopMv(limit=20,offset=0){
	return requestInstance.get({
		url:"/top/mv",
			data:{
				limit:limit,
				offset:offset
			}
	})
}