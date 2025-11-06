import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '../../components/findTutor/Button';
import InputField from '../../components/findTutor/InputField';

const CreateAccount: React.FC = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    router.push('/find-tutor/preferences');
  };

  return (
    <div style={{
      maxWidth: 420,
      margin: '6rem auto',
      padding: '2rem',
      boxShadow: '0 0 8px rgba(0,0,0,0.1)',
      borderRadius: 8,
      backgroundColor: '#fff',
      textAlign: 'center'
    }}>
      <img
        alt="TutorEdge Illustration"
        src="/images/courseHighlightIllustration.png"
        width={80}
        style={{ marginBottom: 24 }}
      />
      <h2 style={{ marginBottom: 24 }}>Create your TutorEdge account</h2>
      <InputField
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
        placeholder="Full Name"
        type="text"
      />
      <InputField
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email address"
        type="email"
      />
      <InputField
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        type="password"
      />
      <InputField
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        type="tel"
      />
      <Button onClick={handleNext} style={{ marginTop: 20 }} variant="primary">
        Next
      </Button>
      <p style={{ marginTop: 16, fontSize: 14 }}>
        Already have an account?{' '}
        <a href="/login" style={{ color: '#007bff', cursor: 'pointer' }}>Sign In</a>
      </p>
    </div>
  );
};

export default CreateAccount;
