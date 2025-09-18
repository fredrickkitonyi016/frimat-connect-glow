import { useEffect } from 'react';

export function useScrollAnimations() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const smoothScrollToElement = (targetId: string) => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        if (targetId) {
          smoothScrollToElement(targetId);
        }
      }
    };

    // Add click listeners to all anchor links
    document.addEventListener('click', handleAnchorClick);

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    // Parallax scrolling effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0.5');
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });

      // Header background opacity based on scroll
      const header = document.querySelector('.navbar-blur');
      if (header) {
        const opacity = Math.min(scrolled / 100, 0.95);
        (header as HTMLElement).style.backgroundColor = `hsl(var(--background) / ${opacity})`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}

// Hook for mouse cursor effects
export function useMouseEffects() {
  useEffect(() => {
    let cursor: HTMLElement | null = null;
    let cursorTrail: HTMLElement[] = [];

    // Create custom cursor
    const createCursor = () => {
      cursor = document.createElement('div');
      cursor.className = 'custom-cursor';
      cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: hsl(var(--primary));
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        mix-blend-mode: difference;
      `;
      document.body.appendChild(cursor);

      // Create trail particles
      for (let i = 0; i < 5; i++) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.cssText = `
          position: fixed;
          width: ${10 - i * 2}px;
          height: ${10 - i * 2}px;
          background: hsl(var(--accent) / ${0.5 - i * 0.1});
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transition: all 0.2s ease;
        `;
        document.body.appendChild(trail);
        cursorTrail.push(trail);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';

        // Animate trail
        cursorTrail.forEach((trail, index) => {
          setTimeout(() => {
            trail.style.left = e.clientX - (5 - index) + 'px';
            trail.style.top = e.clientY - (5 - index) + 'px';
          }, index * 20);
        });
      }
    };

    const handleMouseEnter = () => {
      if (cursor) cursor.style.transform = 'scale(1.5)';
    };

    const handleMouseLeave = () => {
      if (cursor) cursor.style.transform = 'scale(1)';
    };

    // Only enable on desktop
    if (window.innerWidth > 768) {
      createCursor();
      document.addEventListener('mousemove', handleMouseMove);
      
      // Add hover effects to interactive elements
      const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (cursor) document.body.removeChild(cursor);
      cursorTrail.forEach(trail => {
        if (document.body.contains(trail)) {
          document.body.removeChild(trail);
        }
      });
    };
  }, []);
}