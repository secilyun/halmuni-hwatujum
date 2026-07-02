'use strict';

// ── 소리 합성 ──
let audioCtx = null;

function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
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
  const lpf = ctx.createBiquadFilter(); lpf.type = 'lowpass'; lpf.frequency.value = 2400;
  const hpf = ctx.createBiquadFilter(); hpf.type = 'highpass'; hpf.frequency.value = 180;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(volume, when);
  gain.gain.exponentialRampToValueAtTime(0.001, when + 0.09);
  noise.connect(lpf); lpf.connect(hpf); hpf.connect(gain); gain.connect(ctx.destination);
  noise.start(when); noise.stop(when + 0.12);
}

function playTakTakTak() {
  try {
    const ctx = getAudioCtx(), now = ctx.currentTime;
    playCardSlapAt(ctx, now, 0.6);
    playCardSlapAt(ctx, now + 0.1, 0.7);
    playCardSlapAt(ctx, now + 0.18, 0.85);
  } catch(e) {}
}

function playCardSlap() {
  try {
    const ctx = getAudioCtx(), now = ctx.currentTime;
    const bufSize = Math.floor(ctx.sampleRate * 0.12);
    const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-(i / bufSize) * 30);
    }
    const noise = ctx.createBufferSource(); noise.buffer = buf;
    const lpf = ctx.createBiquadFilter(); lpf.type = 'lowpass'; lpf.frequency.value = 2200; lpf.Q.value = 0.8;
    const hpf = ctx.createBiquadFilter(); hpf.type = 'highpass'; hpf.frequency.value = 150;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.55, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    noise.connect(lpf); lpf.connect(hpf); hpf.connect(gain); gain.connect(ctx.destination);
    noise.start(now); noise.stop(now + 0.15);
  } catch(e) {}
}

function playPairMatch() {
  try {
    const ctx = getAudioCtx(), now = ctx.currentTime;
    playCardSlapAt(ctx, now, 0.7);
    playCardSlapAt(ctx, now + 0.07, 0.95);
    const osc = ctx.createOscillator(), g = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1047, now + 0.12);
    osc.frequency.exponentialRampToValueAtTime(784, now + 0.45);
    g.gain.setValueAtTime(0.28, now + 0.12);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    osc.connect(g); g.connect(ctx.destination);
    osc.start(now + 0.12); osc.stop(now + 0.55);
  } catch(e) {}
}

function playShuffleSound() {
  try {
    const ctx = getAudioCtx();
    for (let i = 0; i < 10; i++) {
      playCardSlapAt(ctx, ctx.currentTime + i * 0.055, 0.25 + i * 0.02);
    }
  } catch(e) {}
}

// ── 사용량 ──
const USAGE_KEY = 'hwatu_usage';
const FREE_DAILY = 1;
const AD_DAILY = 2;

function getToday() { return new Date().toISOString().slice(0, 10); }

function getUsage() {
  try {
    const u = JSON.parse(localStorage.getItem(USAGE_KEY) || '{}');
    if (u.date !== getToday()) return { date: getToday(), used: 0, adUsed: 0 };
    return u;
  } catch { return { date: getToday(), used: 0, adUsed: 0 }; }
}
function saveUsage(u) { localStorage.setItem(USAGE_KEY, JSON.stringify(u)); }
function getRemainingAd() { return Math.max(0, AD_DAILY - getUsage().adUsed); }
function canUseFortune() {
  const u = getUsage();
  return u.used < FREE_DAILY + Math.min(u.adUsed, AD_DAILY);
}
function incrementUsage() {
  const u = getUsage(); u.used = (u.used || 0) + 1; saveUsage(u);
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

// ── 추임새 ──
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
  if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'toast'; document.body.appendChild(toastEl); }
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastEl._t);
  toastEl._t = setTimeout(() => toastEl.classList.remove('show'), 2200);
}

