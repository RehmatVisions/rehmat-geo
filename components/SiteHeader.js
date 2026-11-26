'use client';

import {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';

const links=[
  ['About','/about'],
  ['Services','/services'],
  ['Case Studies','/case-studies'],
  ['Insights','/blog'],
  ['Resources','/resources']
];

export default function SiteHeader(){
  const pathname=usePathname();
  const [isScrolled,setIsScrolled]=useState(false);
  const [isMobileMenuOpen,setIsMobileMenuOpen]=useState(false);
  const headerRef=useRef(null);
  const mobileMenuRef=useRef(null);
  const mobileMenuButtonRef=useRef(null);

  useEffect(()=>{
    const isHomePage=pathname==='/';
    const scrollBoundary=document.querySelector('main .hero-responsive, main > section:first-child, main > article:first-child');
    const updateScrollState=()=>{
      const boundaryBottom=scrollBoundary?.getBoundingClientRect().bottom;
      const headerBottom=headerRef.current?.getBoundingClientRect().bottom??0;
      setIsScrolled(isHomePage?window.scrollY>12:scrollBoundary?boundaryBottom<=headerBottom:window.scrollY>12);
    };
    updateScrollState();
    window.addEventListener('scroll',updateScrollState,{passive:true});
    window.addEventListener('resize',updateScrollState);
    return ()=>{
      window.removeEventListener('scroll',updateScrollState);
      window.removeEventListener('resize',updateScrollState);
    };
  },[pathname]);

  useEffect(()=>{
    if(!isMobileMenuOpen) return;

    const handleKeyDown=(event)=>{
      if(event.key==='Escape'){
        setIsMobileMenuOpen(false);
        mobileMenuButtonRef.current?.focus();
      }
    };
    const handlePointerDown=(event)=>{
      if(!mobileMenuRef.current?.contains(event.target)) setIsMobileMenuOpen(false);
    };

    document.addEventListener('keydown',handleKeyDown);
    document.addEventListener('pointerdown',handlePointerDown);
    return ()=>{
      document.removeEventListener('keydown',handleKeyDown);
      document.removeEventListener('pointerdown',handlePointerDown);
    };
  },[isMobileMenuOpen]);

  const closeMobileMenu=()=>{
    setIsMobileMenuOpen(false);
  };

  return <header ref={headerRef} className={`site-header${isScrolled?' site-header-scrolled':''}`}>
    <div className="site-header-inner">
      <Link href="/" className="brand" aria-label="Rehmat Geo home">
        <Image src="/assets/logo.webp" alt="Rehmat Geo — GEO and AEO Specialist" width={282} height={100} priority />
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([name,href])=><Link key={href} href={href} aria-current={pathname===href||(href==='/blog'&&pathname.startsWith('/blog/'))?'page':undefined}>{name}</Link>)}
      </nav>
      <Link className="button button-orange header-cta" href="/contact">
        <span>Let&apos;s Talk <span className="cta-arrow" aria-hidden="true">↗</span></span>
      </Link>
      <div className="mobile-nav" ref={mobileMenuRef}>
        <button
          ref={mobileMenuButtonRef}
          className="mobile-menu-toggle"
          type="button"
          aria-label={isMobileMenuOpen?'Close navigation menu':'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-site-navigation"
          onClick={()=>setIsMobileMenuOpen(open=>!open)}
        >
          <span className="menu-icon" aria-hidden="true"><span></span><span></span></span>
        </button>
        <nav
          id="mobile-site-navigation"
          className={`mobile-menu${isMobileMenuOpen?' mobile-menu-open':''}`}
          aria-label="Mobile navigation"
          aria-hidden={!isMobileMenuOpen}
          inert={!isMobileMenuOpen}
        >
          {links.map(([name,href])=><Link key={href} href={href} aria-current={pathname===href||(href==='/blog'&&pathname.startsWith('/blog/'))?'page':undefined} onClick={closeMobileMenu}>{name}</Link>)}
          <Link className="button button-orange header-cta" href="/contact" onClick={closeMobileMenu}>
            <span>Let&apos;s Talk <span className="cta-arrow" aria-hidden="true">↗</span></span>
          </Link>
        </nav>
      </div>
    </div>
  </header>;
}
