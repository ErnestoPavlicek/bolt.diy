import { r as reactExports, R as React, j as jsxRuntimeExports } from './components-CB5LuFFl.js';
import { m as motion, c as classNames, B as Button, C as Collapsible, a as CollapsibleTrigger, b as CollapsibleContent, d as B } from './Header-Dkhcd3GM.js';
import { a as api, l as logStore } from './client-only-DcgPTZGk.js';

const GithubLogo = () => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className: "w-5 h-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
  }
) });
function GitHubConnection() {
  const [connection, setConnection] = reactExports.useState({
    user: null,
    token: "",
    tokenType: "classic"
  });
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [isConnecting, setIsConnecting] = reactExports.useState(false);
  const [isFetchingStats, setIsFetchingStats] = reactExports.useState(false);
  const [isStatsExpanded, setIsStatsExpanded] = reactExports.useState(false);
  const tokenTypeRef = React.useRef("classic");
  const fetchGithubUser = async (token) => {
    try {
      console.log("Fetching GitHub user with token:", token.substring(0, 5) + "...");
      const response = await fetch(`/api/system/git-info?action=getUser`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
          // Include token in headers for validation
        }
      });
      if (!response.ok) {
        console.error("Error fetching GitHub user. Status:", response.status);
        throw new Error(`Error: ${response.status}`);
      }
      const rateLimit = {
        limit: parseInt(response.headers.get("x-ratelimit-limit") || "0"),
        remaining: parseInt(response.headers.get("x-ratelimit-remaining") || "0"),
        reset: parseInt(response.headers.get("x-ratelimit-reset") || "0")
      };
      const data = await response.json();
      console.log("GitHub user API response:", data);
      const { user } = data;
      if (!user || !user.login) {
        console.error("Invalid user data received:", user);
        throw new Error("Invalid user data received");
      }
      setConnection((prev) => ({
        ...prev,
        user,
        token,
        tokenType: tokenTypeRef.current,
        rateLimit
      }));
      api.set("githubUsername", user.login);
      api.set("githubToken", token);
      api.set("git:github.com", JSON.stringify({ username: token, password: "x-oauth-basic" }));
      localStorage.setItem(
        "github_connection",
        JSON.stringify({
          user,
          token,
          tokenType: tokenTypeRef.current
        })
      );
      logStore.logInfo("Connected to GitHub", {
        type: "system",
        message: `Connected to GitHub as ${user.login}`
      });
      fetchGitHubStats(token);
    } catch (error) {
      console.error("Failed to fetch GitHub user:", error);
      logStore.logError(`GitHub authentication failed: ${error instanceof Error ? error.message : "Unknown error"}`, {
        type: "system",
        message: "GitHub authentication failed"
      });
      B.error(`Authentication failed: ${error instanceof Error ? error.message : "Unknown error"}`);
      throw error;
    }
  };
  const fetchGitHubStats = async (token) => {
    setIsFetchingStats(true);
    try {
      const userResponse = await fetch("https://api.github.com/user", {
        headers: {
          Authorization: `${connection.tokenType === "classic" ? "token" : "Bearer"} ${token}`
        }
      });
      if (!userResponse.ok) {
        if (userResponse.status === 401) {
          B.error("Your GitHub token has expired. Please reconnect your account.");
          handleDisconnect();
          return;
        }
        throw new Error(`Failed to fetch user data: ${userResponse.statusText}`);
      }
      const userData = await userResponse.json();
      let allRepos = [];
      let page = 1;
      let hasMore = true;
      while (hasMore) {
        const reposResponse = await fetch(`https://api.github.com/user/repos?per_page=100&page=${page}`, {
          headers: {
            Authorization: `${connection.tokenType === "classic" ? "token" : "Bearer"} ${token}`
          }
        });
        if (!reposResponse.ok) {
          throw new Error(`Failed to fetch repositories: ${reposResponse.statusText}`);
        }
        const repos = await reposResponse.json();
        allRepos = [...allRepos, ...repos];
        const linkHeader = reposResponse.headers.get("Link");
        hasMore = linkHeader?.includes('rel="next"') ?? false;
        page++;
      }
      const repoStats = calculateRepoStats(allRepos);
      const eventsResponse = await fetch(`https://api.github.com/users/${userData.login}/events?per_page=10`, {
        headers: {
          Authorization: `${connection.tokenType === "classic" ? "token" : "Bearer"} ${token}`
        }
      });
      if (!eventsResponse.ok) {
        throw new Error(`Failed to fetch events: ${eventsResponse.statusText}`);
      }
      const events = await eventsResponse.json();
      const recentActivity = events.slice(0, 5).map((event) => ({
        id: event.id,
        type: event.type,
        repo: event.repo.name,
        created_at: event.created_at
      }));
      const totalStars = allRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
      const totalForks = allRepos.reduce((sum, repo) => sum + repo.forks_count, 0);
      const privateRepos = allRepos.filter((repo) => repo.private).length;
      const stats = {
        repos: repoStats.repos,
        recentActivity,
        languages: repoStats.languages || {},
        totalGists: repoStats.totalGists || 0,
        publicRepos: userData.public_repos || 0,
        privateRepos: privateRepos || 0,
        stars: totalStars || 0,
        forks: totalForks || 0,
        followers: userData.followers || 0,
        publicGists: userData.public_gists || 0,
        privateGists: userData.private_gists || 0,
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString(),
        // For backward compatibility
        totalStars: totalStars || 0,
        totalForks: totalForks || 0,
        organizations: []
      };
      const currentConnection = JSON.parse(localStorage.getItem("github_connection") || "{}");
      const currentUser = currentConnection.user || connection.user;
      const updatedConnection = {
        user: currentUser,
        token,
        tokenType: connection.tokenType,
        stats,
        rateLimit: connection.rateLimit
      };
      localStorage.setItem("github_connection", JSON.stringify(updatedConnection));
      setConnection(updatedConnection);
      B.success("GitHub stats refreshed");
    } catch (error) {
      console.error("Error fetching GitHub stats:", error);
      B.error(`Failed to fetch GitHub stats: ${error instanceof Error ? error.message : "Unknown error"}`);
    } finally {
      setIsFetchingStats(false);
    }
  };
  const calculateRepoStats = (repos) => {
    const repoStats = {
      repos: repos.map((repo) => ({
        name: repo.name,
        full_name: repo.full_name,
        html_url: repo.html_url,
        description: repo.description,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        default_branch: repo.default_branch,
        updated_at: repo.updated_at,
        languages_url: repo.languages_url
      })),
      languages: {},
      totalGists: 0
    };
    repos.forEach((repo) => {
      fetch(repo.languages_url).then((response) => response.json()).then((languages) => {
        const typedLanguages = languages;
        Object.keys(typedLanguages).forEach((language) => {
          if (!repoStats.languages[language]) {
            repoStats.languages[language] = 0;
          }
          repoStats.languages[language] += 1;
        });
      });
    });
    return repoStats;
  };
  reactExports.useEffect(() => {
    const loadSavedConnection = async () => {
      setIsLoading(true);
      const savedConnection = localStorage.getItem("github_connection");
      if (savedConnection) {
        try {
          const parsed = JSON.parse(savedConnection);
          if (!parsed.tokenType) {
            parsed.tokenType = "classic";
          }
          tokenTypeRef.current = parsed.tokenType;
          setConnection(parsed);
          if (parsed.user && parsed.token && (!parsed.stats || !parsed.stats.repos || parsed.stats.repos.length === 0)) {
            console.log("Fetching missing GitHub stats for saved connection");
            await fetchGitHubStats(parsed.token);
          }
        } catch (error) {
          console.error("Error parsing saved GitHub connection:", error);
          localStorage.removeItem("github_connection");
        }
      }
      setIsLoading(false);
    };
    loadSavedConnection();
  }, []);
  reactExports.useEffect(() => {
    if (!connection) {
      return;
    }
    const token = connection.token;
    const data = connection.user;
    if (token) {
      api.set("githubToken", token);
      api.set("git:github.com", JSON.stringify({ username: token, password: "x-oauth-basic" }));
    }
    if (data) {
      api.set("githubUsername", data.login);
    }
  }, [connection]);
  const updateRateLimits = async (token) => {
    try {
      const response = await fetch("https://api.github.com/rate_limit", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3+json"
        }
      });
      if (response.ok) {
        const rateLimit = {
          limit: parseInt(response.headers.get("x-ratelimit-limit") || "0"),
          remaining: parseInt(response.headers.get("x-ratelimit-remaining") || "0"),
          reset: parseInt(response.headers.get("x-ratelimit-reset") || "0")
        };
        setConnection((prev) => ({
          ...prev,
          rateLimit
        }));
      }
    } catch (error) {
      console.error("Failed to fetch rate limits:", error);
    }
  };
  reactExports.useEffect(() => {
    let interval;
    if (connection.token && connection.user) {
      updateRateLimits(connection.token);
      interval = setInterval(() => updateRateLimits(connection.token), 6e4);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [connection.token, connection.user]);
  if (isLoading || isConnecting || isFetchingStats) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, {});
  }
  const handleConnect = async (event) => {
    event.preventDefault();
    setIsConnecting(true);
    try {
      tokenTypeRef.current = connection.tokenType;
      localStorage.setItem(
        "github_connection",
        JSON.stringify({
          user: null,
          token: connection.token,
          tokenType: connection.tokenType
        })
      );
      await fetchGithubUser(connection.token);
      B.success("Connected to GitHub successfully");
    } catch (error) {
      console.error("Failed to connect to GitHub:", error);
      setConnection({ user: null, token: connection.token, tokenType: connection.tokenType });
      B.error(`Failed to connect to GitHub: ${error instanceof Error ? error.message : "Unknown error"}`);
    } finally {
      setIsConnecting(false);
    }
  };
  const handleDisconnect = () => {
    localStorage.removeItem("github_connection");
    api.remove("githubToken");
    api.remove("githubUsername");
    api.remove("git:github.com");
    tokenTypeRef.current = "classic";
    setConnection({ user: null, token: "", tokenType: "classic" });
    B.success("Disconnected from GitHub");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: "bg-bolt-elements-background dark:bg-bolt-elements-background border border-bolt-elements-borderColor dark:border-bolt-elements-borderColor rounded-lg",
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.2 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(GithubLogo, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-medium text-bolt-elements-textPrimary dark:text-bolt-elements-textPrimary", children: "GitHub Connection" })
        ] }) }),
        !connection.user && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-bolt-elements-textSecondary bg-bolt-elements-background-depth-1 dark:bg-bolt-elements-background-depth-1 p-3 rounded-lg mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "i-ph:lightbulb w-3.5 h-3.5 text-bolt-elements-icon-success dark:text-bolt-elements-icon-success" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Tip:" }),
            " You can also set the",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "px-1 py-0.5 bg-bolt-elements-background-depth-2 dark:bg-bolt-elements-background-depth-2 rounded", children: "VITE_GITHUB_ACCESS_TOKEN" }),
            " ",
            "environment variable to connect automatically."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "For fine-grained tokens, also set",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "px-1 py-0.5 bg-bolt-elements-background-depth-2 dark:bg-bolt-elements-background-depth-2 rounded", children: "VITE_GITHUB_TOKEN_TYPE=fine-grained" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bolt-elements-textSecondary dark:text-bolt-elements-textSecondary mb-2", children: "Token Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: connection.tokenType,
                onChange: (e) => {
                  const newTokenType = e.target.value;
                  tokenTypeRef.current = newTokenType;
                  setConnection((prev) => ({ ...prev, tokenType: newTokenType }));
                },
                disabled: isConnecting || !!connection.user,
                className: classNames(
                  "w-full px-3 py-2 rounded-lg text-sm",
                  "bg-bolt-elements-background-depth-1 dark:bg-bolt-elements-background-depth-1",
                  "border border-bolt-elements-borderColor dark:border-bolt-elements-borderColor",
                  "text-bolt-elements-textPrimary dark:text-bolt-elements-textPrimary",
                  "focus:outline-none focus:ring-1 focus:ring-bolt-elements-item-contentAccent dark:focus:ring-bolt-elements-item-contentAccent",
                  "disabled:opacity-50"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "classic", children: "Personal Access Token (Classic)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "fine-grained", children: "Fine-grained Token" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm text-bolt-elements-textSecondary dark:text-bolt-elements-textSecondary mb-2", children: connection.tokenType === "classic" ? "Personal Access Token" : "Fine-grained Token" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "password",
                value: connection.token,
                onChange: (e) => setConnection((prev) => ({ ...prev, token: e.target.value })),
                disabled: isConnecting || !!connection.user,
                placeholder: `Enter your GitHub ${connection.tokenType === "classic" ? "personal access token" : "fine-grained token"}`,
                className: classNames(
                  "w-full px-3 py-2 rounded-lg text-sm",
                  "bg-[#F8F8F8] dark:bg-[#1A1A1A]",
                  "border border-[#E5E5E5] dark:border-[#333333]",
                  "text-bolt-elements-textPrimary placeholder-bolt-elements-textTertiary",
                  "focus:outline-none focus:ring-1 focus:ring-bolt-elements-borderColorActive",
                  "disabled:opacity-50"
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-sm text-bolt-elements-textSecondary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: `https://github.com/settings/tokens${connection.tokenType === "fine-grained" ? "/beta" : "/new"}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-bolt-elements-borderColorActive hover:underline inline-flex items-center gap-1",
                  children: [
                    "Get your token",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "i-ph:arrow-square-out w-4 h-4" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Required scopes:",
                " ",
                connection.tokenType === "classic" ? "repo, read:org, read:user" : "Repository access, Organization access"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: !connection.user ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleConnect,
            disabled: isConnecting || !connection.token,
            className: classNames(
              "px-4 py-2 rounded-lg text-sm flex items-center gap-2",
              "bg-[#303030] text-white",
              "hover:bg-[#5E41D0] hover:text-white",
              "disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200",
              "transform active:scale-95"
            ),
            children: isConnecting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "i-ph:spinner-gap animate-spin" }),
              "Connecting..."
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "i-ph:plug-charging w-4 h-4" }),
              "Connect"
            ] })
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: handleDisconnect,
                className: classNames(
                  "px-4 py-2 rounded-lg text-sm flex items-center gap-2",
                  "bg-red-500 text-white",
                  "hover:bg-red-600"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "i-ph:plug w-4 h-4" }),
                  "Disconnect"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-bolt-elements-textSecondary flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "i-ph:check-circle w-4 h-4 text-green-500" }),
              "Connected to GitHub"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                onClick: () => window.open("https://github.com/dashboard", "_blank", "noopener,noreferrer"),
                className: "flex items-center gap-2 hover:bg-bolt-elements-item-backgroundActive/10 hover:text-bolt-elements-textPrimary dark:hover:text-bolt-elements-textPrimary transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "i-ph:layout w-4 h-4" }),
                  "Dashboard"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: () => {
                  fetchGitHubStats(connection.token);
                  updateRateLimits(connection.token);
                },
                disabled: isFetchingStats,
                variant: "outline",
                className: "flex items-center gap-2 hover:bg-bolt-elements-item-backgroundActive/10 hover:text-bolt-elements-textPrimary dark:hover:text-bolt-elements-textPrimary transition-colors",
                children: isFetchingStats ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "i-ph:spinner-gap w-4 h-4 animate-spin" }),
                  "Refreshing..."
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "i-ph:arrows-clockwise w-4 h-4" }),
                  "Refresh Stats"
                ] })
              }
            )
          ] })
        ] }) }) }),
        connection.user && connection.stats && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 border-t border-bolt-elements-borderColor dark:border-bolt-elements-borderColor pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 p-4 bg-bolt-elements-background-depth-1 dark:bg-bolt-elements-background-depth-1 rounded-lg mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: connection.user.avatar_url,
                alt: connection.user.login,
                className: "w-12 h-12 rounded-full border-2 border-bolt-elements-item-contentAccent dark:border-bolt-elements-item-contentAccent"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-bolt-elements-textPrimary dark:text-bolt-elements-textPrimary", children: connection.user.name || connection.user.login }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-bolt-elements-textSecondary dark:text-bolt-elements-textSecondary", children: connection.user.login })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Collapsible, { open: isStatsExpanded, onOpenChange: setIsStatsExpanded, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 rounded-lg bg-bolt-elements-background dark:bg-bolt-elements-background-depth-2 border border-bolt-elements-borderColor dark:border-bolt-elements-borderColor hover:border-bolt-elements-borderColorActive/70 dark:hover:border-bolt-elements-borderColorActive/70 transition-all duration-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "i-ph:chart-bar w-4 h-4 text-bolt-elements-item-contentAccent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-bolt-elements-textPrimary", children: "GitHub Stats" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: classNames(
                    "i-ph:caret-down w-4 h-4 transform transition-transform duration-200 text-bolt-elements-textSecondary",
                    isStatsExpanded ? "rotate-180" : ""
                  )
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContent, { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-bolt-elements-textPrimary mb-3", children: "Top Languages" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: Object.entries(connection.stats.languages).sort(([, a], [, b]) => b - a).slice(0, 5).map(([language]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "px-3 py-1 text-xs rounded-full bg-bolt-elements-sidebar-buttonBackgroundDefault text-bolt-elements-sidebar-buttonText",
                    children: language
                  },
                  language
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-4 mb-6", children: [
                {
                  label: "Member Since",
                  value: new Date(connection.user.created_at).toLocaleDateString()
                },
                {
                  label: "Public Gists",
                  value: connection.stats.publicGists
                },
                {
                  label: "Organizations",
                  value: connection.stats.organizations ? connection.stats.organizations.length : 0
                },
                {
                  label: "Languages",
                  value: Object.keys(connection.stats.languages).length
                }
              ].map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex flex-col p-3 rounded-lg bg-bolt-elements-background-depth-2 dark:bg-bolt-elements-background-depth-2 border border-bolt-elements-borderColor dark:border-bolt-elements-borderColor",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bolt-elements-textSecondary", children: stat.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-medium text-bolt-elements-textPrimary", children: stat.value })
                  ]
                },
                index
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-sm font-medium text-bolt-elements-textPrimary mb-2", children: "Repository Stats" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: [
                    {
                      label: "Public Repos",
                      value: connection.stats.publicRepos
                    },
                    {
                      label: "Private Repos",
                      value: connection.stats.privateRepos
                    }
                  ].map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex flex-col p-3 rounded-lg bg-bolt-elements-background-depth-2 dark:bg-bolt-elements-background-depth-2 border border-bolt-elements-borderColor dark:border-bolt-elements-borderColor",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bolt-elements-textSecondary", children: stat.label }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-medium text-bolt-elements-textPrimary", children: stat.value })
                      ]
                    },
                    index
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-sm font-medium text-bolt-elements-textPrimary mb-2", children: "Contribution Stats" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4", children: [
                    {
                      label: "Stars",
                      value: connection.stats.stars || 0,
                      icon: "i-ph:star",
                      iconColor: "text-bolt-elements-icon-warning"
                    },
                    {
                      label: "Forks",
                      value: connection.stats.forks || 0,
                      icon: "i-ph:git-fork",
                      iconColor: "text-bolt-elements-icon-info"
                    },
                    {
                      label: "Followers",
                      value: connection.stats.followers || 0,
                      icon: "i-ph:users",
                      iconColor: "text-bolt-elements-icon-success"
                    }
                  ].map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex flex-col p-3 rounded-lg bg-bolt-elements-background-depth-2 dark:bg-bolt-elements-background-depth-2 border border-bolt-elements-borderColor dark:border-bolt-elements-borderColor",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bolt-elements-textSecondary", children: stat.label }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-medium text-bolt-elements-textPrimary flex items-center gap-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${stat.icon} w-4 h-4 ${stat.iconColor}` }),
                          stat.value
                        ] })
                      ]
                    },
                    index
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-sm font-medium text-bolt-elements-textPrimary mb-2", children: "Gists" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: [
                    {
                      label: "Public",
                      value: connection.stats.publicGists
                    },
                    {
                      label: "Private",
                      value: connection.stats.privateGists || 0
                    }
                  ].map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex flex-col p-3 rounded-lg bg-bolt-elements-background-depth-2 dark:bg-bolt-elements-background-depth-2 border border-bolt-elements-borderColor dark:border-bolt-elements-borderColor",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-bolt-elements-textSecondary", children: stat.label }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-medium text-bolt-elements-textPrimary", children: stat.value })
                      ]
                    },
                    index
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 border-t border-bolt-elements-borderColor", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-bolt-elements-textSecondary", children: [
                  "Last updated: ",
                  new Date(connection.stats.lastUpdated).toLocaleString()
                ] }) })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium text-bolt-elements-textPrimary", children: "Recent Repositories" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: connection.stats.repos.map((repo) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: repo.html_url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "group block p-4 rounded-lg bg-bolt-elements-background-depth-1 dark:bg-bolt-elements-background-depth-1 border border-bolt-elements-borderColor dark:border-bolt-elements-borderColor hover:border-bolt-elements-borderColorActive dark:hover:border-bolt-elements-borderColorActive transition-all duration-200",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "i-ph:git-branch w-4 h-4 text-bolt-elements-icon-tertiary" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-sm font-medium text-bolt-elements-textPrimary group-hover:text-bolt-elements-item-contentAccent transition-colors", children: repo.name })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-bolt-elements-textSecondary", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", title: "Stars", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "i-ph:star w-3.5 h-3.5 text-bolt-elements-icon-warning" }),
                            repo.stargazers_count.toLocaleString()
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", title: "Forks", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "i-ph:git-fork w-3.5 h-3.5 text-bolt-elements-icon-info" }),
                            repo.forks_count.toLocaleString()
                          ] })
                        ] })
                      ] }),
                      repo.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-bolt-elements-textSecondary line-clamp-2", children: repo.description }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-bolt-elements-textSecondary", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", title: "Default Branch", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "i-ph:git-branch w-3.5 h-3.5" }),
                          repo.default_branch
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", title: "Last Updated", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "i-ph:clock w-3.5 h-3.5" }),
                          new Date(repo.updated_at).toLocaleDateString(void 0, {
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                          })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 ml-auto group-hover:text-bolt-elements-item-contentAccent transition-colors", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "i-ph:arrow-square-out w-3.5 h-3.5" }),
                          "View"
                        ] })
                      ] })
                    ] })
                  },
                  repo.full_name
                )) })
              ] })
            ] }) })
          ] })
        ] })
      ] })
    }
  );
}
function LoadingSpinner() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "i-ph:spinner-gap-bold animate-spin w-4 h-4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bolt-elements-textSecondary", children: "Loading..." })
  ] }) });
}

export { GitHubConnection as default };
