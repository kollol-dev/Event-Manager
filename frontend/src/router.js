import { createWebHistory, createRouter } from "vue-router";

import EventList from "./pages/List-Event.vue"
import CreateEvent from "./pages/Create-Event.vue"

const routes = [
  { path: '/', component: EventList },
  { path: '/event/create', component: CreateEvent }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router