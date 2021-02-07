import HomePage from "../pages/HomePage";
import StudentListPage from "../pages/StudentListPage";
import NewStudentFormPage from "../pages/NewStudentFormPage";
import EditStudentFormPage from "../pages/EditStudentFormPage";

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
    exact: true,
  },
  {
    component: EditStudentFormPage,
    path: "/estudantes/:id/editar",
  },
];

export default routes;
