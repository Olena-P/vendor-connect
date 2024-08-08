import StatusLabel, { Status } from '@/app/components/status-label';
import { headers } from 'next/headers';
import AddCompanyButton from '@/app/components/add-company-button';
import dynamic from 'next/dynamic';

const Clock = dynamic(() => import('@/app/components/clock'), { ssr: false });

export default function Home() {
  const headerList = headers();

  console.log(headerList);

  return (
    <main>
      <Clock />
      <AddCompanyButton />

      <h1 className="text-xl">Home page</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    </main>
  );
}
