import Head from 'next/head';

import CourseHighlights from '@/components/landing/CourseHighlights';
import CoursesForKids from '@/components/landing/CoursesForKids';
import FeaturedTutors from '@/components/landing/FeaturedTutors';
import Footer from '@/components/landing/Footer';
import HeroSection from '@/components/landing/HeroSection';
import HowItWorks from '@/components/landing/HowItWorks';
import OurImpact from '@/components/landing/OurImpact';
import OurOfferings from '@/components/landing/OurOfferings';
import TutorCTA from '@/components/landing/TutorCTA';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>TutorEdge – Find the Right Tutor</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <HeroSection
          title="Find expert tutors for any subject"
          subtitle="Personalized 1-on-1 online sessions with verified tutors. Learn at your pace, on your schedule."
          ctaText="Find a Tutor"
          imageUrl="/images/heroImage.png"
        />
        <OurOfferings />
        <CourseHighlights />
        <HowItWorks />
        <FeaturedTutors />
        <OurImpact />
        <CoursesForKids />
        <TutorCTA />
        <Footer />
      </main>
    </>
  );
}


