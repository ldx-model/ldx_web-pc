import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'home',
      component: (resolve) => require(['@/views/home'], resolve),
      redirect: '/home/student',
      children: [
        {
          path: '/home/:id',
          name: 'student',
          component: (resolve) => require(['@/views/home'], resolve)
        }]
    },
    {
      path: '/studentReg',
      name: 'studentReg',
      component: (resolve) => require(['@/views/studentReg'], resolve)
    },
    {
      path: '/companyReg',
      name: 'companyReg',
      component: (resolve) => require(['@/views/companyReg'], resolve)
    }
  ]
})
