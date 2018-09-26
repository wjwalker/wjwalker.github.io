/*
 * @Author: wjwalker 
 * @module: 路由信息配置页
 * @Date: 2018-09-25 18:44:25 
 * @Last Modified by: wjwalker
 * @Last Modified time: 2018-09-26 10:39:19
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'

const Music = r => require.ensure([], () => r(require('@/components/music.vue')), 'music')

Vue.use(Router)

export default new Router({
    // mode: 'history',
    hashbang: true,
    history: false, // 这个参数改为false就可以了
    saveScrollPosition: true,
    suppressTransitionError: true,
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/music',
            component: Music
        }
    ]
})