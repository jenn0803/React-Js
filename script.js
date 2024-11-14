// 1. Prevent Form Submission and Alert Data
 $("#contactForm").on("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    var name = $("#name").val();
    var email = $("#email").val();
    alert("Name: " + name + "\nEmail: " + email);
  });

  // 2. Update Cities based on Selected State
  const stateCityMap = {
    gujrat: ["surat", "ahamdabad", "Rajkot"],
    rajesthan: ["udaipur", "jaipur", "dholakpur"],
    up: ["kanpur", "jaunpur", "mirzapur"],
  };

  $("#state").on("change", function () {
    const selectedState = $(this).val();
    const cities = stateCityMap[selectedState] || [];
    const citySelect = $("#city");
    citySelect.empty();
    cities.forEach((city) => {
      citySelect.append(new Option(city, city));
    });
  });

  // 3. Toggle Div Visibility
  $("#toggleBtn").click(function () {
    $("#myDiv").toggle();
  });

  // 4. jQuery Image Slider
  var images = $("#slider img");
  var currentIndex = 0;

  function showImage(index) {
    images.hide();
    images.eq(index).show();
  }

  $("#nextBtn").click(function () {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  $("#prevBtn").click(function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  // 5. Simple Client-Side Validation
  $("#validationForm").on("submit", function (event) {
    var textInput = $("#textInput").val();
    if (textInput === "") {
      event.preventDefault(); // Prevent form submission
      $("#error-message").text("This field is required.");
    } else {
      $("#error-message").text(""); // Clear error message
    }
  });
