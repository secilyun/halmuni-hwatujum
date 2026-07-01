'use strict';

// 화투 카드 SVG — 전통 화투 스타일 (viewBox 60x90)
// SVG 인덱스: 35개 고유 디자인 (월별 광/열끗/띠/피 구분)
const CARD_SVGS = [

// ══════════════════════════════
// 1월 소나무
// ══════════════════════════════

// [0] 1월 광 — 학광 (소나무 + 학 + 붉은 해)
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#0a1c08"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#c8a84b" stroke-width="1.5"/>
  <circle cx="30" cy="19" r="12" fill="#d42000"/>
  <circle cx="30" cy="19" r="9" fill="#ff4422"/>
  <rect x="27" y="55" width="6" height="33" rx="3" fill="#5c3318"/>
  <line x1="30" y1="60" x2="8" y2="50" stroke="#5c3318" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="30" y1="66" x2="54" y2="56" stroke="#5c3318" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="30" y1="73" x2="6" y2="67" stroke="#5c3318" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="30" y1="75" x2="54" y2="71" stroke="#5c3318" stroke-width="2.5" stroke-linecap="round"/>
  <ellipse cx="8" cy="48" rx="10" ry="5" fill="#1a5014"/>
  <ellipse cx="54" cy="54" rx="9" ry="5" fill="#1a5014"/>
  <ellipse cx="6" cy="65" rx="8" ry="4" fill="#1a5014"/>
  <ellipse cx="54" cy="69" rx="8" ry="4" fill="#1a5014"/>
  <ellipse cx="30" cy="53" rx="8" ry="4" fill="#1a5014"/>
  <path d="M16 36 Q22 24 30 26 Q38 24 44 36 Q37 33 30 34 Q23 33 16 36Z" fill="white"/>
  <path d="M17 35 L6 42 L11 41 L19 37Z" fill="white"/>
  <path d="M43 35 L54 42 L49 41 L41 37Z" fill="white"/>
  <path d="M28 25 L32 25 L31 20 L29 20Z" fill="#d42000"/>
  <circle cx="11" cy="10" r="6" fill="#c8a84b"/>
  <text x="11" y="13.5" text-anchor="middle" font-size="7" font-weight="bold" fill="#1a0a00" font-family="serif">光</text>
</svg>`,

// [1] 1월 띠 — 홍단 (소나무 + 빨간 띠)
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#0a1c08"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#c8a84b" stroke-width="1.5"/>
  <rect x="27" y="57" width="6" height="31" rx="3" fill="#5c3318"/>
  <line x1="30" y1="62" x2="8" y2="53" stroke="#5c3318" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="30" y1="68" x2="54" y2="59" stroke="#5c3318" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="30" y1="74" x2="7" y2="69" stroke="#5c3318" stroke-width="2.5" stroke-linecap="round"/>
  <ellipse cx="8" cy="51" rx="10" ry="5" fill="#1a5014"/>
  <ellipse cx="54" cy="57" rx="9" ry="5" fill="#1a5014"/>
  <ellipse cx="7" cy="67" rx="8" ry="4" fill="#1a5014"/>
  <ellipse cx="30" cy="55" rx="8" ry="4" fill="#1a5014"/>
  <rect x="7" y="22" width="46" height="18" rx="4" fill="#cc1111"/>
  <rect x="8" y="23" width="44" height="16" rx="3" fill="none" stroke="#ff5533" stroke-width="0.8"/>
  <text x="30" y="34" text-anchor="middle" font-size="10" fill="white" font-family="serif" font-weight="bold">松</text>
</svg>`,

// [2] 1월 피 — 소나무 단순
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#0a1c08"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#2a5022" stroke-width="1"/>
  <rect x="27" y="60" width="6" height="28" rx="3" fill="#5c3318"/>
  <ellipse cx="30" cy="55" rx="20" ry="24" fill="#112e0e"/>
  <ellipse cx="30" cy="50" rx="14" ry="18" fill="#163a12"/>
  <ellipse cx="30" cy="44" rx="9" ry="12" fill="#1a4a15"/>
  <ellipse cx="30" cy="38" rx="5" ry="7" fill="#1e5a18"/>
  <line x1="18" y1="58" x2="30" y2="44" stroke="#2a6a22" stroke-width="0.8" stroke-opacity="0.5"/>
  <line x1="42" y1="58" x2="30" y2="44" stroke="#2a6a22" stroke-width="0.8" stroke-opacity="0.5"/>
  <line x1="13" y1="65" x2="30" y2="50" stroke="#2a6a22" stroke-width="0.8" stroke-opacity="0.5"/>
  <line x1="47" y1="65" x2="30" y2="50" stroke="#2a6a22" stroke-width="0.8" stroke-opacity="0.5"/>
</svg>`,

// ══════════════════════════════
// 2월 매화
// ══════════════════════════════

// [3] 2월 열끗 — 꾀꼬리 (매화 가지 + 꾀꼬리)
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#1a0810"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#c8a84b" stroke-width="1.5"/>
  <path d="M8 88 Q18 65 28 48 Q36 34 44 18" stroke="#3d1c08" stroke-width="4.5" fill="none" stroke-linecap="round"/>
  <path d="M28 48 Q42 44 52 48" stroke="#3d1c08" stroke-width="3" fill="none"/>
  <path d="M22 62 Q10 58 5 64" stroke="#3d1c08" stroke-width="2.5" fill="none"/>
  <circle cx="44" cy="18" r="7" fill="#e8507a"/>
  <circle cx="38" cy="12" r="5" fill="#f07090"/>
  <circle cx="50" cy="24" r="5.5" fill="#e06090"/>
  <circle cx="52" cy="46" r="5" fill="#e8507a"/>
  <circle cx="44" cy="50" r="4" fill="#f07090"/>
  <circle cx="6" cy="62" r="4.5" fill="#e8507a"/>
  <circle cx="12" cy="56" r="4" fill="#f07090"/>
  <circle cx="44" cy="18" r="3" fill="#fff0f5"/>
  <circle cx="38" cy="12" r="2.5" fill="#fff0f5"/>
  <circle cx="50" cy="24" r="2.5" fill="#fff0f5"/>
  <circle cx="52" cy="46" r="2" fill="#fff0f5"/>
  <ellipse cx="22" cy="34" rx="9" ry="5" fill="#a0c828" transform="rotate(-25 22 34)"/>
  <circle cx="27" cy="28" r="5" fill="#c0e030"/>
  <path d="M31 27 L40 22 L37 27Z" fill="#a0c828"/>
  <circle cx="28" cy="27" r="1.2" fill="#1a0a00"/>
  <path d="M26 26 L22 24" stroke="#f08020" stroke-width="1.5" stroke-linecap="round"/>
</svg>`,

// [4] 2월 띠 — 홍단 (매화 + 빨간 띠)
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#1a0810"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#c8a84b" stroke-width="1.5"/>
  <path d="M10 88 Q22 68 30 55 Q38 40 46 28" stroke="#3d1c08" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path d="M30 55 Q44 50 54 56" stroke="#3d1c08" stroke-width="2.5" fill="none"/>
  <circle cx="46" cy="28" r="6" fill="#e8507a"/>
  <circle cx="40" cy="22" r="5" fill="#f07090"/>
  <circle cx="52" cy="24" r="4.5" fill="#e06090"/>
  <circle cx="54" cy="54" r="4.5" fill="#e8507a"/>
  <circle cx="46" cy="28" r="2.5" fill="#fff0f5"/>
  <circle cx="40" cy="22" r="2" fill="#fff0f5"/>
  <rect x="7" y="22" width="46" height="18" rx="4" fill="#cc1111"/>
  <rect x="8" y="23" width="44" height="16" rx="3" fill="none" stroke="#ff5533" stroke-width="0.8"/>
  <text x="30" y="34" text-anchor="middle" font-size="10" fill="white" font-family="serif" font-weight="bold">梅</text>
</svg>`,

// [5] 2월 피 — 매화 단순
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#1a0810"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#5a2030" stroke-width="1"/>
  <path d="M10 88 Q25 60 35 40 Q42 25 48 15" stroke="#3d1c08" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <path d="M35 40 Q48 38 55 44" stroke="#3d1c08" stroke-width="2.5" fill="none"/>
  <path d="M25 60 Q12 58 6 64" stroke="#3d1c08" stroke-width="2" fill="none"/>
  <circle cx="48" cy="15" r="6" fill="#c03060" opacity="0.85"/>
  <circle cx="55" cy="22" r="5" fill="#d04070" opacity="0.8"/>
  <circle cx="42" cy="22" r="5" fill="#c03060" opacity="0.85"/>
  <circle cx="55" cy="42" r="5" fill="#c03060" opacity="0.8"/>
  <circle cx="6" cy="62" r="4.5" fill="#c03060" opacity="0.8"/>
  <circle cx="48" cy="15" r="2.5" fill="#ffe0ea" opacity="0.9"/>
  <circle cx="55" cy="22" r="2" fill="#ffe0ea" opacity="0.9"/>
  <circle cx="42" cy="22" r="2" fill="#ffe0ea" opacity="0.9"/>
</svg>`,

// ══════════════════════════════
// 3월 벚꽃
// ══════════════════════════════

// [6] 3월 광 — 벚꽃광 (벚꽃 + 장막)
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#140a18"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#c8a84b" stroke-width="1.5"/>
  <circle cx="14" cy="20" r="7" fill="#f090c0"/>
  <circle cx="28" cy="14" r="8" fill="#f0b0d0"/>
  <circle cx="42" cy="18" r="7" fill="#e870b0"/>
  <circle cx="8" cy="32" r="5.5" fill="#f090c0"/>
  <circle cx="22" cy="28" r="6" fill="#f0b0d0"/>
  <circle cx="36" cy="24" r="5.5" fill="#e870b0"/>
  <circle cx="50" cy="28" r="5" fill="#f090c0"/>
  <circle cx="48" cy="38" r="5" fill="#f0b0d0"/>
  <circle cx="14" cy="20" r="3" fill="#fff0f8"/>
  <circle cx="28" cy="14" r="3.5" fill="#fff0f8"/>
  <circle cx="42" cy="18" r="3" fill="#fff0f8"/>
  <circle cx="22" cy="28" r="2.5" fill="#fff0f8"/>
  <rect x="4" y="56" width="52" height="32" rx="0" fill="#1a0a18"/>
  <line x1="4" y1="56" x2="4" y2="88" stroke="#c8a84b" stroke-width="2.5"/>
  <line x1="56" y1="56" x2="56" y2="88" stroke="#c8a84b" stroke-width="2.5"/>
  <rect x="4" y="55" width="52" height="8" rx="0" fill="#cc2200"/>
  <line x1="4" y1="63" x2="56" y2="63" stroke="#cc2200" stroke-width="1"/>
  <line x1="18" y1="56" x2="18" y2="88" stroke="#8a1800" stroke-width="1.5"/>
  <line x1="32" y1="56" x2="32" y2="88" stroke="#8a1800" stroke-width="1.5"/>
  <line x1="46" y1="56" x2="46" y2="88" stroke="#8a1800" stroke-width="1.5"/>
  <circle cx="11" cy="10" r="6" fill="#c8a84b"/>
  <text x="11" y="13.5" text-anchor="middle" font-size="7" font-weight="bold" fill="#1a0a00" font-family="serif">光</text>
</svg>`,

// [7] 3월 띠 — 홍단 (벚꽃 + 빨간 띠)
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#140a18"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#c8a84b" stroke-width="1.5"/>
  <path d="M5 85 Q15 70 25 55 Q33 42 40 30" stroke="#3a1830" stroke-width="3.5" fill="none"/>
  <path d="M40 30 Q50 25 56 30" stroke="#3a1830" stroke-width="2.5" fill="none"/>
  <circle cx="40" cy="30" r="6" fill="#f090c0"/>
  <circle cx="48" cy="24" r="5" fill="#f0b0d0"/>
  <circle cx="54" cy="32" r="4.5" fill="#e870b0"/>
  <circle cx="33" cy="55" r="5" fill="#f090c0"/>
  <circle cx="42" cy="50" r="4.5" fill="#e870b0"/>
  <circle cx="24" cy="63" r="4" fill="#f0b0d0"/>
  <circle cx="40" cy="30" r="2.5" fill="#fff0f8"/>
  <circle cx="48" cy="24" r="2" fill="#fff0f8"/>
  <rect x="7" y="22" width="46" height="18" rx="4" fill="#cc1111"/>
  <rect x="8" y="23" width="44" height="16" rx="3" fill="none" stroke="#ff5533" stroke-width="0.8"/>
  <text x="30" y="34" text-anchor="middle" font-size="10" fill="white" font-family="serif" font-weight="bold">桜</text>
</svg>`,

// [8] 3월 피 — 벚꽃 단순
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#140a18"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#5a2048" stroke-width="1"/>
  <path d="M5 85 Q20 65 30 48 Q38 35 48 20" stroke="#3a1830" stroke-width="3.5" fill="none" stroke-linecap="round"/>
  <circle cx="48" cy="20" r="6" fill="#d06090" opacity="0.85"/>
  <circle cx="54" cy="26" r="5" fill="#e070a0" opacity="0.8"/>
  <circle cx="42" cy="26" r="5" fill="#d06090" opacity="0.8"/>
  <circle cx="30" cy="48" r="5" fill="#d06090" opacity="0.8"/>
  <circle cx="38" cy="44" r="4.5" fill="#e070a0" opacity="0.75"/>
  <circle cx="22" cy="62" r="4" fill="#d06090" opacity="0.75"/>
  <circle cx="48" cy="20" r="2.5" fill="#ffe0f0" opacity="0.9"/>
  <circle cx="54" cy="26" r="2" fill="#ffe0f0" opacity="0.9"/>
  <circle cx="30" cy="48" r="2" fill="#ffe0f0" opacity="0.9"/>
  <circle cx="14" cy="72" r="3.5" fill="#d06090" opacity="0.7"/>
  <circle cx="10" cy="80" r="3" fill="#e070a0" opacity="0.65"/>
</svg>`,

// ══════════════════════════════
// 4월 흑싸리 (등나무/藤)
// ══════════════════════════════

// [9] 4월 열끗 — 두견새 (등나무 + 두견새)
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#0c0820"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#c8a84b" stroke-width="1.5"/>
  <line x1="5" y1="5" x2="55" y2="5" stroke="#503880" stroke-width="4" stroke-linecap="round"/>
  <path d="M12 5 C10 22 10 38 12 58 C13 68 11 78 10 88" stroke="#6040a0" stroke-width="2.5" fill="none"/>
  <path d="M24 5 C22 24 20 42 22 62 C23 72 21 82 20 90" stroke="#5030a0" stroke-width="2" fill="none"/>
  <path d="M36 5 C34 22 32 40 34 60 C35 70 33 80 32 90" stroke="#6040a0" stroke-width="2" fill="none"/>
  <path d="M48 5 C46 22 44 40 46 60 C47 70 45 80 44 90" stroke="#5030a0" stroke-width="2" fill="none"/>
  <ellipse cx="11" cy="22" rx="4.5" ry="8" fill="#8060d0" opacity="0.85" transform="rotate(8 11 22)"/>
  <ellipse cx="22" cy="30" rx="4" ry="7" fill="#7050c0" opacity="0.8" transform="rotate(-5 22 30)"/>
  <ellipse cx="34" cy="20" rx="4.5" ry="8" fill="#8060d0" opacity="0.8" transform="rotate(6 34 20)"/>
  <ellipse cx="46" cy="28" rx="4" ry="7" fill="#7050c0" opacity="0.75" transform="rotate(-7 46 28)"/>
  <ellipse cx="10" cy="50" rx="3.5" ry="6" fill="#9070e0" opacity="0.7"/>
  <ellipse cx="33" cy="55" rx="4" ry="7" fill="#8060d0" opacity="0.7"/>
  <ellipse cx="22" cy="65" rx="3" ry="5.5" fill="#7050c0" opacity="0.65"/>
  <ellipse cx="45" cy="52" rx="3.5" ry="6" fill="#8060d0" opacity="0.7"/>
  <ellipse cx="36" cy="32" rx="8" ry="4.5" fill="#e05030" transform="rotate(-30 36 32)"/>
  <circle cx="41" cy="27" r="5" fill="#c04020"/>
  <path d="M45 26 L54 22 L51 27Z" fill="#e05030"/>
  <circle cx="42" cy="26" r="1.2" fill="#1a0a00"/>
</svg>`,

// [10] 4월 띠 — (등나무 + 띠)
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#0c0820"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#c8a84b" stroke-width="1.5"/>
  <line x1="5" y1="5" x2="55" y2="5" stroke="#503880" stroke-width="4" stroke-linecap="round"/>
  <path d="M15 5 C13 25 12 45 14 68 C15 78 13 84 12 90" stroke="#6040a0" stroke-width="2.5" fill="none"/>
  <path d="M32 5 C30 28 28 48 30 70 C31 80 30 86 28 90" stroke="#5030a0" stroke-width="2.5" fill="none"/>
  <path d="M48 5 C46 25 44 45 46 68 C47 78 45 84 44 90" stroke="#6040a0" stroke-width="2.5" fill="none"/>
  <ellipse cx="14" cy="28" rx="4" ry="7.5" fill="#8060d0" opacity="0.8" transform="rotate(8 14 28)"/>
  <ellipse cx="30" cy="35" rx="4" ry="7" fill="#7050c0" opacity="0.8" transform="rotate(-5 30 35)"/>
  <ellipse cx="47" cy="25" rx="4" ry="7.5" fill="#8060d0" opacity="0.75" transform="rotate(7 47 25)"/>
  <ellipse cx="14" cy="60" rx="3.5" ry="6" fill="#9070e0" opacity="0.65"/>
  <ellipse cx="47" cy="58" rx="3.5" ry="6" fill="#8060d0" opacity="0.65"/>
  <rect x="7" y="22" width="46" height="17" rx="4" fill="#cc1111"/>
  <rect x="8" y="23" width="44" height="15" rx="3" fill="none" stroke="#ff5533" stroke-width="0.8"/>
  <text x="30" y="33.5" text-anchor="middle" font-size="10" fill="white" font-family="serif" font-weight="bold">藤</text>
</svg>`,

// [11] 4월 피 — 등나무 단순
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#0c0820"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#302050" stroke-width="1"/>
  <line x1="5" y1="5" x2="55" y2="5" stroke="#302858" stroke-width="3.5" stroke-linecap="round"/>
  <path d="M18 5 C16 28 15 52 17 76 C18 84 16 88 15 90" stroke="#403078" stroke-width="2.5" fill="none"/>
  <path d="M38 5 C36 28 35 52 37 76 C38 84 36 88 35 90" stroke="#403078" stroke-width="2.5" fill="none"/>
  <ellipse cx="17" cy="25" rx="3.5" ry="6.5" fill="#604898" opacity="0.75" transform="rotate(8 17 25)"/>
  <ellipse cx="37" cy="28" rx="3.5" ry="6.5" fill="#604898" opacity="0.75" transform="rotate(-6 37 28)"/>
  <ellipse cx="17" cy="52" rx="3" ry="5.5" fill="#604898" opacity="0.7"/>
  <ellipse cx="37" cy="55" rx="3" ry="5.5" fill="#604898" opacity="0.7"/>
  <ellipse cx="17" cy="74" rx="3" ry="5" fill="#604898" opacity="0.6"/>
  <ellipse cx="37" cy="72" rx="3" ry="5" fill="#604898" opacity="0.6"/>
</svg>`,

// ══════════════════════════════
// 5월 난초 (붓꽃/菖蒲)
// ══════════════════════════════

// [12] 5월 열끗 — 파랑새 (붓꽃 + 파랑새)
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#080c20"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#c8a84b" stroke-width="1.5"/>
  <line x1="10" y1="88" x2="14" y2="50" stroke="#1a4a1a" stroke-width="3" stroke-linecap="round"/>
  <line x1="22" y1="88" x2="26" y2="48" stroke="#1a4a1a" stroke-width="3" stroke-linecap="round"/>
  <line x1="34" y1="88" x2="38" y2="52" stroke="#1a4a1a" stroke-width="3" stroke-linecap="round"/>
  <line x1="46" y1="88" x2="50" y2="55" stroke="#1a4a1a" stroke-width="3" stroke-linecap="round"/>
  <path d="M10 55 Q14 46 12 40 Q14 34 10 28" stroke="#4040d0" stroke-width="2" fill="none"/>
  <ellipse cx="10" cy="26" rx="4" ry="7" fill="#5050e0" transform="rotate(-15 10 26)"/>
  <ellipse cx="14" cy="30" rx="3" ry="5" fill="#7070f0" transform="rotate(10 14 30)"/>
  <path d="M30 60 Q34 48 32 40 Q34 32 30 24" stroke="#3838c8" stroke-width="2" fill="none"/>
  <ellipse cx="29" cy="22" rx="4" ry="7" fill="#5050e0" transform="rotate(-15 29 22)"/>
  <ellipse cx="34" cy="26" rx="3" ry="5" fill="#7070f0" transform="rotate(10 34 26)"/>
  <ellipse cx="44" cy="38" rx="10" ry="5" fill="#3060d0" transform="rotate(-20 44 38)"/>
  <circle cx="49" cy="32" r="6" fill="#4070e0"/>
  <path d="M54 31 L60 26 L58 32Z" fill="#3060d0" transform="translate(-2 0)"/>
  <circle cx="50" cy="31" r="1.5" fill="#0a0a20"/>
  <path d="M48 30 Q44 26 46 24" stroke="#e06020" stroke-width="1.5" fill="none" stroke-linecap="round"/>
</svg>`,

// [13] 5월 띠 — (붓꽃 + 띠)
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#080c20"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#c8a84b" stroke-width="1.5"/>
  <line x1="12" y1="88" x2="14" y2="55" stroke="#1a4a1a" stroke-width="3" stroke-linecap="round"/>
  <line x1="28" y1="88" x2="30" y2="52" stroke="#1a4a1a" stroke-width="3" stroke-linecap="round"/>
  <line x1="44" y1="88" x2="48" y2="58" stroke="#1a4a1a" stroke-width="3" stroke-linecap="round"/>
  <path d="M11 58 Q14 50 12 44 Q14 38 10 32" stroke="#4040d0" stroke-width="2" fill="none"/>
  <ellipse cx="10" cy="30" rx="4" ry="6.5" fill="#5050e0" transform="rotate(-15 10 30)"/>
  <ellipse cx="14" cy="34" rx="3" ry="5" fill="#7070f0" transform="rotate(10 14 34)"/>
  <path d="M28 55 Q31 48 30 43 Q32 37 28 31" stroke="#4040d0" stroke-width="2" fill="none"/>
  <ellipse cx="27" cy="29" rx="4" ry="6.5" fill="#5050e0" transform="rotate(-15 27 29)"/>
  <rect x="7" y="22" width="46" height="17" rx="4" fill="#1166cc"/>
  <rect x="8" y="23" width="44" height="15" rx="3" fill="none" stroke="#4488ee" stroke-width="0.8"/>
  <text x="30" y="33.5" text-anchor="middle" font-size="10" fill="white" font-family="serif" font-weight="bold">菖</text>
</svg>`,

// [14] 5월 피 — 붓꽃 단순
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#080c20"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#202848" stroke-width="1"/>
  <line x1="12" y1="88" x2="13" y2="44" stroke="#1a3a1a" stroke-width="3" stroke-linecap="round"/>
  <line x1="24" y1="88" x2="26" y2="46" stroke="#1a3a1a" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="36" y1="88" x2="38" y2="48" stroke="#1a3a1a" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="48" y1="88" x2="50" y2="50" stroke="#1a3a1a" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M11 48 Q14 40 12 34 Q14 28 10 22" stroke="#3838b8" stroke-width="2" fill="none"/>
  <ellipse cx="10" cy="20" rx="3.5" ry="6" fill="#4848c8" transform="rotate(-15 10 20)"/>
  <ellipse cx="14" cy="24" rx="2.5" ry="4.5" fill="#6060d8" transform="rotate(10 14 24)"/>
  <path d="M35 52 Q38 44 36 38 Q38 32 34 26" stroke="#3838b8" stroke-width="2" fill="none"/>
  <ellipse cx="33" cy="24" rx="3.5" ry="6" fill="#4848c8" transform="rotate(-15 33 24)"/>
  <ellipse cx="38" cy="28" rx="2.5" ry="4.5" fill="#6060d8" transform="rotate(10 38 28)"/>
</svg>`,

// ══════════════════════════════
// 6월 모란
// ══════════════════════════════

// [15] 6월 열끗 — 나비 (모란 + 나비)
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#081808"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#c8a84b" stroke-width="1.5"/>
  <ellipse cx="30" cy="70" rx="22" ry="18" fill="#0e2e0e"/>
  <ellipse cx="30" cy="68" rx="16" ry="14" fill="#123812"/>
  <circle cx="30" cy="60" r="14" fill="#c8186a" opacity="0.9"/>
  <circle cx="30" cy="60" r="10" fill="#e0308a"/>
  <circle cx="30" cy="60" r="6" fill="#f050a0"/>
  <circle cx="30" cy="60" r="3" fill="#ffd0e8"/>
  <ellipse cx="24" cy="52" rx="5" ry="8" fill="#c8186a" opacity="0.7" transform="rotate(-20 24 52)"/>
  <ellipse cx="36" cy="50" rx="5" ry="8" fill="#c8186a" opacity="0.7" transform="rotate(20 36 50)"/>
  <ellipse cx="20" cy="60" rx="4" ry="7" fill="#d02876" opacity="0.6" transform="rotate(-30 20 60)"/>
  <ellipse cx="40" cy="58" rx="4" ry="7" fill="#d02876" opacity="0.6" transform="rotate(30 40 58)"/>
  <ellipse cx="26" cy="25" rx="10" ry="6" fill="#f0d820" opacity="0.9" transform="rotate(-30 26 25)"/>
  <ellipse cx="36" cy="22" rx="10" ry="6" fill="#f8e828" opacity="0.9" transform="rotate(30 36 22)"/>
  <ellipse cx="22" cy="32" rx="7" ry="4" fill="#e8c010" opacity="0.8" transform="rotate(-20 22 32)"/>
  <ellipse cx="40" cy="30" rx="7" ry="4" fill="#e8c010" opacity="0.8" transform="rotate(20 40 30)"/>
  <line x1="30" y1="18" x2="30" y2="34" stroke="#2a1800" stroke-width="1.5"/>
  <circle cx="30" cy="18" r="2" fill="#2a1800"/>
  <path d="M28 20 Q24 14 20 16" stroke="#2a1800" stroke-width="1" fill="none"/>
  <path d="M32 20 Q36 14 40 16" stroke="#2a1800" stroke-width="1" fill="none"/>
</svg>`,

// [16] 6월 띠 — 청단 (모란 + 파란 띠)
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#081808"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#c8a84b" stroke-width="1.5"/>
  <ellipse cx="30" cy="72" rx="22" ry="16" fill="#0e2e0e"/>
  <ellipse cx="30" cy="70" rx="15" ry="12" fill="#123812"/>
  <circle cx="30" cy="64" r="12" fill="#c8186a" opacity="0.9"/>
  <circle cx="30" cy="64" r="8" fill="#e0308a"/>
  <circle cx="30" cy="64" r="4.5" fill="#f050a0"/>
  <circle cx="30" cy="64" r="2" fill="#ffd0e8"/>
  <ellipse cx="22" cy="55" rx="5" ry="7" fill="#c8186a" opacity="0.7" transform="rotate(-20 22 55)"/>
  <ellipse cx="38" cy="53" rx="5" ry="7" fill="#c8186a" opacity="0.7" transform="rotate(20 38 53)"/>
  <rect x="7" y="22" width="46" height="17" rx="4" fill="#1166cc"/>
  <rect x="8" y="23" width="44" height="15" rx="3" fill="none" stroke="#4488ee" stroke-width="0.8"/>
  <text x="30" y="33.5" text-anchor="middle" font-size="10" fill="white" font-family="serif" font-weight="bold">牡丹</text>
</svg>`,

// [17] 6월 피 — 모란 단순
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#081808"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#1a401a" stroke-width="1"/>
  <ellipse cx="30" cy="68" rx="22" ry="20" fill="#0a200a"/>
  <ellipse cx="30" cy="65" rx="16" ry="16" fill="#0e2a0e"/>
  <circle cx="30" cy="58" r="13" fill="#9a1050" opacity="0.85"/>
  <circle cx="30" cy="58" r="9" fill="#c01868"/>
  <circle cx="30" cy="58" r="5" fill="#d83080"/>
  <circle cx="30" cy="58" r="2.5" fill="#f0c0d8"/>
  <ellipse cx="22" cy="50" rx="4.5" ry="7" fill="#9a1050" opacity="0.65" transform="rotate(-20 22 50)"/>
  <ellipse cx="38" cy="48" rx="4.5" ry="7" fill="#9a1050" opacity="0.65" transform="rotate(20 38 48)"/>
  <circle cx="18" cy="25" r="5" fill="#9a1050" opacity="0.7"/>
  <circle cx="30" cy="20" r="6" fill="#c01868" opacity="0.75"/>
  <circle cx="42" cy="25" r="5" fill="#9a1050" opacity="0.7"/>
</svg>`,

// ══════════════════════════════
// 7월 홍싸리
// ══════════════════════════════

// [18] 7월 열끗 — 멧돼지 (홍싸리 + 멧돼지)
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#1e0808"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#c8a84b" stroke-width="1.5"/>
  <path d="M5 88 Q12 75 15 60 Q17 48 14 38" stroke="#3a1818" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M20 88 Q25 72 26 58 Q27 46 24 35" stroke="#3a1818" stroke-width="2.5" fill="none"/>
  <path d="M35 88 Q38 72 38 58 Q38 46 36 35" stroke="#3a1818" stroke-width="2.5" fill="none"/>
  <path d="M50 88 Q52 74 50 60 Q49 50 48 40" stroke="#3a1818" stroke-width="2.5" fill="none"/>
  <circle cx="14" cy="36" r="5" fill="#d06080" opacity="0.85"/>
  <circle cx="10" cy="30" r="4" fill="#e07090"/>
  <circle cx="18" cy="32" r="4" fill="#d06080"/>
  <circle cx="25" cy="33" r="4.5" fill="#d06080" opacity="0.8"/>
  <circle cx="36" cy="32" r="4.5" fill="#e07090" opacity="0.8"/>
  <circle cx="48" cy="38" r="4" fill="#d06080" opacity="0.8"/>
  <circle cx="14" cy="36" r="2" fill="#ffe0ea"/>
  <circle cx="25" cy="33" r="2" fill="#ffe0ea"/>
  <circle cx="36" cy="32" r="2" fill="#ffe0ea"/>
  <ellipse cx="22" cy="62" rx="16" ry="9" fill="#4a2808"/>
  <ellipse cx="26" cy="60" rx="12" ry="7" fill="#5a3010"/>
  <circle cx="34" cy="57" r="7" fill="#4a2808"/>
  <ellipse cx="18" cy="61" rx="7" ry="5" fill="#3a2008"/>
  <path d="M34 52 L38 46 L36 52Z" fill="#3a2008"/>
  <circle cx="14" cy="60" r="1.5" fill="#cc0000" opacity="0.8"/>
  <path d="M34 58 L38 58" stroke="#cc0000" stroke-width="1.2" stroke-linecap="round"/>
</svg>`,

// [19] 7월 띠 — (홍싸리 + 띠)
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#1e0808"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#c8a84b" stroke-width="1.5"/>
  <path d="M8 88 Q13 72 15 58 Q16 48 14 40" stroke="#3a1818" stroke-width="3" fill="none"/>
  <path d="M22 88 Q26 72 27 58 Q28 48 26 40" stroke="#3a1818" stroke-width="2.5" fill="none"/>
  <path d="M38 88 Q40 72 40 58 Q40 48 38 42" stroke="#3a1818" stroke-width="2.5" fill="none"/>
  <path d="M52 88 Q53 74 52 62 Q51 52 50 44" stroke="#3a1818" stroke-width="2.5" fill="none"/>
  <circle cx="14" cy="38" r="4.5" fill="#d06080" opacity="0.8"/>
  <circle cx="10" cy="32" r="3.5" fill="#e07090" opacity="0.75"/>
  <circle cx="26" cy="38" r="4" fill="#d06080" opacity="0.8"/>
  <circle cx="38" cy="40" r="4" fill="#e07090" opacity="0.75"/>
  <circle cx="50" cy="42" r="3.5" fill="#d06080" opacity="0.75"/>
  <rect x="7" y="22" width="46" height="17" rx="4" fill="#cc1111"/>
  <rect x="8" y="23" width="44" height="15" rx="3" fill="none" stroke="#ff5533" stroke-width="0.8"/>
  <text x="30" y="33.5" text-anchor="middle" font-size="10" fill="white" font-family="serif" font-weight="bold">萩</text>
</svg>`,

// [20] 7월 피 — 홍싸리 단순
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#1e0808"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#501818" stroke-width="1"/>
  <path d="M10 88 Q14 70 15 55 Q16 44 14 34" stroke="#3a1818" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M28 88 Q30 70 30 55 Q30 44 28 34" stroke="#3a1818" stroke-width="2.5" fill="none"/>
  <path d="M46 88 Q48 72 47 58 Q47 48 46 38" stroke="#3a1818" stroke-width="2.5" fill="none"/>
  <circle cx="14" cy="32" r="4" fill="#a04060" opacity="0.8"/>
  <circle cx="9" cy="26" r="3.5" fill="#b05070" opacity="0.75"/>
  <circle cx="28" cy="32" r="4" fill="#a04060" opacity="0.8"/>
  <circle cx="23" cy="26" r="3.5" fill="#b05070" opacity="0.75"/>
  <circle cx="46" cy="36" r="4" fill="#a04060" opacity="0.75"/>
  <circle cx="51" cy="30" r="3.5" fill="#b05070" opacity="0.7"/>
  <circle cx="14" cy="32" r="1.5" fill="#ffc8d8" opacity="0.9"/>
  <circle cx="28" cy="32" r="1.5" fill="#ffc8d8" opacity="0.9"/>
  <circle cx="46" cy="36" r="1.5" fill="#ffc8d8" opacity="0.9"/>
</svg>`,

// ══════════════════════════════
// 8월 공산 (억새/芒)
// ══════════════════════════════

// [21] 8월 광 — 공산광 (보름달 + 억새)
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#060606"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#c8a84b" stroke-width="1.5"/>
  <circle cx="30" cy="28" r="20" fill="#f8e88a" opacity="0.95"/>
  <circle cx="30" cy="28" r="18" fill="#fdf4b0"/>
  <circle cx="26" cy="24" r="4" fill="#f0e090" opacity="0.5"/>
  <circle cx="34" cy="32" r="3" fill="#f0e090" opacity="0.4"/>
  <path d="M5 85 Q10 72 12 62 Q14 54 12 46 Q14 40 10 35" stroke="#786040" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M18 88 Q22 74 22 64 Q23 55 20 48 Q22 42 18 36" stroke="#786040" stroke-width="2.5" fill="none"/>
  <path d="M32 90 Q34 76 33 66 Q33 57 31 50 Q33 44 30 38" stroke="#786040" stroke-width="2" fill="none"/>
  <path d="M44 88 Q46 74 44 64 Q44 55 42 48" stroke="#786040" stroke-width="2" fill="none"/>
  <path d="M55 86 Q55 74 53 64 Q53 56 51 50" stroke="#786040" stroke-width="2" fill="none"/>
  <path d="M10 35 Q6 28 8 22" stroke="#786040" stroke-width="1.8" fill="none"/>
  <path d="M18 36 Q14 28 16 22" stroke="#786040" stroke-width="1.8" fill="none"/>
  <path d="M30 38 Q27 30 29 24" stroke="#786040" stroke-width="1.5" fill="none"/>
  <path d="M42 48 Q40 42 42 38" stroke="#786040" stroke-width="1.5" fill="none"/>
  <circle cx="11" cy="10" r="6" fill="#c8a84b"/>
  <text x="11" y="13.5" text-anchor="middle" font-size="7" font-weight="bold" fill="#1a0a00" font-family="serif">光</text>
</svg>`,

// [22] 8월 열끗 — 기러기 (억새 + 기러기 3마리)
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#060606"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#c8a84b" stroke-width="1.5"/>
  <circle cx="44" cy="22" r="12" fill="#f8e888" opacity="0.8"/>
  <circle cx="44" cy="22" r="10" fill="#fdf4a8" opacity="0.6"/>
  <path d="M8 36 Q14 30 20 33" stroke="#a0a0a0" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <ellipse cx="14" cy="31" rx="5" ry="3" fill="#c0c0c0" transform="rotate(-15 14 31)"/>
  <path d="M18 26 Q24 20 30 23" stroke="#a0a0a0" stroke-width="2" fill="none" stroke-linecap="round"/>
  <ellipse cx="24" cy="21" rx="4.5" ry="2.5" fill="#c0c0c0" transform="rotate(-15 24 21)"/>
  <path d="M26 19 Q32 13 38 16" stroke="#a0a0a0" stroke-width="2" fill="none" stroke-linecap="round"/>
  <ellipse cx="32" cy="14" rx="4" ry="2.5" fill="#c0c0c0" transform="rotate(-15 32 14)"/>
  <path d="M5 88 Q10 74 12 62 Q14 53 12 45 Q14 39 10 33" stroke="#786040" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M20 90 Q24 76 24 65 Q25 56 22 49 Q24 43 20 36" stroke="#786040" stroke-width="2.5" fill="none"/>
  <path d="M34 90 Q36 78 35 68 Q35 59 33 52" stroke="#786040" stroke-width="2" fill="none"/>
  <path d="M46 88 Q48 76 47 66 Q47 58 45 51" stroke="#786040" stroke-width="2" fill="none"/>
  <path d="M10 33 Q7 26 8 20" stroke="#786040" stroke-width="1.8" fill="none"/>
  <path d="M20 36 Q17 28 19 22" stroke="#786040" stroke-width="1.8" fill="none"/>
</svg>`,

// [23] 8월 피 — 억새 단순
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#060606"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#303030" stroke-width="1"/>
  <circle cx="30" cy="25" r="10" fill="#f8e888" opacity="0.4"/>
  <path d="M8 88 Q12 72 13 60 Q14 50 12 42 Q14 36 10 30" stroke="#5c4a28" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M20 90 Q23 74 23 63 Q23 53 21 46" stroke="#5c4a28" stroke-width="2.5" fill="none"/>
  <path d="M32 90 Q34 76 33 66 Q33 57 31 50" stroke="#5c4a28" stroke-width="2" fill="none"/>
  <path d="M44 88 Q46 74 44 64 Q44 56 43 48" stroke="#5c4a28" stroke-width="2" fill="none"/>
  <path d="M56 86 Q56 74 55 64 Q55 56 54 50" stroke="#5c4a28" stroke-width="2" fill="none"/>
  <path d="M10 30 Q7 23 9 18" stroke="#5c4a28" stroke-width="1.5" fill="none"/>
  <path d="M21 46 Q19 38 21 32" stroke="#5c4a28" stroke-width="1.5" fill="none"/>
  <path d="M31 50 Q29 42 31 36" stroke="#5c4a28" stroke-width="1.5" fill="none"/>
  <path d="M43 48 Q41 42 43 38" stroke="#5c4a28" stroke-width="1.5" fill="none"/>
</svg>`,

// ══════════════════════════════
// 9월 국화
// ══════════════════════════════

// [24] 9월 열끗 — 술잔 (국화 + 술잔)
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#080c1e"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#c8a84b" stroke-width="1.5"/>
  <circle cx="18" cy="65" r="16" fill="#0a1228"/>
  <circle cx="18" cy="65" r="12" fill="#0c1832"/>
  <g transform="translate(18 65)">
    <line x1="0" y1="-10" x2="0" y2="10" stroke="#d4a020" stroke-width="1.5"/>
    <line x1="-10" y1="0" x2="10" y2="0" stroke="#d4a020" stroke-width="1.5"/>
    <line x1="-7" y1="-7" x2="7" y2="7" stroke="#d4a020" stroke-width="1.2"/>
    <line x1="7" y1="-7" x2="-7" y2="7" stroke="#d4a020" stroke-width="1.2"/>
    <line x1="-4" y1="-9" x2="4" y2="9" stroke="#e8b828" stroke-width="1"/>
    <line x1="4" y1="-9" x2="-4" y2="9" stroke="#e8b828" stroke-width="1"/>
    <line x1="-9" y1="-4" x2="9" y2="4" stroke="#e8b828" stroke-width="1"/>
    <line x1="9" y1="-4" x2="-9" y2="4" stroke="#e8b828" stroke-width="1"/>
    <circle r="4" fill="#f0c020"/>
    <circle r="2" fill="#fff0a0"/>
  </g>
  <circle cx="44" cy="36" r="12" fill="#0a1228"/>
  <circle cx="44" cy="36" r="9" fill="#0c1832"/>
  <g transform="translate(44 36)">
    <line x1="0" y1="-7" x2="0" y2="7" stroke="#d4a020" stroke-width="1.3"/>
    <line x1="-7" y1="0" x2="7" y2="0" stroke="#d4a020" stroke-width="1.3"/>
    <line x1="-5" y1="-5" x2="5" y2="5" stroke="#d4a020" stroke-width="1"/>
    <line x1="5" y1="-5" x2="-5" y2="5" stroke="#d4a020" stroke-width="1"/>
    <line x1="-3" y1="-6" x2="3" y2="6" stroke="#e8b828" stroke-width="0.9"/>
    <line x1="3" y1="-6" x2="-3" y2="6" stroke="#e8b828" stroke-width="0.9"/>
    <circle r="3" fill="#f0c020"/>
    <circle r="1.5" fill="#fff0a0"/>
  </g>
  <path d="M36 58 Q34 62 36 66 L44 66 Q46 62 44 58Z" fill="#c89820"/>
  <path d="M30 66 L50 66" stroke="#a07818" stroke-width="2" stroke-linecap="round"/>
  <rect x="38" y="66" width="4" height="6" rx="1" fill="#c89820"/>
  <rect x="34" y="72" width="12" height="2.5" rx="1" fill="#a07818"/>
</svg>`,

// [25] 9월 띠 — 청단 (국화 + 파란 띠)
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#080c1e"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#c8a84b" stroke-width="1.5"/>
  <circle cx="16" cy="65" r="14" fill="#0a1228"/>
  <circle cx="16" cy="65" r="10" fill="#0c1832"/>
  <g transform="translate(16 65)">
    <line x1="0" y1="-8" x2="0" y2="8" stroke="#d4a020" stroke-width="1.3"/>
    <line x1="-8" y1="0" x2="8" y2="0" stroke="#d4a020" stroke-width="1.3"/>
    <line x1="-6" y1="-6" x2="6" y2="6" stroke="#d4a020" stroke-width="1"/>
    <line x1="6" y1="-6" x2="-6" y2="6" stroke="#d4a020" stroke-width="1"/>
    <line x1="-3" y1="-7" x2="3" y2="7" stroke="#e8b828" stroke-width="0.9"/>
    <line x1="3" y1="-7" x2="-3" y2="7" stroke="#e8b828" stroke-width="0.9"/>
    <circle r="3.5" fill="#f0c020"/>
    <circle r="1.8" fill="#fff0a0"/>
  </g>
  <circle cx="44" cy="62" r="14" fill="#0a1228"/>
  <circle cx="44" cy="62" r="10" fill="#0c1832"/>
  <g transform="translate(44 62)">
    <line x1="0" y1="-8" x2="0" y2="8" stroke="#d4a020" stroke-width="1.3"/>
    <line x1="-8" y1="0" x2="8" y2="0" stroke="#d4a020" stroke-width="1.3"/>
    <line x1="-6" y1="-6" x2="6" y2="6" stroke="#d4a020" stroke-width="1"/>
    <line x1="6" y1="-6" x2="-6" y2="6" stroke="#d4a020" stroke-width="1"/>
    <circle r="3.5" fill="#f0c020"/>
    <circle r="1.8" fill="#fff0a0"/>
  </g>
  <rect x="7" y="22" width="46" height="17" rx="4" fill="#1166cc"/>
  <rect x="8" y="23" width="44" height="15" rx="3" fill="none" stroke="#4488ee" stroke-width="0.8"/>
  <text x="30" y="33.5" text-anchor="middle" font-size="10" fill="white" font-family="serif" font-weight="bold">菊</text>
</svg>`,

// [26] 9월 피 — 국화 단순
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#080c1e"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#202448" stroke-width="1"/>
  <circle cx="20" cy="58" r="16" fill="#090d22"/>
  <circle cx="20" cy="58" r="12" fill="#0b1228"/>
  <g transform="translate(20 58)">
    <line x1="0" y1="-10" x2="0" y2="10" stroke="#a07810" stroke-width="1.5"/>
    <line x1="-10" y1="0" x2="10" y2="0" stroke="#a07810" stroke-width="1.5"/>
    <line x1="-7" y1="-7" x2="7" y2="7" stroke="#a07810" stroke-width="1.2"/>
    <line x1="7" y1="-7" x2="-7" y2="7" stroke="#a07810" stroke-width="1.2"/>
    <circle r="3.5" fill="#c09018"/>
    <circle r="1.8" fill="#e0c040"/>
  </g>
  <circle cx="42" cy="38" r="12" fill="#090d22"/>
  <circle cx="42" cy="38" r="9" fill="#0b1228"/>
  <g transform="translate(42 38)">
    <line x1="0" y1="-7" x2="0" y2="7" stroke="#a07810" stroke-width="1.3"/>
    <line x1="-7" y1="0" x2="7" y2="0" stroke="#a07810" stroke-width="1.3"/>
    <line x1="-5" y1="-5" x2="5" y2="5" stroke="#a07810" stroke-width="1"/>
    <line x1="5" y1="-5" x2="-5" y2="5" stroke="#a07810" stroke-width="1"/>
    <circle r="3" fill="#c09018"/>
    <circle r="1.5" fill="#e0c040"/>
  </g>
</svg>`,

// ══════════════════════════════
// 10월 단풍
// ══════════════════════════════

// [27] 10월 열끗 — 사슴 (단풍 + 사슴)
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#1e0a04"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#c8a84b" stroke-width="1.5"/>
  <path d="M8 50 Q14 42 12 34 L10 28 Q14 22 18 26 Q20 18 24 22 Q22 28 20 32 Q26 28 28 22 Q32 26 30 32 Q28 38 22 42" stroke="#cc4400" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8 50 Q12 56 18 54 Q22 60 16 62 Q14 68 12 74 Q8 74 10 80" stroke="#cc4400" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M18 54 Q22 52 26 56 Q28 62 24 68 Q22 74 24 80" stroke="#cc4400" stroke-width="2" fill="none" stroke-linecap="round"/>
  <path d="M12 74 L8 80" stroke="#cc4400" stroke-width="2" stroke-linecap="round"/>
  <circle cx="8" cy="50" r="4" fill="#8a2800"/>
  <circle cx="10" cy="48" r="1.5" fill="#1a0a00"/>
  <path d="M6 47 Q4 44 6 42" stroke="#8a2800" stroke-width="1.5" fill="none"/>
  <path d="M10 45 Q11 42 14 42" stroke="#8a2800" stroke-width="1.2" fill="none"/>
  <path d="M35 25 Q28 22 22 25 Q18 32 22 36 Q28 34 35 30" fill="#e05010" opacity="0.85"/>
  <path d="M50 20 Q42 17 36 22 Q32 28 36 32 Q42 30 50 26" fill="#e06020" opacity="0.8"/>
  <path d="M55 35 Q48 32 42 37 Q38 43 43 46 Q49 44 56 40" fill="#cc4000" opacity="0.8"/>
  <path d="M30 50 Q22 48 16 53 Q13 60 18 64 Q24 62 32 56" fill="#e05010" opacity="0.75"/>
  <path d="M50 52 Q44 49 38 55 Q36 62 42 65 Q48 63 54 57" fill="#dd4808" opacity="0.75"/>
  <path d="M38 70 Q30 68 24 74 Q22 80 28 84 Q35 82 42 76" fill="#cc4000" opacity="0.7"/>
</svg>`,

// [28] 10월 띠 — 청단 (단풍 + 파란 띠)
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#1e0a04"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#c8a84b" stroke-width="1.5"/>
  <path d="M32 55 Q24 52 18 57 Q15 64 20 68 Q26 66 34 60" fill="#e05010" opacity="0.85"/>
  <path d="M50 50 Q43 47 37 53 Q34 60 40 64 Q46 62 52 56" fill="#cc4000" opacity="0.8"/>
  <path d="M20 70 Q13 68 8 74 Q6 80 12 84 Q18 82 24 76" fill="#e05010" opacity="0.8"/>
  <path d="M44 70 Q37 68 32 74 Q30 80 36 84 Q42 82 48 76" fill="#cc4000" opacity="0.75"/>
  <rect x="7" y="22" width="46" height="17" rx="4" fill="#1166cc"/>
  <rect x="8" y="23" width="44" height="15" rx="3" fill="none" stroke="#4488ee" stroke-width="0.8"/>
  <text x="30" y="33.5" text-anchor="middle" font-size="10" fill="white" font-family="serif" font-weight="bold">紅葉</text>
</svg>`,

// [29] 10월 피 — 단풍 단순
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#1e0a04"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#602010" stroke-width="1"/>
  <path d="M28 32 Q20 28 14 33 Q11 40 16 44 Q23 42 30 36" fill="#c03c00" opacity="0.85"/>
  <path d="M46 28 Q38 24 32 30 Q29 38 35 42 Q42 40 49 34" fill="#d04800" opacity="0.8"/>
  <path d="M14 48 Q8 45 4 51 Q2 58 8 62 Q14 60 18 54" fill="#c03c00" opacity="0.8"/>
  <path d="M38 50 Q30 47 24 53 Q22 60 28 64 Q35 62 42 56" fill="#c03c00" opacity="0.8"/>
  <path d="M54 48 Q48 46 44 52 Q42 59 48 62 Q54 60 57 54" fill="#d04800" opacity="0.75"/>
  <path d="M20 66 Q13 64 9 70 Q8 77 14 80 Q20 78 24 72" fill="#b83800" opacity="0.75"/>
  <path d="M44 68 Q36 66 30 72 Q28 79 35 82 Q42 80 48 74" fill="#c03c00" opacity="0.7"/>
</svg>`,

// ══════════════════════════════
// 11월 오동
// ══════════════════════════════

// [30] 11월 광 — 오동광 (오동 + 봉황)
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#100818"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#c8a84b" stroke-width="1.5"/>
  <ellipse cx="15" cy="70" rx="13" ry="18" fill="#1a0a28" opacity="0.8"/>
  <ellipse cx="30" cy="72" rx="15" ry="16" fill="#200c30" opacity="0.85"/>
  <ellipse cx="46" cy="68" rx="13" ry="18" fill="#1a0a28" opacity="0.8"/>
  <circle cx="15" cy="68" r="6" fill="#9030d0" opacity="0.7"/>
  <circle cx="30" cy="70" r="7" fill="#a040e0" opacity="0.75"/>
  <circle cx="46" cy="66" r="6" fill="#9030d0" opacity="0.7"/>
  <ellipse cx="30" cy="38" rx="12" ry="8" fill="#d4a020" transform="rotate(-10 30 38)"/>
  <ellipse cx="30" cy="38" rx="8" ry="5" fill="#e8c030"/>
  <path d="M24 34 Q18 26 22 18 Q28 14 30 20 Q32 14 38 18 Q42 26 36 34" fill="#e8b820"/>
  <path d="M30 20 L30 36" stroke="#c89010" stroke-width="2"/>
  <circle cx="30" cy="20" r="3" fill="#f0d040"/>
  <path d="M22 18 Q14 12 10 18" stroke="#c89010" stroke-width="1.5" fill="none"/>
  <path d="M38 18 Q46 12 50 18" stroke="#c89010" stroke-width="1.5" fill="none"/>
  <path d="M18 36 Q10 42 8 52" stroke="#d4a020" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M42 36 Q50 42 52 52" stroke="#d4a020" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <path d="M20 52 Q14 56 12 64" stroke="#c89010" stroke-width="2" fill="none"/>
  <path d="M40 52 Q46 56 48 64" stroke="#c89010" stroke-width="2" fill="none"/>
  <circle cx="11" cy="10" r="6" fill="#c8a84b"/>
  <text x="11" y="13.5" text-anchor="middle" font-size="7" font-weight="bold" fill="#1a0a00" font-family="serif">光</text>
</svg>`,

// [31] 11월 피 — 오동 단순 (×3개에 공용)
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#100818"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#382848" stroke-width="1"/>
  <ellipse cx="14" cy="68" rx="12" ry="17" fill="#160920" opacity="0.8"/>
  <ellipse cx="30" cy="70" rx="14" ry="18" fill="#1a0c28" opacity="0.85"/>
  <ellipse cx="46" cy="67" rx="12" ry="17" fill="#160920" opacity="0.8"/>
  <circle cx="14" cy="66" r="5.5" fill="#6020a0" opacity="0.65"/>
  <circle cx="30" cy="68" r="6" fill="#7028b0" opacity="0.7"/>
  <circle cx="46" cy="64" r="5.5" fill="#6020a0" opacity="0.65"/>
  <circle cx="14" cy="42" r="5" fill="#6020a0" opacity="0.55"/>
  <circle cx="30" cy="40" r="5.5" fill="#7028b0" opacity="0.6"/>
  <circle cx="46" cy="42" r="5" fill="#6020a0" opacity="0.55"/>
  <rect x="12" y="24" width="6" height="28" rx="3" fill="#401860" opacity="0.6"/>
  <rect x="27" y="20" width="6" height="32" rx="3" fill="#401860" opacity="0.65"/>
  <rect x="42" y="24" width="6" height="28" rx="3" fill="#401860" opacity="0.6"/>
</svg>`,

// ══════════════════════════════
// 12월 비 (버드나무/柳)
// ══════════════════════════════

// [32] 12월 광 — 비광 (비 + 우산 + 개구리)
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#060c16"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#c8a84b" stroke-width="1.5"/>
  <line x1="8" y1="5" x2="6" y2="88" stroke="#4080b0" stroke-width="0.8" stroke-opacity="0.7"/>
  <line x1="16" y1="5" x2="14" y2="88" stroke="#4080b0" stroke-width="0.8" stroke-opacity="0.6"/>
  <line x1="24" y1="5" x2="22" y2="88" stroke="#3070a0" stroke-width="0.8" stroke-opacity="0.7"/>
  <line x1="32" y1="5" x2="30" y2="88" stroke="#4080b0" stroke-width="0.8" stroke-opacity="0.6"/>
  <line x1="40" y1="5" x2="38" y2="88" stroke="#3070a0" stroke-width="0.8" stroke-opacity="0.7"/>
  <line x1="48" y1="5" x2="46" y2="88" stroke="#4080b0" stroke-width="0.8" stroke-opacity="0.6"/>
  <line x1="56" y1="5" x2="54" y2="88" stroke="#3070a0" stroke-width="0.8" stroke-opacity="0.7"/>
  <path d="M28 36 Q38 22 48 24" stroke="#5090c0" stroke-width="1.5" fill="none"/>
  <path d="M28 36 Q28 26 38 24" stroke="#5090c0" stroke-width="1.5" fill="none"/>
  <path d="M28 36 Q20 26 28 24" stroke="#5090c0" stroke-width="1.5" fill="none"/>
  <ellipse cx="36" cy="28" rx="16" ry="6" fill="#3a6090" opacity="0.85"/>
  <ellipse cx="36" cy="28" rx="14" ry="4.5" fill="#4a70a0"/>
  <rect x="35" y="34" width="2" height="12" rx="1" fill="#3a5070"/>
  <ellipse cx="28" cy="55" rx="5" ry="3" fill="#2a4a28"/>
  <ellipse cx="26" cy="53" rx="4" ry="2.5" fill="#3a6030"/>
  <circle cx="24" cy="52" r="2" fill="#2a4a28"/>
  <circle cx="31" cy="52" r="2" fill="#2a4a28"/>
  <circle cx="25" cy="50" r="1.5" fill="#ffd040"/>
  <circle cx="30" cy="50" r="1.5" fill="#ffd040"/>
  <path d="M22 52 L18 56" stroke="#2a4a28" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M32 52 L36 56" stroke="#2a4a28" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M26 57 L28 62" stroke="#2a4a28" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="11" cy="10" r="6" fill="#c8a84b"/>
  <text x="11" y="13.5" text-anchor="middle" font-size="7" font-weight="bold" fill="#1a0a00" font-family="serif">光</text>
</svg>`,

// [33] 12월 열끗 — 제비 (버드나무 + 제비)
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#060c16"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#c8a84b" stroke-width="1.5"/>
  <line x1="10" y1="5" x2="8" y2="88" stroke="#3070a0" stroke-width="0.8" stroke-opacity="0.6"/>
  <line x1="22" y1="5" x2="20" y2="88" stroke="#3070a0" stroke-width="0.8" stroke-opacity="0.5"/>
  <line x1="34" y1="5" x2="32" y2="88" stroke="#3070a0" stroke-width="0.8" stroke-opacity="0.6"/>
  <line x1="46" y1="5" x2="44" y2="88" stroke="#3070a0" stroke-width="0.8" stroke-opacity="0.5"/>
  <line x1="56" y1="5" x2="54" y2="88" stroke="#3070a0" stroke-width="0.8" stroke-opacity="0.5"/>
  <path d="M48 8 Q44 15 40 12 Q36 8 34 14 Q30 10 28 16" stroke="#4a7a4a" stroke-width="2" fill="none"/>
  <path d="M28 16 Q24 22 26 28 Q22 34 24 40" stroke="#4a7a4a" stroke-width="2" fill="none"/>
  <path d="M40 12 Q44 20 42 28 Q44 36 40 44" stroke="#4a7a4a" stroke-width="1.5" fill="none"/>
  <path d="M24 40 Q20 50 22 60 Q18 68 20 78" stroke="#4a7a4a" stroke-width="1.5" fill="none"/>
  <path d="M40 44 Q38 54 36 64 Q34 74 36 84" stroke="#4a7a4a" stroke-width="1.5" fill="none"/>
  <ellipse cx="20" cy="32" rx="9" ry="4" fill="#1a1a30" transform="rotate(-30 20 32)"/>
  <circle cx="16" cy="28" r="4.5" fill="#202040"/>
  <path d="M12 29 L4 24 L8 30Z" fill="#1a1a30"/>
  <path d="M20 29 L28 24 L24 30Z" fill="#1a1a30"/>
  <circle cx="14" cy="27" r="1.2" fill="#e0e8ff"/>
  <path d="M16 31 L14 38 L18 38Z" fill="#1a1a30"/>
</svg>`,

// [34] 12월 피 — 비 단순
`<svg viewBox="0 0 60 90" xmlns="http://www.w3.org/2000/svg">
  <rect width="60" height="90" rx="5" fill="#060c16"/>
  <rect x="1.5" y="1.5" width="57" height="87" rx="4" fill="none" stroke="#182030" stroke-width="1"/>
  <line x1="8" y1="5" x2="6" y2="88" stroke="#285880" stroke-width="0.8" stroke-opacity="0.6"/>
  <line x1="18" y1="5" x2="16" y2="88" stroke="#285880" stroke-width="0.8" stroke-opacity="0.5"/>
  <line x1="28" y1="5" x2="26" y2="88" stroke="#285880" stroke-width="0.8" stroke-opacity="0.6"/>
  <line x1="38" y1="5" x2="36" y2="88" stroke="#285880" stroke-width="0.8" stroke-opacity="0.5"/>
  <line x1="48" y1="5" x2="46" y2="88" stroke="#285880" stroke-width="0.8" stroke-opacity="0.6"/>
  <path d="M50 8 Q46 16 42 12 Q38 8 36 16 Q32 12 30 20" stroke="#3a6038" stroke-width="2" fill="none"/>
  <path d="M30 20 Q26 28 28 36 Q24 44 26 54" stroke="#3a6038" stroke-width="1.8" fill="none"/>
  <path d="M42 12 Q46 22 44 32 Q46 42 42 52" stroke="#3a6038" stroke-width="1.5" fill="none"/>
  <path d="M26 54 Q22 64 24 74 Q20 82 22 88" stroke="#3a6038" stroke-width="1.5" fill="none"/>
  <path d="M42 52 Q40 62 38 72 Q36 80 38 88" stroke="#3a6038" stroke-width="1.5" fill="none"/>
</svg>`,

]; // CARD_SVGS 끝


