const { JSDOM } = require("jsdom");
// eslint-disable-next-line quotes
const { window } = new JSDOM('<main id="app"></main>', {
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
