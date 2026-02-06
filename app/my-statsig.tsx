"use client";

import React, { useState, useEffect } from "react";
import { LogLevel, StatsigProvider } from "@statsig/react-bindings";

export default function MyStatsig({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);

  // Generate or get user ID
  const getUserID = () => {
    if (typeof window !== 'undefined') {
      let id = localStorage.getItem('statsig_user_id');
      if (!id) {
        id = `user-${Math.random().toString(36).substring(7)}`;
        localStorage.setItem('statsig_user_id', id);
      }
      return id;
    }
    return 'anonymous-user';
  };

  const user = {
    userID: getUserID(),
  };

  useEffect(() => {
    setIsInitialized(true);
  }, []);

  // Don't render provider until client-side initialization
  if (!isInitialized) {
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
