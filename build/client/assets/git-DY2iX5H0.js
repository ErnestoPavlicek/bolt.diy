import { a as useSearchParams, r as reactExports, j as jsxRuntimeExports } from './components-CB5LuFFl.js';
import { C as ClientOnly } from './client-only-DcgPTZGk.js';
import { u as useChatHistory, l as useGit, d as B, n as Chat, o as LoadingOverlay, q as BaseChat, r as ignore, v as detectProjectCommands, w as createCommandsMessage, x as generateId, y as escapeBoltTags, z as BackgroundRays, H as Header } from './Header-Dkhcd3GM.js';

const IGNORE_PATTERNS = [
  "node_modules/**",
  ".git/**",
  ".github/**",
  ".vscode/**",
  "**/*.jpg",
  "**/*.jpeg",
  "**/*.png",
  "dist/**",
  "build/**",
  ".next/**",
  "coverage/**",
  ".cache/**",
  ".vscode/**",
  ".idea/**",
  "**/*.log",
  "**/.DS_Store",
  "**/npm-debug.log*",
  "**/yarn-debug.log*",
  "**/yarn-error.log*",
  // Include this so npm install runs much faster '**/*lock.json',
  "**/*lock.yaml"
];
function GitUrlImport() {
  const [searchParams] = useSearchParams();
  const { ready: historyReady, importChat } = useChatHistory();
  const { ready: gitReady, gitClone } = useGit();
  const [imported, setImported] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(true);
  const importRepo = async (repoUrl) => {
    if (!gitReady && !historyReady) {
      return;
    }
    if (repoUrl) {
      const ig = ignore().add(IGNORE_PATTERNS);
      try {
        const { workdir, data } = await gitClone(repoUrl);
        if (importChat) {
          const filePaths = Object.keys(data).filter((filePath) => !ig.ignores(filePath));
          const textDecoder = new TextDecoder("utf-8");
          const fileContents = filePaths.map((filePath) => {
            const { data: content, encoding } = data[filePath];
            return {
              path: filePath,
              content: encoding === "utf8" ? content : content instanceof Uint8Array ? textDecoder.decode(content) : ""
            };
          }).filter((f) => f.content);
          const commands = await detectProjectCommands(fileContents);
          const commandsMessage = createCommandsMessage(commands);
          const filesMessage = {
            role: "assistant",
            content: `Cloning the repo ${repoUrl} into ${workdir}
<boltArtifact id="imported-files" title="Git Cloned Files"  type="bundled">
${fileContents.map(
              (file) => `<boltAction type="file" filePath="${file.path}">
${escapeBoltTags(file.content)}
</boltAction>`
            ).join("\n")}
</boltArtifact>`,
            id: generateId(),
            createdAt: /* @__PURE__ */ new Date()
          };
          const messages = [filesMessage];
          if (commandsMessage) {
            messages.push({
              role: "user",
              id: generateId(),
              content: "Setup the codebase and Start the application"
            });
            messages.push(commandsMessage);
          }
          await importChat(`Git Project:${repoUrl.split("/").slice(-1)[0]}`, messages, { gitUrl: repoUrl });
        }
      } catch (error) {
        console.error("Error during import:", error);
        B.error("Failed to import repository");
        setLoading(false);
        window.location.href = "/";
        return;
      }
    }
  };
  reactExports.useEffect(() => {
    if (!historyReady || !gitReady || imported) {
      return;
    }
    const url = searchParams.get("url");
    if (!url) {
      window.location.href = "/";
      return;
    }
    importRepo(url).catch((error) => {
      console.error("Error importing repo:", error);
      B.error("Failed to import repository");
      setLoading(false);
      window.location.href = "/";
    });
    setImported(true);
  }, [searchParams, historyReady, gitReady, imported]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ClientOnly, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(BaseChat, {}), children: () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Chat, {}),
    loading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingOverlay, { message: "Please wait while we clone the repository..." })
  ] }) });
}

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
      children: () => /* @__PURE__ */jsxRuntimeExports.jsx(GitUrlImport, {})
    })]
  });
}

export { Index as default, meta };
