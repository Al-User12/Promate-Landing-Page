interface RatingProps {
  rating: number;
  reviews?: number;
}

export default function Rating({ rating, reviews }: RatingProps) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-yellow-400 text-lg">⭐</span>
      <span className="font-semibold">{rating}</span>
      {reviews && (
        <span className="text-brand-muted text-sm">({reviews})</span>
      )}
    </div>
  );
}

