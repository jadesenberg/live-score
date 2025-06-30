import { useMemo } from "react";

export default function useFormattedDate(timestamp: number) {
    return useMemo(() => {
      const dt = new Date(timestamp * 1000);
      const date = dt
        .toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        .toUpperCase();
  
      const time = dt.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
  
      return `${date} ${time}`;
    }, [timestamp]);
}