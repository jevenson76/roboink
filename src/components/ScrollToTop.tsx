import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top with a slight delay for better UX
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(scrollToTop, 100);

    // Also handle instant scroll for accessibility
    window.scrollTo(0, 0);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  // Additionally, ensure scroll on initial mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}