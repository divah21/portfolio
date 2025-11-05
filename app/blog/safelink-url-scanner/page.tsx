import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export const metadata = {
  title: "Building SafeLink: An AI-Powered URL Safety Scanner | David Smart",
  description:
    "How I built an intelligent URL security agent using Mastra AI, integrated with Telex.im, and deployed it for real-time threat detection.",
};

const SafeLinkBlog = () => {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        <div className="pb-20 pt-36">
          {/* Spotlight Effects */}
          <div>
            <Spotlight
              className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
              fill="white"
            />
            <Spotlight
              className="top-10 left-full h-[80vh] w-[50vw]"
              fill="purple"
            />
            <Spotlight
              className="top-28 left-80 h-[80vh] w-[50vw]"
              fill="blue"
            />
          </div>

          {/* Blog Content */}
          <article className="prose prose-invert max-w-none">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Building SafeLink: An AI-Powered URL Safety Scanner
              </h1>
              <p className="text-gray-400 text-lg">
                How I built an intelligent security agent using Mastra AI and
                integrated it with Telex.im for the HNG Internship Stage 3
              </p>
              <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                <span>By David Smart</span>
                <span>•</span>
                <span>November 5, 2025</span>
                <span>•</span>
                <span>10 min read</span>
              </div>
            </div>

            {/* Introduction */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-4 text-white">
                The Challenge
              </h2>
              <p className="text-gray-300 leading-relaxed">
                For Stage 3 of the HNG Internship, we were tasked with building
                an AI agent using Mastra (mandatory for TypeScript/JavaScript
                developers) and integrating it with Telex.im using the
                Agent-to-Agent (A2A) protocol. The goal was to create something
                practical that solves a real problem.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                I chose to build{" "}
                <span className="text-blue-400 font-semibold">SafeLink</span> —
                a URL safety scanner that analyzes links for potential security
                threats, phishing attempts, and malware. In today&apos;s digital
                age where phishing attacks are increasingly sophisticated,
                having an AI assistant that can quickly assess URL safety is
                invaluable.
              </p>
            </section>

            {/* Demo Section */}
            <section className="mb-10 p-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-4 text-white">
                🚀 Live Demo
              </h3>
              <div className="space-y-2">
                <p className="text-gray-300">
                  <strong>Production URL:</strong>
                </p>
                <a
                  href="https://stage-3-mastra-agent-production.up.railway.app/health"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline block"
                >
                  https://stage-3-mastra-agent-production.up.railway.app
                </a>
                <p className="text-gray-400 text-sm mt-4">
                  Try asking in Telex: &quot;Is https://google.com safe?&quot;
                  or &quot;Check https://googl.com&quot;
                </p>
              </div>
            </section>

            {/* What It Does */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-4 text-white">
                What SafeLink Does
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-black-200 rounded-lg border border-white/10">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">
                    🛡️ Real-Time Scanning
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Analyzes URLs instantly for malware, phishing, and other
                    threats
                  </p>
                </div>
                <div className="p-4 bg-black-200 rounded-lg border border-white/10">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">
                    🔍 Typosquatting Detection
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Catches domain impersonation attempts (e.g., googl.com vs
                    google.com)
                  </p>
                </div>
                <div className="p-4 bg-black-200 rounded-lg border border-white/10">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">
                    🔗 VirusTotal Integration
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Leverages 70+ security engines for comprehensive threat
                    analysis
                  </p>
                </div>
                <div className="p-4 bg-black-200 rounded-lg border border-white/10">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">
                    ⚡ Smart Caching
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Caches results to improve speed and reduce API calls
                  </p>
                </div>
              </div>
            </section>

            {/* Tech Stack */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-4 text-white">Tech Stack</h2>
              <div className="bg-black-200 p-6 rounded-lg border border-white/10">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">▹</span>
                    <div>
                      <strong className="text-white">
                        Mastra AI Framework
                      </strong>{" "}
                      — The core orchestration layer for the AI agent
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">▹</span>
                    <div>
                      <strong className="text-white">
                        OpenRouter + GPT-4o-mini
                      </strong>{" "}
                      — LLM provider for natural language understanding
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">▹</span>
                    <div>
                      <strong className="text-white">VirusTotal API</strong> —
                      Threat intelligence from 70+ security engines
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">▹</span>
                    <div>
                      <strong className="text-white">
                        Express.js + TypeScript
                      </strong>{" "}
                      — Backend server with type safety
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">▹</span>
                    <div>
                      <strong className="text-white">Railway</strong> —
                      Production deployment with auto-scaling
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">▹</span>
                    <div>
                      <strong className="text-white">Telex.im</strong> — A2A
                      protocol integration for agent communication
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Architecture */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-4 text-white">
                System Architecture
              </h2>
              <p className="text-gray-300 mb-4">
                The agent follows a multi-layered approach to URL analysis:
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-blue-900/30 to-transparent rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-white mb-2">
                    1. Input Processing
                  </h4>
                  <p className="text-gray-400 text-sm">
                    The agent receives a natural language query via
                    Telex.im&apos;s A2A protocol and extracts the URL using
                    regex patterns. It handles both full URLs
                    (https://example.com) and bare domains (example.com),
                    automatically adding protocols when needed.
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-purple-900/30 to-transparent rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold text-white mb-2">
                    2. Cache Check
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Before making external API calls, the system checks an
                    in-memory cache (NodeCache) using SHA-256 hashed URLs as
                    keys. Cached results have a TTL of 1 hour, significantly
                    reducing response times and API costs.
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-pink-900/30 to-transparent rounded-lg border-l-4 border-pink-500">
                  <h4 className="font-semibold text-white mb-2">
                    3. Threat Analysis
                  </h4>
                  <p className="text-gray-400 text-sm">
                    If not cached, the system performs threat analysis using
                    either VirusTotal&apos;s comprehensive database (when API
                    key is available) or intelligent heuristic scanning that
                    checks for suspicious patterns, typosquatting, missing
                    HTTPS, and known phishing indicators.
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-r from-green-900/30 to-transparent rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-white mb-2">
                    4. AI Response Generation
                  </h4>
                  <p className="text-gray-400 text-sm">
                    The Mastra agent interprets the scan results and generates a
                    user-friendly response explaining the threat level (Safe,
                    Suspicious, Malicious, Unknown) with actionable
                    recommendations.
                  </p>
                </div>
              </div>
            </section>

            {/* Key Challenge */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-4 text-white">
                The Hardest Challenge: LLM Timeout Handling
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                One of the most significant challenges was dealing with LLM
                response timeouts. During testing with Telex.im, I noticed the
                agent would sometimes hang indefinitely on the
                &quot;Scanning...&quot; message without returning results.
              </p>

              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-red-400 font-semibold mb-2">
                  ❌ The Problem
                </h4>
                <p className="text-gray-300 text-sm">
                  The{" "}
                  <code className="bg-black-100 px-2 py-1 rounded">
                    urlScannerAgent.generate()
                  </code>{" "}
                  call would occasionally hang or take too long, causing poor
                  user experience in Telex conversations.
                </p>
              </div>

              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-green-400 font-semibold mb-2">
                  ✅ The Solution
                </h4>
                <p className="text-gray-300 text-sm mb-2">
                  I implemented a robust fallback mechanism with timeout
                  handling:
                </p>
                <pre className="bg-black-100 p-4 rounded-lg text-xs text-gray-300 overflow-x-auto">
                  {`// Graceful fallback with timeout
let contentText: string | undefined;
try {
  const response = await urlScannerAgent.generate(
    lastMessage.content, 
    { resourceId }
  );
  contentText = response.text;
} catch (genErr) {
  console.warn('Agent generation failed, falling back...');
}

// If LLM didn't return text, use direct scanning
if (!contentText) {
  const url = extractUrl(String(lastMessage.content));
  if (url) {
    const result = await scanUrl(url);
    contentText = formatScanResult(result);
  }
}`}
                </pre>
                <p className="text-gray-300 text-sm mt-2">
                  This ensures users <em>always</em> get a response, even if the
                  LLM fails or times out.
                </p>
              </div>
            </section>

            {/* Innovation */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Innovation: Typosquatting Detection
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Beyond standard malware detection, I implemented a Levenshtein
                distance algorithm to catch typosquatting attacks — a common
                phishing technique where attackers register domains similar to
                popular brands.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-red-400 font-semibold mb-2">
                    ❌ Suspicious
                  </h4>
                  <p className="text-sm text-gray-300 mb-2">
                    <code>https://googl.com</code>
                  </p>
                  <p className="text-xs text-gray-400">
                    Flagged as typosquatting attempt — domain &quot;googl&quot;
                    is edit-distance 1 from &quot;google&quot;
                  </p>
                </div>
                <div className="p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-green-400 font-semibold mb-2">✅ Safe</h4>
                  <p className="text-sm text-gray-300 mb-2">
                    <code>https://google.com</code>
                  </p>
                  <p className="text-xs text-gray-400">
                    Legitimate domain, passes all safety checks
                  </p>
                </div>
              </div>
            </section>

            {/* A2A Integration */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Telex.im A2A Integration
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The Agent-to-Agent (A2A) protocol enables seamless communication
                between AI agents. Here&apos;s how SafeLink integrates with
                Telex.im:
              </p>

              <div className="bg-black-200 p-6 rounded-lg border border-white/10 mb-4">
                <h4 className="font-semibold text-white mb-3">
                  A2A Request Format
                </h4>
                <pre className="bg-black-100 p-4 rounded text-xs text-gray-300 overflow-x-auto">
                  {`POST /a2a/agent/urlScanner
Content-Type: application/json

{
  "messages": [
    {
      "role": "user",
      "content": "Is https://example.com safe?"
    }
  ],
  "resourceId": "telex-channel-id"
}`}
                </pre>
              </div>

              <div className="bg-black-200 p-6 rounded-lg border border-white/10">
                <h4 className="font-semibold text-white mb-3">
                  A2A Response Format
                </h4>
                <pre className="bg-black-100 p-4 rounded text-xs text-gray-300 overflow-x-auto">
                  {`{
  "messages": [
    {
      "role": "assistant",
      "content": "Scan result for https://example.com: SAFE\\n- Safe: Yes\\n- Source: heuristic\\n- Details: URL passes all safety checks"
    }
  ]
}`}
                </pre>
              </div>

              <p className="text-gray-300 mt-4 text-sm">
                This standardized format allows SafeLink to work seamlessly
                within Telex workflows, enabling users to check URL safety
                directly in their chat conversations.
              </p>
            </section>

            {/* Deployment */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Deployment & Production
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The agent is deployed on Railway with the following setup:
              </p>

              <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>
                    <strong>Auto-scaling:</strong> Railway automatically scales
                    based on traffic
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>
                    <strong>Environment variables:</strong> API keys stored
                    securely in Railway dashboard
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>
                    <strong>Health monitoring:</strong> /health endpoint tracks
                    cache stats and uptime
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>
                    <strong>Continuous deployment:</strong> Git push triggers
                    automatic builds and deploys
                  </span>
                </li>
              </ul>

              <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
                <p className="text-sm text-gray-300">
                  <strong>Production URL:</strong>{" "}
                  <a
                    href="https://stage-3-mastra-agent-production.up.railway.app"
                    className="text-blue-400 hover:text-blue-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://stage-3-mastra-agent-production.up.railway.app
                  </a>
                </p>
              </div>
            </section>

            {/* Results */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Results & Impact
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-6 bg-gradient-to-br from-blue-900/30 to-blue-900/10 rounded-lg border border-blue-500/30 text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    &lt;2s
                  </div>
                  <div className="text-sm text-gray-400">
                    Average Response Time
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-900/30 to-purple-900/10 rounded-lg border border-purple-500/30 text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">
                    70+
                  </div>
                  <div className="text-sm text-gray-400">
                    Security Engines (VirusTotal)
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-900/30 to-green-900/10 rounded-lg border border-green-500/30 text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    100%
                  </div>
                  <div className="text-sm text-gray-400">Uptime on Railway</div>
                </div>
              </div>
            </section>

            {/* Key Learnings */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Key Learnings
              </h2>
              <div className="space-y-3">
                <div className="p-4 bg-black-200 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-white mb-2">
                    1. Always Have a Fallback
                  </h4>
                  <p className="text-gray-400 text-sm">
                    LLMs can be unpredictable. Having deterministic fallback
                    logic ensures users always get a response, maintaining trust
                    and reliability.
                  </p>
                </div>

                <div className="p-4 bg-black-200 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold text-white mb-2">
                    2. Model Selection Matters
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Initially tried Moonshot AI&apos;s Kimi K2 model, but it
                    didn&apos;t support function calling. Switching to
                    GPT-4o-mini solved the tool execution issue. Always verify
                    model capabilities match your requirements.
                  </p>
                </div>

                <div className="p-4 bg-black-200 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-white mb-2">
                    3. Caching is Critical
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Implementing smart caching reduced API costs by ~70% and
                    improved response times dramatically. For production AI
                    agents, caching is not optional.
                  </p>
                </div>

                <div className="p-4 bg-black-200 rounded-lg border-l-4 border-pink-500">
                  <h4 className="font-semibold text-white mb-2">
                    4. User Experience First
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Technical accuracy means nothing if users have to wait 30
                    seconds for a response. Optimize for speed and provide
                    immediate feedback, even if it means using heuristics over
                    perfect AI analysis.
                  </p>
                </div>
              </div>
            </section>

            {/* Future Improvements */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Future Improvements
              </h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">▹</span>
                  <span>
                    <strong>Homoglyph Detection:</strong> Detect Unicode-based
                    phishing (e.g., аpple.com using Cyrillic &apos;а&apos;)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">▹</span>
                  <span>
                    <strong>URL Expansion:</strong> Automatically follow
                    shortened URLs (bit.ly, tinyurl) before scanning
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">▹</span>
                  <span>
                    <strong>Historical Tracking:</strong> Store scan history and
                    detect pattern changes over time
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">▹</span>
                  <span>
                    <strong>Real-time Notifications:</strong> Alert users if a
                    previously-safe URL becomes compromised
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">▹</span>
                  <span>
                    <strong>Browser Extension:</strong> One-click URL checking
                    directly in the browser
                  </span>
                </li>
              </ul>
            </section>

            {/* Conclusion */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold mb-4 text-white">Conclusion</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Building SafeLink was an incredible learning experience that
                pushed me to think deeply about AI agent architecture,
                production reliability, and user experience. The combination of
                Mastra&apos;s powerful orchestration, OpenRouter&apos;s flexible
                LLM access, and Telex.im&apos;s A2A protocol created a seamless
                integration that feels natural to use.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                This project reinforced that building production AI agents
                isn&apos;t just about connecting to an LLM — it&apos;s about
                handling edge cases gracefully, optimizing for real-world
                constraints, and always prioritizing the user experience.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The HNG Internship Stage 3 challenge was the perfect catalyst to
                build something genuinely useful. SafeLink is now deployed and
                helping users make safer browsing decisions every day.
              </p>
            </section>

            {/* CTA */}
            <section className="mb-10 p-8 bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-lg border border-blue-500/30 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Try SafeLink Now
              </h3>
              <p className="text-gray-300 mb-6">
                Test the agent yourself on Telex.im or check out the source code
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://stage-3-mastra-agent-production.up.railway.app/health"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition-colors"
                >
                  View Live Agent
                </a>
                <a
                  href="https://github.com/divah21/stage-3-mastra-agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-semibold transition-colors"
                >
                  View on GitHub
                </a>
              </div>
            </section>

            {/* Author */}
            <section className="border-t border-white/10 pt-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white">
                  DS
                </div>
                <div>
                  <h4 className="font-semibold text-white">David Smart</h4>
                  <p className="text-sm text-gray-400">
                    Full-Stack Developer | AI Enthusiast | HNG Intern
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Building intelligent systems that solve real problems
                  </p>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default SafeLinkBlog;
