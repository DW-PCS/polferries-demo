import { PageContainer, PageHeader } from '@/components/common';
import { TourGrid } from '@/components/pages/tours';
import { Tour } from '@/lib/types';
import config from '@payload-config';
import { getPayload } from 'payload';

async function ToursPage() {
  const payload = await getPayload({ config });

  const tours = await payload.find({
    collection: 'trips',
    limit: 100,
  });

  return (
    <PageContainer>
      <PageHeader title="Wycieczki" subtitle="Odkryj najpiękniejsze miejsca Skandynawii" />
      <TourGrid tours={tours.docs as Tour[]} />
    </PageContainer>
  );
}

export default ToursPage;
