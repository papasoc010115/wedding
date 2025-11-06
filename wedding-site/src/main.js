import './style.css'

// Wedding date - change this to your wedding date
const weddingDate = new Date('2025-12-15T15:00:00').getTime();

// Countdown Timer
function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

// Render the app
document.querySelector('#app').innerHTML = `
  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <h1>Sarah & Michael</h1>
      <p class="date">December 15, 2025</p>
      <p style="font-size: 1.2rem; margin-bottom: 1rem;">We're getting married!</p>
      <div class="countdown" id="countdown">
        <div class="countdown-item">
          <span class="countdown-number" id="days">0</span>
          <span class="countdown-label">Days</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-number" id="hours">0</span>
          <span class="countdown-label">Hours</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-number" id="minutes">0</span>
          <span class="countdown-label">Minutes</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-number" id="seconds">0</span>
          <span class="countdown-label">Seconds</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Our Story Section -->
  <section class="story-section">
    <div class="container">
      <div class="section-title">
        <h2>Our Love Story</h2>
        <p class="subtitle">How we met and fell in love</p>
      </div>
      <div class="story-grid">
        <div class="story-card">
          <img src="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600" alt="How we met">
          <h3>How We Met</h3>
          <p>It was a beautiful spring day at the local coffee shop. Sarah was reading her favorite book when Michael accidentally spilled coffee on her table. What started as an apology turned into a 3-hour conversation that neither of us wanted to end.</p>
        </div>
        <div class="story-card">
          <img src="https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=600" alt="First date">
          <h3>First Date</h3>
          <p>Our first official date was at an Italian restaurant downtown. Michael tried to impress Sarah with his knowledge of wine, but ended up ordering the dessert wine for dinner. We laughed so hard that night, and we knew something special was beginning.</p>
        </div>
        <div class="story-card">
          <img src="https://images.pexels.com/photos/1024975/pexels-photo-1024975.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Proposal">
          <h3>The Proposal</h3>
          <p>On a sunset beach walk, Michael got down on one knee and asked Sarah to be his forever. With tears of joy and sand in our shoes, she said YES! It was the perfect moment in our perfect love story.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Couple Section -->
  <section class="couple-section">
    <div class="container">
      <div class="section-title">
        <h2>The Happy Couple</h2>
        <p class="subtitle">Meet the bride and groom</p>
      </div>
      <div class="couple-grid">
        <div class="couple-card">
          <img src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Bride">
          <h3>Sarah Anderson</h3>
          <p class="role">The Bride</p>
          <p>A passionate artist and teacher who loves painting, hiking, and spending time with family. Sarah brings joy and creativity to everything she does, and her smile lights up every room.</p>
        </div>
        <div class="couple-card">
          <img src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Groom">
          <h3>Michael Roberts</h3>
          <p class="role">The Groom</p>
          <p>A dedicated architect and music enthusiast who enjoys playing guitar, cooking, and exploring new places. Michael's kindness and humor make every day an adventure worth sharing.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Event Details Section -->
  <section class="event-section">
    <div class="container">
      <div class="section-title">
        <h2>When & Where</h2>
        <p class="subtitle">Join us on our special day</p>
      </div>
      <div class="event-grid">
        <div class="event-card">
          <div class="event-icon">💒</div>
          <h3>Ceremony</h3>
          <p class="time">3:00 PM</p>
          <p class="location">St. Mary's Church</p>
          <p class="address">123 Church Street<br>Springfield, ST 12345</p>
        </div>
        <div class="event-card">
          <div class="event-icon">🥂</div>
          <h3>Reception</h3>
          <p class="time">5:00 PM</p>
          <p class="location">Grand Ballroom</p>
          <p class="address">456 Celebration Avenue<br>Springfield, ST 12345</p>
        </div>
        <div class="event-card">
          <div class="event-icon">💃</div>
          <h3>After Party</h3>
          <p class="time">9:00 PM</p>
          <p class="location">Skyline Rooftop Bar</p>
          <p class="address">789 Nightlife Drive<br>Springfield, ST 12345</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Gallery Section -->
  <section class="gallery-section">
    <div class="container">
      <div class="section-title">
        <h2>Our Memories</h2>
        <p class="subtitle">Moments we've shared together</p>
      </div>
      <div class="gallery-grid">
        <div class="gallery-item">
          <img src="https://images.pexels.com/photos/1024975/pexels-photo-1024975.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Gallery 1">
        </div>
        <div class="gallery-item">
          <img src="https://images.pexels.com/photos/1024968/pexels-photo-1024968.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Gallery 2">
        </div>
        <div class="gallery-item">
          <img src="https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Gallery 3">
        </div>
        <div class="gallery-item">
          <img src="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Gallery 4">
        </div>
        <div class="gallery-item">
          <img src="https://images.pexels.com/photos/1024969/pexels-photo-1024969.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Gallery 5">
        </div>
        <div class="gallery-item">
          <img src="https://images.pexels.com/photos/1024970/pexels-photo-1024970.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Gallery 6">
        </div>
      </div>
    </div>
  </section>

  <!-- RSVP Section -->
  <section class="rsvp-section">
    <div class="container">
      <div class="section-title">
        <h2>RSVP</h2>
        <p class="subtitle">We hope you can join us on our special day</p>
      </div>
      <form class="rsvp-form" id="rsvpForm">
        <div class="form-group">
          <label for="name">Full Name *</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email Address *</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="guests">Number of Guests *</label>
          <select id="guests" name="guests" required>
            <option value="">Select...</option>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5+ Guests</option>
          </select>
        </div>
        <div class="form-group">
          <label for="attendance">Will you attend? *</label>
          <select id="attendance" name="attendance" required>
            <option value="">Select...</option>
            <option value="yes">Joyfully Accept</option>
            <option value="no">Regretfully Decline</option>
          </select>
        </div>
        <div class="form-group">
          <label for="message">Special Message (Optional)</label>
          <textarea id="message" name="message" placeholder="Dietary restrictions, song requests, or well wishes..."></textarea>
        </div>
        <button type="submit" class="submit-btn">Send RSVP</button>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <h3>Sarah & Michael</h3>
    <p>December 15, 2025</p>
    <p style="margin-top: 2rem; opacity: 0.6;">Can't wait to celebrate with you!</p>
  </footer>
`;

// Update countdown every second
function startCountdown() {
  setInterval(() => {
    const { days, hours, minutes, seconds } = updateCountdown();

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  }, 1000);
}

// Initialize countdown
startCountdown();

// Handle RSVP form submission
document.getElementById('rsvpForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  // Here you would normally send this to a backend/database
  console.log('RSVP Submitted:', data);

  alert('Thank you for your RSVP! We look forward to celebrating with you.');
  e.target.reset();
});

// Smooth scroll for anchor links (if you add navigation)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
