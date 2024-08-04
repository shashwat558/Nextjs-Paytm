"use client"


import React, { useState, useEffect, Component } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar } from "@repo/ui/appbar";
import { useRouter } from "next/navigation";

export function AppbarClient() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Return null or a loader during the hydration mismatch period
  if (!isClient || status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <Appbar
        onSignin={signIn}
        onSignout={async () => {
          await signOut();
          router.push("/api/auth/signin");
        }}
        user={session?.user}
      />
    </React.Fragment>
  );
}

