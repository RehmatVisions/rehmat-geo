'use client';

import {useEffect} from 'react';
import {usePathname} from 'next/navigation';

const cardSelector='main article:not(.article-page), main .home-service, main .faq-list details, main .contact-panel, main .article-body > section';
const excludedTextSelector='article:not(.article-page), .home-service, .faq-list details, .contact-panel, .article-body > section';

export default function ScrollReveal(){
  const pathname=usePathname();

  useEffect(()=>{
    if(!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const main=document.querySelector('main');
    if(!main) return;

    const cards=Array.from(main.querySelectorAll(cardSelector));
    const text=Array.from(main.querySelectorAll('h1, h2, h3, p')).filter((element)=>
      !element.closest(excludedTextSelector) && !element.closest('.hero-responsive')
    );
    const images=Array.from(main.querySelectorAll('img')).filter((element)=>
      !element.closest('.hero-background') && !element.closest(cardSelector)
    );
    const targets=Array.from(new Set([...cards,...text,...images]));

    targets.forEach((element)=>{
      if(element.matches('article:not(.article-page), .home-service') && element.parentElement?.children.length>1){
        const index=Array.prototype.indexOf.call(element.parentElement.children,element);
        element.style.setProperty('--scroll-reveal-delay',`${Math.min(index,4)*65}ms`);
      }
      element.dataset.scrollReveal='pending';
    });

    const observer=new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          entry.target.dataset.scrollReveal='visible';
          observer.unobserve(entry.target);
        }
      });
    },{rootMargin:'0px 0px -8% 0px',threshold:0.12});

    targets.forEach((element)=>observer.observe(element));

    return ()=>{
      observer.disconnect();
      targets.forEach((element)=>{
        delete element.dataset.scrollReveal;
        element.style.removeProperty('--scroll-reveal-delay');
      });
    };
  },[pathname]);

  return null;
}
