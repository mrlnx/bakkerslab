import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } from "next/constants";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const appRoot = dirname(fileURLToPath(import.meta.url));

const getNextConfig = (phase: string): NextConfig => {
  const distDir =
    phase === PHASE_DEVELOPMENT_SERVER
      ? ".next-dev"
      : phase === PHASE_PRODUCTION_BUILD
        ? ".next-build"
        : ".next";

  return {
    devIndicators: false,
    distDir,
    experimental: {
      devtoolSegmentExplorer: false
    },
    outputFileTracingRoot: appRoot
  };
};

export default getNextConfig;
