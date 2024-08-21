import './App.css'
import {Header} from "./components/header/Header.tsx";
// import {BrowserRouter, Routes} from "react-router-dom";
import {RegistrationForm} from "./components/registration/RegistrationForm.tsx";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
        <Header/>
        <RegistrationForm/>
        {/*<BrowserRouter>*/}
        {/*    <Routes>*/}

        {/*    </Routes>*/}
        {/*</BrowserRouter>*/}
    </QueryClientProvider>
  )
}

export default App
