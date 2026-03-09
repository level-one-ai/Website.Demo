'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuLinks, MenuSubsection } from '@/data/siteData';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<MenuSubsection[] | null>(null);
  const [submenuTitle, setSubmenuTitle] = useState('');
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    setScrollbarWidth(window.innerWidth - document.documentElement.clientWidth);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      if (!prev) {
        const sbw = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${sbw}px`;
        setActiveSubmenu(null);
        setSubmenuTitle('');
      } else {
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = '0px';
      }
      return !prev;
    });
  }, []);

  const handleLinkClick = useCallback((href: string) => {
    setMenuOpen(false);
    setActiveSubmenu(null);
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0px';
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }, []);

  const openSubmenu = useCallback((subs: MenuSubsection[], title: string) => {
    setActiveSubmenu(subs);
    setSubmenuTitle(title);
  }, []);

  const closeSubmenu = useCallback(() => {
    setActiveSubmenu(null);
    setSubmenuTitle('');
  }, []);

  const items = activeSubmenu === null
    ? menuLinks.map((link) => ({ name: link.name, href: link.href, subs: link.subsections, isBack: false }))
    : [
        { name: `← Back`, href: '#', subs: undefined, isBack: true },
        ...activeSubmenu.map((sub) => ({ name: sub.name, href: sub.href, subs: undefined, isBack: false })),
      ];

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
            <div className="menu-items-wrap">
              {items.map((item, i) => (
                <motion.a
                  key={item.name + (activeSubmenu ? 'sub' : 'main') + i}
                  className={`menu-link ${item.isBack ? 'menu-back-link' : ''}`}
                  href={item.href}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
