import { useQuery } from '@tanstack/react-query';
import { Match } from '@models/Match';
import { SPORTS_URL } from '@/config';

async function fetchMatches(): Promise<Match[]> {
  const res = await fetch(SPORTS_URL);
  if (!res.ok) throw new Error('Failed to fetch match data');
  return res.json();
}

export function useMatches() {
  return useQuery({
    queryKey: ['matches'],
    queryFn: fetchMatches,
    staleTime: 5 * 60 * 1000,
  });
}
