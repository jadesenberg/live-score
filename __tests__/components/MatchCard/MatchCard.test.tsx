import { render, screen } from '@testing-library/react';
import MatchCard from '@components/MatchCard/MatchCard';
import { Match } from '@models/Match';

const baseMatch: Omit<Match, 'status' | 'liveStatus'> & {
  status: Match['status'];
  liveStatus: string;
} = {
  id: '1',
  name: 'A vs B',
  competitionId: 'c1',
  competition: 'Test League',
  countryId: 'ct1',
  country: 'Testland',
  timestamp: 1620000000,
  status: { code: 0, type: 'finished' },
  homeTeam: { id: 1, name: 'Team A', slug: 'a', gender: 'M', subTeams: [] },
  awayTeam: { id: 2, name: 'Team B', slug: 'b', gender: 'M', subTeams: [] },
  homeScore: { current: 2, period1: 1, normaltime: 2 },
  awayScore: { current: 1, period1: 1, normaltime: 1 },
  liveStatus: 'FT',
};

describe('MatchCard', () => {
  it('renders pre-match date only', () => {
    const match: Match = {
      ...baseMatch,
      status: { code: 0, type: 'notstarted' },
      liveStatus: '-',
    };
    render(<MatchCard match={match} />);
    expect(screen.getByText(/^[A-Z]{3} \d{1,2} \d{2}:\d{2}$/)).toBeInTheDocument();
    expect(screen.queryByText('LIVE')).toBeNull();
    expect(screen.queryByText('–')).toBeNull();
  });

  it('renders live minute and yellow label', () => {
    const match: Match = {
      ...baseMatch,
      status: { code: 0, type: 'inprogress' },
      liveStatus: '30',
    };
    render(<MatchCard match={match} />);
    expect(screen.getByText('LIVE')).toHaveStyle({ color: '#facc15' });
    expect(screen.getByText("30'")).toBeInTheDocument();
    expect(screen.getByText('2 – 1')).toBeInTheDocument();
  });

  it('renders halftime with HT and half-ring', () => {
    const match: Match = {
      ...baseMatch,
      status: { code: 0, type: 'inprogress' },
      liveStatus: 'HT',
    };
    render(<MatchCard match={match} />);
    expect(screen.getByText('HT')).toBeInTheDocument();
  });

  it('renders ended with FT in green circle', () => {
    const match: Match = {
      ...baseMatch,
      status: { code: 0, type: 'finished' },
      liveStatus: 'FT',
    };
    render(<MatchCard match={match} />);
    expect(screen.getByText('FT')).toBeInTheDocument();
    expect(screen.getByText('ENDED')).toHaveStyle({ color: '#00ff9d' });
  });

  it('renders cancelled state correctly', () => {
    const match: Match = {
      ...baseMatch,
      status: { code: 0, type: 'finished' },
      liveStatus: 'canceled',
    };
    render(<MatchCard match={match} />);
    expect(screen.getByText('CANCELLED')).toHaveStyle({ color: '#f87171' });
  });
});
