import styled from 'styled-components';

const Message = styled.p`
  color: #f87171;
  text-align: center;
`;

export default function ErrorMessage({ children }: { children: React.ReactNode }) {
  return <Message>{children}</Message>;
}
