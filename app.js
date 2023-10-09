// Sample data structure to store scheduled visitors
const scheduledVisitors = [];

// Function to schedule an appointment
function scheduleAppointment() {
    const visitorName = document.getElementById("visitorName").value;
    const appointmentDate = document.getElementById("appointmentDate").value;

    // Validate input
    if (visitorName === "" || appointmentDate === "") {
        alert("Please enter visitor name and appointment date.");
        return;
    }

    // Create a new visitor object
    const visitor = {
        name: visitorName,
        appointmentDate: new Date(appointmentDate),
    };

    // Add the visitor to the list
    scheduledVisitors.push(visitor);

    // Clear input fields
    document.getElementById("visitorName").value = "";
    document.getElementById("appointmentDate").value = "";

    // Update the visitor list
    updateVisitorList();
}

// Function to update the visitor list
function updateVisitorList() {
    const visitorList = document.getElementById("visitorList");
    visitorList.innerHTML = "";

    scheduledVisitors.forEach((visitor) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${visitor.name} - ${visitor.appointmentDate.toLocaleString()}`;
        visitorList.appendChild(listItem);
    });
}
