import {request} from "../utils/request"

//获取首页导航
export function listNav(){
  return request({
    url:"/nav/get",
    method:"POST"
  })
}

//获取新闻列表
export function queryNews(data){
  return request({
    url:"/news/get",
    method:"POST",
    data
  })
}

//获取新闻详情
export function newsDetail(data){
  return request({
    url:"/news/detail",
    method:"POST",
    data
  })
}

//获取产品列表
export function queryProduct(data){
  return request({
    url:"/weapon-skin/getlist",
    method:"POST",
    data
  })
}

export function skinDetail(data){
  return request({
    url:"/weapon-skin/detail",
    method:"POST",
    data
  })
}

