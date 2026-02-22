"use client";

import React, { useMemo } from "react";
import { LogLevel, StatsigProvider } from "@statsig/react-bindings";

export default function MyStatsig({ children }: { children: React.ReactNode }) {
  const isBrowser = typeof window !== "undefined";
  const userID = useMemo(() => {
    if (!isBrowser) return "anonymous-user";

    let id = localStorage.getItem("statsig_user_id");
    if (!id) {
      let randomId = "anonymous";
      if (typeof crypto !== "undefined") {
        if ("randomUUID" in crypto) {
          randomId = crypto.randomUUID();
        } else if ("getRandomValues" in crypto) {
          const buffer = new Uint8Array(8);
          crypto.getRandomValues(buffer);
          randomId = Array.from(buffer, value => value.toString(16).padStart(2, "0")).join("");
        }
      }
      id = `user-${randomId}`;
      localStorage.setItem("statsig_user_id", id);
    }
    return id;
  }, [isBrowser]);

  const user = {
    userID,
  };

  // Don't render provider until client-side initialization
  if (!isBrowser) {
    return <>{children}</>;
  }

  return (
    <StatsigProvider
      sdkKey={process.env.NEXT_PUBLIC_STATSIG_CLIENT_KEY!}
      user={user}
      options={{
        logLevel: LogLevel.Debug
      }}
    >
      {children}
    </StatsigProvider>
  );
}
