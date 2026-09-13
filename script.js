/**
 * Ganpati Invitation Template - Config & Logic
 * Easily customize placeholders in the CONFIG object below.
 */

const CONFIG = {
  // Host & Invitation Details
  hostName: "Raut Family",
  familyBadge: "Raut Family",
  
  // Dates
  aagmanDate: "14 September 2026",
  visarjanDate: "19 September 2026",
  eventDate: "14 September - 19 September 2026",
  muhuratTime: "10:30 AM - 12:45 PM",
  morningAarti: "08:00 AM",
  eveningAarti: "07:30 PM",
  
  // Venue & Coordinates
  venueName: "Karan Apartment (Room No. 704)",
  fullAddress: "Room No. 704, Plot No. 08, Karan Apartment, Sector 16, Roadpali, Kalamboli, Navi Mumbai - 410218",
  venueLat: 19.0348,
  venueLng: 73.0970,
  
  // Contact
  phoneNumber: "+91 95941 31267",
  whatsappNumber: "919594131267", // without '+' or spaces for wa.me
  email: "raut.family@example.com",
  
  // Background Music
  audioFile: "Sur Niragas Ho - Full Audio  Katyar Kaljat Ghusli  Shankar Mahadevan & Aanandi Joshi.mp3",
  musicTrackName: "Sur Niragas Ho (सुर निरागस हो)"
};

// Multilingual Translation Dictionary
const TRANSLATIONS = {
  mr: {
    shloka: "॥ श्री गणेशाय नमः ॥",
    heroTitle: "गणपती बाप्पा मोरया!",
    heroSubtitle: "आमच्या घरच्या गणेशोत्सवाला सहपरिवार उपस्थित राहून बाप्पाचे आशीर्वाद घ्यावेत, ही नम्र विनंती.",
    hostPrefix: "निमंत्रक:",
    hostName: "Raut Family",
    aagmanLabel: "🐘 आगमन",
    visarjanLabel: "🌊 विसर्जन",
    eventDetailsHeading: "उत्सव कार्यक्रम व वेळ",
    dateMuhuratTitle: "तारीख आणि शुभ मुहूर्त",
    venueTitle: "उत्सव स्थळ",
    aartiTitle: "आरतीची वेळ",
    morningAartiLabel: "सकाळची आरती:",
    eveningAartiLabel: "संध्याकाळची आरती:",
    mapHeading: "मार्ग आणि नकाशा",
    getDirectionsBtn: "🗺️ गुगल मॅपवर दिशा मिळवा (Google Maps)",
    contactHeading: "संपर्क व पत्ता",
    phoneLabel: "फोन",
    whatsappLabel: "व्हॉट्सॲप",
    addressLabel: "पत्ता",
    closingBlessing: "🙏 आपली उपस्थिती आमच्यासाठी आनंदाची गोष्ट असेल! 🙏",
    musicPlaying: "संगीत सुरू आहे",
    musicPaused: "संगीत थांबवले आहे"
  },
  hi: {
    shloka: "॥ श्री गणेशाय नमः ॥",
    heroTitle: "गणपति बप्पा मोरया!",
    heroSubtitle: "हमारे गृह गणेशोत्सव के पावन अवसर पर आप सपरिवार सादर आमंत्रित हैं। बाप्पा का आशीर्वाद अवश्य प्राप्त करें।",
    hostPrefix: "निमंत्रक:",
    hostName: "Raut Family",
    aagmanLabel: "🐘 आगमन",
    visarjanLabel: "🌊 विसर्जन",
    eventDetailsHeading: "उत्सव विवरण एवं समय",
    dateMuhuratTitle: "दिनांक एवं शुभ मुहूर्त",
    venueTitle: "उत्सव स्थल",
    aartiTitle: "आरती का समय",
    morningAartiLabel: "प्रातः आरती:",
    eveningAartiLabel: "संध्या आरती:",
    mapHeading: "स्थान एवं मार्ग",
    getDirectionsBtn: "🗺️ गूगल मैप्स पर दिशा प्राप्त करें (Google Maps)",
    contactHeading: "संपर्क एवं पता",
    phoneLabel: "फ़ोन",
    whatsappLabel: "व्हाट्सएप",
    addressLabel: "पता",
    closingBlessing: "🙏 आपकी उपस्थिति हमारे लिए अत्यंत हर्ष और सौभाग्य की बात होगी! 🙏",
    musicPlaying: "संगीत बज रहा है",
    musicPaused: "संगीत रुका हुआ है"
  },
  en: {
    shloka: "॥ Om Shri Ganeshaya Namaha ॥",
    heroTitle: "Ganpati Bappa Morya!",
    heroSubtitle: "We cordially invite you and your family to join us in celebrating Ganesh Chaturthi and seeking Lord Ganesha's divine blessings.",
    hostPrefix: "Hosted by:",
    hostName: "Raut Family",
    aagmanLabel: "🐘 Arrival",
    visarjanLabel: "🌊 Immersion",
    eventDetailsHeading: "Celebration Details & Timings",
    dateMuhuratTitle: "Date & Auspicious Muhurat",
    venueTitle: "Venue Location",
    aartiTitle: "Daily Aarti Schedule",
    morningAartiLabel: "Morning Aarti:",
    eveningAartiLabel: "Evening Aarti:",
    mapHeading: "Venue Map & Directions",
    getDirectionsBtn: "🗺️ Get Directions on Google Maps",
    contactHeading: "Contact & Address",
    phoneLabel: "Phone",
    whatsappLabel: "WhatsApp",
    addressLabel: "Address",
    closingBlessing: "🙏 Your presence will make our celebration complete and joyful! 🙏",
    musicPlaying: "Music Playing",
    musicPaused: "Music Paused"
  }
};

