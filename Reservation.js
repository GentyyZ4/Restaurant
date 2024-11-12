function submitReservation(event) {
    event.preventDefault();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
  
    if (date && time && guests && name && phone) {
      document.getElementById("reservationForm").reset();
      document.getElementById("confirmationMessage").style.display = "block";
      window.location.href = "Homepage.html";
    } else {
      alert("Please fill in all fields.");
    }
  }
  