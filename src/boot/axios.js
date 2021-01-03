import Vue from 'vue'
import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'http://tdd.test/api'
})

Vue.prototype.$axios = axiosInstance
