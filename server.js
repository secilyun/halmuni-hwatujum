const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});
app.use(express.json());
app.use(express.static('public'));

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

(async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        content VARCHAR(80) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);
    console.log('메시지 테이블 준비 완료');
  } catch (err) {
    console.error('DB 초기화 오류:', err.message);
  }
})();

app.post('/api/message', async (req, res) => {
  const { content } = req.body;
  if (!content || typeof content !== 'string') return res.status(400).json({ error: '내용이 없어요' });
  const trimmed = content.trim().slice(0, 80);
  if (!trimmed) return res.status(400).json({ error: '내용이 없어요' });
  try {
    await pool.query('INSERT INTO messages (content) VALUES ($1)', [trimmed]);
    res.json({ ok: true });
  } catch (err) {
    console.error('메시지 저장 오류:', err.message);
    res.status(500).json({ error: '저장 실패' });
  }
});

app.get('/api/messages', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, content, created_at FROM messages ORDER BY id DESC LIMIT 30');
    res.json({ messages: result.rows });
  } catch (err) {
    console.error('메시지 조회 오류:', err.message);
    res.status(500).json({ error: '불러오기 실패' });
  }
});

app.delete('/api/message/:id', async (req, res) => {
  if (req.query.key !== process.env.ADMIN_KEY) return res.status(403).json({ error: '권한 없음' });
  try {
    await pool.query('DELETE FROM messages WHERE id = $1', [req.params.id]);
    res.json({ ok: true });
  } catch (err) {
    console.error('메시지 삭제 오류:', err.message);
    res.status(500).json({ error: '삭제 실패' });
  }
});

