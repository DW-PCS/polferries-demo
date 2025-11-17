import { PageContainer, PageHeader } from '@/components/common';
import { TourDetails } from '@/components/pages/tours';
import { Tour } from '@/lib/types';
import config from '@payload-config';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPayload } from 'payload';

interface TourDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

async function TourDetailPage({ params }: TourDetailPageProps) {
  const payload = await getPayload({ config });
  const { id } = await params;

  try {
    const tour = await payload.findByID({
      collection: 'trips',
      id: id,
    });

    if (!tour) {
      notFound();
    }

    return (
      <PageContainer>
        <Link href="/wycieczki" className="text-[#003d7a] hover:underline mb-4 inline-block">
          ← Powrót do wszystkich wycieczek
        </Link>
        <PageHeader title={tour.title} />
        <TourDetails tour={tour as Tour} />
      </PageContainer>
    );
  } catch (error) {
    notFound();
  }
}

export default TourDetailPage;
