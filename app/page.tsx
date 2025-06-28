'use client';

import { useState, useMemo } from 'react';
import styled from 'styled-components';

import GlobalStyles from '@styles/GlobalStyle';
import FilterBar from '@components/FilterBar/FilterBar';
import MatchCard from '@components/MatchCard/MatchCard';
import LoadingList from '@components/LoadingList/LoadingList';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage';

import { MatchStatus } from '@models/Match';
import { useMatches } from '@hooks/useMatches';

const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

export default function Home() {
  const [filter, setFilter] = useState<MatchStatus>('ALL');
  const { data: matches = [], isLoading, isError } = useMatches();

  const filtered = useMemo(
    () =>
      filter === 'ALL'
        ? matches
        : matches.filter((m) => m.status.type === filter.toLowerCase()),
    [filter, matches]
  );

  return (
    <>
      <GlobalStyles />
      <Container>
        {isLoading && <LoadingList count={5} />}
        {isError && <ErrorMessage>Failed to load matches.</ErrorMessage>}
        {!isLoading && !isError && (
          <>
            <FilterBar
              matches={matches}
              currentFilter={filter}
              setFilter={setFilter}
            />
            {filtered.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </>
        )}
      </Container>
    </>
  );
}
