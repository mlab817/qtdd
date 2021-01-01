import Vue from 'vue'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://tdd.test/api'
})

Vue.prototype.$axios = axiosInstance
