const { useState, useEffect, useRef } = React;

const IMAGE_LIBRARY = [
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/01.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/02.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/03.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/04.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/05.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/06.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/07.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/08.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/09.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/10.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/11.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/12.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/13.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/14.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/15.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/16.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/17.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/18.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/19.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/20.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/21.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/22.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/23.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/24.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/25.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/26.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/27.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/28.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/29.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/30.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/31.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/32.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/33.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/34.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/35.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/36.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/37.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/38.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/39.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/40.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/41.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/42.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/43.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/44.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/45.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/46.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/47.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/48.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/49.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/50.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/51.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/52.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/53.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/54.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/55.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/56.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/57.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/58.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/59.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/60.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/61.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/62.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/63.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/64.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/65.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/66.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/67.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/68.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/69.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/70.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/71.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/72.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/73.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/74.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/75.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/76.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/77.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/78.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/79.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/80.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/81.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/82.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/83.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/84.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/85.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/86.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/87.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/88.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/89.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/90.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/91.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/92.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/93.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/94.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/95.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/96.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/97.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/98.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/99.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/100.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/101.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/102.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/103.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/104.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/105.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/106.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/107.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/108.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/110.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/111.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/112.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/113.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/114.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/115.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/116.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/117.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/118.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/119.jpg",
  "https://raw.githubusercontent.com/emergentplay/dg-private/main/images/120.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/121.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/122.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/123.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/124.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/125.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/126.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/127.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/128.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/129.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/130.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/131.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/132.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/133.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/134.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/135.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/136.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/137.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/138.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/139.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/140.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/141.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/142.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/143.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/144.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/145.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/146.jpg",
"https://raw.githubusercontent.com/emergentplay/dg-private/main/images/147.jpg",
];

const COMPLETION_MESSAGES = [
  "GOOD GIRL.",
  "GOOD BOY.",
  "You took that like a champ.",
  "Session complete. You may kneel.",
  "30 minutes. 14 poses. You didn't safe-word once.",
  "Your hand is tired? Good.",
  "That's it. You're done. ...For now.",
  "Not bad. But I expect better next time.",
  "Permission to rest — granted.",
  "You survived. Barely. Come back tomorrow.",
  "Class dismissed. Don't forget to stretch.",
  "Every mark you made is an act of surrender."
];

const CLASS_STRUCTURE = [
  { phase: "Warming up...", count: 4, duration: 30 },
  { phase: "Longer poses now. Slow down.", count: 4, duration: 60 },
  { phase: "Structure and volumes.", count: 4, duration: 120 },
  { phase: "Construction and overlaps.", count: 1, duration: 360 },
  { phase: "Last one. Make it count.", count: 1, duration: 600 }
];

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

