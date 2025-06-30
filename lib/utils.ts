import { STATUS_LABELS } from "@/constants/status";

type StatusKey = keyof typeof STATUS_LABELS | 'default';

export default function getStatusKey(liveStatus: string, statusType: string): StatusKey {
    if (liveStatus.toLowerCase() === 'canceled') return 'canceled';
    return statusType as StatusKey;
}