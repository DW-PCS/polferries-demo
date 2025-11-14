// app/(frontend)/(routes)/wycieczki/[id]/page.tsx

import config from '@payload-config';
import { getPayload } from 'payload';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

interface TourDetailPageProps {
  params: {
    id: string;
  };
}

async function TourDetailPage({ params }: TourDetailPageProps) {
  const payload = await getPayload({ config });

  try {
    const tour = await payload.findByID({
      collection: 'trips',
      id: params.id,
    });

    if (!tour) {
      notFound();
    }

    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
        <Link href="/wycieczki" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Powrót do wszystkich wycieczek
        </Link>

        <h1 className="text-4xl font-bold mb-4">{tour.title}</h1>

        {tour.featuredMedia && typeof tour.featuredMedia === 'object' && (
          <div className="mb-6">
            <img
              src={tour.featuredMedia.url}
              alt={tour.featuredMedia.alt || tour.title}
              className="w-full max-h-96 object-cover rounded-lg"
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Czas trwania</h3>
            <p>{tour.duration}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Port wypłynięcia</h3>
            <p>{tour.departurePort}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Cena za osobę</h3>
            <p className="text-2xl font-bold">{tour.pricePerPerson} SEK</p>
            {tour.groupPrice && <p className="text-sm text-gray-600">Cena grupowa: {tour.groupPrice} SEK</p>}
          </div>
        </div>

        {tour.shortDescription && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Opis</h2>
            <p className="text-gray-700 text-lg">{tour.shortDescription}</p>
          </div>
        )}

        {tour.fullDescription && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Szczegóły wycieczki</h2>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: tour.fullDescription }} />
          </div>
        )}

        {tour.dailyProgram && tour.dailyProgram.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Program dzienny</h2>
            <div className="space-y-4">
              {tour.dailyProgram.map((day: any) => (
                <div key={day.id} className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-semibold text-lg mb-2">Dzień {day.day}</h3>
                  <div className="prose" dangerouslySetInnerHTML={{ __html: day.description }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {tour.availableDates && tour.availableDates.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Dostępne terminy</h2>
            <div className="flex flex-wrap gap-3">
              {tour.availableDates.map((dateItem: any) => (
                <div key={dateItem.id} className="bg-blue-100 px-4 py-2 rounded-lg">
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

        {tour.gallery && Array.isArray(tour.gallery) && tour.gallery.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Galeria</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tour.gallery.map((media: any) => {
                const mediaObj = typeof media === 'object' ? media : null;
                return mediaObj ? (
                  <img
                    key={mediaObj.id}
                    src={mediaObj.url}
                    alt={mediaObj.alt || ''}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                ) : null;
              })}
            </div>
          </div>
        )}
      </div>
      </>
    );
  } catch (error) {
    notFound();
  }
}

export default TourDetailPage;
