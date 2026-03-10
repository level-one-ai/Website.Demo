'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuLinks, MenuSubsection } from '@/data/siteData';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<MenuSubsection[] | null>(null);
  const [submenuTitle, setSubmenuTitle] = useState('');
  const [showItems, setShowItems] = useState(false);
  const itemsRef = useRef<HTMLDivElement>(null);

  const staggerShow = useCallback(() => {
    if (!itemsRef.current) return;
    const links = itemsRef.current.querySelectorAll('.menu-link');
    links.forEach((link, index) => {
      const el = link as HTMLElement;
      el.style.opacity = '0';
      el.style.transform = 'translateX(60px)';
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateX(0)';
      }, index * 100);
    });
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      if (!prev) {
        document.documentElement.style.overflow = 'hidden';
        setActiveSubmenu(null);
        setSubmenuTitle('');
        setShowItems(true);
      } else {
        document.documentElement.style.overflow = '';
        setShowItems(false);
      }
      return !prev;
    });
  }, []);

  useEffect(() => {
    if (showItems) {
      // Small delay to let DOM render before staggering
      const t = setTimeout(staggerShow, 50);
      return () => clearTimeout(t);
    }
  }, [showItems, staggerShow, activeSubmenu]);

  const handleLinkClick = useCallback((href: string) => {
    setMenuOpen(false);
    setActiveSubmenu(null);
    setShowItems(false);
    document.documentElement.style.overflow = '';
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }, []);

  const openSubmenu = useCallback((subs: MenuSubsection[], title: string) => {
    setActiveSubmenu(subs);
    setSubmenuTitle(title);
    // staggerShow will fire via useEffect when activeSubmenu changes
  }, []);

  const closeSubmenu = useCallback(() => {
    setActiveSubmenu(null);
    setSubmenuTitle('');
  }, []);

  const mainItems = menuLinks.map((link) => ({
    name: link.name, href: link.href, subs: link.subsections, isBack: false,
  }));

  const subItems = activeSubmenu
    ? [
        { name: '← Back', href: '#', subs: undefined, isBack: true },
        ...activeSubmenu.map((sub) => ({ name: sub.name, href: sub.href, subs: undefined, isBack: false })),
      ]
    : [];

  const items = activeSubmenu === null ? mainItems : subItems;

  return (
    <>
      <nav>
        <a
          href="#"
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="nav-logo-text">LEVEL ONE</span>
        </a>

        <button
          className={`hex-burger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <svg className="hex-border" viewBox="0 0 42 42">
            <polygon points="21,1 39,11 39,31 21,41 3,31 3,11" />
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="menu-items-wrap" ref={itemsRef}>
              {items.map((item) => (
                <a
                  key={item.name + (activeSubmenu ? 'sub' : 'main')}
                  className={`menu-link ${item.isBack ? 'menu-back-link' : ''} ${activeSubmenu !== null && !item.isBack ? 'menu-sub-link' : ''}`}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.isBack) {
                      closeSubmenu();
                    } else if (item.subs) {
                      openSubmenu(item.subs, item.name);
                    } else {
                      handleLinkClick(item.href);
                    }
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
