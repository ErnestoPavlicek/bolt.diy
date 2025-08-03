import { j as jsxRuntimeExports } from './components-CB5LuFFl.js';
import { C as ClientOnly } from './client-only-DcgPTZGk.js';
import { z as BackgroundRays, H as Header, n as Chat, q as BaseChat } from './Header-Dkhcd3GM.js';

const meta = () => {
  return [{
    title: "Bolt"
  }, {
    name: "description",
    content: "Talk with Bolt, an AI assistant from StackBlitz"
  }];
};
function Index() {
  return /* @__PURE__ */jsxRuntimeExports.jsxs("div", {
    className: "flex flex-col h-full w-full bg-bolt-elements-background-depth-1",
    children: [/* @__PURE__ */jsxRuntimeExports.jsx(BackgroundRays, {}), /* @__PURE__ */jsxRuntimeExports.jsx(Header, {}), /* @__PURE__ */jsxRuntimeExports.jsx(ClientOnly, {
      fallback: /* @__PURE__ */jsxRuntimeExports.jsx(BaseChat, {}),
      children: () => /* @__PURE__ */jsxRuntimeExports.jsx(Chat, {})
    })]
  });
}

export { Index as default, meta as m };
