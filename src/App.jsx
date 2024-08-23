import { Outlet } from "react-router";

// Component
import Header from "./components/Header/Header";
import Navigator from "./components/Navigator/Navigator";

// Toast
import ToastContainer from "./components/Toast/ToastContainer";
import { ToastProvider } from "./context/ToastContext";

function App() {
    return (
        <>
            <ToastProvider>
                <main>
                    <Header />
                    <Navigator />

                    <div className="content">
                        <Outlet />
                        <ToastContainer />
                    </div>
                </main>
            </ToastProvider>
        </>
    );
}

export default App;