function DeviantGestures() {
  const [screen, setScreen] = useState('welcome');
  const [mode, setMode] = useState(null);
  const [duration, setDuration] = useState(null);
  const [imageSequence, setImageSequence] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showPhaseTransition, setShowPhaseTransition] = useState(false);
  const [phaseText, setPhaseText] = useState('');
  const [imageHistory, setImageHistory] = useState([]);
  const [completionMessage, setCompletionMessage] = useState('');
  const [fadeState, setFadeState] = useState('in');
  const timerRef = useRef(null);

  const getRandomImage = () => IMAGE_LIBRARY[Math.floor(Math.random() * IMAGE_LIBRARY.length)];
  const getRandomMessage = () => COMPLETION_MESSAGES[Math.floor(Math.random() * COMPLETION_MESSAGES.length)];

  const startClassMode = () => {
    const sequence = [];
    let shuffled = shuffleArray(IMAGE_LIBRARY);
    let shuffleIndex = 0;

    CLASS_STRUCTURE.forEach(({ count, duration }) => {
      for (let i = 0; i < count; i++) {
        if (shuffleIndex >= shuffled.length) {
          shuffled = shuffleArray(IMAGE_LIBRARY);
          shuffleIndex = 0;
        }
        sequence.push({ 
          image: shuffled[shuffleIndex++], 
          duration 
        });
      }
    });

    setImageSequence(sequence);
    setCurrentIndex(0);
    setTimeRemaining(sequence[0].duration);
    setMode('class');
    setScreen('session');
    setImageHistory([sequence[0].image]);
    setCompletionMessage(getRandomMessage());
    setFadeState('in');
    showPhaseMessage(0);
  };

  const startFreeMode = (poseDuration) => {
    setDuration(poseDuration);
    const shuffled = shuffleArray(IMAGE_LIBRARY);
    setImageSequence(shuffled.map(img => ({ image: img, duration: poseDuration })));
    setCurrentIndex(0);
    setTimeRemaining(poseDuration);
    setMode('free');
    setScreen('session');
    setImageHistory([shuffled[0]]);
    setFadeState('in');
  };

  const showPhaseMessage = (index) => {
    let phaseIndex = 0;
    let count = 0;
    
    for (let i = 0; i < CLASS_STRUCTURE.length; i++) {
      count += CLASS_STRUCTURE[i].count;
      if (index < count) {
        phaseIndex = i;
        break;
      }
    }

    if (index === 0 || (phaseIndex > 0 && index === CLASS_STRUCTURE.slice(0, phaseIndex).reduce((sum, p) => sum + p.count, 0))) {
      setPhaseText(CLASS_STRUCTURE[phaseIndex].phase);
      setShowPhaseTransition(true);
      setTimeout(() => setShowPhaseTransition(false), 2500);
    }
  };

  const nextImage = () => {
    if (currentIndex >= imageSequence.length - 1) {
      if (mode === 'class') {
        setScreen('completion');
        return;
      } else {
        const shuffled = shuffleArray(IMAGE_LIBRARY);
        setImageSequence(shuffled.map(img => ({ image: img, duration })));
        setCurrentIndex(0);
        setTimeRemaining(duration);
        setImageHistory([shuffled[0]]);
        setFadeState('in');
        return;
      }
    }

    setFadeState('out');
    setTimeout(() => {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setTimeRemaining(imageSequence[nextIndex].duration);
      setImageHistory([...imageHistory, imageSequence[nextIndex].image]);
      if (mode === 'class') showPhaseMessage(nextIndex);
      setFadeState('in');
    }, 600);
  };

  const previousImage = () => {
    if (imageHistory.length <= 1) return;
    
    setFadeState('out');
    setTimeout(() => {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      setTimeRemaining(imageSequence[prevIndex].duration);
      setImageHistory(imageHistory.slice(0, -1));
      setFadeState('in');
    }, 600);
  };

  useEffect(() => {
    if (screen !== 'session' || isPaused || showPhaseTransition) return;

    timerRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          nextImage();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [screen, isPaused, currentIndex, showPhaseTransition]);

  const Sigil = () => (
    React.createElement('img', {
      src: "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/sigil.png",
      alt: "EmergentPlay Sigil",
      className: "absolute top-4 left-4 md:top-8 md:left-8 h-24 md:h-48 w-auto z-10 cursor-pointer",
      onClick: () => setScreen('welcome')
    })
  );

  if (screen === 'welcome') {
    return (
      React.createElement('div', { className: "min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden" },
        React.createElement('link', { href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600&display=swap", rel: "stylesheet" }),
        React.createElement(Sigil),
        React.createElement('div', {
          className: "absolute inset-0 bg-cover bg-center opacity-20",
          style: { backgroundImage: `url(${getRandomImage()})` }
        }),
        React.createElement('div', { className: "relative z-10 max-w-2xl px-4 md:px-8 text-center" },
          React.createElement('h1', { className: "text-5xl md:text-8xl font-bold mb-4", style: { fontFamily: 'Bebas Neue, sans-serif' } }, "DEVIANT GESTURES"),
          React.createElement('h2', { className: "text-lg md:text-2xl mb-6 md:mb-8", style: { fontFamily: 'Bebas Neue, sans-serif' } }, "Gestural Drawing for the Beautifully Deviant"),
          React.createElement('p', { className: "text-base md:text-lg mb-8 md:mb-12 leading-relaxed" }, "This is a timed figure drawing tool using BDSM-themed reference images. Choose a structured 30-minute class or set your own pace. Grab your sketchbook. Obey the timer (or not, you brat!)."),
          React.createElement('div', { className: "flex flex-col md:flex-row gap-4 md:gap-6 justify-center mb-12 md:mb-16" },
            React.createElement('button', {
              onClick: startClassMode,
              className: "px-8 md:px-12 py-3 md:py-4 bg-red-700 hover:bg-red-600 text-white text-xl md:text-2xl font-bold transition-colors",
              style: { fontFamily: 'Bebas Neue, sans-serif' }
            }, "30-Minute Class"),
            React.createElement('button', {
              onClick: () => setScreen('freeSetup'),
              className: "px-8 md:px-12 py-3 md:py-4 bg-white hover:bg-gray-200 text-black text-xl md:text-2xl font-bold transition-colors",
              style: { fontFamily: 'Bebas Neue, sans-serif' }
            }, "Timed Practice")
          ),
          React.createElement('div', { className: "mb-6 md:mb-8 border-t border-white/30 pt-6 md:pt-8" },
            React.createElement('h3', { className: "text-lg md:text-xl mb-3", style: { fontFamily: 'Bebas Neue, sans-serif' } }, "THE MUSE SURRENDER SERIES"),
            React.createElement('p', { className: "text-sm md:text-base leading-relaxed" }, "Want to surrender your form to art? I'm looking for muses — all bodies, all genders, all expressions of power and submission. DM EmergentPlay on FetLife to be part of the series.")
          ),
          React.createElement('div', { className: "text-xs md:text-sm opacity-70" }, "Questions, requests, worship — find EmergentPlay on FetLife.")
        )
      )
    );
  }

  if (screen === 'freeSetup') {
    return (
      React.createElement('div', { className: "min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden" },
        React.createElement('link', { href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600&display=swap", rel: "stylesheet" }),
        React.createElement(Sigil),
        React.createElement('div', {
          className: "absolute inset-0 bg-cover bg-center opacity-20",
          style: { backgroundImage: `url(${getRandomImage()})` }
        }),
        React.createElement('div', { className: "relative z-10 max-w-xl px-4 md:px-8 text-center" },
          React.createElement('h1', { className: "text-4xl md:text-6xl font-bold mb-6 md:mb-8", style: { fontFamily: 'Bebas Neue, sans-serif' } }, "Choose Your Pace"),
          React.createElement('p', { className: "text-base md:text-lg mb-8 md:mb-12" }, "Select how long you want each pose to hold."),
          React.createElement('div', { className: "grid grid-cols-2 gap-3 md:gap-4 mb-8" },
            [
              { label: '30 Seconds', value: 30 },
              { label: '1 Minute', value: 60 },
              { label: '2 Minutes', value: 120 },
              { label: '6 Minutes', value: 360 },
              { label: '10 Minutes', value: 600 }
            ].map(({ label, value }) =>
              React.createElement('button', {
                key: value,
                onClick: () => startFreeMode(value),
                className: "px-4 md:px-8 py-4 md:py-6 bg-white hover:bg-red-700 hover:text-white text-black text-lg md:text-xl font-bold transition-colors",
                style: { fontFamily: 'Bebas Neue, sans-serif' }
              }, label)
            )
          ),
          React.createElement('button', {
            onClick: () => setScreen('welcome'),
            className: "text-white/70 hover:text-white underline"
          }, "Back")
        )
      )
    );
  }

  if (screen === 'session') {
    const totalPoses = mode === 'class' ? 14 : '∞';
    const currentPose = currentIndex + 1;

    return (
      React.createElement('div', { className: "min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden" },
        React.createElement('link', { href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600&display=swap", rel: "stylesheet" }),
        React.createElement(Sigil),
        
        showPhaseTransition && React.createElement('div', { className: "absolute inset-0 z-30 flex items-center justify-center bg-black/90" },
          React.createElement('h2', { className: "text-4xl md:text-6xl font-bold text-center px-8", style: { fontFamily: 'Bebas Neue, sans-serif' } }, phaseText)
        ),

        React.createElement('img', {
          src: imageSequence[currentIndex]?.image,
          alt: "Figure reference",
          className: `max-h-screen w-auto transition-opacity duration-600 ${fadeState === 'in' ? 'opacity-100' : 'opacity-0'}`,
          style: { maxWidth: '90vw', objectFit: 'contain' }
        }),

        React.createElement('div', { className: "absolute top-4 md:top-8 right-4 md:right-8 bg-black/70 px-4 md:px-6 py-2 md:py-4 text-2xl md:text-3xl font-bold", style: { fontFamily: 'Bebas Neue, sans-serif' } },
          formatTime(timeRemaining)
        ),

        React.createElement('div', { className: "fixed bottom-2 right-2 md:bottom-4 md:right-4 flex gap-2 md:gap-3 items-center bg-black/80 px-3 md:px-4 py-1.5 md:py-2 rounded hover:opacity-100 opacity-70 transition-opacity text-xs md:text-sm" },
          React.createElement('button', {
            onClick: previousImage,
            disabled: imageHistory.length <= 1,
            className: "text-xl md:text-2xl disabled:opacity-30 hover:text-red-500 transition-colors",
            title: "Previous"
          }, "←"),
          
          React.createElement('button', {
            onClick: () => setIsPaused(!isPaused),
            className: "text-base md:text-lg hover:text-red-500 transition-colors px-1 md:px-2",
            style: { fontFamily: 'Bebas Neue, sans-serif' }
          }, isPaused ? 'Resume' : 'Pause'),
          
          React.createElement('button', {
            onClick: nextImage,
            className: "text-xl md:text-2xl hover:text-red-500 transition-colors",
            title: "Next"
          }, "→"),
          
          React.createElement('div', { className: "text-xs md:text-sm opacity-70" }, `${currentPose}/${totalPoses}`),
          
          React.createElement('button', {
            onClick: () => setScreen('welcome'),
            className: "text-base md:text-lg hover:text-red-500 transition-colors",
            style: { fontFamily: 'Bebas Neue, sans-serif' }
          }, "Exit")
        )
      )
    );
  }

  if (screen === 'completion') {
    return (
      React.createElement('div', { className: "min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden" },
        React.createElement('link', { href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600&display=swap", rel: "stylesheet" }),
        React.createElement(Sigil),
        React.createElement('div', {
          className: "absolute inset-0 bg-cover bg-center opacity-20",
          style: { backgroundImage: `url(${getRandomImage()})` }
        }),
        React.createElement('div', { className: "relative z-10 max-w-3xl px-4 md:px-8 text-center" },
          React.createElement('h1', { className: "text-6xl md:text-9xl font-bold mb-8 md:mb-12 leading-tight", style: { fontFamily: 'Bebas Neue, sans-serif' } }, completionMessage),
          
          React.createElement('button', {
            onClick: () => {
              setScreen('welcome');
              setCurrentIndex(0);
              setImageHistory([]);
            },
            className: "px-8 md:px-12 py-3 md:py-4 bg-red-700 hover:bg-red-600 text-white text-xl md:text-2xl font-bold transition-colors",
            style: { fontFamily: 'Bebas Neue, sans-serif' }
          }, "Start Over"),

          React.createElement('div', { className: "mt-12 md:mt-16 text-xs md:text-sm opacity-70" }, "Questions, requests, worship? Find EmergentPlay on FetLife"),
          React.createElement('div', { className: "mt-3 md:mt-4 text-xs md:text-sm opacity-70" }, "Before you ask, yes these are AI images. If you don't like it, come pose for me. I would love to put you in the mix!")
        )
      )
    );
  }

  return null;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(DeviantGestures));
