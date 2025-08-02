import { u as useLoaderData, r as reactExports, j as jsxRuntimeExports } from './components-CB5LuFFl.js';

const PREVIEW_CHANNEL = "preview-updates";
function WebContainerPreview() {
  const {
    previewId
  } = useLoaderData();
  const iframeRef = reactExports.useRef(null);
  const broadcastChannelRef = reactExports.useRef();
  const [previewUrl, setPreviewUrl] = reactExports.useState("");
  const handleRefresh = reactExports.useCallback(() => {
    if (iframeRef.current && previewUrl) {
      iframeRef.current.src = "";
      requestAnimationFrame(() => {
        if (iframeRef.current) {
          iframeRef.current.src = previewUrl;
        }
      });
    }
  }, [previewUrl]);
  const notifyPreviewReady = reactExports.useCallback(() => {
    if (broadcastChannelRef.current && previewUrl) {
      broadcastChannelRef.current.postMessage({
        type: "preview-ready",
        previewId,
        url: previewUrl,
        timestamp: Date.now()
      });
    }
  }, [previewId, previewUrl]);
  reactExports.useEffect(() => {
    broadcastChannelRef.current = new BroadcastChannel(PREVIEW_CHANNEL);
    broadcastChannelRef.current.onmessage = event => {
      if (event.data.previewId === previewId) {
        if (event.data.type === "refresh-preview" || event.data.type === "file-change") {
          handleRefresh();
        }
      }
    };
    const url = `https://${previewId}.local-credentialless.webcontainer-api.io`;
    setPreviewUrl(url);
    if (iframeRef.current) {
      iframeRef.current.src = url;
    }
    notifyPreviewReady();
    return () => {
      broadcastChannelRef.current?.close();
    };
  }, [previewId, handleRefresh, notifyPreviewReady]);
  return /* @__PURE__ */jsxRuntimeExports.jsx("div", {
    className: "w-full h-full",
    children: /* @__PURE__ */jsxRuntimeExports.jsx("iframe", {
      ref: iframeRef,
      title: "WebContainer Preview",
      className: "w-full h-full border-none",
      sandbox: "allow-scripts allow-forms allow-popups allow-modals allow-storage-access-by-user-activation allow-same-origin",
      allow: "cross-origin-isolated",
      loading: "eager",
      onLoad: notifyPreviewReady
    })
  });
}

export { WebContainerPreview as default };
