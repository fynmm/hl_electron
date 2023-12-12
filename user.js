import network from "./network.js";
import http from 'http';

export const checkLogin = async () => {
  const resp = await network('get', 'https://order.jd.com/center/list.action', {
    rid: Date.now(),
  }, '校验用户信息')
  if (resp.data.includes('你好，请登录')) {
    return false;
  } else {
    return true;
  }
}
export const loginPage = async () => {
  const resp = await network('get', 'https://passport.jd.com/new/login.aspx', {
    rid: Date.now(),
  }, '登陆界面')
  // console.log(7798, resp)
  return 1;
}
export const loginQrCode = async () => {
  const resp = await network('get', `https://qr.m.jd.com/show?appid=133&size=147&t=${Date.now()}`, {}, '登陆界面')
  console.log(77, resp)
}



