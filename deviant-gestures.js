const { useState, useEffect, useRef } = React;

const IMAGE_LIBRARY = [
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p1.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p2.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p3.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p4.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p5.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p10.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p11.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p12.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p13.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p14.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p15.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p16.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p17.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p18.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p19.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p20.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p21.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p22.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p23.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p24.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p25.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p26.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p27.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p28.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p29.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p30.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p31.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p32.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p33.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p34.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p35.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p36.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p37.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p39.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p40.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p41.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p42.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p43.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p44.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p45.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p46.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p47.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p48.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p49.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p50.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p51.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p52.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p53.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p54.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p55.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p56.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p57.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p58.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p59.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/p60.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-1.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-2.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-3.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-4.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-5.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-6.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-7.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-8.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-9.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-10.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-11.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-12.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-13.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-14.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-15.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-16.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-17.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-18.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-19.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-20.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-21.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-22.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-23.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-24.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-25.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-26.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-27.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-28.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-29.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-30.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-31.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-32.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-33.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-34.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-35.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-36.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-37.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-38.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-39.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-40.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-41.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-42.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-43.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-44.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-45.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-46.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-47.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-48.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-49.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-50.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-51.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-52.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-53.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-54.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-55.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-56.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-57.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-58.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-59.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-60.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-61.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-62.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-63.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-64.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-65.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-66.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-67.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-68.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-69.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-70.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-71.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-72.jpg",
  "https://raw.githubusercontent.com/emergentplay/deviant-gestures/main/images/260216-73.jpg",
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
