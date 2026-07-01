'use strict';

// ── 소리 합성 ──
let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function playCardSlapAt(ctx, when, volume = 0.55) {
  const bufSize = Math.floor(ctx.sampleRate * 0.1);
  const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < bufSize; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.exp(-(i / bufSize) * 28);
  }
  const noise = ctx.createBufferSource();
  noise.buffer = buf;

  const lpf = ctx.createBiquadFilter();
  lpf.type = 'lowpass';
  lpf.frequency.value = 2400;

  const hpf = ctx.createBiquadFilter();
  hpf.type = 'highpass';
  hpf.frequency.value = 180;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(volume, when);
  gain.gain.exponentialRampToValueAtTime(0.001, when + 0.09);

  noise.connect(lpf); lpf.connect(hpf); hpf.connect(gain); gain.connect(ctx.destination);
  noise.start(when);
  noise.stop(when + 0.12);
}

function playTakTakTak() {
  try {
    const ctx = getAudioCtx();
    const now = ctx.currentTime;
    playCardSlapAt(ctx, now,       0.6);
    playCardSlapAt(ctx, now + 0.1, 0.7);
    playCardSlapAt(ctx, now + 0.18, 0.85);
  } catch (e) {}
}

function playCardSlap() {
  try {
    const ctx = getAudioCtx();
    const now = ctx.currentTime;

    // 짝 소리: 노이즈 버스트 + 저역통과 필터 (담요에 치는 소리)
    const bufSize = Math.floor(ctx.sampleRate * 0.12);
    const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufSize; i++) {
      const t = i / bufSize;
      data[i] = (Math.random() * 2 - 1) * Math.exp(-t * 30);
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buf;

    // 담요 느낌: 중저음만 통과
    const lpf = ctx.createBiquadFilter();
    lpf.type = 'lowpass';
    lpf.frequency.value = 2200;
    lpf.Q.value = 0.8;

    const hpf = ctx.createBiquadFilter();
    hpf.type = 'highpass';
    hpf.frequency.value = 150;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.55, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

    noise.connect(lpf);
    lpf.connect(hpf);
    hpf.connect(gain);
    gain.connect(ctx.destination);

    noise.start(now);
    noise.stop(now + 0.15);
  } catch (e) { /* 소리 실패해도 앱은 계속 */ }
}

const USAGE_KEY = 'hwatu_usage';
const FREE_DAILY = 1;
const AD_DAILY = 2;

// HWATU_48은 cards.js에서 로드됨

const QUESTION_TITLES = {
  today:    '오늘의 화투 운세',
  love:     '오늘의 연애 운세',
  money:    '오늘의 재물 운세',
  work:     '오늘의 직업 운세',
  relation: '오늘의 관계 운세',
  worry:    '오늘의 조언',
  '':       '오늘의 화투 운세',
};

let selectedQuestionType = '';

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

function getUsage() {
  try {
    const raw = localStorage.getItem(USAGE_KEY);
    const u = raw ? JSON.parse(raw) : {};
    if (u.date !== getToday()) return { date: getToday(), used: 0, adUsed: 0 };
    return u;
  } catch { return { date: getToday(), used: 0, adUsed: 0 }; }
}

function saveUsage(u) {
  localStorage.setItem(USAGE_KEY, JSON.stringify(u));
}

function getRemainingFree() {
  const u = getUsage();
  return Math.max(0, FREE_DAILY - u.used);
}

function getRemainingAd() {
  const u = getUsage();
  return Math.max(0, AD_DAILY - u.adUsed);
}

function canUseFortune() {
  const u = getUsage();
  const totalAllowed = FREE_DAILY + Math.min(u.adUsed, AD_DAILY);
  return u.used < totalAllowed;
}

function incrementUsage() {
  const u = getUsage();
  u.used = (u.used || 0) + 1;
  saveUsage(u);
}

