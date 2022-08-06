import "~/integrations/bugsnag";
import "~/integrations/honeybadger";
import React from "react";
import ReactDom from "react-dom/client";

import Hero from "~/components/Hero.jsx";

console.log("Vite ⚡️ Rails");

const root = ReactDOM.createRoot(document.getElementById("hero"));
root.render(<React.StrictMode>{React.createElement(Hero)}</React.StrictMode>);
