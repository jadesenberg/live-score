import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

export const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 999px;
  border: 1px solid ${({ $active }) => ($active ? '#00ff9d' : '#555')};
  background: ${({ $active }) => ($active ? '#00ff9d' : 'transparent')};
  color: ${({ $active }) => ($active ? '#2c2c2c' : '#ccc')};
  font-size: 0.875rem;
  font-weight: 500;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
  cursor: pointer;

  &:hover {
    border-color: #00ff9d;
    color: #fff;
  }
`;