function incrementAdUsage() {
  const u = getUsage();
  u.adUsed = (u.adUsed || 0) + 1;
  u.used = Math.max(0, u.used - 2);
  saveUsage(u);
}

// ── 화면 전환 ──
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

// ── 짝 맞을 때 추임새 ──
const PAIR_MSGS = ['앗싸~! 짝이다!', '이야~! 맞았어!', '오호~! 같은 달!', '짝! 맞춰부렸어~', '어머나! 짝!'];

function showPairToast() {
  const el = document.createElement('div');
  el.className = 'pair-toast';
  el.textContent = PAIR_MSGS[Math.floor(Math.random() * PAIR_MSGS.length)];
  document.body.appendChild(el);
  setTimeout(() => {
    el.classList.add('pair-toast-fade');
    setTimeout(() => el.remove(), 500);
  }, 1100);
}

// ── 토스트 ──
let toastEl;
function showToast(msg) {
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.className = 'toast';
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastEl._t);
  toastEl._t = setTimeout(() => toastEl.classList.remove('show'), 2200);
}

// ── 홈 화면 ──
function renderHome() {
  const u = getUsage();
  const usageText = document.getElementById('usageText');
  const btnAd = document.getElementById('btnAd');
  const adUsedMsg = document.getElementById('adUsedMsg');

  const freeDone = u.used >= FREE_DAILY;
  const adAvail = getRemainingAd();
  const adBonus = Math.min(u.adUsed, AD_DAILY);
  const totalAllowed = FREE_DAILY + adBonus;
  const remaining = Math.max(0, totalAllowed - u.used);

  if (remaining > 0) {
    usageText.textContent = `오늘 운세 ${remaining}회 남았어요`;
    btnAd.style.display = 'none';
    adUsedMsg.style.display = 'none';
  } else if (adAvail > 0) {
    usageText.textContent = '오늘 무료 운세를 다 봤어요';
    btnAd.style.display = 'block';
    adUsedMsg.style.display = 'none';
  } else {
    usageText.textContent = '오늘은 운세를 다 봤어요 (내일 초기화)';
    btnAd.style.display = 'none';
    adUsedMsg.style.display = 'block';
  }
}

// ── 담요 화면 ──
let flippedUnmatched = []; // 뒤집혔지만 아직 짝 없는 카드들 [{el, cardId}]
let completedPairs = [];   // 완성된 짝 [{cardA, cardB, month}]
let cardEls = [];
let isOrganizing = false;  // 정렬 애니메이션 중 클릭 차단

function playPairMatch() {
  try {
    const ctx = getAudioCtx();
    const now = ctx.currentTime;
    // 짝! 소리: 두 번 탁탁 + 맑은 종소리
    playCardSlapAt(ctx, now, 0.7);
    playCardSlapAt(ctx, now + 0.07, 0.95);
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1047, now + 0.12);
    osc.frequency.exponentialRampToValueAtTime(784, now + 0.45);
    g.gain.setValueAtTime(0.28, now + 0.12);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    osc.connect(g); g.connect(ctx.destination);
    osc.start(now + 0.12); osc.stop(now + 0.55);
  } catch (e) {}
}

function playShuffleSound() {
  try {
    const ctx = getAudioCtx();
    for (let i = 0; i < 10; i++) {
      playCardSlapAt(ctx, ctx.currentTime + i * 0.055, 0.25 + i * 0.02);
    }
  } catch(e) {}
}

function initDamyo() {
  flippedUnmatched = [];
  completedPairs = [];
  cardEls = [];

  const damyo = document.getElementById('damyoArea');
  damyo.querySelectorAll('.hwatu-card').forEach(e => e.remove());
  document.getElementById('deckWrap').style.display = 'flex';
  document.getElementById('hud').style.display = 'none';
  document.getElementById('fortuneBtnWrap').style.display = 'none';
  document.getElementById('deckHint').textContent = '자, 섞어봐';

  const deck = document.getElementById('deckStack');
  deck.onclick = () => doShuffle();
}

