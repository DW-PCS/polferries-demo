import { Tour } from '@/lib/types/tour.types';
import { TourCard } from './TourCard';

interface TourGridProps {
  tours: Tour[];
}

export const TourGrid = ({ tours }: TourGridProps) => {
  if (!tours || tours.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Brak dostępnych wycieczek</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tours.map(tour => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </div>
  );
};
