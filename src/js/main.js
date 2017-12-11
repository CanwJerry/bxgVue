//一.引入各种包
//1.1导入项目依赖的vue相关包
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex'
//设置axios默认url
// axios.defaults.baseURL = "";

//1.2因为模块化开发一个文件代表一个模块，每个模块中的变量都不是全局变量
//   我们引入的vue也不是全局变量，那么相应的VueAxios与VueRouter插件在
//   执行的时候就无法自动完成初始化工作
//   所以我们要手动use一下
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(Vuex);

//把axios库放置到原型，将来其他组件直接可以拿到axios对象
// Vue.prototype.axios = axios;

//1.4引入element-ui插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//二.引入各种我们自己写的组件-----------------------------------------------------------------------
//2.1引入项目根组件
import App from '../component/App.vue';

//2.2引入左侧跟头部
import comLeftBar from '../component/frame/leftBar.vue';
import comTopBar from '../component/frame/topBar.vue';

//2.3引入首页
import comHome from '../component/home/home.vue';


//2.9把公共组件封装成插件引入
// import common from '../component/common/index.js';
// Vue.use(common);

//3.0 引入公共样式
import '../less/public.less';


//10.0引入公共过滤器
// import filters from '../js/index.js';
// Vue.use(filters);

//三注册全局组件
Vue.component('v-leftBar', comLeftBar);
Vue.component('v-topBar', comTopBar);


//四、创建vue实例，启动整个项目-----------------------------------------------------------------------
//4.1创建实例
   
let vm = new Vue({
    //4.2关联页面视图
    el: '#app',

    //4.3把根组件的内容渲染到el属性指定的位置
    //   这个render是必须的,要是不加就报错
    //   这个代码的含义是使用App.vue这个组件的视图替换#app元素
    //   以后关于根组件的东西都写在App.vue里，就不要再修改index.html了
    render: function (c) {
        return c(App); // 这个函数需要我们返回一个组件, 把返回的组件渲染到el标签中
    },
    
    store: new Vuex.Store({
         state: {
             buysTotal:100
         },
         mutations: {
             getTotal(state){
                 state.buysTotal=800
             }
         }
    }),

    //4.4添加页面路由配置，根据url切换页面中间部分的组件
    router: new VueRouter({
        linkActiveClass:"mui-active",
        routes: [
             {path:'/',redirect: '/home'},
             {path:'/home',component:comHome},
             
        ]
    })
});