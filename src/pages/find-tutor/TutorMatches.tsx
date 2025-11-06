import React, { useState } from 'react';
import { useRouter } from 'next/router';
import TutorCard from '../../components/findTutor/TutorCard';
import Button from '../../components/findTutor/Button';

interface Tutor {
  id: string;
  name: string;
  profession: string;
  rating: number;
  reviews: number;
  description: string;
  avatarUrl?: string;
}

const sampleTutors: Tutor[] = [
  {
    id: '1',
    name: 'Emily Carter',
    profession: 'Math Tutor',
    rating: 4.8,
    reviews: 30,
    description: 'Experienced math tutor for all levels.',
    avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: '2',
    name: 'David Gao',
    profession: 'Science Tutor',
    rating: 4.9,
    reviews: 28,
    description: 'Focused on chemistry and physics.',
    avatarUrl: 'https://randomuser.me/api/portraits/men/22.jpg'
  },
  {
    id: '3',
    name: 'Ethan Clark',
    profession: 'History Specialist',
    rating: 5,
    reviews: 18,
    description: 'Expert in World History and Civics.',
    avatarUrl: 'https://randomuser.me/api/portraits/men/33.jpg'
  }
];

const TutorMatches: React.FC = () => {
  const router = useRouter();

  const [filters, setFilters] = useState({
    subject: '',
    teachingMode: '',
    priceRange: [0, 200],
    experience: '',
    availability: ''
  });

  return (
    <div style={{ maxWidth: 900, margin: '3rem auto', backgroundColor: '#fff', borderRadius: 8, padding: 24, boxShadow: '0 0 15px rgba(0,0,0,0.1)' }}>
      <h3 style={{ marginBottom: 20 }}>Here are your best matches!</h3>

      {/* Filters UI simplified for demo */}
      <div style={{ marginBottom: 24, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <select
          value={filters.subject}
          onChange={e => setFilters({ ...filters, subject: e.target.value })}
          style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        >
          <option value="">Subject</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="English">English</option>
        </select>

        <select
          value={filters.teachingMode}
          onChange={e => setFilters({ ...filters, teachingMode: e.target.value })}
          style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        >
          <option value="">Teaching Mode</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>

        <input
          type="range"
          min={0}
          max={200}
          value={filters.priceRange[1]}
          onChange={e => setFilters({ ...filters, priceRange: [0, Number(e.target.value)] })}
          style={{ flexGrow: 1 }}
        />
        <span>Max Price: ${filters.priceRange[1]}</span>

        <select
          value={filters.experience}
          onChange={e => setFilters({ ...filters, experience: e.target.value })}
          style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        >
          <option value="">Experience</option>
          <option value="1-3 years">1-3 years</option>
          <option value="3-5 years">3-5 years</option>
          <option value="5+ years">5+ years</option>
        </select>

        <select
          value={filters.availability}
          onChange={e => setFilters({ ...filters, availability: e.target.value })}
          style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        >
          <option value="">Availability</option>
          <option value="Weekdays">Weekdays</option>
          <option value="Weekends">Weekends</option>
        </select>

        <Button onClick={() => { alert('Filters applied (mocked)'); }} variant="primary">
          Apply Filters
        </Button>
      </div>

      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        {sampleTutors.map(tutor => (
          <TutorCard
            key={tutor.id}
            id={tutor.id}
            name={tutor.name}
            profession={tutor.profession}
            rating={tutor.rating}
            reviews={tutor.reviews}
            description={tutor.description}
            avatarUrl={tutor.avatarUrl}
            onClick={() => router.push(`/find-tutor/profile/${tutor.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default TutorMatches;
