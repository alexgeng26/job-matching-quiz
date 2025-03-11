"use client";

import Head from 'next/head';
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
`;

export default function FinanceAdvice() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Finance Career Advice</title>
      </Head>
      <Container>
        {/* Logos Section */}
        <LogoContainer>
          <Logo src="/harvard-fas-logo.svg" alt="Harvard FAS Logo" width={150} height={50} />
          <Logo src="/mignone-center-logo.svg" alt="Mignone Center Logo" width={150} height={50} />
        </LogoContainer>

        <Card>
          <h1>Finance Advice</h1>
          <p><strong>Ideal Candidate Profile:</strong> Do you enjoy working 100-hour weeks for a company that makes more money in a day than you will in your entire career? Great!</p>
          <p><strong>Daily Responsibilities:</strong> You will spend most of your time perfecting PowerPoint slide margins, adjusting font sizes, and adding footnotes that no one will read.</p>
          <p><strong>Work-Life Balance:</strong> There is none. But don’t worry—after six years, you'll either get promoted or "pursue other opportunities" (i.e., get two hours of sleep).</p>
          <p><strong>Compensation:</strong> $150K starting salary. If you divide that by your hourly wage, it’s slightly less than what your barista makes.</p>
          <p><strong>Biggest Skill You'll Develop:</strong> The ability to answer emails at 3 AM with “happy to help!” while weeping quietly.</p>
          <Button onClick={() => router.push('/finance-next-questions')}>Next</Button>
        </Card>
      </Container>
    </>
  );
}
