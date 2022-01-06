window.alert('広島県民クイズ！用意はいいですか？');

const quiz = [
  {
    question: '広島県キャラクター総選挙で優勝経験もある頭に紅葉のあるキャラクターは？',
    answers: [
      'カキ小僧',
      'コロッケマン',
      '紅葉ざむらい',
      'ブンカッキー'
    ],
    correct: 'ブンカッキー'
  }, {
    question: '縁起物としてお正月のおせち料理にも使われる広島県が生産量日本一の食材は？',
    answers: [
      'みかん',
      'えび',
      'くわい',
      'くろまめ'
    ],
    correct: 'くわい'
  }, {
    question: '広島県呉市にある戦艦がテーマの人気施設とは？',
    answers: [
      '大和ミュージアム',
      'みろくの里',
      '常盤公園',
      'サンリオピューロランド'
    ],
    correct: '大和ミュージアム'
  }, {
    question: '広島県出身のミュージシャンは次のうちだれ？',
    answers: [
      '小田和正',
      '大塚愛',
      '井上陽水',
      '矢沢永吉'
    ],
    correct: '矢沢永吉'
  }, {
    question: '広島の名産”もみじ饅頭”の種類で本当にあるのは次のうちどれ？',
    answers: [
      'バナナ',
      '瀬戸内レモン',
      'ヨーグルト',
      'お好み焼き'
    ],
    correct: '瀬戸内レモン'
  }
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;




const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-puestion').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
    }
}
setupQuiz();

//選択肢の正誤判定
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  } else{
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
