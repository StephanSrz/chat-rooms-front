import { createRouter, createWebHistory } from "vue-router";
import chatRoom from '../views/chatRoom.vue';
import logIn from '../views/logIn.vue';
import signUp from "@/views/signUp.vue";
import anonymousView from "@/views/anonymousView.vue";

const routes = [
  {
    path: '/chat-room',
    name: 'chat-room',
    component: chatRoom
  },
  {
    path: '/login',
    name: 'login',
    component: logIn
  },
  {
    path: '/signup',
    name: 'signup',
    component: signUp
  },
  {
    path: '/anonymous',
    name: 'anonymous',
    component: anonymousView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
