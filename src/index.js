import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components';
import App from "./App";
import 'normalize.css';
import './index.css';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route index element={<App />} />
            <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
        </Routes>
    </BrowserRouter>
);
