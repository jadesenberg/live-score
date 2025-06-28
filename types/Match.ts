export type MatchStatus = 'ALL' | 'finished' | 'inprogress' | 'notstarted';

export interface Team {
  id: number;
  name: string;
  slug: string;
  gender: string;
  subTeams: any[];
}

export interface Score {
  current: number;
  period1: number;
  normaltime: number;
}

export interface Match {
  id: string;
  name: string;
  competitionId: string;
  competition: string;
  countryId: string;
  country: string;
  timestamp: number;
  status: {
    code: number;
    type: 'finished' | 'inprogress' | 'notstarted';
  };
  homeTeam: Team;
  awayTeam: Team;
  homeScore: Score;
  awayScore: Score;
  liveStatus: string;
}
