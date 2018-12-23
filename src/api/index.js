import axios from 'axios'
//增加一个默认的请求路径
//axios.defaults.baseURL = 'http://localhost:8888';

//可以在这里统一拦截结果
axios.interceptors.response.use((res) => {
  return res.data;
});

//返回真的是一个Promise对象
//获取轮播图
export let getSliders = () => {
  return axios.get('http://localhost:8899/sliders');
}

//获取首页展示
export let getHotDowns = () => {
  return axios.get('http://localhost:8899/hotDown');
}

//获取列表
export let getHrefDowns = () => {
  return axios.get('http://localhost:8899/hrefDown');
}

//根据id获取
export let getHrefDown = (id) => {
  return axios.get(`http://localhost:8899/hrefDown?id=${id}`);
}

//根据id删除
export let deleteHrefDown = (id) => {
  return axios.delete(`http://localhost:8899/hrefDown?id=${id}`);
}

//根据id修改
export let updateHrefDown = (id,data) => {
  return axios.put(`http://localhost:8899/hrefDown?id=${id}`,data);
}

//获取首页全部的数据
export let getHomeAll = () => {
  return axios.all([getSliders(),getHotDowns()]);
}

export let getPageHrefInfos = (page,pageSize) => {
  return axios.get(`http://localhost:8456/getHrefInfos?pageNum=${page}&pageSize=${pageSize}`);
}
