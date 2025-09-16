import { useEffect, useState } from "react";
import type { ReactNode } from "react"
import Loading from "./ui/loading";

// Container props interface
interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  // State variable for container management
  const [isReady, setIsReady] = useState(false);

  // Container's effect handler
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsReady(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {!isReady && <Loading />}
      {isReady && children}
    </>
  );
}