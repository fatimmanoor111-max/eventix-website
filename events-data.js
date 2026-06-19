const events = [
  {id:1,title:"Live Concert - The Weeknd",category:"concert",date:"Dec 20, 2025",time:"8:00 PM",location:"Madison Square Garden, NYC",price_min:24920,price_max:83720,image:"https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800", description:"Experience the global superstar live in concert! A night of unforgettable music and spectacular stage production."},
  {id:2,title:"Web Development Bootcamp",category:"workshop",date:"Jan 10-12, 2026",time:"Full Day",location:"Tech Hub, San Francisco",price:139720,image:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800", description:"Three days of intensive coding, covering React, Node.js, and modern CSS. Perfect for beginners and intermediate developers."},
  {id:3,title:"AI & Future Tech Conference 2026",category:"conference",date:"Feb 5, 2026",time:"9:00 AM",location:"Convention Center, Las Vegas",price:83720,price_type:"Early Bird",image:"https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800", description:"Join leading experts to discuss the latest breakthroughs in Artificial Intelligence, Machine Learning, and Robotics."},
];

// --- Helper function for price formatting (since prices now have ranges/types) ---
function formatPrice(event) {
    if (event.price_min && event.price_max) {
        return `Rs. ${event.price_min.toLocaleString('en-US')} - Rs. ${event.price_max.toLocaleString('en-US')}`;
    }
    let priceText = `Rs. ${event.price.toLocaleString('en-US')}`;
    if (event.price_type) {
        priceText += ` (${event.price_type})`;
    }
    return priceText;
}

// Event Details Page
if (document.getElementById('eventDetail')) {
  const params = new URLSearchParams(location.search);
  const id = parseInt(params.get('id'));
  const event = events.find(e => e.id === id);

  if (event) {
    document.getElementById('eventDetail').innerHTML = `
      <div class="container">
        <h1 style="text-align:center; margin-bottom:2rem; font-size:2.5rem; color:var(--primary);">${event.title}</h1>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:3rem;margin-top:2rem;align-items:start;">
          <img src="${event.image}" alt="${event.title}" style="width:100%;border-radius:20px;box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
          <div>
            <p style="margin-bottom:1rem; font-size:1.1rem;"><i class="fas fa-calendar" style="color:var(--accent);"></i> <strong>Date:</strong> ${event.date} | ${event.time}</p>
            <p style="margin-bottom:1rem; font-size:1.1rem;"><i class="fas fa-map-marker-alt" style="color:var(--accent);"></i> <strong>Venue:</strong> ${event.location}</p>
            <p style="margin-bottom:2rem; font-size:1.8rem; font-weight:bold; color:var(--dark);">
                <i class="fas fa-money-bill-wave" style="color:var(--primary);"></i> 
                Price: ${formatPrice(event)}
            </p>
            <p style="line-height:1.8; font-size:1.1rem; color:#555;">${event.description}</p>
            <a href="book.html?id=${event.id}" class="btn big" style="margin-top:3rem; padding:15px 40px; font-size:1.2rem;">Book Tickets Now</a>
          </div>
        </div>
      </div>`;
  } else {
     document.getElementById('eventDetail').innerHTML = `<h1 style="text-align:center; margin-top:5rem;">Event Not Found</h1>`;
  }
}

// (Keeping the rest of the JS for Events List and Booking pages, even though they aren't used for your 3 static events)
// Events List Page (No change, but deactivated as you only want 3 static cards)
if (document.getElementById('eventsGrid')) {
  // ... Original renderEvents and event listeners here (will not run as 'eventsGrid' ID is not in events.html)
}

// Booking Page
if (document.getElementById('bookingForm')) {
  const params = new URLSearchParams(location.search);
  const id = parseInt(params.get('id'));
  const event = events.find(e => e.id === id);

  if (event) {
    document.getElementById('bookingTitle').textContent = `Book Tickets - ${event.title}`;
    document.getElementById('bookingInfo').innerHTML = `
      <img src="${event.image}" style="width:100%;max-width:400px;border-radius:20px;">
      <h3>${event.title}</h3>
      <p>Date: ${event.date} | Location: ${event.location}</p>
      <p class="price" style="font-size:1.4rem; color:var(--primary);">${formatPrice(event)} per ticket</p>`; // Updated price display here

    const quantity = document.getElementById('quantity');
    const total = document.getElementById('totalPrice');
    
    // Use the base price for calculation (assuming event.price for simplicity)
    const basePrice = event.price || event.price_min; 
    
    quantity.addEventListener('change', () => total.textContent = (basePrice * quantity.value).toLocaleString('en-US'));

    document.getElementById('bookingForm').addEventListener('submit', e => {
      e.preventDefault();
      alert(`Congratulations! ${quantity.value} ticket(s) booked for ${event.title}!`);
    });

    total.textContent = (basePrice * 1).toLocaleString('en-US');
  }
}