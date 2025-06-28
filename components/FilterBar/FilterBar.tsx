import { useMemo } from 'react';
import { Match, MatchStatus } from '@models/Match';
import { Wrapper, FilterButton } from './FilterBar.styled';
import { STATUSES, LABELS } from '@/constants/filters';

type Props = {
  matches: Match[];
  setFilter: (status: MatchStatus) => void;
  currentFilter: MatchStatus;
};

export default function FilterBar({
  matches,
  setFilter,
  currentFilter,
}: Props) {
  const counts = useMemo(() => {
    const c: Record<MatchStatus, number> = {
      ALL: matches.length,
      inprogress: 0,
      finished: 0,
      notstarted: 0,
    };
    for (const m of matches) {
      const key = m.status.type as MatchStatus;
      if (key in c) c[key] += 1;
    }
    return c;
  }, [matches]);

  return (
    <Wrapper>
      {STATUSES.map((status) => (
        <FilterButton
          key={status}
          $active={currentFilter === status}
          onClick={() => setFilter(status)}
        >
          {`${LABELS[status]} (${counts[status]})`}
        </FilterButton>
      ))}
    </Wrapper>
  );
}
