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
    },
    {
      path: '/firststep',
      name: 'firststep',
      component: (resolve) => require(['@/views/taskpage/firststep'], resolve)
    },
    {
      path: '/secstep',
      name: 'secstep',
      component: (resolve) => require(['@/views/taskpage/secstep'], resolve)
    },
    {
      path: '/thirdstep',
      name: 'thirdstep',
      component: (resolve) => require(['@/views/taskpage/thirdstep'], resolve)
    },
    {
      path: '/laststep',
      name: 'laststep',
      component: (resolve) => require(['@/views/taskpage/laststep'], resolve)
    },
    {
      path: '/success',
      name: 'success',
      component: (resolve) => require(['@/views/taskpage/success'], resolve)
    },
    {
      path: '/error',
      name: 'error',
      component: (resolve) => require(['@/views/taskpage/error'], resolve)
    },
    {
      path: '/students',
      name: 'students',
      component: (resolve) => require(['@/views/student/student'], resolve)
    },
    {
      path: '/companys',
      name: 'companys',
      component: (resolve) => require(['@/views/company/company'], resolve)
    },
    {
      path: '/messagelist',
      name: 'messagelist',
      component: (resolve) => require(['@/views/messagelist'], resolve)
    },
    {
      path: '/taskhall',
      name: 'taskhall',
      component: (resolve) => require(['@/views/taskHall'], resolve)
    },
    {
      path: '/taskdetails',
      name: 'taskdetails',
      component: (resolve) => require(['@/views/taskdetails/taskdetails'], resolve)
    }
  ]
})
