const { JSDOM } = require("jsdom");
const { window } = new JSDOM("<div id=`app`></div>", {
  url: "http://localhost:5173",
});

global.window = window;
global.document = window.document;
global.DocumentFragment = window.DocumentFragment;

require.extensions[".less"] = function () {
  module.exports = () => ({});
};

require.extensions[".png"] = function () {
  module.exports = () => ({});
};

require.extensions[".svg"] = function () {
  module.exports = () => ({});
};
