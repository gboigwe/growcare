import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'GrowCare - Where care comes full circle';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 40%, #16213e 70%, #0a0a0a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Gradient orbs */}
        <div
          style={{
            position: 'absolute',
            top: '80px',
            left: '150px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(131, 58, 180, 0.3)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '150px',
            right: '200px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(225, 48, 108, 0.3)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '100px',
            left: '350px',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: 'rgba(247, 119, 55, 0.25)',
            filter: 'blur(80px)',
          }}
        />

        {/* Logo icon - sprout */}
        <div
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '28px',
            background: 'linear-gradient(135deg, #833AB4, #C13584, #E1306C)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '30px',
            boxShadow: '0 0 40px rgba(225, 48, 108, 0.4)',
          }}
        >
          <svg
            width="70"
            height="70"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path d="M16 26 C16 26 16 18 16 15" stroke="white" strokeWidth="2.2" strokeLinecap="round" opacity="0.95"/>
            <path d="M16 17 C14 16 9 15 9 11.5 C9 8 12.5 7 16 10.5" fill="white" opacity="0.9"/>
            <path d="M16 13.5 C18 12.5 23 12 23 9 C23 6.5 19.5 6 16 9" fill="white" opacity="0.9"/>
            <path d="M16 26 C14 27 12.5 27.5 11 27" stroke="white" strokeWidth="1.4" strokeLinecap="round" opacity="0.5"/>
            <path d="M16 26 C18 27 19.5 27.5 21 27" stroke="white" strokeWidth="1.4" strokeLinecap="round" opacity="0.5"/>
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: 900,
            color: 'white',
            marginBottom: '16px',
            letterSpacing: '-2px',
          }}
        >
          GrowCare
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '28px',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '40px',
          }}
        >
          Where care comes full circle
        </div>

        {/* Tags */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
          }}
        >
          {['Stacks Bitcoin L2', 'Clarity Smart Contracts', 'Community Finance'].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '50px',
                  padding: '10px 24px',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '18px',
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
