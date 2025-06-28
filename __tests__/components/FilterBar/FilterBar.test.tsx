import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterBar from '@components/FilterBar/FilterBar';
import { Match } from '@models/Match';

const makeMatch = (statusType: 'inprogress' | 'finished' | 'notstarted'): Match => ({
  id: `${statusType}-1`,
  name: 'X vs Y',
  competitionId: 'c1',
  competition: 'League',
  countryId: 'ct1',
  country: 'Land',
  timestamp: 0,
  status: { code: 0, type: statusType },
  homeTeam: { id: 1, name: 'X', slug: 'x', gender: 'M', subTeams: [] },
  awayTeam: { id: 2, name: 'Y', slug: 'y', gender: 'M', subTeams: [] },
  homeScore: { current: 0, period1: 0, normaltime: 0 },
  awayScore: { current: 0, period1: 0, normaltime: 0 },
  liveStatus: '-',
});

describe('FilterBar', () => {
  const matches = [
    makeMatch('inprogress'),
    makeMatch('inprogress'),
    makeMatch('finished'),
    makeMatch('notstarted'),
    makeMatch('finished'),
  ];

  const setFilter = jest.fn();

  beforeEach(() => setFilter.mockClear());

  it('displays correct counts', () => {
    render(
      <FilterBar
        matches={matches}
        currentFilter="ALL"
        setFilter={setFilter}
      />
    );
    expect(screen.getByText('All (5)')).toBeInTheDocument();
    expect(screen.getByText('In Progress (2)')).toBeInTheDocument();
    expect(screen.getByText('Finished (2)')).toBeInTheDocument();
    expect(screen.getByText('Not Started (1)')).toBeInTheDocument();
  });

  it('calls setFilter when a button is clicked', async () => {
    render(
      <FilterBar
        matches={matches}
        currentFilter="ALL"
        setFilter={setFilter}
      />
    );
    await userEvent.click(screen.getByText('Finished (2)'));
    expect(setFilter).toHaveBeenCalledWith('finished');
  });

  it('highlights the active filter', () => {
    render(
      <FilterBar
        matches={matches}
        currentFilter="inprogress"
        setFilter={setFilter}
      />
    );
    const btn = screen.getByText('In Progress (2)');
    expect(btn).toHaveStyle('background: #00ff9d');
  });
});