function doShuffle() {
  const deck = document.getElementById('deckStack');
  deck.onclick = null; // 중복 방지

  document.getElementById('deckHint').textContent = '섞는 중...';
  playShuffleSound();

  // 뭉치 흔들기 애니메이션
  deck.style.animation = 'deckShake 0.5s ease';

  setTimeout(() => {
    document.getElementById('deckWrap').style.display = 'none';
    scatterCards();
  }, 500);
}

function scatterCards() {
  const damyo = document.getElementById('damyoArea');
  const W = window.innerWidth;
  const H = window.innerHeight;
  const cW = 48, cH = 72;
  const marginTop = 88, marginBottom = 85;

  const shuffled = [...Array(48).keys()].sort(() => Math.random() - 0.5);

  // 1단계: 담요 위에 흩뿌리기 (섞는 느낌)
  shuffled.forEach((cardId, i) => {
    const x = 10 + Math.random() * (W - cW - 20);
    const y = (marginTop - 10) + Math.random() * (H - marginTop - marginBottom - cH + 15);
    const rot = (Math.random() - 0.5) * 38;

    const card = HWATU_48[cardId];
    const gwangBadge = card.type === 'gwang' ? '<div class="gwang-badge">光</div>' : '';

    const el = document.createElement('div');
    el.className = 'hwatu-card';
    el.dataset.idx = cardId;
    el.style.cssText = `left:${x}px;top:${y}px;width:${cW}px;height:${cH}px;transform:rotate(${rot}deg);opacity:0;transition:opacity 0.1s ${i * 0.01}s`;
    el.innerHTML = `
      <div class="card-inner">
        <div class="card-back-face"><span class="card-hanja-back">花</span></div>
        <div class="card-front-face card-type-${card.type}">
          ${CARD_SVGS[card.svgIdx]}
          ${gwangBadge}
          <div class="card-selected-mark">✓</div>
        </div>
      </div>`;

    el.addEventListener('click', () => onCardClick(el, cardId));
    damyo.appendChild(el);
    cardEls.push(el);

    requestAnimationFrame(() => { el.style.opacity = '1'; });
  });

  // 2단계: 잠깐 흩어진 상태 보여주다가 가지런히 정렬
  isOrganizing = true;
  setTimeout(() => organizeCards(), 950);
}

function organizeCards() {
  const W = window.innerWidth;
  const H = window.innerHeight;
  const cW = 48, cH = 72;
  const gap = 3;
  const cols = 6, rows = 8;
  const marginTop = 90, marginBottom = 85;
  const totalW = cols * cW + (cols - 1) * gap; // 303px
  const totalH = rows * cH + (rows - 1) * gap; // 597px
  const startX = Math.floor((W - totalW) / 2);
  const startY = Math.floor(marginTop + Math.max(2, (H - marginTop - marginBottom - totalH) / 2));

  cardEls.forEach((el, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = startX + col * (cW + gap);
    const y = startY + row * (cH + gap);
    const delay = i * 0.005; // 5ms 간격 스태거

    el.style.transition = `left 0.4s cubic-bezier(0.25,0,0.1,1) ${delay}s, top 0.4s cubic-bezier(0.25,0,0.1,1) ${delay}s, transform 0.4s ease ${delay}s`;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.transform = 'rotate(0deg)';
  });

  // 정렬 완료 후: HUD 표시 + transition 초기화 + 클릭 허용
  setTimeout(() => {
    cardEls.forEach(el => { el.style.transition = ''; });
    isOrganizing = false;
    document.getElementById('hud').style.display = 'flex';
    updatePickStatus();
  }, 700);
}

