"use client";

import Head from 'next/head';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styled from '@emotion/styled';

const Container = styled.div`
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
`;

export default function ConsultingAdvice() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Consulting Career Advice</title>
      </Head>
      <Container>
        {/* Logos Section */}
        <LogoContainer>
          <Logo src="/harvard-fas-logo.svg" alt="Harvard FAS Logo" width={150} height={50} />
          <Logo src="/mignone-center-logo.svg" alt="Mignone Center Logo" width={150} height={50} />
        </LogoContainer>

        <Card>
          <h1>Consulting Advice</h1>
          <p><strong>Ideal Candidate Profile:</strong> Did you get into Harvard without really knowing what you wanted to do? Perfect.</p>
          <p><strong>Daily Responsibilities:</strong> You’ll create 100-slide decks summarizing what the client already knew, but in a prettier font.</p>
          <p><strong>Required Skills:</strong> Saying “let’s take this offline” when you don’t know the answer, and charging companies $500K to tell them to “leverage synergies.”</p>
          <p><strong>Work-Life Balance:</strong> You’ll live in a hotel Monday–Thursday, which is great if you enjoy TSA pat-downs and forgetting what your apartment looks like.</p>
          <p><strong>Exit Opportunities:</strong> You can transition into literally anything, because after three years in consulting, nothing will scare you. Not even finance.</p>
          <Button onClick={() => router.push('/consulting-next-questions')}>Next</Button>
        </Card>
      </Container>
    </>
  );
}
