import RichText from '@/components/features/RichText';
import { Tour } from '@/lib/types/tour.types';
import { InfoCard } from '@/components/common';

interface TourDetailsProps {
  tour: Tour;
}

export const TourDetails = ({ tour }: TourDetailsProps) => {
  return (
    <div>
      {/* Hero Image */}
      {tour.featuredMedia && (
        <div className="mb-6">
          <img
            src={tour.featuredMedia.url}
            alt={tour.featuredMedia.alt || tour.title}
            className="w-full max-h-96 object-cover rounded-lg"
          />
        </div>
      )}

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {tour.duration && (
          <InfoCard title="Czas trwania" content={<p>{tour.duration}</p>} />
        )}
        {tour.departurePort && (
          <InfoCard title="Port wypłynięcia" content={<p>{tour.departurePort}</p>} />
        )}
        {tour.pricePerPerson && (
          <InfoCard
            title="Cena za osobę"
            content={
              <>
                <p className="text-2xl font-bold">{tour.pricePerPerson} SEK</p>
                {tour.groupPrice && (
                  <p className="text-sm text-gray-600">Cena grupowa: {tour.groupPrice} SEK</p>
                )}
              </>
            }
          />
        )}
      </div>

      {/* Short Description */}
      {tour.shortDescription && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Opis</h2>
          <p className="text-gray-700 text-lg">{tour.shortDescription}</p>
        </div>
      )}

      {/* Full Description */}
      {tour.fullDescription && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Szczegóły wycieczki</h2>
          <RichText content={tour.fullDescription} />
        </div>
      )}

      {/* Daily Program */}
      {tour.dailyProgram && tour.dailyProgram.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Program dzienny</h2>
          <div className="space-y-4">
            {tour.dailyProgram.map(day => (
              <div key={day.id} className="border-l-4 border-[#003d7a] pl-4 py-2">
                <h3 className="font-semibold text-lg mb-2">Dzień {day.day}</h3>
                <RichText content={day.description} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Available Dates */}
      {tour.availableDates && tour.availableDates.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Dostępne terminy</h2>
          <div className="flex flex-wrap gap-3">
            {tour.availableDates.map(dateItem => (
              <div key={dateItem.id} className="bg-[#003d7a] text-white px-4 py-2 rounded-lg">
                {new Date(dateItem.date).toLocaleDateString('pl-PL', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Gallery */}
      {tour.gallery && tour.gallery.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Galeria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tour.gallery.map(media => (
              <img
                key={media.id}
                src={media.url}
                alt={media.alt || ''}
                className="w-full h-64 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
