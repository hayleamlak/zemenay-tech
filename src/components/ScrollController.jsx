import React, { useEffect, useRef } from 'react';

export default function ScrollController({ onScrollProgress, children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const scrollTop = scrollRef.current.scrollTop;
      const scrollHeight = scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      onScrollProgress(progress);
    };

    const el = scrollRef.current;
    if (el) el.addEventListener('scroll', handleScroll);
    return () => el && el.removeEventListener('scroll', handleScroll);
  }, [onScrollProgress]);

  return (
    <div
      ref={scrollRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 10,
        pointerEvents: 'auto',
        overflowY: 'auto',
      }}
    >
      {children}
    </div>
  );
}
