import {observable, action} from 'mobx-miniprogram'
import {getRcommendList} from "../services/music/index"
// observable 的返回值就是 store 对象
export const store = observable({
	// 需要挂载的数据 -- 数据字段
	recommendMusic:[],
	// 计算属性 -- get为修饰符
	// get sum(){
	//   return this.numA + this.numB;
	// },
	// actions 函数，专门来修改 store 中数据的值
	setDataAction: action(function(data){
	this.recommendMusic=data
	})
  })
