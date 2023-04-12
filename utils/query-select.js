export function querySelect(selector){
	return new Promise(resolve=>{
	// 获取Image组件的高度-API
	const query = wx.createSelectorQuery()
	query.select(selector).boundingClientRect()
	// 执行拿回结果
	query.exec((res)=>{
		resolve(res)
	})
	})	
}