function onCardClick(el, cardId) {
  // 정렬 중이거나 이미 뒤집혔거나 짝 완성된 카드는 무시
  if (isOrganizing) return;
  if (el.classList.contains('flipped') || el.classList.contains('paired')) return;
  // 3쌍 이미 완성됐으면 무시
  if (completedPairs.length >= 3) return;

  // 카드 뒤집기
  el.classList.add('flipped', 'waiting');
  playCardSlap();

  const thisMonth = HWATU_48[cardId].month;

  // 기존 뒤집힌 카드 중 같은 달 찾기
  const matchIdx = flippedUnmatched.findIndex(f => HWATU_48[f.cardId].month === thisMonth && f.cardId !== cardId);

  if (matchIdx !== -1) {
    // ★ 짝 완성! ★
    const matched = flippedUnmatched[matchIdx];
    flippedUnmatched.splice(matchIdx, 1);

    // waiting 제거 + paired 적용 (플립 애니 완료 후)
    setTimeout(() => {
      el.classList.remove('waiting');
      matched.el.classList.remove('waiting');
      el.classList.add('paired');
      matched.el.classList.add('paired');

      completedPairs.push({ cardA: cardId, cardB: matched.cardId, month: thisMonth });
      playPairMatch();
      showPairToast();
      updatePickStatus();

      if (completedPairs.length === 3) {
        playTakTakTak();
        setTimeout(() => {
          document.getElementById('fortuneBtnWrap').style.display = 'block';
        }, 400);
      }
    }, 260);
  } else {
    // 짝 없음 — 대기열에 추가
    flippedUnmatched.push({ el, cardId });
    updatePickStatus();
  }
}

function updatePickStatus() {
  const n = completedPairs.length;
  const countEl = document.getElementById('pickCount');
  const msgEl = document.getElementById('hudMsg');
  const msgs = [
    '한 장씩 뒤집어봐, 짝을 찾아',
    '짝 1쌍! 두 쌍 더!',
    '한 쌍만 더!',
    '3쌍 완성! 운세 볼까?',
  ];
  countEl.textContent = `${n}쌍`;
  if (msgEl) msgEl.textContent = msgs[n] || msgs[0];
}

// ── 운세 요청 ──
async function getFortune() {
  if (completedPairs.length !== 3) return;
  if (!canUseFortune()) {
    showToast('오늘은 운세를 다 봤어요');
    return;
  }

  showScreen('screen-loading');

  try {
    const res = await fetch('/api/fortune', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pairs: completedPairs, questionType: selectedQuestionType }),
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error);

    incrementUsage();
    renderResult(completedPairs, data.fortune, selectedQuestionType);
    showScreen('screen-result');
  } catch (err) {
    showToast(err.message || '오류가 생겼어요. 다시 시도해주세요.');
    showScreen('screen-cards');
  }
}

// ── 결과 화면 ──
function renderResult(pairs, fortuneText, qType) {
  const titleEl = document.getElementById('resultTitle');
  if (titleEl) titleEl.textContent = QUESTION_TITLES[qType] || '오늘의 화투점';
  const container = document.getElementById('resultDrawnCards');
  container.innerHTML = '';
  pairs.forEach(pair => {
    const cA = HWATU_48[pair.cardA];
    const cB = HWATU_48[pair.cardB];
    const main = cA.power >= cB.power ? cA : cB;
    const hasGwang = cA.type === 'gwang' || cB.type === 'gwang';

    const el = document.createElement('div');
    el.className = `result-card result-type-${hasGwang ? 'gwang' : main.type}`;
    el.style.background = main.bg;
    el.style.setProperty('--accent', main.accent);
    el.innerHTML = `
      <div class="result-card-svg">${CARD_SVGS[main.svgIdx]}</div>
      <div class="result-card-overlay">
        <span class="result-pair-badge">짝!</span>
        ${hasGwang ? '<span class="result-gwang-badge">光</span>' : ''}
        <span class="result-typename">${cA.typeName}·${cB.typeName}</span>
        <span class="result-monthname">${main.month}월 ${main.name}</span>
      </div>`;
    container.appendChild(el);
  });

  const body = document.getElementById('fortuneBody');
  body.innerHTML = formatFortune(fortuneText);
}

