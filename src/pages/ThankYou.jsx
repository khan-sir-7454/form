import Link from 'next/link';
import React, { useState } from 'react';

const ThankYou = ({referCode, setThankyouPopup}) => {

    const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(referCode.toString())
      .then(() => {
        // alert('Refer code copied to clipboard!');
        setCopied(true)
      })
      .catch(() => {
        // alert('Failed to copy refer code. Please try again.');
        setCopied(false)
      });
  };



  return (
    <div
          style={{
            position: 'absolute',
            zIndex:10,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              position:'relative',
              background: '#fff',
              padding: '30px',
              borderRadius: '10px',
              width: '390px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
        <div style={{display:'flex', alignItems:'center', gap: '10px', justifyContent:'space-between', marginBottom:'10px'}}>
                <p style={{ fontSize: '30px', textAlign: 'center' }}>Thank You!</p>
        </div>
      <p style={{ fontWeight: 'bold', marginBottom:'10px' }}>
        Your Refer Code is{' '}
        <span style={{ color: 'blueviolet' }}>{referCode}</span>{' '}
        <span
          onClick={handleCopy}
          style={{
            color: copied ? 'gray' : 'blue',
            fontSize:'16px',
            textDecoration: 'underline',
            cursor: 'pointer',
            marginLeft:'8px',
            fontFamily:'monospace',
            fontWeight:'bolder'
          }}
        >
          {copied ? 'COPIED' : 'COPY'}
        </span>
      </p>
      <span style={{ color: 'gray' }}>
        Note: Copy or Take Screenshot of your refer code for further reference.
      </span>
      <div style={{textAlign:'center', marginTop:'10px', color:'blue', textDecoration:'underline'}}><Link href={'https://novamedinnovations.com'}>Go Back To Home</Link></div>
    </div></div>
  );
}
export default ThankYou;