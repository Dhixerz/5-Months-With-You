/**
 * 5 Months With You - Interactive Script
 * Handles transitions, iOS audio autoplay policies, video playback, and romantic particle effects.
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const screens = {
    1: document.getElementById('screen-1'),
    2: document.getElementById('screen-2'),
    3: document.getElementById('screen-3'),
    4: document.getElementById('screen-4')
  };

  const btnStart = document.getElementById('btn-start');
  const btnToStage3 = document.getElementById('btn-to-stage3');
  const btnToLetter = document.getElementById('btn-to-letter');
  const btnGift = document.getElementById('btn-gift');
  const backBtn = document.getElementById('back-btn');

  const videoSoda = document.getElementById('video-soda');
  const videoDigi = document.getElementById('video-digi');

  const soundBtn = document.getElementById('sound-btn');
  const soundOnIcon = soundBtn.querySelector('.sound-on');
  const soundOffIcon = soundBtn.querySelector('.sound-off');
  const soundLabel = soundBtn.querySelector('.sound-label');

  let currentScreen = 1;
  let isMuted = false; // Default: sound ON as requested

  // Pre-configure video attributes for maximum iOS / mobile compatibility
  [videoSoda, videoDigi].forEach(v => {
    if (v) {
      v.setAttribute('playsinline', '');
      v.setAttribute('webkit-playsinline', '');
      v.muted = isMuted;
    }
  });

  // =========================================================================
  // Screen Transition Logic
  // =========================================================================
  function goToScreen(targetScreenNumber, pushHistory = true) {
    if (currentScreen === targetScreenNumber) return;

    const prevScreen = screens[currentScreen];
    const nextScreen = screens[targetScreenNumber];

    if (prevScreen) {
      prevScreen.classList.remove('screen-active');
    }

    if (nextScreen) {
      nextScreen.classList.add('screen-active');
    }

    currentScreen = targetScreenNumber;
    handleScreenState(targetScreenNumber);

    if (pushHistory) {
      window.history.pushState({ screen: targetScreenNumber }, '', `#screen-${targetScreenNumber}`);
    }
  }

  function handleScreenState(screenNum) {
    if (screenNum === 1) {
      backBtn.classList.add('hidden');
      soundBtn.classList.add('hidden');
      pauseAndResetVideo(videoSoda);
      pauseAndResetVideo(videoDigi);
    } else if (screenNum === 2) {
      // Screen 2: Soda Pop Video
      backBtn.classList.remove('hidden');
      soundBtn.classList.remove('hidden');
      pauseAndResetVideo(videoDigi);
      playVideo(videoSoda);
    } else if (screenNum === 3) {
      // Screen 3: Digi Daga Portrait Video
      backBtn.classList.remove('hidden');
      soundBtn.classList.remove('hidden');
      pauseAndResetVideo(videoSoda);
      playVideo(videoDigi);
    } else if (screenNum === 4) {
      // Screen 4: Letter Page
      backBtn.classList.remove('hidden');
      soundBtn.classList.add('hidden');
      pauseAndResetVideo(videoSoda);
      pauseAndResetVideo(videoDigi);
    }
  }

  // =========================================================================
  // Video & Sound Controls
  // =========================================================================
  async function playVideo(videoEl) {
    if (!videoEl) return;
    videoEl.muted = isMuted;

    try {
      await videoEl.play();
    } catch (err) {
      console.warn('Playback error (possibly unmuted autoplay block):', err);
      // Fallback: If browser strictly prohibits unmuted autoplay, mute first, then play
      videoEl.muted = true;
      try {
        await videoEl.play();
        // If it plays muted due to browser policy, update UI state so user can unmute with one tap
        if (!isMuted) {
          soundLabel.textContent = 'Tap to Unmute';
        }
      } catch (fallbackErr) {
        console.error('Fatal video play error:', fallbackErr);
      }
    }
  }

  function pauseAndResetVideo(videoEl) {
    if (!videoEl) return;
    videoEl.pause();
    try {
      videoEl.currentTime = 0;
    } catch (e) {
      // Ignore if video is not yet seekable
    }
  }

  function updateSoundUI() {
    if (isMuted) {
      soundOnIcon.classList.add('hidden');
      soundOffIcon.classList.remove('hidden');
      soundLabel.textContent = 'Muted';
    } else {
      soundOnIcon.classList.remove('hidden');
      soundOffIcon.classList.add('hidden');
      soundLabel.textContent = 'Audio On';
    }
  }

  soundBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    isMuted = !isMuted;
    
    // Apply mute state to both videos
    if (videoSoda) videoSoda.muted = isMuted;
    if (videoDigi) videoDigi.muted = isMuted;

    // If currently on a video screen and unmuting, ensure it continues playing
    if (!isMuted) {
      const activeVideo = currentScreen === 2 ? videoSoda : currentScreen === 3 ? videoDigi : null;
      if (activeVideo && activeVideo.paused) {
        activeVideo.play().catch(console.error);
      }
    }

    updateSoundUI();
  });

  // =========================================================================
  // Navigation Event Handlers
  // =========================================================================

  // Step 1 -> Step 2
  btnStart.addEventListener('click', () => {
    // User interaction triggered here allows audio to play with sound on Safari
    goToScreen(2);
  });

  // Step 2 -> Step 3
  btnToStage3.addEventListener('click', () => {
    goToScreen(3);
  });

  // Step 3 -> Step 4
  btnToLetter.addEventListener('click', () => {
    goToScreen(4);
  });

  // Step 4: Final Link Click
  btnGift.addEventListener('click', (e) => {
    // Target is self, staying in the same tab as requested
    const targetUrl = 'https://love.for-you-always.my.id/gift-1789655270053';
    e.preventDefault();
    window.location.href = targetUrl;
  });

  // Back Navigation Click
  backBtn.addEventListener('click', () => {
    if (currentScreen > 1) {
      goToScreen(currentScreen - 1);
    }
  });

  // Browser / Phone Gesture History Support (e.g. Swipe Back on iPhone Safari)
  window.addEventListener('popstate', (e) => {
    if (e.state && typeof e.state.screen === 'number') {
      goToScreen(e.state.screen, false);
    } else {
      goToScreen(1, false);
    }
  });

  // Set initial state
  try {
    window.history.replaceState({ screen: 1 }, '', '#screen-1');
  } catch (e) {
    // Ignore in restrictive iframe environments
  }

  // Initialize UI state
  updateSoundUI();

  // =========================================================================
  // Romantic Floating Hearts Canvas
  // =========================================================================
  const canvas = document.getElementById('hearts-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const particleCount = 28;

    function resizeCanvas() {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }

    class FloatingHeart {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + 20;
        this.size = Math.random() * 14 + 10;
        this.speedY = Math.random() * 0.8 + 0.5;
        this.speedX = Math.sin(Math.random() * Math.PI * 2) * 0.4;
        this.angle = Math.random() * Math.PI * 2;
        this.angularSpeed = (Math.random() - 0.5) * 0.02;
        this.opacity = Math.random() * 0.45 + 0.2;
        // Soft romantic shades
        const colors = [
          'rgba(255, 77, 136, ',
          'rgba(255, 117, 140, ',
          'rgba(255, 182, 193, ',
          'rgba(254, 205, 211, '
        ];
        this.colorBase = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.y -= this.speedY;
        this.x += Math.sin(this.angle) * 0.5 + this.speedX;
        this.angle += this.angularSpeed;

        if (this.y < -30 || this.x < -30 || this.x > width + 30) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(Math.sin(this.angle) * 0.2);
        ctx.fillStyle = `${this.colorBase}${this.opacity})`;
        
        // Draw heart shape
        const s = this.size;
        ctx.beginPath();
        ctx.moveTo(0, s * 0.3);
        ctx.bezierCurveTo(-s * 0.5, -s * 0.3, -s, s * 0.1, 0, s);
        ctx.bezierCurveTo(s, s * 0.1, s * 0.5, -s * 0.3, 0, s * 0.3);
        ctx.fill();
        ctx.restore();
      }
    }

    function initParticles() {
      resizeCanvas();
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new FloatingHeart());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resizeCanvas);
    initParticles();
    animate();
  }
});
