
"use client";

import React, { useEffect } from 'react';

const Hio = () => {
    useEffect(() => {
      // Perform the redirect when the component mounts
      window.location.href = 'https://play.google.com/store/apps/details?id=com.zerodha.kite3&hl=en_IN&gl=US';
    }, []); // empty dependency array ensures the effect runs only once, similar to componentDidMount

  return <div>jdssjljsl</div>; // Optional: You can render a message to indicate the redirection is happening
};

export default Hio;