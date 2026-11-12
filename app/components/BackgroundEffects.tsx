"use client";

import React from "react";

/**
 * AmbientAura: Soft, blurred glowing radiant fields of lime green
 * that slowly drift and breathe in the background.
 */
export function AmbientAura() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {/* Top Hero Glow */}
      <div
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[550px] rounded-full blur-[130px] animate-aura-1"
        style={{
          background:
            "radial-gradient(circle, rgba(163, 230, 53, 0.20) 0%, rgba(132, 204, 22, 0.10) 40%, transparent 75%)",
        }}
      />

      {/* Mid Left Glow (Experience / Projects) */}
      <div
        className="absolute top-[32%] -left-[120px] w-[500px] h-[600px] rounded-full blur-[140px] animate-aura-2"
        style={{
          background:
            "radial-gradient(circle, rgba(163, 230, 53, 0.12) 0%, rgba(132, 204, 22, 0.06) 50%, transparent 75%)",
        }}
      />

      {/* Mid Right Glow (Skills / Education) */}
      <div
        className="absolute top-[58%] -right-[100px] w-[550px] h-[600px] rounded-full blur-[150px] animate-aura-1"
        style={{
          background:
            "radial-gradient(circle, rgba(132, 204, 22, 0.12) 0%, rgba(163, 230, 53, 0.06) 45%, transparent 75%)",
        }}
      />

      {/* Bottom Contact Glow */}
      <div
        className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[650px] h-[500px] rounded-full blur-[130px] animate-aura-2"
        style={{
          background:
            "radial-gradient(circle, rgba(163, 230, 53, 0.18) 0%, rgba(190, 242, 100, 0.08) 45%, transparent 80%)",
        }}
      />
    </div>
  );
}

/**
 * CyberGrid: High-precision tech grid with soft vignette fade.
 */
export function CyberGrid() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 opacity-40"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(163, 230, 53, 0.07) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(163, 230, 53, 0.07) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
        maskImage:
          "radial-gradient(ellipse 90% 80% at 50% 30%, black 30%, transparent 85%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 90% 80% at 50% 30%, black 30%, transparent 85%)",
      }}
    />
  );
}

/**
 * CircuitTraces: Detailed SVG techno chip lines and PCB circuitry
 * with flowing electric currents and pulsing junction nodes.
 */