// ══════════════════════════════════════════════════════════════
// 화투 48장 데이터 (svgIdx → 위 CARD_SVGS 인덱스)
// ══════════════════════════════════════════════════════════════
const HWATU_48 = [
  // 1월 소나무
  { id:0,  svgIdx:0,  month:1,  name:'소나무', type:'gwang',  typeName:'학광',   power:4, bg:'linear-gradient(160deg,#071a04,#0e2e0a)', accent:'#b0ff80' },
  { id:1,  svgIdx:1,  month:1,  name:'소나무', type:'ribbon', typeName:'홍단',   power:2, bg:'linear-gradient(160deg,#071a04,#0e2e0a)', accent:'#ff8080' },
  { id:2,  svgIdx:2,  month:1,  name:'소나무', type:'pi',     typeName:'피',     power:1, bg:'linear-gradient(160deg,#071a04,#0e2e0a)', accent:'#80c880' },
  { id:3,  svgIdx:2,  month:1,  name:'소나무', type:'pi',     typeName:'피',     power:1, bg:'linear-gradient(160deg,#071a04,#0e2e0a)', accent:'#80c880' },
  // 2월 매화
  { id:4,  svgIdx:3,  month:2,  name:'매화',   type:'yul',    typeName:'꾀꼬리', power:3, bg:'linear-gradient(160deg,#1a0410,#2a0820)', accent:'#ff90b0' },
  { id:5,  svgIdx:4,  month:2,  name:'매화',   type:'ribbon', typeName:'홍단',   power:2, bg:'linear-gradient(160deg,#1a0410,#2a0820)', accent:'#ff8090' },
  { id:6,  svgIdx:5,  month:2,  name:'매화',   type:'pi',     typeName:'피',     power:1, bg:'linear-gradient(160deg,#1a0410,#2a0820)', accent:'#e080a0' },
  { id:7,  svgIdx:5,  month:2,  name:'매화',   type:'pi',     typeName:'피',     power:1, bg:'linear-gradient(160deg,#1a0410,#2a0820)', accent:'#e080a0' },
  // 3월 벚꽃
  { id:8,  svgIdx:6,  month:3,  name:'벚꽃',   type:'gwang',  typeName:'벚꽃광', power:4, bg:'linear-gradient(160deg,#140a18,#220e28)', accent:'#ffb0d0' },
  { id:9,  svgIdx:7,  month:3,  name:'벚꽃',   type:'ribbon', typeName:'홍단',   power:2, bg:'linear-gradient(160deg,#140a18,#220e28)', accent:'#ff90c0' },
  { id:10, svgIdx:8,  month:3,  name:'벚꽃',   type:'pi',     typeName:'피',     power:1, bg:'linear-gradient(160deg,#140a18,#220e28)', accent:'#e090b8' },
  { id:11, svgIdx:8,  month:3,  name:'벚꽃',   type:'pi',     typeName:'피',     power:1, bg:'linear-gradient(160deg,#140a18,#220e28)', accent:'#e090b8' },
  // 4월 흑싸리
  { id:12, svgIdx:9,  month:4,  name:'흑싸리', type:'yul',    typeName:'두견새', power:3, bg:'linear-gradient(160deg,#0c0820,#180c38)', accent:'#a080e0' },
  { id:13, svgIdx:10, month:4,  name:'흑싸리', type:'ribbon', typeName:'초단',   power:2, bg:'linear-gradient(160deg,#0c0820,#180c38)', accent:'#9070c8' },
  { id:14, svgIdx:11, month:4,  name:'흑싸리', type:'pi',     typeName:'피',     power:1, bg:'linear-gradient(160deg,#0c0820,#180c38)', accent:'#7858a8' },
  { id:15, svgIdx:11, month:4,  name:'흑싸리', type:'pi',     typeName:'피',     power:1, bg:'linear-gradient(160deg,#0c0820,#180c38)', accent:'#7858a8' },
  // 5월 난초
  { id:16, svgIdx:12, month:5,  name:'난초',   type:'yul',    typeName:'파랑새', power:3, bg:'linear-gradient(160deg,#080c20,#0e1438)', accent:'#8090f0' },
  { id:17, svgIdx:13, month:5,  name:'난초',   type:'ribbon', typeName:'초단',   power:2, bg:'linear-gradient(160deg,#080c20,#0e1438)', accent:'#7080d8' },
  { id:18, svgIdx:14, month:5,  name:'난초',   type:'pi',     typeName:'피',     power:1, bg:'linear-gradient(160deg,#080c20,#0e1438)', accent:'#6070c0' },
  { id:19, svgIdx:14, month:5,  name:'난초',   type:'pi',     typeName:'피',     power:1, bg:'linear-gradient(160deg,#080c20,#0e1438)', accent:'#6070c0' },
  // 6월 모란
  { id:20, svgIdx:15, month:6,  name:'모란',   type:'yul',    typeName:'나비',   power:3, bg:'linear-gradient(160deg,#081808,#0c2810)', accent:'#f060a0' },
  { id:21, svgIdx:16, month:6,  name:'모란',   type:'ribbon', typeName:'청단',   power:2, bg:'linear-gradient(160deg,#081808,#0c2810)', accent:'#5090e0' },
  { id:22, svgIdx:17, month:6,  name:'모란',   type:'pi',     typeName:'피',     power:1, bg:'linear-gradient(160deg,#081808,#0c2810)', accent:'#d05080' },
  { id:23, svgIdx:17, month:6,  name:'모란',   type:'pi',     typeName:'피',     power:1, bg:'linear-gradient(160deg,#081808,#0c2810)', accent:'#d05080' },
  // 7월 홍싸리
  { id:24, svgIdx:18, month:7,  name:'홍싸리', type:'yul',    typeName:'멧돼지', power:3, bg:'linear-gradient(160deg,#1e0808,#300c0c)', accent:'#e07090' },
  { id:25, svgIdx:19, month:7,  name:'홍싸리', type:'ribbon', typeName:'초단',   power:2, bg:'linear-gradient(160deg,#1e0808,#300c0c)', accent:'#d06080' },
  { id:26, svgIdx:20, month:7,  name:'홍싸리', type:'pi',     typeName:'피',     power:1, bg:'linear-gradient(160deg,#1e0808,#300c0c)', accent:'#c05070' },
  { id:27, svgIdx:20, month:7,  name:'홍싸리', type:'pi',     typeName:'피',     power:1, bg:'linear-gradient(160deg,#1e0808,#300c0c)', accent:'#c05070' },
  // 8월 공산
  { id:28, svgIdx:21, month:8,  name:'공산',   type:'gwang',  typeName:'공산광', power:4, bg:'linear-gradient(160deg,#060606,#101010)', accent:'#f8e880' },
  { id:29, svgIdx:22, month:8,  name:'공산',   type:'yul',    typeName:'기러기', power:3, bg:'linear-gradient(160deg,#060606,#101010)', accent:'#c0c0c0' },
  { id:30, svgIdx:23, month:8,  name:'공산',   type:'pi',     typeName:'피',     power:1, bg:'linear-gradient(160deg,#060606,#101010)', accent:'#a09060' },
  { id:31, svgIdx:23, month:8,  name:'공산',   type:'pi',     typeName:'피',     power:1, bg:'linear-gradient(160deg,#060606,#101010)', accent:'#a09060' },
  // 9월 국화
  { id:32, svgIdx:24, month:9,  name:'국화',   type:'yul',    typeName:'술잔',   power:3, bg:'linear-gradient(160deg,#080c1e,#0c1430)', accent:'#f0c020' },
  { id:33, svgIdx:25, month:9,  name:'국화',   type:'ribbon', typeName:'청단',   power:2, bg:'linear-gradient(160deg,#080c1e,#0c1430)', accent:'#4080d0' },
  { id:34, svgIdx:26, month:9,  name:'국화',   type:'pi',     typeName:'피',     power:1, bg:'linear-gradient(160deg,#080c1e,#0c1430)', accent:'#c09018' },
  { id:35, svgIdx:26, month:9,  name:'국화',   type:'pi',     typeName:'피',     power:1, bg:'linear-gradient(160deg,#080c1e,#0c1430)', accent:'#c09018' },
  // 10월 단풍
  { id:36, svgIdx:27, month:10, name:'단풍',   type:'yul',    typeName:'사슴',   power:3, bg:'linear-gradient(160deg,#1e0a04,#300e06)', accent:'#e05010' },
  { id:37, svgIdx:28, month:10, name:'단풍',   type:'ribbon', typeName:'청단',   power:2, bg:'linear-gradient(160deg,#1e0a04,#300e06)', accent:'#4080d0' },
  { id:38, svgIdx:29, month:10, name:'단풍',   type:'pi',     typeName:'피',     power:1, bg:'linear-gradient(160deg,#1e0a04,#300e06)', accent:'#c04008' },
  { id:39, svgIdx:29, month:10, name:'단풍',   type:'pi',     typeName:'피',     power:1, bg:'linear-gradient(160deg,#1e0a04,#300e06)', accent:'#c04008' },
  // 11월 오동
  { id:40, svgIdx:30, month:11, name:'오동',   type:'gwang',  typeName:'오동광', power:4, bg:'linear-gradient(160deg,#100818,#181028)', accent:'#d080f0' },
  { id:41, svgIdx:31, month:11, name:'오동',   type:'pi',     typeName:'피',     power:1, bg:'linear-gradient(160deg,#100818,#181028)', accent:'#8040b0' },
  { id:42, svgIdx:31, month:11, name:'오동',   type:'pi',     typeName:'피',     power:1, bg:'linear-gradient(160deg,#100818,#181028)', accent:'#8040b0' },
  { id:43, svgIdx:31, month:11, name:'오동',   type:'pi',     typeName:'피',     power:1, bg:'linear-gradient(160deg,#100818,#181028)', accent:'#8040b0' },
  // 12월 비
  { id:44, svgIdx:32, month:12, name:'비',     type:'gwang',  typeName:'비광',   power:4, bg:'linear-gradient(160deg,#060c16,#0a1220)', accent:'#60a0d8' },
  { id:45, svgIdx:33, month:12, name:'비',     type:'yul',    typeName:'제비',   power:3, bg:'linear-gradient(160deg,#060c16,#0a1220)', accent:'#8090c0' },
  { id:46, svgIdx:34, month:12, name:'비',     type:'pi',     typeName:'피',     power:1, bg:'linear-gradient(160deg,#060c16,#0a1220)', accent:'#5080a8' },
  { id:47, svgIdx:34, month:12, name:'비',     type:'pi',     typeName:'피',     power:1, bg:'linear-gradient(160deg,#060c16,#0a1220)', accent:'#5080a8' },
];
