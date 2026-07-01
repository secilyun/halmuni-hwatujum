'use strict';

// 12월 화투 SVG 일러스트 (viewBox 60x90)
const CARD_SVGS = [

  // 1월 소나무 — 소나무 + 학
  `<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="90" fill="#071a04"/>
    <circle cx="44" cy="14" r="10" fill="#c8d870" opacity="0.15"/>
    <polygon points="30,8 20,26 40,26" fill="#1e5c10"/>
    <polygon points="30,20 16,42 44,42" fill="#1a5210"/>
    <polygon points="30,34 11,62 49,62" fill="#154510"/>
    <rect x="27" y="62" width="6" height="18" fill="#5a3010" rx="2"/>
    <ellipse cx="46" cy="17" rx="8" ry="3.5" fill="rgba(255,255,255,0.9)"/>
    <path d="M38,17 C35,13 34,9 37,8" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <circle cx="50" cy="13" r="2.8" fill="#cc1100"/>
  </svg>`,

  // 2월 매화 — 꽃가지 + 꾀꼬리
  `<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="90" fill="#1a0410"/>
    <path d="M8,80 C15,60 25,40 32,20 C36,10 40,6 44,8" stroke="#2a0a18" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M32,20 C20,25 12,32 16,38" stroke="#200816" stroke-width="2.5" fill="none"/>
    <path d="M36,34 C44,28 50,32 48,40" stroke="#200816" stroke-width="2.5" fill="none"/>
    <circle cx="16" cy="38" r="5" fill="#d94070" opacity="0.9"/>
    <circle cx="13" cy="33" r="3.5" fill="#e860a0" opacity="0.85"/>
    <circle cx="21" cy="35" r="3" fill="#e05090" opacity="0.85"/>
    <circle cx="10" cy="42" r="3" fill="#d03060" opacity="0.8"/>
    <circle cx="44" cy="8" r="4" fill="#e06090" opacity="0.9"/>
    <circle cx="48" cy="40" r="4.5" fill="#d03060" opacity="0.9"/>
    <circle cx="52" cy="36" r="3" fill="#e86090" opacity="0.8"/>
    <ellipse cx="46" cy="55" rx="7" ry="3" fill="#d4a020" transform="rotate(-20,46,55)"/>
    <path d="M39,52 C36,48 37,45 40,46" stroke="#d4a020" stroke-width="1.5" fill="none"/>
    <circle cx="50" cy="50" r="2" fill="#d4a020"/>
  </svg>`,

  // 3월 벚꽃 — 꽃 + 술잔 (광패)
  `<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="90" fill="#1e0818"/>
    <path d="M5,85 C10,70 20,55 30,40 C38,28 45,20 50,15" stroke="#2a1025" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M30,40 C18,38 12,44 14,52" stroke="#2a1025" stroke-width="2" fill="none"/>
    <g opacity="0.9">
      <circle cx="14" cy="52" r="6" fill="#f090c0"/>
      <circle cx="8" cy="47" r="5" fill="#f0b0d0"/>
      <circle cx="20" cy="48" r="5" fill="#e870b0"/>
      <circle cx="12" cy="60" r="4" fill="#f090c0"/>
      <circle cx="22" cy="58" r="4.5" fill="#e870b0"/>
    </g>
    <g opacity="0.85">
      <circle cx="42" cy="22" r="5.5" fill="#f0a0c8"/>
      <circle cx="50" cy="18" r="5" fill="#f0b0d0"/>
      <circle cx="46" cy="30" r="5" fill="#e880b8"/>
      <circle cx="38" cy="28" r="4" fill="#f090c0"/>
    </g>
    <g transform="translate(36,62)">
      <rect x="-8" y="-4" width="16" height="8" rx="2" fill="#c8a030" opacity="0.9"/>
      <path d="M-5,4 L-7,14 L7,14 L5,4 Z" fill="#c8a030" opacity="0.9"/>
      <rect x="-8" y="14" width="16" height="3" rx="1" fill="#b89028"/>
    </g>
  </svg>`,

  // 4월 흑싸리 — 등나무 드리움
  `<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="90" fill="#08041e"/>
    <path d="M5,5 L55,5" stroke="#3a2060" stroke-width="4" stroke-linecap="round"/>
    <path d="M15,5 C13,20 12,35 14,55 C15,65 14,75 12,85" stroke="#4a2a80" stroke-width="2" fill="none"/>
    <path d="M25,5 C22,22 20,38 22,60 C23,72 21,80 19,88" stroke="#4a2a80" stroke-width="2" fill="none"/>
    <path d="M35,5 C32,25 30,42 33,64 C34,74 33,82 30,90" stroke="#3a2070" stroke-width="2" fill="none"/>
    <path d="M45,5 C43,22 42,38 45,60 C46,70 44,80 42,90" stroke="#3a2070" stroke-width="2" fill="none"/>
    <ellipse cx="14" cy="30" rx="4" ry="7" fill="#7050c0" opacity="0.8" transform="rotate(10,14,30)"/>
    <ellipse cx="22" cy="40" rx="3.5" ry="6" fill="#6040b0" opacity="0.8" transform="rotate(-5,22,40)"/>
    <ellipse cx="32" cy="25" rx="4" ry="7" fill="#7050c0" opacity="0.75" transform="rotate(8,32,25)"/>
    <ellipse cx="44" cy="35" rx="3.5" ry="6.5" fill="#6040b0" opacity="0.75" transform="rotate(-8,44,35)"/>
    <ellipse cx="12" cy="55" rx="3" ry="5.5" fill="#7858c8" opacity="0.7"/>
    <ellipse cx="33" cy="60" rx="3.5" ry="6" fill="#6848b8" opacity="0.7"/>
    <ellipse cx="24" cy="68" rx="3" ry="5" fill="#7050c0" opacity="0.65"/>
    <ellipse cx="43" cy="55" rx="3" ry="5.5" fill="#6848b8" opacity="0.7"/>
  </svg>`,

  // 5월 난초 — 붓꽃 + 파랑새
  `<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="90" fill="#021810"/>
    <line x1="20" y1="88" x2="22" y2="30" stroke="#2a6030" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="32" y1="88" x2="30" y2="25" stroke="#2a6030" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="44" y1="88" x2="42" y2="35" stroke="#2a6030" stroke-width="2" stroke-linecap="round"/>
    <line x1="14" y1="88" x2="16" y2="45" stroke="#206028" stroke-width="1.5" stroke-linecap="round"/>
    <g transform="translate(22,30)">
      <ellipse cx="0" cy="-8" rx="5" ry="10" fill="#5090d0" opacity="0.9" transform="rotate(-20)"/>
      <ellipse cx="6" cy="-6" rx="5" ry="9" fill="#4080c0" opacity="0.85" transform="rotate(15)"/>
      <ellipse cx="-5" cy="-4" rx="4" ry="8" fill="#60a0e0" opacity="0.85" transform="rotate(-35)"/>
      <circle cx="0" cy="0" r="3" fill="#f0e040"/>
    </g>
    <g transform="translate(30,25)">
      <ellipse cx="0" cy="-8" rx="5" ry="10" fill="#5090d0" opacity="0.85" transform="rotate(10)"/>
      <ellipse cx="-6" cy="-5" rx="4" ry="8" fill="#6090d8" opacity="0.8" transform="rotate(-25)"/>
      <circle cx="0" cy="0" r="3" fill="#f0e040"/>
    </g>
    <ellipse cx="46" cy="20" rx="7" ry="3.5" fill="#4090e0" transform="rotate(-15,46,20)"/>
    <path d="M39,18 C36,14 37,10 40,12" stroke="#4090e0" stroke-width="1.5" fill="none"/>
    <circle cx="48" cy="16" r="2" fill="#303030"/>
  </svg>`,

  // 6월 모란 — 꽃 + 나비
  `<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="90" fill="#1a0406"/>
    <line x1="30" y1="88" x2="30" y2="55" stroke="#2a4010" stroke-width="3"/>
    <line x1="30" y1="75" x2="15" y2="60" stroke="#2a4010" stroke-width="2"/>
    <line x1="30" y1="68" x2="45" y2="55" stroke="#2a4010" stroke-width="2"/>
    <g transform="translate(30,32)">
      <ellipse cx="0" cy="-14" rx="8" ry="14" fill="#c02040" opacity="0.9"/>
      <ellipse cx="12" cy="-7" rx="8" ry="14" fill="#b01a38" opacity="0.85" transform="rotate(50)"/>
      <ellipse cx="14" cy="7" rx="8" ry="14" fill="#c02040" opacity="0.85" transform="rotate(110)"/>
      <ellipse cx="0" cy="14" rx="8" ry="14" fill="#b01a38" opacity="0.85" transform="rotate(180)"/>
      <ellipse cx="-14" cy="7" rx="8" ry="14" fill="#c02040" opacity="0.85" transform="rotate(250)"/>
      <ellipse cx="-12" cy="-7" rx="8" ry="14" fill="#b01a38" opacity="0.85" transform="rotate(310)"/>
      <circle cx="0" cy="0" r="7" fill="#e8a030"/>
      <circle cx="0" cy="0" r="3.5" fill="#f0c050"/>
    </g>
    <g transform="translate(46,58)">
      <ellipse cx="-5" cy="-4" rx="7" ry="5" fill="#e0d050" opacity="0.85" transform="rotate(-30)"/>
      <ellipse cx="5" cy="-4" rx="7" ry="5" fill="#e0d050" opacity="0.85" transform="rotate(30)"/>
      <ellipse cx="-4" cy="3" rx="5" ry="3.5" fill="#c0b040" opacity="0.8" transform="rotate(20)"/>
      <ellipse cx="4" cy="3" rx="5" ry="3.5" fill="#c0b040" opacity="0.8" transform="rotate(-20)"/>
      <ellipse cx="0" cy="0" rx="2" ry="4" fill="#303010"/>
    </g>
  </svg>`,

  // 7월 홍싸리 — 싸리 + 멧돼지
  `<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="90" fill="#120608"/>
    <path d="M10,90 C12,72 18,58 20,40 C22,28 20,15 22,8" stroke="#3a1820" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M25,90 C26,74 30,62 28,45 C26,32 24,20 28,10" stroke="#3a1820" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M40,90 C38,75 42,60 38,44 C35,32 36,20 40,12" stroke="#301520" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M52,90 C50,78 54,64 50,48 C48,36 50,25 52,16" stroke="#301520" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <circle cx="21" cy="22" r="3.5" fill="#e04060" opacity="0.85"/>
    <circle cx="18" cy="30" r="3" fill="#c83050" opacity="0.8"/>
    <circle cx="24" cy="28" r="3" fill="#e04060" opacity="0.8"/>
    <circle cx="27" cy="18" r="3.5" fill="#d03858" opacity="0.85"/>
    <circle cx="38" cy="25" r="3.5" fill="#e04060" opacity="0.85"/>
    <circle cx="42" cy="32" r="3" fill="#c83050" opacity="0.8"/>
    <circle cx="36" cy="34" r="3" fill="#e04060" opacity="0.8"/>
    <circle cx="50" cy="28" r="3" fill="#d03858" opacity="0.8"/>
    <g transform="translate(10,72)">
      <ellipse cx="12" cy="0" rx="14" ry="8" fill="#3a2018"/>
      <ellipse cx="24" cy="-2" rx="6" ry="5" fill="#3a2018"/>
      <ellipse cx="27" cy="-6" rx="4" ry="3" fill="#2a1810"/>
      <circle cx="30" cy="-8" r="2" fill="#2a1810"/>
      <ellipse cx="6" cy="5" rx="3" ry="5" fill="#2a1810"/>
      <ellipse cx="12" cy="5" rx="3" ry="5" fill="#2a1810"/>
      <circle cx="32" cy="-9" r="1.2" fill="#f0f0f0"/>
    </g>
  </svg>`,

  // 8월 공산 — 보름달 + 기러기
  `<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="90" fill="#0a0a04"/>
    <circle cx="30" cy="28" r="20" fill="#f0e890" opacity="0.15"/>
    <circle cx="30" cy="28" r="16" fill="#f0e890" opacity="0.2"/>
    <circle cx="30" cy="28" r="13" fill="#f0e070" opacity="0.85"/>
    <path d="M8,42 C12,38 18,36 22,38 C18,40 16,44 20,46" stroke="#c0c0c0" stroke-width="1.5" fill="none" opacity="0.8"/>
    <path d="M22,38 C26,34 32,33 36,35 C32,38 30,42 33,44" stroke="#c0c0c0" stroke-width="1.5" fill="none" opacity="0.8"/>
    <path d="M36,35 C40,31 46,30 50,32 C47,35 45,38 48,40" stroke="#c0c0c0" stroke-width="1.5" fill="none" opacity="0.75"/>
    <path d="M0,75 C5,68 12,65 20,68 C28,72 35,72 42,68 C50,65 56,67 60,72" stroke="#2a3010" stroke-width="3" fill="none"/>
    <path d="M0,78 C6,72 14,70 22,73 C30,76 36,75 44,72 C52,69 57,71 60,75" stroke="#1e2808" stroke-width="3" fill="none"/>
    <path d="M0,82 C8,77 16,76 24,78 C32,81 38,80 46,77 C54,74 58,76 60,79" stroke="#182004" stroke-width="3" fill="#0a1204" opacity="0.6"/>
  </svg>`,

  // 9월 국화 — 국화꽃 + 술잔
  `<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="90" fill="#100c02"/>
    <line x1="22" y1="88" x2="22" y2="52" stroke="#2a3808" stroke-width="2.5"/>
    <line x1="22" y1="72" x2="10" y2="60" stroke="#2a3808" stroke-width="1.5"/>
    <g transform="translate(22,34)">
      <ellipse cx="0" cy="-12" rx="4.5" ry="12" fill="#e8c020" opacity="0.9"/>
      <ellipse cx="8" cy="-9" rx="4.5" ry="12" fill="#e8c020" opacity="0.85" transform="rotate(30)"/>
      <ellipse cx="11" cy="0" rx="4.5" ry="12" fill="#e8c020" opacity="0.85" transform="rotate(60)"/>
      <ellipse cx="8" cy="9" rx="4.5" ry="12" fill="#d8b018" opacity="0.85" transform="rotate(90)"/>
      <ellipse cx="0" cy="12" rx="4.5" ry="12" fill="#e8c020" opacity="0.85" transform="rotate(120)"/>
      <ellipse cx="-8" cy="9" rx="4.5" ry="12" fill="#d8b018" opacity="0.85" transform="rotate(150)"/>
      <ellipse cx="-11" cy="0" rx="4.5" ry="12" fill="#e8c020" opacity="0.85" transform="rotate(180)"/>
      <ellipse cx="-8" cy="-9" rx="4.5" ry="12" fill="#d8b018" opacity="0.85" transform="rotate(210)"/>
      <ellipse cx="0" cy="-12" rx="4.5" ry="12" fill="#e8c020" opacity="0.85" transform="rotate(240)"/>
      <circle cx="0" cy="0" r="6" fill="#f0d040"/>
      <circle cx="0" cy="0" r="3" fill="#f8e860"/>
    </g>
    <g transform="translate(44,62)">
      <rect x="-8" y="-5" width="16" height="9" rx="2" fill="#c89828"/>
      <path d="M-6,4 L-8,14 L8,14 L6,4 Z" fill="#c89828"/>
      <rect x="-9" y="14" width="18" height="3" rx="1.5" fill="#b08820"/>
    </g>
  </svg>`,

  // 10월 단풍 — 단풍잎 + 사슴
  `<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="90" fill="#120402"/>
    <g transform="translate(20,22) rotate(-20)" opacity="0.9">
      <path d="M0,-12 L3,-5 L8,-8 L5,-2 L12,0 L5,2 L8,8 L3,5 L0,12 L-3,5 L-8,8 L-5,2 L-12,0 L-5,-2 L-8,-8 L-3,-5 Z" fill="#e04018"/>
      <line x1="0" y1="12" x2="0" y2="20" stroke="#8a3010" stroke-width="2"/>
    </g>
    <g transform="translate(42,18) rotate(15)" opacity="0.85">
      <path d="M0,-10 L2.5,-4 L7,-6 L4,-1 L10,0 L4,1 L7,6 L2.5,4 L0,10 L-2.5,4 L-7,6 L-4,1 L-10,0 L-4,-1 L-7,-6 L-2.5,-4 Z" fill="#d03010"/>
      <line x1="0" y1="10" x2="0" y2="16" stroke="#8a3010" stroke-width="1.5"/>
    </g>
    <g transform="translate(12,42) rotate(-30)" opacity="0.8">
      <path d="M0,-9 L2,-4 L6,-5 L3.5,-1 L9,0 L3.5,1 L6,5 L2,4 L0,9 L-2,4 L-6,5 L-3.5,1 L-9,0 L-3.5,-1 L-6,-5 L-2,-4 Z" fill="#c82808"/>
    </g>
    <g transform="translate(38,38) rotate(10)" opacity="0.8">
      <path d="M0,-10 L2.5,-4 L7,-6 L4,-1 L10,0 L4,1 L7,6 L2.5,4 L0,10 L-2.5,4 L-7,6 L-4,1 L-10,0 L-4,-1 L-7,-6 L-2.5,-4 Z" fill="#e03818"/>
    </g>
    <g transform="translate(24,70)">
      <ellipse cx="6" cy="0" rx="10" ry="6" fill="#5a3818"/>
      <ellipse cx="16" cy="-3" rx="5" ry="4" fill="#5a3818"/>
      <ellipse cx="19" cy="-7" rx="3" ry="5" fill="#4a2e14"/>
      <line x1="6" y1="6" x2="4" y2="16" stroke="#4a2e14" stroke-width="2"/>
      <line x1="10" y1="6" x2="12" y2="16" stroke="#4a2e14" stroke-width="2"/>
      <path d="M19,-12 L17,-8 M21,-11 L20,-7" stroke="#4a2e14" stroke-width="1.5"/>
    </g>
  </svg>`,

  // 11월 오동 — 오동 꽃 + 봉황
  `<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="90" fill="#080414"/>
    <line x1="30" y1="90" x2="30" y2="50" stroke="#3a2060" stroke-width="3"/>
    <line x1="30" y1="70" x2="14" y2="55" stroke="#3a2060" stroke-width="2"/>
    <line x1="30" y1="60" x2="46" y2="48" stroke="#3a2060" stroke-width="2"/>
    <g transform="translate(30,36)">
      <ellipse cx="0" cy="-14" rx="5" ry="13" fill="#8040d0" opacity="0.9"/>
      <ellipse cx="10" cy="-10" rx="5" ry="13" fill="#7030c0" opacity="0.85" transform="rotate(36)"/>
      <ellipse cx="12" cy="4" rx="5" ry="13" fill="#8040d0" opacity="0.85" transform="rotate(72)"/>
      <ellipse cx="4" cy="14" rx="5" ry="13" fill="#7030c0" opacity="0.85" transform="rotate(108)"/>
      <ellipse cx="-8" cy="12" rx="5" ry="13" fill="#8040d0" opacity="0.85" transform="rotate(144)"/>
      <ellipse cx="-12" cy="0" rx="5" ry="13" fill="#7030c0" opacity="0.85" transform="rotate(180)"/>
      <ellipse cx="-8" cy="-12" rx="5" ry="13" fill="#8040d0" opacity="0.85" transform="rotate(216)"/>
      <circle cx="0" cy="0" r="7" fill="#c080f0"/>
    </g>
    <g transform="translate(44,62)">
      <ellipse cx="0" cy="-10" rx="6" ry="10" fill="#c070e0" opacity="0.85"/>
      <ellipse cx="7" cy="-4" rx="5" ry="8" fill="#b060d0" opacity="0.8" transform="rotate(50)"/>
      <path d="M0,0 C-4,8 -6,18 -2,22 C2,26 8,20 6,12" fill="#a050c0" opacity="0.75"/>
      <circle cx="0" cy="-12" r="3" fill="#f0d060"/>
      <path d="M0,-15 L-3,-22 M0,-15 L3,-22" stroke="#f0d060" stroke-width="1.5"/>
    </g>
  </svg>`,

  // 12월 비 — 비광 (우산 아저씨 + 개구리)
  `<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="90" fill="#04080e"/>
    <line x1="8" y1="0" x2="10" y2="90" stroke="#4080a0" stroke-width="0.8" opacity="0.5"/>
    <line x1="18" y1="0" x2="20" y2="90" stroke="#3870a0" stroke-width="0.8" opacity="0.45"/>
    <line x1="28" y1="0" x2="30" y2="90" stroke="#4080a0" stroke-width="0.8" opacity="0.5"/>
    <line x1="38" y1="0" x2="40" y2="90" stroke="#3870a0" stroke-width="0.8" opacity="0.45"/>
    <line x1="48" y1="0" x2="50" y2="90" stroke="#4080a0" stroke-width="0.8" opacity="0.5"/>
    <line x1="13" y1="0" x2="15" y2="90" stroke="#305880" stroke-width="0.6" opacity="0.3"/>
    <line x1="33" y1="0" x2="35" y2="90" stroke="#305880" stroke-width="0.6" opacity="0.3"/>
    <line x1="53" y1="0" x2="55" y2="90" stroke="#305880" stroke-width="0.6" opacity="0.3"/>
    <path d="M16,26 C16,14 44,14 44,26 C38,22 32,20 28,22 C24,20 20,22 16,26 Z" fill="#c0a030"/>
    <line x1="30" y1="26" x2="30" y2="55" stroke="#c0a030" stroke-width="2.5"/>
    <line x1="30" y1="34" x2="24" y2="38" stroke="#c0a030" stroke-width="1.5"/>
    <ellipse cx="30" cy="32" rx="6" ry="7" fill="#b07820"/>
    <rect x="22" y="44" width="16" height="10" rx="2" fill="#4a3010"/>
    <rect x="24" y="54" width="4" height="8" rx="1" fill="#3a2808"/>
    <rect x="32" y="54" width="4" height="8" rx="1" fill="#3a2808"/>
    <g transform="translate(44,72)">
      <ellipse cx="0" cy="0" rx="7" ry="5" fill="#308030"/>
      <ellipse cx="-6" cy="-3" rx="4" ry="3" fill="#308030"/>
      <ellipse cx="6" cy="-3" rx="4" ry="3" fill="#308030"/>
      <circle cx="-7" cy="-4" r="1.5" fill="#f0f0a0"/>
      <circle cx="7" cy="-4" r="1.5" fill="#f0f0a0"/>
    </g>
  </svg>`,

];