let currentLang = 'mr';
let mapInstance = null;
let isAudioPlaying = false;
let ytPlayer = null;

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
  injectConfigValues();
  initParticles();
  initMap();
  initScrollReveal();
  initLanguageSwitcher();
  initMusicPlayer();
});

// Inject Config values into the DOM
function injectConfigValues() {
  document.querySelectorAll('[data-config]').forEach(el => {
    const key = el.getAttribute('data-config');
    if (CONFIG[key] !== undefined) {
      el.textContent = CONFIG[key];
    }
  });

  // Dynamic links
  const phoneLink = document.getElementById('phoneLink');
  if (phoneLink) phoneLink.href = `tel:${CONFIG.phoneNumber.replace(/\s+/g, '')}`;

  const waLink = document.getElementById('waLink');
  if (waLink) waLink.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent('गणपती बाप्पा मोरया! Nimantran sweekar kela.')}`;

  const directionsBtn = document.getElementById('directionsBtn');
  if (directionsBtn) {
    directionsBtn.href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CONFIG.fullAddress)}`;
  }

  const musicTrackEl = document.getElementById('musicTrackTitle');
  if (musicTrackEl) musicTrackEl.textContent = CONFIG.musicTrackName;
}

// Language Switcher Logic
function initLanguageSwitcher() {
  const buttons = document.querySelectorAll('.lang-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang === currentLang) return;

      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLang = lang;
      applyLanguage(lang);
    });
  });
  applyLanguage('mr');
}

function applyLanguage(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.mr;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update dynamic host name based on chosen language
  if (dict.hostName) {
    document.querySelectorAll('[data-config="hostName"]').forEach(el => {
      el.textContent = dict.hostName;
    });
  }

  // Update music status
  const musicStatusEl = document.getElementById('musicStatus');
  if (musicStatusEl) {
    musicStatusEl.textContent = isAudioPlaying ? dict.musicPlaying : dict.musicPaused;
  }
}

// Floating Particle Animation Setup
function initParticles() {
  const container = document.getElementById('particlesContainer');
  if (!container) return;

  const particleCount = 26;
  const colors = ['#ffd700', '#ffe57f', '#58a6ff', '#ffffff', '#ffd54f'];

  for (let i = 0; i < particleCount; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    const size = Math.random() * 8 + 4;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.left = `${Math.random() * 100}%`;
    p.style.animationDuration = `${Math.random() * 9 + 6}s`;
    p.style.animationDelay = `${Math.random() * 5}s`;
    p.style.boxShadow = `0 0 ${size * 1.6}px ${p.style.background}`;
    container.appendChild(p);
  }
}

