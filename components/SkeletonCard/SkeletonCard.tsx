'use client';

import {
  Card,
  Meta,
  SkeletonLine,
  Score,
  Teams,
  TeamBar,
  CirclePlaceholder,
} from './SkeletonCard.styled';

export default function SkeletonCard() {
  return (
    <Card>
      <Meta>
        <SkeletonLine width="20%" />
        <SkeletonLine width="50%" height="1rem" />
        <SkeletonLine width="30%" />
      </Meta>

      <Score />

      <Teams>
        <TeamBar width="40%" />
        <CirclePlaceholder />
        <TeamBar width="40%" />
      </Teams>
    </Card>
  );
}
