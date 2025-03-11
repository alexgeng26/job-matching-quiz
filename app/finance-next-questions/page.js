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
  margin-top: 20px; /* Added margin to prevent logos from being cut off */
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
  text-align: left;
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
  display: block;
  width: 100%;
`;

const Question = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-top: 8px;
  cursor: pointer;
`;

export default function FinanceFollowUp() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Finance Follow-Up Questions</title>
      </Head>
      <Container>
        {/* Logos Section */}
        <LogoContainer>
          <Logo src="/harvard-fas-logo.svg" alt="Harvard FAS Logo" width={150} height={50} />
          <Logo src="/mignone-center-logo.svg" alt="Mignone Center Logo" width={150} height={50} />
        </LogoContainer>

        <Card>
          <h1>Finance Follow-Up Questions</h1>
          
          <Question>
            <p><strong>1. Are you in a final club?</strong></p>
            <Label><input type="radio" name="finalclub" /> Yes → Just ask your dad for an internship.</Label>
            <Label><input type="radio" name="finalclub" /> No → That’s okay! Just say you “strongly considered” punching and pivot the conversation to your GPA.</Label>
          </Question>
          
          <Question>
            <p><strong>2. What do you think “DCF” stands for?</strong></p>
            <Label><input type="radio" name="dcf" /> Discounted Cash Flow (correct, but no one actually understands it).</Label>
            <Label><input type="radio" name="dcf" /> Don’t Come Friday (you will be coming in on Friday).</Label>
            <Label><input type="radio" name="dcf" /> Dark Circle Formation (caused by lack of sleep).</Label>
          </Question>
          
          <Question>
            <p><strong>3. How do you handle stress?</strong></p>
            <Label><input type="radio" name="stress" /> PowerPoint formatting at 2 AM calms me.</Label>
            <Label><input type="radio" name="stress" /> I pretend my Venmo balance is my net worth.</Label>
            <Label><input type="radio" name="stress" /> I cry in the Equinox steam room.</Label>
          </Question>

          <Question>
            <p><strong>4. Have you been rejected from a finance club on campus?</strong></p>
            <Label><input type="radio" name="campusclub" /> Harvard Financial Analysts Club ("Are you even trying?")</Label>
            <Label><input type="radio" name="campusclub" /> Smart Woman Securities ("Sorry, we filled our one male ally spot.")</Label>
            <Label><input type="radio" name="campusclub" /> The one that only takes 3 people a year ("Don’t worry, we hear McKinsey’s still hiring.")</Label>
          </Question>
          
          <Question>
            <p><strong>5. What’s your dream job?</strong></p>
            <Label><input type="radio" name="dreamjob" /> Private equity → so I can do finance, but sleep.</Label>
            <Label><input type="radio" name="dreamjob" /> Hedge fund → so I can gamble with other people’s money.</Label>
            <Label><input type="radio" name="dreamjob" /> CFO → so I can tell juniors to “figure it out” while golfing.</Label>
          </Question>
          
          <Button onClick={() => router.push('/results')}>Submit</Button>
        </Card>
      </Container>
    </>
  );
}
