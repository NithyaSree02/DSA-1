document.addEventListener("DOMContentLoaded", function() {
    var descriptionTexts = document.querySelectorAll(".description-text");
    descriptionTexts.forEach(function(descriptionText) {
        descriptionText.addEventListener("click", function() {
            var rideDescription = this.nextElementSibling;
            if (rideDescription.style.display === "none") {
                rideDescription.style.display = "block";
            } else {
                rideDescription.style.display = "none";
            }
        });
    });
});
