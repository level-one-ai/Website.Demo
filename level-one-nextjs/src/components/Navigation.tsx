'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuLinks, MenuSubsection } from '@/data/siteData';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<MenuSubsection[] | null>(null);
  const [submenuTitle, setSubmenuTitle] = useState('');

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      if (!prev) {
        document.body.style.overflow = 'hidden';
        setActiveSubmenu(null);
        setSubmenuTitle('');
      } else {
        document.body.style.overflow = 'auto';
      }
      return !prev;
    });
  }, []);

  const handleLinkClick = useCallback((href: string) => {
    setMenuOpen(false);
    setActiveSubmenu(null);
    document.body.style.overflow = 'auto';
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
            style={{ opacity: 1, pointerEvents: 'auto' }}
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
