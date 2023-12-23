function submitAppointment() {
    const patientName = document.getElementById('patientName').value;
    const appointmentDate = document.getElementById('appointmentDate').value;

    // Validate input (you can add more validation)
    if (!patientName || !appointmentDate) {
        alert('Please fill in all fields');
        return;
    }

    // Simulate a backend API call (you will replace this with actual backend logic)
    const appointmentDetails = {
        patientName: patientName,
        appointmentDate: appointmentDate
    };

    // Display confirmation message
    const confirmationDiv = document.getElementById('confirmation');
    confirmationDiv.innerHTML = `<p>Appointment booked for ${appointmentDetails.patientName} on ${appointmentDetails.appointmentDate}</p>`;
}
