import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;

const Skeleton = styled.div`
  animation: ${shimmer} 1.5s infinite linear;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
  border-radius: 12px;
  margin-bottom: 1rem;
  height: 100px;
  width: 100%;
`;

export default function SkeletonCard() {
  return <Skeleton />;
}