const HWATU_48 = [
  // 1월
  { id:0,  month:1,  name:'소나무', type:'gwang',  typeName:'학광',   power:4, desc:'학이 소나무 위에서 굳세게 서다', keys:'건강·장수·이른 성과·귀인의 도움' },
  { id:1,  month:1,  name:'소나무', type:'ribbon', typeName:'홍띠',   power:2, desc:'소나무 아래 붉은 띠가 드리우다', keys:'약속·문서·인연 매듭' },
  { id:2,  month:1,  name:'소나무', type:'pi',     typeName:'피',     power:1, desc:'소나무 잎이 떨어지다', keys:'평온·일상·작은 변화' },
  { id:3,  month:1,  name:'소나무', type:'pi',     typeName:'피',     power:1, desc:'소나무 잎이 떨어지다', keys:'평온·일상·작은 변화' },
  // 2월
  { id:4,  month:2,  name:'매화',   type:'yul',    typeName:'꾀꼬리', power:3, desc:'꾀꼬리가 매화에서 노래하다', keys:'이성운·설레임·봄기운·새 인연' },
  { id:5,  month:2,  name:'매화',   type:'ribbon', typeName:'홍띠',   power:2, desc:'매화 아래 붉은 띠가 펄럭이다', keys:'인연·약속·문서' },
  { id:6,  month:2,  name:'매화',   type:'pi',     typeName:'피',     power:1, desc:'매화 꽃잎이 조용히 지다', keys:'인내·기다림·조용한 시작' },
  { id:7,  month:2,  name:'매화',   type:'pi',     typeName:'피',     power:1, desc:'매화 꽃잎이 조용히 지다', keys:'인내·기다림·조용한 시작' },
  // 3월
  { id:8,  month:3,  name:'벚꽃',   type:'gwang',  typeName:'벚꽃광', power:4, desc:'벚꽃 아래 술잔을 기울이며 봄을 즐기다', keys:'만남·인연·외출·달콤한 유혹·화려한 기회' },
  { id:9,  month:3,  name:'벚꽃',   type:'ribbon', typeName:'홍띠',   power:2, desc:'벚꽃 가지에 붉은 띠가 달리다', keys:'화려한 인연·약속·경사' },
  { id:10, month:3,  name:'벚꽃',   type:'pi',     typeName:'피',     power:1, desc:'벚꽃 꽃잎이 바람에 흩날리다', keys:'스쳐가는 인연·잠깐의 기회' },
  { id:11, month:3,  name:'벚꽃',   type:'pi',     typeName:'피',     power:1, desc:'벚꽃 꽃잎이 바람에 흩날리다', keys:'스쳐가는 인연·잠깐의 기회' },
  // 4월
  { id:12, month:4,  name:'흑싸리', type:'yul',    typeName:'두견새', power:3, desc:'두견새가 처량하게 울다', keys:'슬픔·이별조짐·말조심·인내' },
  { id:13, month:4,  name:'흑싸리', type:'ribbon', typeName:'초단',   power:2, desc:'흑싸리에 초록 띠가 드리우다', keys:'느린 성장·꾸준함·소박한 진전' },
  { id:14, month:4,  name:'흑싸리', type:'pi',     typeName:'피',     power:1, desc:'흑싸리 꽃이 조용히 피다', keys:'은은함·소박함·여유' },
  { id:15, month:4,  name:'흑싸리', type:'pi',     typeName:'피',     power:1, desc:'흑싸리 꽃이 조용히 피다', keys:'은은함·소박함·여유' },
  // 5월
  { id:16, month:5,  name:'난초',   type:'yul',    typeName:'파랑새', power:3, desc:'파랑새가 훨훨 날아가다', keys:'이동·여행·변화·새로운 환경' },
  { id:17, month:5,  name:'난초',   type:'ribbon', typeName:'초단',   power:2, desc:'난초 옆에 초록 띠가 나부끼다', keys:'꾸준한 노력·학문·기술' },
  { id:18, month:5,  name:'난초',   type:'pi',     typeName:'피',     power:1, desc:'난초 잎이 고요히 흔들리다', keys:'평온·조용한 시간' },
  { id:19, month:5,  name:'난초',   type:'pi',     typeName:'피',     power:1, desc:'난초 잎이 고요히 흔들리다', keys:'평온·조용한 시간' },
  // 6월
  { id:20, month:6,  name:'모란',   type:'yul',    typeName:'나비',   power:3, desc:'나비가 모란꽃에 취하다', keys:'기쁨·인기·돈의 흐름·화려함' },
  { id:21, month:6,  name:'모란',   type:'ribbon', typeName:'청띠',   power:2, desc:'모란 옆에 파란 띠가 드리우다', keys:'품격·고귀함·명예' },
  { id:22, month:6,  name:'모란',   type:'pi',     typeName:'피',     power:1, desc:'모란 꽃잎이 천천히 지다', keys:'잠깐의 화려함·일상' },
  { id:23, month:6,  name:'모란',   type:'pi',     typeName:'피',     power:1, desc:'모란 꽃잎이 천천히 지다', keys:'잠깐의 화려함·일상' },
  // 7월
  { id:24, month:7,  name:'홍싸리', type:'yul',    typeName:'멧돼지', power:3, desc:'멧돼지가 돌진하다', keys:'충돌·고집·급한 일·추진력' },
  { id:25, month:7,  name:'홍싸리', type:'ribbon', typeName:'초단',   power:2, desc:'홍싸리에 초록 띠가 달리다', keys:'꾸준한 노력·수확기' },
  { id:26, month:7,  name:'홍싸리', type:'pi',     typeName:'피',     power:1, desc:'홍싸리 꽃이 흔들리다', keys:'소소한 기쁨·평범한 날' },
  { id:27, month:7,  name:'홍싸리', type:'pi',     typeName:'피',     power:1, desc:'홍싸리 꽃이 흔들리다', keys:'소소한 기쁨·평범한 날' },
  // 8월
  { id:28, month:8,  name:'공산',   type:'gwang',  typeName:'공산광', power:4, desc:'보름달 아래 텅 빈 산을 홀로 바라보다', keys:'밤·기다림·사색·고요한 외로움·크게 이룸' },
  { id:29, month:8,  name:'공산',   type:'yul',    typeName:'기러기', power:3, desc:'달밤에 기러기 떼가 방향을 잡아 날다', keys:'이동·단합·목표를 향해 가다' },
  { id:30, month:8,  name:'공산',   type:'pi',     typeName:'피',     power:1, desc:'달빛 아래 억새가 조용히 흔들리다', keys:'기다림·자연의 흐름·고요함' },
  { id:31, month:8,  name:'공산',   type:'pi',     typeName:'피',     power:1, desc:'달빛 아래 억새가 조용히 흔들리다', keys:'기다림·자연의 흐름·고요함' },
  // 9월
  { id:32, month:9,  name:'국화',   type:'yul',    typeName:'술잔',   power:3, desc:'국화주를 마시며 가을을 정리하다', keys:'정리·모임·결심·학문의 기운' },
  { id:33, month:9,  name:'국화',   type:'ribbon', typeName:'청띠',   power:2, desc:'국화 옆에 파란 띠가 드리우다', keys:'절조·고귀함·꾸준한 정진' },
  { id:34, month:9,  name:'국화',   type:'pi',     typeName:'피',     power:1, desc:'국화 꽃잎이 가을바람에 날리다', keys:'차분함·마음의 평화' },
  { id:35, month:9,  name:'국화',   type:'pi',     typeName:'피',     power:1, desc:'국화 꽃잎이 가을바람에 날리다', keys:'차분함·마음의 평화' },
  // 10월
  { id:36, month:10, name:'단풍',   type:'yul',    typeName:'사슴',   power:3, desc:'단풍 숲에서 사슴이 뛰다', keys:'재물·결심·결실·늦가을 수확' },
  { id:37, month:10, name:'단풍',   type:'ribbon', typeName:'청띠',   power:2, desc:'단풍 아래 파란 띠가 나부끼다', keys:'고귀한 변화·품격있는 마무리' },
  { id:38, month:10, name:'단풍',   type:'pi',     typeName:'피',     power:1, desc:'단풍잎이 조용히 떨어지다', keys:'마무리·내려놓음·새 준비' },
  { id:39, month:10, name:'단풍',   type:'pi',     typeName:'피',     power:1, desc:'단풍잎이 조용히 떨어지다', keys:'마무리·내려놓음·새 준비' },
  // 11월
  { id:40, month:11, name:'오동',   type:'gwang',  typeName:'오동광', power:4, desc:'봉황이 오동나무에 큰 뜻으로 깃들다', keys:'뜻밖의 일·큰 전환·변신·이동' },
  { id:41, month:11, name:'오동',   type:'pi',     typeName:'피',     power:1, desc:'오동잎이 크게 드리우다', keys:'기다림·준비·큰 일의 전조' },
  { id:42, month:11, name:'오동',   type:'pi',     typeName:'피',     power:1, desc:'오동잎이 크게 드리우다', keys:'기다림·준비·큰 일의 전조' },
  { id:43, month:11, name:'오동',   type:'pi',     typeName:'피',     power:1, desc:'오동잎이 크게 드리우다', keys:'기다림·준비·큰 일의 전조' },
  // 12월 (비=흐름의 변화, 우산=보호, 개구리=반전기회)
  { id:44, month:12, name:'비',     type:'gwang',  typeName:'비광',   power:4, desc:'빗속에서 우산 쓴 아저씨가 개구리를 바라보다', keys:'마무리·마지막 고비·반전·해소 (비=변화의 흐름, 우산=보호, 개구리=반전기회)' },
  { id:45, month:12, name:'비',     type:'yul',    typeName:'제비',   power:3, desc:'빗속에서 제비가 재빠르게 날다', keys:'기회포착·민첩함·속도전·사랑 피하기 조짐' },
  { id:46, month:12, name:'비',     type:'pi',     typeName:'피',     power:1, desc:'빗소리가 조용히 들리다', keys:'정화·씻어내기·새 출발 준비' },
  { id:47, month:12, name:'비',     type:'pi',     typeName:'피',     power:1, desc:'빗속에서 빨간 우산이 보이다', keys:'희망·비 그친 후 빛·반전의 기운' },
];

