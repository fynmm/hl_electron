import axios from 'axios'
import { CookieJar } from 'tough-cookie';
import axiosCookieJarSupport from 'axios-cookiejar-support';
import { Log } from './log.js';
import fs from 'fs';

axiosCookieJarSupport.wrapper(axios);

const cookieJar = new CookieJar();

const network = async (method, url, params, info = '') => {
  const p = method?.toLowerCase() == 'get' ? params : undefined;
  const d = method?.toLowerCase() == 'post' ? params : undefined;
  Log(info);
  return axios.request({
    url,
    params: p,
    data: d,
    withCredentials: true,
    jar: cookieJar,

  });
}

export default network
