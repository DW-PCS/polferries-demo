import config from '@payload-config';
import { getPayload } from 'payload';
import Link from 'next/link';

async function ToursPage() {
  const payload = await getPayload({ config });

  const tours = await payload.find({
    collection: 'trips',
    limit: 100,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Wycieczki</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.docs.map(tour => (
          <Link
            key={tour.id}
            href={`/wycieczki/${tour.id}`}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer block"
          >
            {tour.featuredMedia && typeof tour.featuredMedia === 'object' && (
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
        ))}
      </div>
    </div>
  );
}

export default ToursPage;
