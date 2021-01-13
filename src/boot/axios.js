import Vue from 'vue'
import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: process.env.DEV ? 'http://tdd.test/api/v1' : 'http://ipms-v2.dapmsipd.org/api/v1'
})

Vue.prototype.$axios = axiosInstance
