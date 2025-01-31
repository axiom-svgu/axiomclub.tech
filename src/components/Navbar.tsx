"use client";

import React, { useEffect, useState, useCallback, memo } from "react";
import CRT from "./CRT";

const NavLink = memo(
  ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
      href={href}
      className="text-[var(--matrix-color)] hover:text-[var(--matrix-glow)] transition-colors will-change-[color]"
    >
      {children}
    </a>
  )
);

NavLink.displayName = "NavLink";

const Navbar = memo(() => {
  const [visible, setVisible] = useState(false);

  const handleScroll = useCallback(() => {
    // Get hero section height (with some buffer)
    const heroHeight = window.innerHeight * 0.8;
    const currentScroll = window.scrollY;

    setVisible(currentScroll > heroHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-[transform,opacity] ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <CRT className="bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-[var(--matrix-color)] font-bold text-xl shadow-[0_0_5px_var(--matrix-color),0_0_10px_var(--matrix-color),0_0_20px_var(--matrix-color)] will-change-[text-shadow]">
                AXIOM
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>
        </div>
      </CRT>
    </nav>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
