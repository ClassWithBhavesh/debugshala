import React from "react";
import Landing from "./Components/Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AiMarketor from "./Components/Nested_Compo/AiMarketor";
import DataAnalyst from "./Components/Nested_Compo/DataAnalyst";
import DataScience from "./Components/Nested_Compo/DataScience";
import GenAI from "./Components/Nested_Compo/GenAI";
import Java from "./Components/Nested_Compo/Java";
import MachineLearning from "./Components/Nested_Compo/MachineLearning";
import MERN from "./Components/Nested_Compo/MERN";
import Next from "./Components/Nested_Compo/Next";
import ReactCompo from "./Components/Nested_Compo/ReactCompo";
import UiUx from "./Components/Nested_Compo/UiUx";
import PlacedCandidates from "./Components/PlacedCandidates";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />
    },
    {
      path: "About",
      element: <About />
    },
    {
      path: "Contact",
      element: <ContactUs />
    },
    {
      path: "/Placed_Candidates",
      element: <PlacedCandidates />
    },
    {
      path: "/AI_Marketer",
      element: <AiMarketor />
    },
    {
      path: "/Data_Analyst",
      element: <DataAnalyst />
    },
    {
      path: "/Data_Science",
      element: <DataScience />
    },
    {
      path: "/Gen_AI",
      element: <GenAI />
    },
    {
      path: "/Java_Web_Dev",
      element: <Java />
    },
    {
      path: "/Machine_Learning",
      element: <MachineLearning />
    },
    {
      path: "/MERN_Stack_Web_Dev",
      element: <MERN />
    },
    {
      path: "/Next_Web_Dev",
      element: <Next />
    },
    {
      path: "/React_Web_Dev",
      element: <ReactCompo />
    },
    {
      path: "/UI_UX",
      element: <UiUx />
    }
  ]);
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