app.post('/api/fortune', async (req, res) => {
  const { pairs, questionType = '' } = req.body;

  if (!pairs || pairs.length !== 3) {
    return res.status(400).json({ error: '짝 3쌍이 필요해요' });
  }

  const TYPE_LABEL = { gwang: '광패(대운)', yul: '열끗(중운)', ribbon: '띠패(연결)', pi: '피패(평운)' };

  // 짝 3쌍 기반 카드 라인 생성
  const cardLines = pairs.map((pair, i) => {
    const cA = HWATU_48[pair.cardA];
    const cB = HWATU_48[pair.cardB];
    const best = cA.power >= cB.power ? cA : cB;
    const pos = ['현재 상황', '오늘 흐름', '결과·조언'][i];
    return `${pos}: ${cA.month}월 ${cA.name} 짝 (${TYPE_LABEL[cA.type]}·${TYPE_LABEL[cB.type]}) — 이 달 기운이 두 배: ${best.keys}`;
  }).join('\n');

  // 광패 포함 여부
  const gwangPairs = pairs.filter(p => HWATU_48[p.cardA].type === 'gwang' || HWATU_48[p.cardB].type === 'gwang');
  const gwangNote = gwangPairs.length > 0 ? `광패 짝이 ${gwangPairs.length}쌍 나왔어. 크고 강한 대운이야.` : '';

  const doubleNote = ''; // 짝 맞추기에선 모든 패가 같은 달이므로 겹패 개념은 생략

  const QUESTION_CONTEXT = {
    today:    '오늘 하루 어떤 일이 생길지, 무엇을 조심해야 할지',
    love:     '연애·연인과의 관계, 연락, 만남, 감정의 흐름',
    money:    '돈이 들어올지 나갈지, 재물의 흐름',
    work:     '일·직장·사업·계약·구직 상황',
    relation: '주변 사람들과의 관계, 귀인, 말조심, 화해',
    worry:    '고민에 대한 선택 조언 (해도 될까 말까)',
  };
  const questionContext = QUESTION_CONTEXT[questionType] || '오늘의 전반적인 운세';

  const prompt = `당신은 수십 년 경력의 할머니 화투 점쟁이입니다. 화투 패를 보면서 손녀에게 이야기하듯, 구수하고 정겨운 말투로 운세를 봐줍니다.

■ 패 읽는 원칙
- 패 한 장 = 단어 / 여러 장 = 이야기 (조합이 핵심이야)
- 광패 = 크고 강한 사건·귀인·대운 / 열끗 = 사람·만남·사건 / 띠 = 연결·약속 / 피 = 일상
- 조합 예시: 3월+4월 = 만남이 있는데 마음이 조심스럽다 / 8월+9월 = 밤에 정리가 생긴다

■ 이 손님이 궁금한 것: ${questionContext}
${gwangNote ? '■ ' + gwangNote : ''}${doubleNote ? '\n■ ' + doubleNote : ''}

■ 뽑힌 패 3장
${cardLines}

■ 이렇게 써줘
세 패가 함께 만드는 이야기를 읽어줘. 할머니가 손녀에게 말하듯 3~4문장으로 구수하게 써줘. 딱딱한 항목 나열(총운/재물운 같은 거)은 절대 하지 마. 마지막은 반드시 이렇게 끝내:

🔮 오늘의 할머니 한마디
(한 줄 핵심 조언. 가장 인상적인 패 하나와 연결지어)

■ 예시 스타일
"있고, 오늘 뭔가 일이 보이는구먼. 큰돈은 아니어도 뭔가 들어올 것 같어. 커피값, 충동구매 이런 거 조심해. 오늘은 말이 많을수록 손해야.

🔮 오늘의 할머니 한마디
복이 들어오는데, 다 입이 문제야. 말 조심해."`;


  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      generationConfig: { thinkingConfig: { thinkingBudget: 0 } },
    });
    const result = await model.generateContent(prompt);
    const fortune = result.response.text();
    res.json({ fortune });
  } catch (err) {
    console.error('Fortune error:', err);
    res.status(500).json({ error: '운세를 보는 중 오류가 생겼어요. 다시 시도해주세요.' });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`할머니 화투점 서버 :${PORT}`));