export function CircuitTraces() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Left-side PCB Circuit Bus */}
      <svg
        className="absolute top-0 left-0 h-[3200px] w-[340px] max-w-[28vw] hidden md:block"
        viewBox="0 0 340 3200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="circuitGradLeft" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A3E635" stopOpacity="0.45" />
            <stop offset="30%" stopColor="#BEF264" stopOpacity="0.65" />
            <stop offset="60%" stopColor="#A3E635" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#84CC16" stopOpacity="0.5" />
          </linearGradient>

          <filter id="electricGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Chip Outline / Microcontroller Pad on Left */}
        <g opacity="0.35" transform="translate(40, 320)">
          <rect
            x="0"
            y="0"
            width="80"
            height="100"
            rx="4"
            stroke="#A3E635"
            strokeWidth="1.2"
            fill="#050a14"
          />
          <text
            x="40"
            y="48"
            fill="#BEF264"
            fontSize="9"
            fontFamily="monospace"
            textAnchor="middle"
            letterSpacing="1"
          >
            SYS_BUS
          </text>
          <text
            x="40"
            y="62"
            fill="#A3E635"
            fontSize="7"
            fontFamily="monospace"
            textAnchor="middle"
            opacity="0.8"
          >
            0x4F92
          </text>
          {[15, 30, 45, 60, 75, 90].map((y) => (
            <React.Fragment key={y}>
              <line x1="-8" y1={y} x2="0" y2={y} stroke="#A3E635" strokeWidth="1" />
              <line x1="80" y1={y} x2="88" y2={y} stroke="#A3E635" strokeWidth="1" />
            </React.Fragment>
          ))}
        </g>

        {/* Static Base Circuit Tracks */}
        <g stroke="#A3E635" strokeWidth="1" opacity="0.15">
          <path d="M 0 180 L 120 180 L 180 240 L 180 620 L 240 680 L 240 1100 L 160 1180 L 160 1600" />
          <path d="M 0 450 L 80 450 L 140 510 L 140 920 L 220 1000 L 220 1450 L 150 1520 L 150 2100" />
          <path d="M 128 365 L 200 365 L 250 415 L 250 820 L 290 860 L 290 1350 L 210 1430 L 210 2400" />
          <path d="M 0 850 L 90 850 L 150 910 L 150 1320 L 90 1380 L 90 1850 L 170 1930 L 170 2700" />
        </g>

        {/* Animated Flowing Electricity Pulses */}
        <g
          stroke="url(#circuitGradLeft)"
          strokeWidth="1.6"
          filter="url(#electricGlow)"
        >
          <path
            d="M 0 180 L 120 180 L 180 240 L 180 620 L 240 680 L 240 1100 L 160 1180 L 160 1600"
            strokeDasharray="24 160"
            style={{ animation: "circuit-flow 16s linear infinite" }}
          />
          <path
            d="M 0 450 L 80 450 L 140 510 L 140 920 L 220 1000 L 220 1450 L 150 1520 L 150 2100"
            strokeDasharray="30 200"
            style={{ animation: "circuit-flow 22s linear infinite" }}
          />
          <path
            d="M 128 365 L 200 365 L 250 415 L 250 820 L 290 860 L 290 1350 L 210 1430 L 210 2400"
            strokeDasharray="35 240"
            style={{ animation: "circuit-pulse-reverse 19s linear infinite" }}
          />
          <path
            d="M 0 850 L 90 850 L 150 910 L 150 1320 L 90 1380 L 90 1850 L 170 1930 L 170 2700"
            strokeDasharray="28 180"
            style={{ animation: "circuit-flow 25s linear infinite" }}
          />
        </g>

        {/* Circuit Solder Pads & Junction Nodes */}
        {[
          [120, 180],
          [180, 240],
          [180, 620],
          [240, 680],
          [240, 1100],
          [160, 1180],
          [80, 450],
          [140, 510],
          [140, 920],
          [220, 1000],
          [200, 365],
          [250, 415],
          [250, 820],
          [290, 860],
          [150, 910],
          [150, 1320],
          [90, 1380],
          [170, 1930],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle
              cx={cx}
              cy={cy}
              r="3.5"
              stroke="#A3E635"
              strokeWidth="1.2"
              fill="#000000"
              opacity="0.6"
            />
            <circle
              cx={cx}
              cy={cy}
              r="1.6"
              fill="#BEF264"
              className="animate-electric-pulse"
              style={{ animationDelay: `${(i % 5) * 0.6}s` }}
            />
          </g>
        ))}
      </svg>

      {/* Right-side PCB Circuit Bus */}
      <svg
        className="absolute top-0 right-0 h-[3200px] w-[340px] max-w-[28vw] hidden md:block"
        viewBox="0 0 340 3200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="circuitGradRight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#84CC16" stopOpacity="0.5" />
            <stop offset="40%" stopColor="#BEF264" stopOpacity="0.75" />
            <stop offset="80%" stopColor="#A3E635" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#65A30D" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Microchip Package on Right */}
        <g opacity="0.35" transform="translate(220, 680)">
          <rect
            x="0"
            y="0"
            width="85"
            height="110"
            rx="4"
            stroke="#A3E635"
            strokeWidth="1.2"
            fill="#050a14"
          />
          <text
            x="42"
            y="52"
            fill="#BEF264"
            fontSize="9"
            fontFamily="monospace"
            textAnchor="middle"
            letterSpacing="1"
          >
            AI_CORE
          </text>
          <text
            x="42"
            y="66"
            fill="#A3E635"
            fontSize="7"
            fontFamily="monospace"
            textAnchor="middle"
            opacity="0.8"
          >
            GARMIN_IO
          </text>
          {[18, 36, 54, 72, 90].map((y) => (
            <React.Fragment key={y}>
              <line x1="-8" y1={y} x2="0" y2={y} stroke="#A3E635" strokeWidth="1" />
              <line x1="85" y1={y} x2="93" y2={y} stroke="#A3E635" strokeWidth="1" />
            </React.Fragment>
          ))}
        </g>

        {/* Static Base Circuit Tracks */}
        <g stroke="#A3E635" strokeWidth="1" opacity="0.15">
          <path d="M 340 260 L 220 260 L 160 320 L 160 750 L 90 820 L 90 1260 L 170 1340 L 170 1800" />
          <path d="M 340 540 L 250 540 L 190 600 L 190 1020 L 120 1090 L 120 1620 L 190 1690 L 190 2300" />
          <path d="M 212 735 L 140 735 L 80 795 L 80 1200 L 40 1240 L 40 1780 L 110 1850 L 110 2650" />
          <path d="M 340 980 L 260 980 L 200 1040 L 200 1500 L 270 1570 L 270 2100 L 200 2170 L 200 2950" />
        </g>

        {/* Animated Electricity Pulses */}
        <g
          stroke="url(#circuitGradRight)"
          strokeWidth="1.6"
          filter="url(#electricGlow)"
        >
          <path
            d="M 340 260 L 220 260 L 160 320 L 160 750 L 90 820 L 90 1260 L 170 1340 L 170 1800"
            strokeDasharray="26 170"
            style={{ animation: "circuit-pulse-reverse 18s linear infinite" }}
          />
          <path
            d="M 340 540 L 250 540 L 190 600 L 190 1020 L 120 1090 L 120 1620 L 190 1690 L 190 2300"
            strokeDasharray="32 210"
            style={{ animation: "circuit-flow 24s linear infinite" }}
          />
          <path
            d="M 212 735 L 140 735 L 80 795 L 80 1200 L 40 1240 L 40 1780 L 110 1850 L 110 2650"
            strokeDasharray="28 190"
            style={{ animation: "circuit-flow 20s linear infinite" }}
          />
          <path
            d="M 340 980 L 260 980 L 200 1040 L 200 1500 L 270 1570 L 270 2100 L 200 2170 L 200 2950"
            strokeDasharray="36 250"
            style={{ animation: "circuit-pulse-reverse 26s linear infinite" }}
          />
        </g>

        {/* Junction Solder Pads */}
        {[
          [220, 260],
          [160, 320],
          [160, 750],
          [90, 820],
          [90, 1260],
          [170, 1340],
          [250, 540],
          [190, 600],
          [190, 1020],
          [120, 1090],
          [140, 735],
          [80, 795],
          [80, 1200],
          [40, 1240],
          [260, 980],
          [200, 1040],
          [200, 1500],
          [270, 1570],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle
              cx={cx}
              cy={cy}
              r="3.5"
              stroke="#A3E635"
              strokeWidth="1.2"
              fill="#000000"
              opacity="0.6"
            />
            <circle
              cx={cx}
              cy={cy}
              r="1.6"
              fill="#BEF264"
              className="animate-electric-pulse"
              style={{ animationDelay: `${(i % 4) * 0.75}s` }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

/**
 * TechAccents: Subtle corner brackets, coordinates, and status marks
 * adding authentic engineering detail without clutter.
 */
export function TechAccents() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden select-none">
      {/* Top Left Marker */}
      <div className="absolute top-20 left-6 hidden xl:flex flex-col gap-1 text-[10px] font-mono text-accent/40">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
          <span>STATUS: ONLINE</span>
        </div>
        <span>UCSD // CSE_2028</span>
        <span>LAT: 32.8801° N</span>
      </div>

      {/* Top Right Marker */}
      <div className="absolute top-20 right-6 hidden xl:flex flex-col items-end gap-1 text-[10px] font-mono text-accent/40">
        <span>ARCH: x86_64 // C++</span>
        <span>SYS_LOAD: OPTIMAL</span>
        <span>LON: 117.2340° W</span>
      </div>

      {/* Decorative corner crosshairs */}
      <div className="absolute top-24 left-8 text-accent/25 font-mono text-xs hidden lg:block">
        +
      </div>
      <div className="absolute top-24 right-8 text-accent/25 font-mono text-xs hidden lg:block">
        +
      </div>
      <div className="absolute bottom-12 left-8 text-accent/25 font-mono text-xs hidden lg:block">
        +
      </div>
      <div className="absolute bottom-12 right-8 text-accent/25 font-mono text-xs hidden lg:block">
        +
      </div>
    </div>
  );
}

/**
 * Full Background System aggregating aura, cyber grid, circuit lines, and tech accents.
 */
export default function BackgroundEffects() {
  return (
    <>
      <AmbientAura />
      <CyberGrid />
      <CircuitTraces />
      <TechAccents />
    </>
  );
}
