import Vue from 'vue'
import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'http://tdd.test/api/v1'
})

Vue.prototype.$axios = axiosInstance
