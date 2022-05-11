import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogInView from "@/views/LogInView";
import RegisterView from "@/views/RegisterView";
import GroupSelectionView from "@/views/GroupSelectionView";
import UserBalanceView from "@/views/UserBalanceView";
import AddStudentView from "@/views/AddStudentView";
import ModeratorView from "@/views/ModeratorView";
import StudentBalanceView from "@/views/StudentBalanceView";
import AddExpenceView from "@/views/AddExpenceView";
import groupBalanceLogView from "@/views/ExpenseLogView";
import expenseLogView from "@/views/ExpenseLogView";
import studentBalanceLogView from "@/views/StudentBalanceLogView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Avaleht',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Sisene',
    component: LogInView
  },
  {
    path: '/register',
    name: 'Registreeru',
    component: RegisterView
  },
  {
    path: '/groupselection',
    name: 'Vali grupp',
    component: GroupSelectionView
  },
  {
    path: '/userbalance',
    name: 'Kasutajavaade',
    component: UserBalanceView
  },
  {
    path: '/addstudent',
    name: 'Lisa laps',
    component: AddStudentView
  },
  {
    path: '/studentbalancelog',
    name: 'Kulutused Student',
    component: studentBalanceLogView
  },
  {
    path: '/moderator',
    name: 'Admin vaade',
    component: ModeratorView
  },
  {
    path: '/student',
    name: 'Lapse andmed',
    component: StudentBalanceView
  },
  {
    path: '/expense',
    name: 'Kulu lisamine',
    component: AddExpenceView
  },
  {
    path: '/about',
    name: 'container',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
