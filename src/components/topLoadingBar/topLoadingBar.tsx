import { useState, useEffect } from "react";

interface Props {
  isLoading: boolean;
}

export default function TopLoadingBar({ isLoading }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      setProgress(0); 
      interval = setInterval(() => {
        setProgress((prev) => (prev < 90 ? prev + 10 : prev));
      }, 200); 
    } else {
      setProgress(100);
      const timeout = setTimeout(() => {
        setProgress(0); 
      }, 300); 
      return () => clearTimeout(timeout);
    }

    return () => clearInterval(interval); 
  }, [isLoading]);

  return (
    <div className="fixed inset-0 top-0 left-0 h-1 bg-blue-500 transition-all duration-300 z-50"
      style={{ width: `${progress}%` }}/>
  );
}
