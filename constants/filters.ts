import { MatchStatus } from '@models/Match';

export const STATUSES: MatchStatus[] = [
  'ALL',
  'inprogress',
  'finished',
  'notstarted',
];

export const LABELS: Record<MatchStatus, string> = {
  ALL:         'All',
  inprogress:  'In Progress',
  finished:    'Finished',
  notstarted:  'Not Started',
};
