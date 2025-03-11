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

export default function ConsultingFollowUp() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Consulting Follow-Up Questions</title>
      </Head>
      <Container>
        {/* Logos Section */}
        <LogoContainer>
          <Logo src="/harvard-fas-logo.svg" alt="Harvard FAS Logo" width={150} height={50} />
          <Logo src="/mignone-center-logo.svg" alt="Mignone Center Logo" width={150} height={50} />
        </LogoContainer>

        <Card>
          <h1>Consulting Follow-Up Questions</h1>
          
          <Question>
            <p><strong>1. What do you think consultants actually do?</strong></p>
            <Label><input type="radio" name="consulting" /> Give advice on things we have no experience in.</Label>
            <Label><input type="radio" name="consulting" /> Make PowerPoints about PowerPoints.</Label>
            <Label><input type="radio" name="consulting" /> Say “We’ll circle back” and never do.</Label>
          </Question>
          
          <Question>
            <p><strong>2. Which consulting buzzword speaks to you the most?</strong></p>
            <Label><input type="radio" name="buzzword" /> “Low-hanging fruit” (easy work that still costs $200K).</Label>
            <Label><input type="radio" name="buzzword" /> “Let's take this offline” (I have no idea what I’m saying).</Label>
            <Label><input type="radio" name="buzzword" /> “Big picture thinking” (I don’t want to do the work).</Label>
          </Question>

          <Question>
            <p><strong>3. Are you in HCCG?</strong></p>
            <Label><input type="radio" name="hccg" /> Yes → You have already been pre-selected for a Bain offer. Congrats!</Label>
            <Label><input type="radio" name="hccg" /> No → Oof. Get ready to say “data-driven problem solver” a lot in interviews.</Label>
            <Label><input type="radio" name="hccg" /> No, but I applied → Sorry, they only take people who already own a Patagonia vest.</Label>
          </Question>
          
          <Question>
            <p><strong>4. What excites you about consulting?</strong></p>
            <Label><input type="radio" name="excitement" /> The chance to be in a Marriott more than my own home.</Label>
            <Label><input type="radio" name="excitement" /> Getting a $1,000 flight upgrade while my client’s employees get laid off.</Label>
            <Label><input type="radio" name="excitement" /> Nothing, but I like money and being vague.</Label>
          </Question>
          
          <Question>
            <p><strong>5. What is your biggest strength?</strong></p>
            <Label><input type="radio" name="strength" /> I can make an Excel model look intimidating.</Label>
            <Label><input type="radio" name="strength" /> I can turn 5 bullet points into a 75-slide deck.</Label>
            <Label><input type="radio" name="strength" /> I once used a buzzword in a sentence and convinced a CEO I knew what I was talking about.</Label>
          </Question>
          
          <Button onClick={() => router.push('/results')}>Submit</Button>
        </Card>
      </Container>
    </>
  );
}