// ── 홈 화면 렌더 ──
function renderHome() {
  const u = getUsage();
  const usageEl = document.getElementById('usageText');
  const btnAd = document.getElementById('btnAd');
  const adUsedMsg = document.getElementById('adUsedMsg');
  const adBonus = Math.min(u.adUsed, AD_DAILY);
  const remaining = Math.max(0, FREE_DAILY + adBonus - u.used);

  if (remaining > 0) {
    usageEl.textContent = remaining + '회';
    btnAd.style.display = 'none';
    adUsedMsg.style.display = 'none';
  } else if (getRemainingAd() > 0) {
    usageEl.textContent = '0회';
    btnAd.style.display = 'block';
    adUsedMsg.style.display = 'none';
  } else {
    usageEl.textContent = '0회';
    btnAd.style.display = 'none';
    adUsedMsg.style.display = 'block';
  }
  loadHomeMessages();
}

// ── 카테고리 바텀시트 ──
function showCategorySheet() {
  document.getElementById('category-sheet').classList.add('open');
  document.getElementById('category-overlay').classList.add('visible');
}
function hideCategorySheet() {
  document.getElementById('category-sheet').classList.remove('open');
  document.getElementById('category-overlay').classList.remove('visible');
}

// ── 담요 상태 ──
let flippedUnmatched = [];
let completedPairs = [];
let cardEls = [];
let isOrganizing = false;
let currentQuestionType = '';
let viewedQuestions = new Set();

function initDamyo() {
  flippedUnmatched = [];
  completedPairs = [];
  cardEls = [];
  viewedQuestions = new Set();
  currentQuestionType = '';

  const damyo = document.getElementById('damyoArea');
  damyo.querySelectorAll('.hwatu-card').forEach(e => e.remove());
  document.getElementById('hud').style.display = 'none';
  document.getElementById('fortuneBtnWrap').style.display = 'none';

  // 결과 화면 추가질문 버튼 리셋
  document.querySelectorAll('.btn-more-q').forEach(b => b.classList.remove('viewed'));
}

function doShuffle() {
  const deck = document.getElementById('deckStack');
  deck.onclick = null;
  document.getElementById('deckHint').textContent = '섞는 중...';
  playShuffleSound();
  deck.style.animation = 'deckShake 0.5s ease';
  setTimeout(() => {
    showScreen('screen-cards');
    scatterCards();
  }, 500);
}

