import { useEffect, useState } from 'react';

export const useScrollPercent = (): number => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const currentPagePercent = () => {
    const percent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    setScrollPercent(percent);
  };

  useEffect(() => {
    currentPagePercent();

    window.addEventListener('scroll', currentPagePercent, { passive: true });
    return () => window.removeEventListener('scroll', currentPagePercent);
  }, []);

  return scrollPercent;
};
