import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import VideoList from '@/views/VideoList'
import VideoPlayer from '@/views/VideoPlayer'
import VideoPost from '@/views/VideoPost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/videolist',
      name: 'videolist',
      component: VideoList
    },
    {
      path: '/video/:id',
      name: 'videoPlayer',
      component: VideoPlayer
    },
    {
      path: '/post/video',
      name: 'videopost',
      component: VideoPost,
      meta: {
        requireAuth: true
      }
    }
  ]
})
