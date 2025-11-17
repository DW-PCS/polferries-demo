import Link from 'next/link';
import { Tour } from '@/lib/types/tour.types';

interface TourCardProps {
  tour: Tour;
}

export const TourCard = ({ tour }: TourCardProps) => {
  return (
    <Link
      href={`/wycieczki/${tour.id}`}
      className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer block"
    >
      {tour.featuredMedia && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={tour.featuredMedia.url}
            alt={tour.featuredMedia.alt || tour.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{tour.title}</h2>
        {tour.shortDescription && (
          <p className="text-gray-600 text-sm line-clamp-3">{tour.shortDescription}</p>
        )}
      </div>
    </Link>
  );
};
