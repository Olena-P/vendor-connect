import { headers } from 'next/headers';
import AddCompanyButton from '@/app/components/add-company-button';
import dynamic from 'next/dynamic';
import MagicButton from '@/app/components/magic-button';

const Clock = dynamic(() => import('@/app/components/clock'), { ssr: false });

export default function Home() {
  const headerList = headers();

  console.log(headerList);

  return (
    <main>
      <Clock />
      <AddCompanyButton />

      <MagicButton />
    </main>
  );
}