function scatterCards() {
  const damyo = document.getElementById('damyoArea');
  const W = window.innerWidth, H = window.innerHeight;
  const cW = 48, cH = 72, marginTop = 88, marginBottom = 85;

  const shuffled = [...Array(48).keys()].sort(() => Math.random() - 0.5);

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
          <img src="card-${String(card.id).padStart(2,'0')}.png" style="width:100%;height:100%;object-fit:cover;display:block;">
          ${gwangBadge}
          <div class="card-selected-mark">✓</div>
        </div>
      </div>`;
    el.addEventListener('click', () => onCardClick(el, cardId));
    damyo.appendChild(el);
    cardEls.push(el);
    requestAnimationFrame(() => { el.style.opacity = '1'; });
  });

  isOrganizing = true;
  setTimeout(() => organizeCards(), 950);
}

function organizeCards() {
  const W = window.innerWidth, H = window.innerHeight;
  const cW = 48, cH = 72, gap = 3, cols = 6, rows = 8;
  const marginTop = 90, marginBottom = 85;
  const totalW = cols * cW + (cols - 1) * gap;
  const totalH = rows * cH + (rows - 1) * gap;
  const startX = Math.floor((W - totalW) / 2);
  const startY = Math.floor(marginTop + Math.max(2, (H - marginTop - marginBottom - totalH) / 2));

  cardEls.forEach((el, i) => {
    const col = i % cols, row = Math.floor(i / cols);
    const x = startX + col * (cW + gap);
    const y = startY + row * (cH + gap);
    const delay = i * 0.005;
    el.style.transition = `left 0.4s cubic-bezier(0.25,0,0.1,1) ${delay}s, top 0.4s cubic-bezier(0.25,0,0.1,1) ${delay}s, transform 0.4s ease ${delay}s`;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.transform = 'rotate(0deg)';
  });

  setTimeout(() => {
    cardEls.forEach(el => { el.style.transition = ''; });
    isOrganizing = false;
    document.getElementById('hud').style.display = 'flex';
    updatePickStatus();
  }, 700);
}

function onCardClick(el, cardId) {
  if (isOrganizing) return;
  if (el.classList.contains('flipped') || el.classList.contains('paired')) return;
  if (completedPairs.length >= 3) return;

  el.classList.add('flipped', 'waiting');
  playCardSlap();

  const thisMonth = HWATU_48[cardId].month;
  const matchIdx = flippedUnmatched.findIndex(f => HWATU_48[f.cardId].month === thisMonth && f.cardId !== cardId);

  if (matchIdx !== -1) {
    const matched = flippedUnmatched[matchIdx];
    flippedUnmatched.splice(matchIdx, 1);
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
    flippedUnmatched.push({ el, cardId });
    updatePickStatus();
  }
}

function updatePickStatus() {
  const n = completedPairs.length;
  const msgs = ['한 장씩 뒤집어봐, 짝을 찾아', '짝 1쌍! 두 쌍 더!', '한 쌍만 더!', '3쌍 완성! 운세 볼까?'];
  document.getElementById('pickCount').textContent = `${n}쌍`;
  const msgEl = document.getElementById('hudMsg');
  if (msgEl) msgEl.textContent = msgs[n] || msgs[0];
}

// ── 운세 요청 ──
async function getFortune(questionType) {
  if (completedPairs.length !== 3) return;
  if (!canUseFortune()) {
    showToast('오늘은 운세를 다 봤어요');
    return;
  }

  currentQuestionType = questionType;
  showScreen('screen-loading');

  try {
    const res = await fetch('/api/fortune', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pairs: completedPairs, questionType }),
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error);

    incrementUsage();
    viewedQuestions.add(questionType);
    renderResult(completedPairs, data.fortune, questionType);
    showScreen('screen-result');
    updateMoreQButtons();
    loadMessages();
  } catch(err) {
    showToast(err.message || '오류가 생겼어요. 다시 시도해주세요.');
    showScreen('screen-cards');
  }
}

// ── 추가 질문 (광고 후) ──
function getMoreFortune(questionType) {
  if (viewedQuestions.has(questionType)) return;

  const doFortune = () => {
    currentQuestionType = questionType;
    showScreen('screen-loading');
    fetch('/api/fortune', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pairs: completedPairs, questionType }),
    })
    .then(r => r.json())
    .then(data => {
      if (data.error) throw new Error(data.error);
      viewedQuestions.add(questionType);
      renderResult(completedPairs, data.fortune, questionType);
      showScreen('screen-result');
      updateMoreQButtons();
      loadMessages();
    })
    .catch(err => {
      showToast(err.message || '오류가 생겼어요.');
      showScreen('screen-result');
    });
  };

  // 광고 시청 후 운세
  if (typeof window.showFullScreenAd?.isSupported === 'function' && window.showFullScreenAd.isSupported()) {
    window.showFullScreenAd({
      onEvent: (e) => {
        if (e.type === 'userEarnedReward') doFortune();
      },
      onError: () => showAdFallbackThen(doFortune),
    });
  } else {
    showAdFallbackThen(doFortune);
  }
}

function updateMoreQButtons() {
  document.querySelectorAll('.btn-more-q').forEach(btn => {
    if (viewedQuestions.has(btn.dataset.q)) {
      btn.classList.add('viewed');
    }
    // 현재 보고 있는 질문 숨기기
    btn.style.display = btn.dataset.q === currentQuestionType ? 'none' : '';
  });
}

// ── 결과 화면 ──
const QUESTION_TITLES = {
  today: '오늘의 화투 운세', love: '오늘의 연애 운세',
  money: '오늘의 재물 운세', work: '오늘의 직업 운세',
  relation: '오늘의 관계 운세', worry: '오늘의 조언', '': '오늘의 화투 운세',
};

function renderResult(pairs, fortuneText, qType) {
  const titleEl = document.getElementById('resultTitle');
  if (titleEl) titleEl.textContent = QUESTION_TITLES[qType] || '오늘의 화투점';

  const container = document.getElementById('resultDrawnCards');
  container.innerHTML = '';
  pairs.forEach(pair => {
    const cA = HWATU_48[pair.cardA], cB = HWATU_48[pair.cardB];
    const main = cA.power >= cB.power ? cA : cB;
    const hasGwang = cA.type === 'gwang' || cB.type === 'gwang';
    const el = document.createElement('div');
    el.className = `result-card result-type-${hasGwang ? 'gwang' : main.type}`;
    el.style.background = main.bg;
    el.style.setProperty('--accent', main.accent);
    el.innerHTML = `
      <div class="result-card-svg"><img src="card-${String(main.id).padStart(2,'0')}.png" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:7px;"></div>
      <div class="result-card-overlay">
        <span class="result-pair-badge">짝!</span>
        ${hasGwang ? '<span class="result-gwang-badge">光</span>' : ''}
        <span class="result-typename">${cA.typeName}·${cB.typeName}</span>
        <span class="result-monthname">${main.month}월 ${main.name}</span>
      </div>`;
    container.appendChild(el);
  });

  document.getElementById('fortuneBody').innerHTML = formatFortune(fortuneText);
}

function formatFortune(text) {
  const marker = '🔮 오늘의 할머니 한마디';
  const idx = text.indexOf(marker);
  if (idx !== -1) {
    const mainHtml = text.slice(0, idx).trim().split('\n').filter(l => l.trim()).map(l => `<p>${l}</p>`).join('');
    const adviceHtml = text.slice(idx + marker.length).trim().split('\n').filter(l => l.trim()).map(l => `<p>${l}</p>`).join('');
    return `${mainHtml}<div class="halmuni-final"><strong class="halmuni-label">🔮 오늘의 할머니 한마디</strong>${adviceHtml}</div>`;
  }
  return text.split('\n').filter(l => l.trim()).map(l => `<p>${l}</p>`).join('');
}

// ── 광고 폴백 ──
function showAdFallbackThen(callback) {
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.92);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;z-index:9999;';
  overlay.innerHTML = `
    <p style="color:#f0e4c8;font-size:16px;font-family:'Nanum Myeongjo',serif">광고를 시청하고 있어요</p>
    <div id="adTimer" style="color:#c8a84b;font-size:36px;font-weight:800;font-family:'Nanum Myeongjo',serif">5</div>
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
      callback();
    }
  }, 1000);
}

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
      onError: () => showAdFallbackThen(() => {
        incrementAdUsage();
        showToast('🎉 운세 2회가 추가됐어요!');
        renderHome();
      }),
    });
  } else {
    showAdFallbackThen(() => {
      incrementAdUsage();
      showToast('🎉 운세 2회가 추가됐어요!');
      renderHome();
    });
  }
}

