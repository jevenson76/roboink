import { useEffect, useRef, useState } from 'react';

interface AnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
  once?: boolean;
}

// Hook for scroll-triggered animations
export const useScrollAnimation = (
  options: AnimationOptions = {}
) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    animationClass = 'visible',
    once = true
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            element.classList.add(animationClass);
            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            setIsVisible(false);
            element.classList.remove(animationClass);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, animationClass, once]);

  return { elementRef, isVisible };
};

// Hook for staggered animations
export const useStaggerAnimation = (
  itemCount: number,
  baseDelay: number = 100
) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(itemCount).fill(false)
  );

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    for (let i = 0; i < itemCount; i++) {
      timers.push(
        setTimeout(() => {
          setVisibleItems((prev) => {
            const newState = [...prev];
            newState[i] = true;
            return newState;
          });
        }, i * baseDelay)
      );
    }

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [itemCount, baseDelay]);

  return visibleItems;
};

// Hook for hover animations with magnetic effect
export const useMagneticHover = (strength: number = 0.3) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = Math.max(rect.width, rect.height);
      
      if (distance < maxDistance) {
        const translateX = (x / maxDistance) * strength * 20;
        const translateY = (y / maxDistance) * strength * 20;
        
        element.style.transform = `translate(${translateX}px, ${translateY}px)`;
      }
    };

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0, 0)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return elementRef;
};

// Hook for cart animation when adding items
export const useCartAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerCartAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 400);
  };

  return { isAnimating, triggerCartAnimation };
};

// Hook for parallax scrolling effect
export const useParallax = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate if element is in viewport
      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * speed * -1;
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return { elementRef, offset };
};

// Hook for typewriter effect
export const useTypewriter = (
  text: string,
  speed: number = 50,
  startDelay: number = 500
) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let charIndex = 0;

    const startTyping = () => {
      setIsTyping(true);
      
      const typeChar = () => {
        if (charIndex < text.length) {
          setDisplayedText(text.slice(0, charIndex + 1));
          charIndex++;
          timeout = setTimeout(typeChar, speed);
        } else {
          setIsTyping(false);
        }
      };

      timeout = setTimeout(typeChar, speed);
    };

    timeout = setTimeout(startTyping, startDelay);

    return () => {
      clearTimeout(timeout);
    };
  }, [text, speed, startDelay]);

  return { displayedText, isTyping };
};

// Hook for loading gear animation
export const useLoadingGear = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);
  
  return { isLoading, startLoading, stopLoading };
};

// Hook for navbar link underline animation
export const useNavLinkAnimation = () => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  
  useEffect(() => {
    const link = linkRef.current;
    if (!link) return;
    
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    link.classList.add('nav-link-steampunk');
  }, []);
  
  return linkRef;
};

// Hook for card hover lift effect
export const useCardHover = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    
    const handleMouseEnter = () => {
      setIsHovered(true);
      card.style.transform = 'translateY(-8px) rotateX(2deg)';
      card.style.boxShadow = '0 20px 40px rgba(184, 134, 11, 0.2), 0 10px 20px rgba(0, 0, 0, 0.1)';
    };
    
    const handleMouseLeave = () => {
      setIsHovered(false);
      card.style.transform = 'translateY(0) rotateX(0)';
      card.style.boxShadow = 'none';
    };
    
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return { cardRef, isHovered };
};

// Hook for dropdown menu animation
export const useDropdownAnimation = (isOpen: boolean) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const dropdown = dropdownRef.current;
    if (!dropdown) return;
    
    if (isOpen) {
      dropdown.classList.add('dropdown-steampunk');
      dropdown.style.opacity = '1';
      dropdown.style.transform = 'scaleY(1) translateY(0)';
    } else {
      dropdown.style.opacity = '0';
      dropdown.style.transform = 'scaleY(0.8) translateY(-10px)';
    }
  }, [isOpen]);
  
  return dropdownRef;
};

// Hook for modal transition animation
export const useModalAnimation = (isOpen: boolean) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const modal = modalRef.current;
    const backdrop = backdropRef.current;
    if (!modal || !backdrop) return;
    
    if (isOpen) {
      backdrop.style.opacity = '1';
      modal.style.transform = 'scale(1)';
      modal.style.opacity = '1';
    } else {
      backdrop.style.opacity = '0';
      modal.style.transform = 'scale(0.95)';
      modal.style.opacity = '0';
    }
  }, [isOpen]);
  
  return { modalRef, backdropRef };
};

// Hook for smooth count-up animation
export const useCountUp = (
  end: number,
  duration: number = 2000,
  start: number = 0
) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  
  useEffect(() => {
    const startTime = Date.now();
    
    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(start + (end - start) * easeOutQuart);
      
      countRef.current = currentCount;
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    
    requestAnimationFrame(updateCount);
  }, [end, duration, start]);
  
  return count;
};

// Hook for button press animation
export const useButtonPress = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const handlePress = () => {
    const button = buttonRef.current;
    if (!button) return;
    
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 150);
  };
  
  return { buttonRef, handlePress };
};

// Example usage:
// const { elementRef, isVisible } = useScrollAnimation();
// const magneticRef = useMagneticHover(0.2);
// const navLinkRef = useNavLinkAnimation();
// const { cardRef, isHovered } = useCardHover();
// const { isLoading, startLoading, stopLoading } = useLoadingGear();
// 
// <div ref={elementRef} className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
//   Content
// </div>