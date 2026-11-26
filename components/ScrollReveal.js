'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/* ----------------------------------------------------------------
   Per-selector AOS variant mapping
   Each entry: [cssSelector, aosVariant, staggered?]
   ---------------------------------------------------------------- */
const RULES = [
  // Hero — excluded (handled by CSS keyframes)

  // Feature band
  ['.featureBand, [class*="featureBand"]',           'scale-up',   false],

  // Intro strip headings + paragraph
  ['.intro-strip .eyebrow',                          'fade-right',  false],
  ['.intro-strip h2',                                'fade-up',     false],
  ['.intro-strip > p:last-child',                    'fade-up',     false],

  // Services section — heading + grid cards
  ['.services-home .section-heading',                'fade-up',     false],
  ['.home-service',                                  'fade-up',     true ],

  // Process steps
  ['.process-section .eyebrow, .process-section h2', 'fade-up',     false],
  ['.process-grid article',                          'fade-up',     true ],

  // Case study
  ['.case-home .eyebrow, .case-home h2',             'fade-right',  false],
  ['.case-home > .wrap > div:last-child',            'fade-left',   false],
  ['.case-home p:not(.eyebrow)',                     'fade-up-sm',  false],

  // Testimonials
  ['.testimonials > *, [class*="testimonials"] > *', 'fade-up',     false],
  ['[class*="testimonials"] article, [class*="card"]','fade-up',    true ],

  // Insights / articles
  ['.insights-home .section-heading',               'fade-up',     false],
  ['.article-card',                                  'fade-up',     true ],

  // FAQ
  ['.faq-layout > div:first-child',                  'fade-right',  false],
  ['.faq-list details',                              'fade-up',     true ],

  // Final CTA
  ['.final-cta .eyebrow, .final-cta h2',             'fade-up',     false],
  ['.final-cta .button',                             'scale-up',    false],

  // Inner pages — page intro
  ['.page-intro h1',                                 'fade-up',     false],
  ['.intro-copy',                                    'fade-up',     false],

  // Generic prose sections
  ['.content-section h2',                            'fade-up',     false],
  ['.prose p',                                       'fade-up-sm',  true ],

  // Service cards
  ['.service-card',                                  'fade-up',     true ],

  // Resource cards
  ['.resource-card',                                 'fade-up',     true ],

  // Case feature
  ['.case-feature',                                  'scale-up',    false],

  // Step list rows
  ['.step-row',                                      'fade-up',     true ],

  // Article body sections
  ['.article-body > section',                        'fade-up',     true ],

  // Contact panel
  ['.contact-panel',                                 'scale-up',    false],
];

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) return;

    const main = document.querySelector('main');
    if (!main) return;

    const seen = new Set();
    const targets = [];

    RULES.forEach(([selector, variant, stagger]) => {
      const nodes = Array.from(main.querySelectorAll(selector));
      nodes.forEach((el, localIdx) => {
        // Skip hero children
        if (el.closest('.hero-responsive')) return;
        if (seen.has(el)) return;
        seen.add(el);

        el.dataset.aos = variant;
        el.dataset.scrollReveal = 'pending';

        if (stagger) {
          const delay = Math.min(localIdx % 6, 5) * 80;
          el.style.setProperty('--scroll-reveal-delay', `${delay}ms`);
        }

        targets.push(el);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.dataset.scrollReveal = 'visible';
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.08 }
    );

    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      targets.forEach((el) => {
        delete el.dataset.scrollReveal;
        delete el.dataset.aos;
        el.style.removeProperty('--scroll-reveal-delay');
      });
    };
  }, [pathname]);

  return null;
}
