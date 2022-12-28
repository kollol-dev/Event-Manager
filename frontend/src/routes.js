import EventList from "./pages/List-Event.vue";
import CreateEvent from "./pages/Create-Event.vue";
import updateEvent from "./pages/Update-Event.vue";

const routes = [
  { path: "/", component: EventList },
  { path: "/events/create", component: CreateEvent },
  { path: "/events/update/:id", component: updateEvent },
];

export default routes;
