import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '../../components/findTutor/Button';
import Checkbox from '../../components/findTutor/Checkbox';
import RadioGroup from '../../components/findTutor/RadioGroup';
import InputField from '../../components/findTutor/InputField';

const subjects = ['Math', 'Science', 'English', 'History', 'Social Science'];
const languages = ['English', 'Spanish', 'French', 'Mandarin'];
const timeSlots = ['Morning', 'Afternoon', 'Evening'];

const urgencyOptions = [
  { label: 'Within 24 hours', value: '24h' },
  { label: 'Within 1 week', value: '1w' },
  { label: 'Other & ASAP', value: 'other' },
];

const TutorPreferences: React.FC = () => {
  const router = useRouter();

  const [academicNeeds, setAcademicNeeds] = useState({
    subject: '',
    language: '',
    time: ''
  });
  const [scheduling, setScheduling] = useState({
    internship: false,
    weekdays: false,
    flexible: false,
  });
  const [urgency, setUrgency] = useState('');

  const handleNext = () => {
    router.push('/find-tutor/matches');
  };

  return (
    <div style={{
      maxWidth: 520,
      margin: '4rem auto',
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 24,
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ marginBottom: 24, textAlign: 'center' }}>Tell us what you're looking for</h3>

      <div style={{ marginBottom: 20 }}>
        <label style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>Academic Needs</label>

        <select
          style={{ width: '100%', padding: 10, marginBottom: 16, borderRadius: 4, border: '1px solid #ccc' }}
          value={academicNeeds.subject}
          onChange={e => setAcademicNeeds({ ...academicNeeds, subject: e.target.value })}
        >
          <option value="" disabled>Select Subject</option>
          {subjects.map(sub => <option key={sub} value={sub}>{sub}</option>)}
        </select>

        <select
          style={{ width: '100%', padding: 10, marginBottom: 16, borderRadius: 4, border: '1px solid #ccc' }}
          value={academicNeeds.language}
          onChange={e => setAcademicNeeds({ ...academicNeeds, language: e.target.value })}
        >
          <option value="" disabled>Select Language</option>
          {languages.map(lang => <option key={lang} value={lang}>{lang}</option>)}
        </select>

        <select
          style={{ width: '100%', padding: 10, borderRadius: 4, border: '1px solid #ccc' }}
          value={academicNeeds.time}
          onChange={e => setAcademicNeeds({ ...academicNeeds, time: e.target.value })}
        >
          <option value="" disabled>Select Time</option>
          {timeSlots.map(ts => <option key={ts} value={ts}>{ts}</option>)}
        </select>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={{ display: 'block', marginBottom: 10, fontWeight: 600 }}>Scheduling & Location</label>
        <Checkbox
          label="Internship"
          checked={scheduling.internship}
          onChange={e => setScheduling({ ...scheduling, internship: e.target.checked })}
        />
        <Checkbox
          label="Weekdays"
          checked={scheduling.weekdays}
          onChange={e => setScheduling({ ...scheduling, weekdays: e.target.checked })}
        />
        <Checkbox
          label="Flexible"
          checked={scheduling.flexible}
          onChange={e => setScheduling({ ...scheduling, flexible: e.target.checked })}
        />
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={{ display: 'block', marginBottom: 10, fontWeight: 600 }}>Urgency</label>
        <RadioGroup
          name="urgency"
          options={urgencyOptions}
          selectedValue={urgency}
          onChange={setUrgency}
        />
      </div>

      <Button onClick={handleNext} variant="primary" style={{ width: '100%', marginTop: 10 }}>
        Find My Tutors
      </Button>
    </div>
  );
};

export default TutorPreferences;