// ── 초기화 ──
function init() {
  renderHome();

  // 홈: 시작하기
  document.getElementById('btnStart').addEventListener('click', () => {
    if (!canUseFortune()) { showToast('오늘은 운세를 다 봤어요'); return; }
    initDamyo();
    showScreen('screen-shuffle');
    // 섞기 화면 덱 클릭 등록
    document.getElementById('deckStack').onclick = () => doShuffle();
    document.getElementById('deckHint').textContent = '자, 섞어봐';
    document.getElementById('deckStack').style.animation = '';
  });

  // 홈: 광고
  document.getElementById('btnAd').addEventListener('click', handleAdButton);

  // 담요: 뒤로/운세보기
  document.getElementById('btnBackHome').addEventListener('click', () => {
    renderHome(); showScreen('screen-home');
  });
  document.getElementById('btnFortune').addEventListener('click', () => {
    showCategorySheet();
  });

  // 카테고리 바텀시트
  document.querySelectorAll('.btn-cat').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.dataset.q;
      hideCategorySheet();
      getFortune(q);
    });
  });
  document.getElementById('category-overlay').addEventListener('click', hideCategorySheet);

  // 결과: 추가질문
  document.querySelectorAll('.btn-more-q').forEach(btn => {
    btn.addEventListener('click', () => {
      getMoreFortune(btn.dataset.q);
    });
  });

  // 결과: 뒤로/처음으로/다시뽑기
  document.getElementById('btnLetterSend').addEventListener('click', sendMessage);
  document.getElementById('letterInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') sendMessage();
  });
  document.getElementById('letterSection').querySelector('.letter-divider-icon').addEventListener('click', () => {
    adminTapCount++;
    if (adminTapCount >= 5) {
      adminTapCount = 0;
      adminMode = !adminMode;
      showToast(adminMode ? '관리자 모드 켜짐' : '관리자 모드 꺼짐');
      loadMessages();
    }
  });

  document.getElementById('btnBackCards').addEventListener('click', () => {
    showScreen('screen-cards');
  });
  document.getElementById('btnGoHome').addEventListener('click', () => {
    renderHome(); showScreen('screen-home');
  });
  document.getElementById('btnRetry').addEventListener('click', () => {
    if (!canUseFortune()) { showToast('오늘은 운세를 다 봤어요'); return; }
    initDamyo();
    showScreen('screen-shuffle');
    document.getElementById('deckStack').onclick = () => doShuffle();
    document.getElementById('deckHint').textContent = '자, 섞어봐';
    document.getElementById('deckStack').style.animation = '';
  });
}

