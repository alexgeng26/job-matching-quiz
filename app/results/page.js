"use client";

import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled from '@emotion/styled';

const Container = styled.div`
  background: white; /* Forces white background, preventing dark mode */
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

const Tagline = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
  color: #333; /* Ensures tagline is always dark gray */
`;

export default function Results() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Results</title>
      </Head>
      <Container>
        {/* Logos Section */}
        <LogoContainer>
          <Logo src="/harvard-fas-logo.svg" alt="Harvard FAS Logo" width={150} height={50} />
          <Logo src="/mignone-center-logo.svg" alt="Mignone Center Logo" width={150} height={50} />
        </LogoContainer>

        {/* AI Takeover Message */}
        <Image src="/chatgpt.png" alt="ChatGPT Hoodie" width={400} height={400} />
        <Tagline>You’ll get replaced by AI anyway.</Tagline>
      </Container>
    </>
  );
}
