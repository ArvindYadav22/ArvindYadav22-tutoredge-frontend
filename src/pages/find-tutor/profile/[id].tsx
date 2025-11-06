import Head from 'next/head';

import TutorProfile from '@/pages/find-tutor/TutorProfile';

export default function ProfilePage() {
  return (
    <>
      <Head>
        <title>Tutor profile – TutorEdge</title>
      </Head>
      <main className="mx-auto max-w-6xl p-6">
        <TutorProfile />
      </main>
    </>
  );
}


