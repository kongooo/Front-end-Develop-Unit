import * as React from "react";
import './index.less';
import { createRoot } from 'react-dom/client';

const App = <div className="test">Orz</div>;

const root = createRoot(document.getElementById("root"));

root.render(App);
