import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '40px',
          background: 'linear-gradient(135deg, #833AB4, #C13584, #E1306C)',
        }}
      >
        <svg
          width="110"
          height="110"
          viewBox="0 0 32 32"
          fill="none"
        >
          {/* Stem */}
          <path d="M16 26 C16 26 16 18 16 15" stroke="white" strokeWidth="2.2" strokeLinecap="round" opacity="0.95"/>
          {/* Left leaf */}
          <path d="M16 17 C14 16 9 15 9 11.5 C9 8 12.5 7 16 10.5" fill="white" opacity="0.9"/>
          {/* Right leaf */}
          <path d="M16 13.5 C18 12.5 23 12 23 9 C23 6.5 19.5 6 16 9" fill="white" opacity="0.9"/>
          {/* Roots */}
          <path d="M16 26 C14 27 12.5 27.5 11 27" stroke="white" strokeWidth="1.4" strokeLinecap="round" opacity="0.5"/>
          <path d="M16 26 C18 27 19.5 27.5 21 27" stroke="white" strokeWidth="1.4" strokeLinecap="round" opacity="0.5"/>
        </svg>
      </div>
    ),
    { ...size }
  );
}
