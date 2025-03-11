"use client";

import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styled from '@emotion/styled';

const Container = styled.div`
  background: white; /* Forces white background, preventing dark mode */
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 640px;
  margin-bottom: 20px;
`;

const Logo = styled(Image)`
  width: 150px;
  height: auto;
`;

const Card = styled.div`
  width: 90%;
  max-width: 640px;
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  text-rendering: optimizeLegibility;
  color: #333; /* Darker text color */

  /* macOS Font Fix */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Button = styled.button`
  background: #7b2206;
  color: white;
  font-weight: bold;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  margin-top: 16px;
  border-radius: 4px;
  &:disabled {
    background: #e7e0de;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-top: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Message = styled.p`
  color: red;
  font-weight: bold;
  margin-top: 10px;
`;

export default function Page() {
  const [jobType, setJobType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmationNeeded, setConfirmationNeeded] = useState(false);
  const router = useRouter();

  const invalidJobs = ['public service', 'environmental sustainability', 'nonprofit work'];

  const handleNext = () => {
    if (invalidJobs.includes(jobType.toLowerCase())) {
      setErrorMessage('Please choose a real job.');
      return;
    }

    if (jobType === 'government') {
      setErrorMessage("Don't bother. Elon will cut your job.");
      return;
    }

    if (jobType === 'art') {
      setErrorMessage("If you are not on the Harvard Lampoon Art Board, good luck.");
      return;
    }

    if (jobType === 'law' && !confirmationNeeded) {
      setErrorMessage("Are you sure you want to sell your soul to Big Law?");
      setConfirmationNeeded(true);
      return;
    }

    if (jobType === 'medicine' && !confirmationNeeded) {
      setErrorMessage("Are you sure you want to spend your twenties in a hospital while your college friends make six figures?");
      setConfirmationNeeded(true);
      return;
    }

    setErrorMessage('');
    setConfirmationNeeded(false);

    if (jobType === 'finance') {
      router.push('/finance-advice');
    } else if (jobType === 'consulting') {
      router.push('/consulting-advice');
    } else if (jobType === 'tech') {
      router.push('/tech-advice');
    }
  };

  return (
    <>
      <Head>
        <title>Harvard Lampoon Job Matching</title>
      </Head>
      <Container>
        {/* Logos Section */}
        <LogoContainer>
          <Logo src="/harvard-fas-logo.svg" alt="Harvard FAS Logo" width={150} height={50} />
          <Logo src="/mignone-center-logo.svg" alt="Mignone Center Logo" width={150} height={50} />
        </LogoContainer>

        <Card>
          <h1>Congratulations, Aspiring Wealth Accumulator!</h1>
          <p>
            We know choosing the right career is tough. Should you follow your dreams or make six figures straight out of college?
            Fret not! This Official Job Matching Quiz will help you discard everything you wrote in your college essays for a life of true prestige and glory.
          </p>
          <p><i>A transformative experience awaits you.</i></p>
          <Select
            value={jobType}
            onChange={(e) => {
              setJobType(e.target.value);
              setErrorMessage('');
              setConfirmationNeeded(false);
            }}
          >
            <option value="">Select a job type...</option>
            <option value="finance">Finance</option>
            <option value="tech">Tech</option>
            <option value="consulting">Consulting</option>
            <option value="government">Government</option> {/* Moved above Law and Medicine */}
            <option value="law">Law</option>
            <option value="medicine">Medicine</option>
            <option value="public service">Public Service</option>
            <option value="environmental sustainability">Environmental Sustainability</option>
            <option value="nonprofit work">Nonprofit Work</option>
            <option value="art">Art</option>
          </Select>
          {errorMessage && <Message>{errorMessage}</Message>}
          <Button onClick={handleNext} disabled={!jobType}>Next</Button>
        </Card>
      </Container>
    </>
  );
}
