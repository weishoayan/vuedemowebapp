import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import headNav from '../components/common/headNav'
import newsList from '../components/news/newslist.vue'
import Photo from '../components/photoshare/photolist.vue'
import Shop from '../components/shop/shoplist.vue'
import Shopcart from '../components/shopcart/shopcart.vue'
import My from '../components/my/my.vue'
import BannerDetails from '../components/banner/bannardetails.vue'
import NewsDetails from '../components/news/newsdetails.vue'
import Photodetails from '../components/photoshare/photo.vue'
import Shopdetails from '../components/shop/shopdetails.vue'
import Map from '../components/map/map.vue'
// 安装全局组件
Vue.component('headNav',headNav)

// 数据请求
import Axios from 'axios'
Axios.defaults.baseURL = 'http://tanzhouweb.com/vueProject/'
Vue.prototype.$ajax = Axios
Vue.prototype.dataURL = function (file,title,id) {
    id = (id === undefined)?'':id;
    return file+'?title='+title+id;
}
import $ from 'jquery'
Vue.prototype.$jq = $;


// mint-ui组件库
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)


import Vue2Preview from 'vue2-preview'
Vue.use(Vue2Preview)


Vue.use(Router)

export default new Router({
    linkActiveClass:'rlActive',
    routes: [
        {
            path:'/',
            redirect:{name:'index'}
        },
        {
            name:'index',
            path:'/ ',
            component:Index
        },
        {
            name:'banner.details',
            path:'/banner/details',
            component:BannerDetails
        },
        {
            name:'news.list',
            path:'/news/list',
            component:newsList
        },
        {
            path:'/news/list/newsdetails',
            name:'news.details',
            component:NewsDetails
        },
        {
            name:'photo.list',
            path:'/photo/list',
            component:Photo
        },
        {
            name:'photo.details',
            path:'/photo/list/details',
            component:Photodetails
        },
        {
            name:'shop.list',
            path:'/shop/list',
            component:Shop
        },
        {
            name:'shop.shopdetails',
            path:'/shop/list/shopdetails',
            component:Shopdetails
        },
        {
            name:'shopcart',
            path:'/shopcart',
            component:Shopcart
        },
        {
            name:'my',
            path:'/my',
            component:My
        },
        {
            name:'map',
            path:'/map',
            component:Map
        }
    ]
})