function formatFortune(text) {
  // 할머니 한마디를 기준으로 본문과 분리
  const marker = '🔮 오늘의 할머니 한마디';
  const idx = text.indexOf(marker);
  if (idx !== -1) {
    const mainRaw = text.slice(0, idx).trim();
    const adviceRaw = text.slice(idx + marker.length).trim();
    const mainHtml = mainRaw.split('\n').filter(l => l.trim()).map(l => `<p>${l}</p>`).join('');
    const adviceHtml = adviceRaw.split('\n').filter(l => l.trim()).map(l => `<p>${l}</p>`).join('');
    return `${mainHtml}<div class="halmuni-final"><strong class="halmuni-label">🔮 오늘의 할머니 한마디</strong>${adviceHtml}</div>`;
  }
  return text.split('\n').filter(l => l.trim()).map(l => `<p>${l}</p>`).join('');
}

// ── 광고 ──
function handleAdButton() {
  if (typeof window.showFullScreenAd?.isSupported === 'function' && window.showFullScreenAd.isSupported()) {
    window.showFullScreenAd({
      onEvent: (e) => {
        if (e.type === 'userEarnedReward') {
          incrementAdUsage();
          showToast('🎉 운세 2회가 추가됐어요!');
          renderHome();
        }
      },
      onError: () => showAdFallback(),
    });
  } else {
    showAdFallback();
  }
}

function showAdFallback() {
  const overlay = document.createElement('div');
  overlay.style.cssText = `position:fixed;inset:0;background:rgba(0,0,0,0.9);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;z-index:9999;`;
  overlay.innerHTML = `
    <p style="color:#e8d9b8;font-size:16px;font-family:'Nanum Myeongjo',serif">광고를 시청하고 있어요</p>
    <div id="adTimer" style="color:#c8a84b;font-size:32px;font-weight:700;font-family:'Nanum Myeongjo',serif">5</div>
    <p style="color:#8a7a5a;font-size:13px">잠시만 기다려주세요</p>`;
  document.body.appendChild(overlay);

  let t = 5;
  const tick = setInterval(() => {
    t--;
    const el = document.getElementById('adTimer');
    if (el) el.textContent = t;
    if (t <= 0) {
      clearInterval(tick);
      document.body.removeChild(overlay);
      incrementAdUsage();
      showToast('🎉 운세 2회가 추가됐어요!');
      renderHome();
    }
  }, 1000);
}

// ── 초기화 ──
function init() {
  renderHome();

  document.getElementById('btnStart').addEventListener('click', () => {
    if (!canUseFortune()) {
      showToast('오늘은 운세를 다 봤어요');
      return;
    }
    selectedQuestionType = '';
    showScreen('screen-question');
  });

  // 질문 선택 화면
  document.querySelectorAll('.btn-q').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedQuestionType = btn.dataset.q;
      initDamyo();
      showScreen('screen-cards');
    });
  });
  document.getElementById('btnQSkip').addEventListener('click', () => {
    selectedQuestionType = '';
    initDamyo();
    showScreen('screen-cards');
  });
  document.getElementById('btnQBack').addEventListener('click', () => {
    showScreen('screen-home');
  });

  document.getElementById('btnAd').addEventListener('click', handleAdButton);
  document.getElementById('btnBackHome').addEventListener('click', () => {
    renderHome();
    showScreen('screen-home');
  });
  document.getElementById('btnFortune').addEventListener('click', getFortune);
  document.getElementById('btnBackCards').addEventListener('click', () => {
    initDamyo();
    showScreen('screen-cards');
  });
  document.getElementById('btnGoHome').addEventListener('click', () => {
    renderHome();
    showScreen('screen-home');
  });
  document.getElementById('btnRetry').addEventListener('click', () => {
    if (!canUseFortune()) {
      showToast('오늘은 운세를 다 봤어요');
      return;
    }
    initDamyo();
    showScreen('screen-cards');
  });
}

document.addEventListener('DOMContentLoaded', init);
