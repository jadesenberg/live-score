import { useMemo } from "react";

export default function useMatchMinute(liveStatus: string, isLive: boolean) {
    return useMemo(() => {
      if (!isLive) return 0;
      const raw = parseInt(liveStatus.replace('+', ''), 10) || 0;
      return Math.min(Math.max(raw, 0), 90);
    }, [liveStatus, isLive]);
}