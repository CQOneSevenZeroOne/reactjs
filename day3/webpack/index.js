const React = require("react");
const ReactDOM = require("react-dom");
import "weui";
import Xheader from "./components/xheader.jsx";
import Xsearch from "./components/xsearch.jsx";
import Xfooter from "./components/xfooter.jsx";
ReactDOM.render(<div><Xheader/><Xsearch/><Xfooter/></div>, document.querySelector("#app"))