// Leaflet Map Initialization
function initMap() {
  const mapElement = document.getElementById('map');
  if (!mapElement || typeof L === 'undefined') return;

  mapInstance = L.map('map', {
    scrollWheelZoom: false
  }).setView([CONFIG.venueLat, CONFIG.venueLng], 15);

  // CartoDB Positron / OpenStreetMap Dark/Warm layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(mapInstance);

  // Custom Gold Marker
  const goldIcon = L.divIcon({
    className: 'custom-leaflet-marker',
    html: `<div style="background: #f5c518; border: 2px solid #541700; width: 28px; height: 28px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); box-shadow: 0 0 12px #f5c518; display: flex; align-items: center; justify-content: center;"><span style="transform: rotate(45deg); font-size: 14px; font-weight: 700; color: #541700; font-family: 'Noto Sans Devanagari', sans-serif;">ॐ</span></div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -28]
  });

  const marker = L.marker([CONFIG.venueLat, CONFIG.venueLng], { icon: goldIcon }).addTo(mapInstance);
  marker.bindPopup(`<b>🪔 ${CONFIG.venueName}</b><br><small>${CONFIG.fullAddress}</small>`).openPopup();
}

// Intersection Observer for Smooth Scroll Reveal
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));
}

// Background Music Player Logic (HTML5 Audio with Loop & Autoplay Support)
let bgAudio = null;

function initMusicPlayer() {
  const playBtn = document.getElementById('musicPlayBtn');
  const musicStatusEl = document.getElementById('musicStatus');
  const trackTitleEl = document.getElementById('musicTrackTitle');

  if (trackTitleEl && CONFIG.musicTrackName) {
    trackTitleEl.textContent = CONFIG.musicTrackName;
  }

  // Bind to the DOM Audio Element
  bgAudio = document.getElementById('bgAudio');
  if (!bgAudio) {
    bgAudio = new Audio(CONFIG.audioFile);
    bgAudio.id = 'bgAudio';
  }
  
  bgAudio.loop = true;
  bgAudio.volume = 0.85;

  const updateStatus = (playing) => {
    isAudioPlaying = playing;
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.mr;
    if (playBtn) {
      playBtn.innerHTML = playing ? '❚❚' : '▶';
      if (playing) {
        playBtn.classList.add('playing');
      } else {
        playBtn.classList.remove('playing');
      }
    }
    if (musicStatusEl) {
      musicStatusEl.textContent = playing ? dict.musicPlaying : dict.musicPaused;
    }
  };

  bgAudio.addEventListener('play', () => updateStatus(true));
  bgAudio.addEventListener('pause', () => updateStatus(false));
  bgAudio.addEventListener('ended', () => updateStatus(false));

  // Function to safely trigger play
  const playAudio = () => {
    if (bgAudio && bgAudio.paused) {
      bgAudio.play().then(() => {
        updateStatus(true);
      }).catch((err) => {
        // Autoplay policy prevented immediate playback
        console.log("Autoplay waiting for user gesture:", err);
      });
    }
  };

  // Attempt autoplay immediately
  playAudio();

  // Ensure playback starts on first touch/click/scroll/keypress
  const startAudioOnGesture = () => {
    if (bgAudio && bgAudio.paused) {
      playAudio();
    }
    ['click', 'touchstart', 'scroll', 'keydown', 'mousemove'].forEach(evt => {
      document.removeEventListener(evt, startAudioOnGesture);
    });
  };

  ['click', 'touchstart', 'scroll', 'keydown', 'mousemove'].forEach(evt => {
    document.addEventListener(evt, startAudioOnGesture, { once: true, passive: true });
  });

  // Auspicious Entry Modal Button Logic
  const entryModal = document.getElementById('entryModal');
  const entryOpenBtn = document.getElementById('entryOpenBtn');

  if (entryOpenBtn && entryModal) {
    entryOpenBtn.addEventListener('click', () => {
      if (bgAudio) {
        bgAudio.play().then(() => {
          updateStatus(true);
        }).catch(e => console.log(e));
      }
      entryModal.classList.add('hidden');
    });
  }

  // Play/Pause toggle button click
  if (playBtn) {
    playBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (bgAudio.paused) {
        bgAudio.play().then(() => updateStatus(true)).catch(err => console.log(err));
      } else {
        bgAudio.pause();
        updateStatus(false);
      }
    });
  }
}
