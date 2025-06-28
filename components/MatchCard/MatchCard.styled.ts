import styled, { css } from 'styled-components';

export const Card = styled.div`
  background: #2c2c2c;
  color: white;
  max-width: 475px;
  margin: 2rem auto;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

export const Country = styled.div`
  font-size: 0.75rem;
  color: #bbb;
  text-transform: uppercase;
`;

export const League = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: white;
`;

export const StatusLabel = styled.div<{ $color: string }>`
  font-size: 0.75rem;
  color: ${({ $color }) => $color};
  letter-spacing: 1px;
`;

export const DateLabel = styled.div`
  font-size: 0.75rem;
  color: #bbb;
`;

export const Score = styled.div`
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
`;

export const Teams = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  column-gap: 1rem;
`;

export const TeamName = styled.div<{ $align: 'left' | 'right' }>`
  text-align: ${({ $align }) => $align};
  font-size: 1rem;
`;

export const MatchCircle = styled.div<{
  $color: string;
  $isLive: boolean;
  $progress: number;
}>`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 50%;

  ${({ $isLive, $color, $progress }) =>
    $isLive
      ? css`
          background: conic-gradient(
            ${$color} ${$progress * 3.6}deg,
            #2c2c2c 0deg
          );
        `
      : css`
          background: transparent;
          border: 2px solid ${$color};
        `}

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $isLive }) =>
    $isLive &&
    css`
      &::before {
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        background: #2c2c2c;
        border-radius: 50%;
      }
    `}
`;

export const Minute = styled.span`
  position: relative;
  font-size: 1.25rem;
  color: white;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #3a3a3a;
  width: 100%;
  margin-top: 1rem;
`;
