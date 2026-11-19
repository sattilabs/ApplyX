import React from 'react';
import { motion, useReducedMotion, useSpring } from 'framer-motion';
import { ArrowUpRight, BriefcaseBusiness, Check, FileCheck2, Send, CalendarCheck, Sparkles } from 'lucide-react';

/**
 * Accessible, dependency-free 3D interaction: only uses framer-motion,
 * which the existing ApplyX app already imports.
 * The visual tilts on a mouse; touch and reduced-motion users see a stable card.
 */
export function Tilt3D({ children, className = '', innerClassName = '', strength = 7 }) {
  const reducedMotion = useReducedMotion();
  const rotateX = useSpring(0, { stiffness: 140, damping: 22, mass: 0.7 });
  const rotateY = useSpring(0, { stiffness: 140, damping: 22, mass: 0.7 });

  const onPointerMove = (event) => {
    if (reducedMotion || event.pointerType !== 'mouse') return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(-y * strength * 2);
    rotateY.set(x * strength * 2);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div className={`tilt-3d ${className}`} onPointerMove={onPointerMove} onPointerLeave={reset}>
      <motion.div
        className={`tilt-3d-inner ${innerClassName}`}
        style={reducedMotion ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
      >
        {children}
      </motion.div>
    </div>
  );
}

const applications = [
  { role: 'Product Analyst', status: 'Applied', icon: Send },
  { role: 'Data Engineer', status: 'In review', icon: BriefcaseBusiness },
  { role: 'UX Designer', status: 'Interview', icon: CalendarCheck },
];

/** Visual demonstration, not a live user dashboard or claim of actual outcomes. */
export function CareerScene() {
  const reducedMotion = useReducedMotion();
  return (
    <div className="career-scene" role="img" aria-label="Illustrative 3D dashboard showing sample job applications, a tailored resume, and an interview preparation card">
      <div className="career-scene-aura" aria-hidden="true" />
      <div className="career-scene-ring ring-one" aria-hidden="true" />
      <div className="career-scene-ring ring-two" aria-hidden="true" />
      <div className="career-scene-ring ring-three" aria-hidden="true" />
      <Tilt3D className="scene-tilt" innerClassName="scene-tilt-inner" strength={10}>
        <div className="scene-board">
          <div className="scene-board-gloss" aria-hidden="true" />
          <div className="scene-topline">
            <span className="scene-window-dots" aria-hidden="true"><i /><i /><i /></span>
            <span className="scene-top-title">APPLICATION CONTROL</span>
            <span className="scene-sample-label">SAMPLE VIEW</span>
          </div>
          <div className="scene-board-body">
            <div className="scene-heading">
              <div>
                <p className="scene-eyebrow">YOUR CAREER, ORGANIZED</p>
                <p className="scene-main-title">Opportunity pipeline</p>
              </div>
              <span className="scene-heading-icon"><Sparkles size={17} /></span>
            </div>
            <div className="scene-stats">
              <div><span>SEARCH</span><strong>Targeted</strong></div>
              <div><span>RESUME</span><strong>Tailored</strong></div>
              <div><span>TRACKING</span><strong>Clear</strong></div>
            </div>
            <div className="scene-list">
              {applications.map(({ role, status, icon: Icon }, index) => (
                <motion.div
                  className="scene-app-row"
                  key={role}
                  initial={reducedMotion ? false : { opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.13 }}
                >
                  <span className="scene-app-icon"><Icon size={15} /></span>
                  <span className="scene-app-role">{role}</span>
                  <span className={`scene-status scene-status-${index}`}>{status}</span>
                </motion.div>
              ))}
            </div>
            <div className="scene-bottomline"><span><span className="scene-pulse" />Illustrative workflow</span><span>ApplyX <ArrowUpRight size={13} /></span></div>
          </div>
        </div>
        <div className="scene-float scene-float-resume">
          <div className="scene-float-icon"><FileCheck2 size={20} /></div>
          <div><strong>Resume optimized</strong><span>ATS-conscious format</span></div>
          <span className="scene-float-check"><Check size={14} /></span>
        </div>
        <div className="scene-float scene-float-interview">
          <div className="scene-float-icon calendar"><CalendarCheck size={20} /></div>
          <div><strong>Interview support</strong><span>Preparation & guidance</span></div>
        </div>
        <div className="scene-mini-token" aria-hidden="true"><Sparkles size={22} /></div>
      </Tilt3D>
      <div className="scene-caption">Move your cursor over the dashboard</div>
    </div>
  );
}

/** Symbolic 3D globe (not a geographic map or representation of visa services). */
export function CareerGlobe() {
  return (
    <div className="global-art" role="img" aria-label="Animated abstract globe representing the international job markets ApplyX supports">
      <div className="global-art-glow" />
      <div className="global-orbit global-orbit-a" />
      <div className="global-orbit global-orbit-b" />
      <div className="global-sphere">
        <div className="global-sphere-sheen" />
        <div className="global-lat global-lat-one" />
        <div className="global-lat global-lat-two" />
        <div className="global-long global-long-one" />
        <div className="global-long global-long-two" />
        <div className="global-long global-long-three" />
      </div>
      <span className="global-marker global-marker-a" /><span className="global-marker global-marker-b" /><span className="global-marker global-marker-c" />
      <div className="global-label global-label-a">Explore opportunities</div>
      <div className="global-label global-label-b">Across markets</div>
    </div>
  );
}