// 48장 화투 전체 데이터 (12개월 × 4장: 광/열끗/띠/피)
const HWATU_48 = [
  // 1월 소나무 松
  { id:0,  svgIdx:0,  month:1,  name:'소나무', type:'gwang',  typeName:'학광',   hanja:'松', bg:'linear-gradient(160deg,#0a1f06,#142e0a)', accent:'#b0ff80' },
  { id:1,  svgIdx:0,  month:1,  name:'소나무', type:'ribbon', typeName:'홍띠',   hanja:'松', bg:'linear-gradient(160deg,#0a1f06,#142e0a)', accent:'#7ec850' },
  { id:2,  svgIdx:0,  month:1,  name:'소나무', type:'pi',     typeName:'피',     hanja:'松', bg:'linear-gradient(160deg,#0a1f06,#142e0a)', accent:'#4e9830' },
  { id:3,  svgIdx:0,  month:1,  name:'소나무', type:'pi',     typeName:'피',     hanja:'松', bg:'linear-gradient(160deg,#0a1f06,#142e0a)', accent:'#4e9830' },
  // 2월 매화 梅
  { id:4,  svgIdx:1,  month:2,  name:'매화',   type:'yul',    typeName:'꾀꼬리', hanja:'梅', bg:'linear-gradient(160deg,#2a0618,#420a28)', accent:'#f8aac0' },
  { id:5,  svgIdx:1,  month:2,  name:'매화',   type:'ribbon', typeName:'홍띠',   hanja:'梅', bg:'linear-gradient(160deg,#2a0618,#420a28)', accent:'#e87aa0' },
  { id:6,  svgIdx:1,  month:2,  name:'매화',   type:'pi',     typeName:'피',     hanja:'梅', bg:'linear-gradient(160deg,#2a0618,#420a28)', accent:'#a84060' },
  { id:7,  svgIdx:1,  month:2,  name:'매화',   type:'pi',     typeName:'피',     hanja:'梅', bg:'linear-gradient(160deg,#2a0618,#420a28)', accent:'#a84060' },
  // 3월 벚꽃 桜
  { id:8,  svgIdx:2,  month:3,  name:'벚꽃',   type:'gwang',  typeName:'벚꽃광', hanja:'桜', bg:'linear-gradient(160deg,#3a0820,#58103a)', accent:'#ffcce8' },
  { id:9,  svgIdx:2,  month:3,  name:'벚꽃',   type:'ribbon', typeName:'홍띠',   hanja:'桜', bg:'linear-gradient(160deg,#3a0820,#58103a)', accent:'#f4b8d0' },
  { id:10, svgIdx:2,  month:3,  name:'벚꽃',   type:'pi',     typeName:'피',     hanja:'桜', bg:'linear-gradient(160deg,#3a0820,#58103a)', accent:'#a86080' },
  { id:11, svgIdx:2,  month:3,  name:'벚꽃',   type:'pi',     typeName:'피',     hanja:'桜', bg:'linear-gradient(160deg,#3a0820,#58103a)', accent:'#a86080' },
  // 4월 흑싸리 藤
  { id:12, svgIdx:3,  month:4,  name:'흑싸리', type:'yul',    typeName:'두견새', hanja:'藤', bg:'linear-gradient(160deg,#06041a,#10082e)', accent:'#a890f8' },
  { id:13, svgIdx:3,  month:4,  name:'흑싸리', type:'ribbon', typeName:'초단',   hanja:'藤', bg:'linear-gradient(160deg,#06041a,#10082e)', accent:'#8870d8' },
  { id:14, svgIdx:3,  month:4,  name:'흑싸리', type:'pi',     typeName:'피',     hanja:'藤', bg:'linear-gradient(160deg,#06041a,#10082e)', accent:'#504090' },
  { id:15, svgIdx:3,  month:4,  name:'흑싸리', type:'pi',     typeName:'피',     hanja:'藤', bg:'linear-gradient(160deg,#06041a,#10082e)', accent:'#504090' },
  // 5월 난초 蘭
  { id:16, svgIdx:4,  month:5,  name:'난초',   type:'yul',    typeName:'파랑새', hanja:'蘭', bg:'linear-gradient(160deg,#001a10,#003020)', accent:'#70e898' },
  { id:17, svgIdx:4,  month:5,  name:'난초',   type:'ribbon', typeName:'초단',   hanja:'蘭', bg:'linear-gradient(160deg,#001a10,#003020)', accent:'#50c878' },
  { id:18, svgIdx:4,  month:5,  name:'난초',   type:'pi',     typeName:'피',     hanja:'蘭', bg:'linear-gradient(160deg,#001a10,#003020)', accent:'#308050' },
  { id:19, svgIdx:4,  month:5,  name:'난초',   type:'pi',     typeName:'피',     hanja:'蘭', bg:'linear-gradient(160deg,#001a10,#003020)', accent:'#308050' },
  // 6월 모란 牡
  { id:20, svgIdx:5,  month:6,  name:'모란',   type:'yul',    typeName:'나비',   hanja:'牡', bg:'linear-gradient(160deg,#280606,#400a0a)', accent:'#f86060' },
  { id:21, svgIdx:5,  month:6,  name:'모란',   type:'ribbon', typeName:'청띠',   hanja:'牡', bg:'linear-gradient(160deg,#280606,#400a0a)', accent:'#e84040' },
  { id:22, svgIdx:5,  month:6,  name:'모란',   type:'pi',     typeName:'피',     hanja:'牡', bg:'linear-gradient(160deg,#280606,#400a0a)', accent:'#902020' },
  { id:23, svgIdx:5,  month:6,  name:'모란',   type:'pi',     typeName:'피',     hanja:'牡', bg:'linear-gradient(160deg,#280606,#400a0a)', accent:'#902020' },
  // 7월 홍싸리 萩
  { id:24, svgIdx:6,  month:7,  name:'홍싸리', type:'yul',    typeName:'멧돼지', hanja:'萩', bg:'linear-gradient(160deg,#281006,#40180a)', accent:'#f89060' },
  { id:25, svgIdx:6,  month:7,  name:'홍싸리', type:'ribbon', typeName:'초단',   hanja:'萩', bg:'linear-gradient(160deg,#281006,#40180a)', accent:'#e87040' },
  { id:26, svgIdx:6,  month:7,  name:'홍싸리', type:'pi',     typeName:'피',     hanja:'萩', bg:'linear-gradient(160deg,#281006,#40180a)', accent:'#904020' },
  { id:27, svgIdx:6,  month:7,  name:'홍싸리', type:'pi',     typeName:'피',     hanja:'萩', bg:'linear-gradient(160deg,#281006,#40180a)', accent:'#904020' },
  // 8월 공산 芒
  { id:28, svgIdx:7,  month:8,  name:'공산',   type:'gwang',  typeName:'공산광', hanja:'芒', bg:'linear-gradient(160deg,#141006,#201a08)', accent:'#fff090' },
  { id:29, svgIdx:7,  month:8,  name:'공산',   type:'yul',    typeName:'기러기', hanja:'芒', bg:'linear-gradient(160deg,#141006,#201a08)', accent:'#f0d060' },
  { id:30, svgIdx:7,  month:8,  name:'공산',   type:'pi',     typeName:'피',     hanja:'芒', bg:'linear-gradient(160deg,#141006,#201a08)', accent:'#907030' },
  { id:31, svgIdx:7,  month:8,  name:'공산',   type:'pi',     typeName:'피',     hanja:'芒', bg:'linear-gradient(160deg,#141006,#201a08)', accent:'#907030' },
  // 9월 국화 菊
  { id:32, svgIdx:8,  month:9,  name:'국화',   type:'yul',    typeName:'술잔',   hanja:'菊', bg:'linear-gradient(160deg,#1e1406,#2e1e08)', accent:'#f0d850' },
  { id:33, svgIdx:8,  month:9,  name:'국화',   type:'ribbon', typeName:'청띠',   hanja:'菊', bg:'linear-gradient(160deg,#1e1406,#2e1e08)', accent:'#e8b830' },
  { id:34, svgIdx:8,  month:9,  name:'국화',   type:'pi',     typeName:'피',     hanja:'菊', bg:'linear-gradient(160deg,#1e1406,#2e1e08)', accent:'#887020' },
  { id:35, svgIdx:8,  month:9,  name:'국화',   type:'pi',     typeName:'피',     hanja:'菊', bg:'linear-gradient(160deg,#1e1406,#2e1e08)', accent:'#887020' },
  // 10월 단풍 楓
  { id:36, svgIdx:9,  month:10, name:'단풍',   type:'yul',    typeName:'사슴',   hanja:'楓', bg:'linear-gradient(160deg,#200606,#320a0a)', accent:'#f05030' },
  { id:37, svgIdx:9,  month:10, name:'단풍',   type:'ribbon', typeName:'청띠',   hanja:'楓', bg:'linear-gradient(160deg,#200606,#320a0a)', accent:'#e04030' },
  { id:38, svgIdx:9,  month:10, name:'단풍',   type:'pi',     typeName:'피',     hanja:'楓', bg:'linear-gradient(160deg,#200606,#320a0a)', accent:'#901818' },
  { id:39, svgIdx:9,  month:10, name:'단풍',   type:'pi',     typeName:'피',     hanja:'楓', bg:'linear-gradient(160deg,#200606,#320a0a)', accent:'#901818' },
  // 11월 오동 桐
  { id:40, svgIdx:10, month:11, name:'오동',   type:'gwang',  typeName:'오동광', hanja:'桐', bg:'linear-gradient(160deg,#0a0418,#14082a)', accent:'#d090ff' },
  { id:41, svgIdx:10, month:11, name:'오동',   type:'pi',     typeName:'피',     hanja:'桐', bg:'linear-gradient(160deg,#0a0418,#14082a)', accent:'#a060d0' },
  { id:42, svgIdx:10, month:11, name:'오동',   type:'pi',     typeName:'피',     hanja:'桐', bg:'linear-gradient(160deg,#0a0418,#14082a)', accent:'#a060d0' },
  { id:43, svgIdx:10, month:11, name:'오동',   type:'pi',     typeName:'피',     hanja:'桐', bg:'linear-gradient(160deg,#0a0418,#14082a)', accent:'#a060d0' },
  // 12월 비 雨
  { id:44, svgIdx:11, month:12, name:'비',     type:'gwang',  typeName:'비광',   hanja:'雨', bg:'linear-gradient(160deg,#060c1a,#0a1428)', accent:'#90d8ff' },
  { id:45, svgIdx:11, month:12, name:'비',     type:'yul',    typeName:'제비',   hanja:'雨', bg:'linear-gradient(160deg,#060c1a,#0a1428)', accent:'#60a8e0' },
  { id:46, svgIdx:11, month:12, name:'비',     type:'pi',     typeName:'피',     hanja:'雨', bg:'linear-gradient(160deg,#060c1a,#0a1428)', accent:'#306080' },
  { id:47, svgIdx:11, month:12, name:'비',     type:'pi',     typeName:'피',     hanja:'雨', bg:'linear-gradient(160deg,#060c1a,#0a1428)', accent:'#306080' },
];