// ── 할머니 메시지 ──
const STORE_REVIEW_URL = ''; // 앱인토스 등록 후 리뷰 URL 여기에 넣기
let adminMode = false;
let adminTapCount = 0;

function timeAgo(dateStr) {
  const diff = Math.floor((Date.now() - new Date(dateStr)) / 1000);
  if (diff < 60) return '방금';
  if (diff < 3600) return `${Math.floor(diff/60)}분 전`;
  if (diff < 86400) return `${Math.floor(diff/3600)}시간 전`;
  return `${Math.floor(diff/86400)}일 전`;
}

async function loadMessages() {
  try {
    const res = await fetch('/api/messages');
    const data = await res.json();
    const list = document.getElementById('letterList');
    if (!list) return;
    if (!data.messages || data.messages.length === 0) {
      list.innerHTML = '<p class="letter-empty">아직 아무도 말을 안 남겼네~ 첫 번째로 써봐!</p>';
      return;
    }
    list.innerHTML = data.messages.map(m => `
      <div class="letter-item ${adminMode ? 'admin-mode' : ''}">
        <div>${escapeHtml(m.content)}</div>
        <div class="letter-time">${timeAgo(m.created_at)}</div>
        <button class="btn-delete-msg" onclick="deleteMessage(${m.id})">🗑️</button>
      </div>
    `).join('');
  } catch(e) {}
}

async function deleteMessage(id) {
  const key = prompt('관리자 키를 입력하세요');
  if (!key) return;
  try {
    await fetch(`/api/message/${id}?key=${encodeURIComponent(key)}`, { method: 'DELETE' });
    loadMessages();
  } catch(e) { showToast('삭제 실패'); }
}

async function loadHomeMessages() {
  try {
    const res = await fetch('/api/messages');
    const data = await res.json();
    const wrap = document.getElementById('homeMessages');
    if (!wrap || !data.messages || data.messages.length === 0) return;
    const recent = data.messages.slice(0, 3);
    wrap.innerHTML = recent.map(m =>
      `<p class="home-msg-item">💬 ${escapeHtml(m.content)}</p>`
    ).join('');
  } catch(e) {}
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

async function sendMessage() {
  const input = document.getElementById('letterInput');
  const content = input.value.trim();
  if (!content) return;
  const btn = document.getElementById('btnLetterSend');
  btn.disabled = true;
  btn.textContent = '전달 중...';
  try {
    await fetch('/api/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content })
    });
    input.value = '';
    await loadMessages();
    const rating = document.getElementById('letterRating');
    if (rating) {
      rating.style.display = 'block';
      if (STORE_REVIEW_URL) document.getElementById('btnRating').href = STORE_REVIEW_URL;
    }
  } catch(e) {
    showToast('전달에 실패했어요');
  } finally {
    btn.disabled = false;
    btn.textContent = '전하기';
  }
}

document.addEventListener('DOMContentLoaded', init);
