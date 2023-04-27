import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, ShowcaseGrid, TextBoard, OffertForm } from './containers';
import { Navbar, Sidebar, GoTop } from './components';
import { Tjanster, TjanstValues, Kontakt, About, Faq, FaqValues } from './routes';
import App from "./App";
import 'normalize.css';
import './index.css';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <Sidebar />
        <Navbar />
        <Routes>
            <Route index element={<App />} />
            <Route path="Tjanster" element={<Tjanster />} >
                <Route path="" element={<ShowcaseGrid prop={TjanstValues.showcaseGrid} />} />
                <Route path=":tjanstId" element={<TextBoard prop={TjanstValues.textBoard} />} />
            </Route>
            <Route path="Offertforfragan" element={<OffertForm />} />
            <Route path="Kontakta-Oss" element={<Kontakt />} />
            <Route path="Om-Stadservice-Nacka" element={<About />} />
            <Route path="Faq" element={<Faq values={ FaqValues } />} />
            <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
        </Routes>
        <Footer />
        <GoTop />
    </BrowserRouter>
);