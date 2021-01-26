import NewStudentFormPage from "../pages/NewStudentFormPage";
import HomePage from "../pages/HomePage";
import StudentListPage from "../pages/StudentListPage";

const routes = [
  {
    component: HomePage,
    path: "/",
    exact: true,
  },
  {
    component: StudentListPage,
    path: "/estudantes",
    exact: true,
  },
  {
    component: NewStudentFormPage,
    path: "/estudantes/novo",
  },
];

export default routes;
