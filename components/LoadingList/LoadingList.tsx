import SkeletonCard from '@components/SkeletonCard/SkeletonCard';

export default function LoadingList({ count = 5 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </>
  );
}
