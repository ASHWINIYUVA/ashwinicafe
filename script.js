// Function to calculate total budget
function calculateBudget() {
    const guests = parseInt(document.getElementById("guests").value);
    const venueCost = parseFloat(document.getElementById("venueCost").value);
    const cateringCost = parseFloat(document.getElementById("cateringCost").value);
    const decorCost = parseFloat(document.getElementById("decorCost").value);
    const otherCost = parseFloat(document.getElementById("otherCost").value);

    if (isNaN(guests) || isNaN(venueCost) || isNaN(cateringCost) || isNaN(decorCost) || isNaN(otherCost)) {
        document.getElementById("totalCost").innerText = "Please fill out all fields.";
        return;
    }

    // Calculate total costs
    const totalCatering = guests * cateringCost;
    const totalCost = venueCost + totalCatering + decorCost + otherCost;

    document.getElementById("totalCost").innerText = `Total Estimated Budget: $${totalCost.toFixed(2)}`;
}

// Event listener for contact form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting to a server

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    alert(`Thank you for contacting us, ${name}! We will get back to you shortly.`);
    document.getElementById("contactForm").reset(); // Reset form fields
});
