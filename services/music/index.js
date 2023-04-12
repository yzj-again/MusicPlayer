import {requestInstance} from "../request/index"
export function getMusicBanner(type=2){
	return requestInstance.get({
		url:"/banner",
		data:{
			type
		}
	})
}