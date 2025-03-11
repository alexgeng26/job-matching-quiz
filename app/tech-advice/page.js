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

export default function TechAdvice() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Tech Career Advice</title>
      </Head>
      <Container>
        {/* Logos Section */}
        <LogoContainer>
          <Logo src="/harvard-fas-logo.svg" alt="Harvard FAS Logo" width={150} height={50} />
          <Logo src="/mignone-center-logo.svg" alt="Mignone Center Logo" width={150} height={50} />
        </LogoContainer>

        <Card>
          <h1>Tech Advice</h1>
          <p><strong>Ideal Candidate Profile:</strong> Have you ever spent 12 hours fixing one missing semicolon? Congrats, you’re qualified.</p>
          <p><strong>Daily Responsibilities:</strong> Writing code that no one understands, Googling error messages, and pretending you understand blockchain when investors ask.</p>
          <p><strong>Required Skills:</strong> Explaining “technical debt” in a way that makes it sound like a natural disaster.</p>
          <p><strong>Work-Life Balance:</strong> Excellent. You’ll have free kombucha on tap, unlimited PTO (that no one actually takes), and a Slack channel where people only post memes.</p>
          <p><strong>Biggest Skill You'll Develop:</strong> Learning how to tell recruiters that yes, you do have 5+ years of experience in a framework that came out last year.</p>
          <Button onClick={() => router.push('/tech-next-questions')}>Next</Button>
        </Card>
      </Container>
    </>
  );
}
