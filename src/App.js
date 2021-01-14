import React from "react";

import "./assets/css/style.css";
import DefaultPage from "./components/DefaultPage/DefaultPage";

import schoolchildren from "./utils/mockedData";
import NewStudentFormPage from "./pages/NewStudentFormPage";
import StudentListPage from "./pages/StudentListPage";

function App() {
  return (
    <DefaultPage>
      <NewStudentFormPage />
      <StudentListPage schoolchildren={schoolchildren} />
    </DefaultPage>
  );
}

export default App;
