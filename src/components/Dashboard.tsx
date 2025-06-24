import React, { useEffect, useState } from "react";

// Inline worker as a Blob
const workerCode = `
  self.onmessage = function() {
    let t = 0;
    for (let i = 0; i < 1e8; i++) { t += i; }
    self.postMessage(t);
  }
`;

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);

  useEffect(() => {
    const blob = new Blob([workerCode], { type: "application/javascript" });
    const worker = new Worker(URL.createObjectURL(blob));
    worker.onmessage = (e) => {
      setD(e.data);
      worker.terminate();
    };
    worker.postMessage(null);
    return () => worker.terminate();
  }, []);

  return <div>{d}</div>;
} 