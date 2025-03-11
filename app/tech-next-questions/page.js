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
  margin-top: 20px; /* Added margin to fix logos being cut off */
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

export default function TechFollowUp() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Tech Follow-Up Questions</title>
      </Head>
      <Container>
        {/* Logos Section */}
        <LogoContainer>
          <Logo src="/harvard-fas-logo.svg" alt="Harvard FAS Logo" width={150} height={50} />
          <Logo src="/mignone-center-logo.svg" alt="Mignone Center Logo" width={150} height={50} />
        </LogoContainer>

        <Card>
          <h1>Tech Follow-Up Questions</h1>
          
          <Question>
            <p><strong>1. Have you founded a startup at Harvard?</strong></p>
            <Label><input type="radio" name="startup" /> Yes → Congrats! Now pivot 10 times, burn through some VC money, and call it a "learning experience."</Label>
            <Label><input type="radio" name="startup" /> No, but I made a pitch deck → Perfect, that’s 80% of the work.</Label>
            <Label><input type="radio" name="startup" /> No, but I’m in CS50 → You are legally required to start one by junior year.</Label>
          </Question>
          
          <Question>
            <p><strong>2. How would you describe your coding skills?</strong></p>
            <Label><input type="radio" name="codingskills" /> “Fluent” (I copy-paste from Stack Overflow very efficiently).</Label>
            <Label><input type="radio" name="codingskills" /> “Intermediate” (I can add comments pretending I understand my own code).</Label>
            <Label><input type="radio" name="codingskills" /> “Beginner” (I put ‘Python’ on my resume and pray no one asks).</Label>
          </Question>
          
          <Question>
            <p><strong>3. Why do you want to work in tech?</strong></p>
            <Label><input type="radio" name="whytech" /> Free kombucha and bean bags.</Label>
            <Label><input type="radio" name="whytech" /> I like solving interesting problems (by which I mean adding AI to things that don’t need it).</Label>
            <Label><input type="radio" name="whytech" /> I want to create a startup that gets acquired for billions before I turn 30.</Label>
          </Question>

          <Question>
            <p><strong>4. If you got a job at Google, what’s the first thing you’d do?</strong></p>
            <Label><input type="radio" name="google" /> Immediately update my LinkedIn.</Label>
            <Label><input type="radio" name="google" /> Find the nap pods.</Label>
            <Label><input type="radio" name="google" /> Say “I work in AI” even if my job is just optimizing ad revenue.</Label>
          </Question>
          
          <Question>
            <p><strong>5. What’s your plan if your tech career doesn’t work out?</strong></p>
            <Label><input type="radio" name="backupplan" /> Go to business school and pretend I always wanted to do finance.</Label>
            <Label><input type="radio" name="backupplan" /> Pivot to product management and say “we should A/B test this” in every meeting.</Label>
            <Label><input type="radio" name="backupplan" /> Claim I’m building a “stealth startup” while I figure things out.</Label>
          </Question>
          
          <Button onClick={() => router.push('/results')}>Submit</Button>
        </Card>
      </Container>
    </>
  );
}
