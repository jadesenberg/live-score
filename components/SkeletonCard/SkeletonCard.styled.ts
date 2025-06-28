import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0%   { background-position: -250px 0; }
  100% { background-position: 250px 0; }
`;

const baseColor = '#3a3a3a';
const highlight = '#4a4a4a';

export const Card = styled.div`
  background: #2c2c2c;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  width: 375px;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SkeletonLine = styled.div<{
  width: string;
  height?: string;
}>`
  background: ${baseColor};
  background-image: linear-gradient(90deg, ${baseColor}, ${highlight}, ${baseColor});
  background-size: 400% 100%;
  animation: ${shimmer} 1.2s ease-in-out infinite;
  border-radius: 4px;
  width: ${({ width }) => width};
  height: ${({ height = '0.75rem' }) => height};
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const Score = styled.div`
  background: ${baseColor};
  background-image: linear-gradient(90deg, ${baseColor}, ${highlight}, ${baseColor});
  background-size: 400% 100%;
  animation: ${shimmer} 1.2s ease-in-out infinite;
  border-radius: 8px;
  width: 5rem;   /* ~80px height */
  height: 5rem;
  margin: 0 auto;
`;

export const Teams = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  column-gap: 1rem;
`;

export const TeamBar = styled(SkeletonLine)`
  height: 1rem;
`;

export const CirclePlaceholder = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${baseColor};
  background-image: linear-gradient(90deg, ${baseColor}, ${highlight}, ${baseColor});
  background-size: 400% 100%;
  animation: ${shimmer} 1.2s ease-in-out infinite;
`;
