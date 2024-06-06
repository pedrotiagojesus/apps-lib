import { Outlet } from "react-router";
import Header from "./components/Header/Header";
import Navigator from "./components/Navigator/Navigator";

function App() {
    return (
        <>
            <main>
                <Header />
                <Navigator />

                <div className="content">
                    <Outlet />
                </div>
            </main>
        </>
    );
}

export default App;
