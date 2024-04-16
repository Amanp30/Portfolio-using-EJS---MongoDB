const form = document.getElementById("form");
const msgDiv = document.getElementById("showMessage");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  try {
    const formData = new FormData(form);
    const jsonObject = Object.fromEntries(formData.entries());

    const response = await fetch("/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonObject),
    });

    if (!response.ok) {
      const errorObj = await response.json();
      throw new Error(errorObj.message);
    }

    const data = await response.json();
    displayMessage(data.message, "SuccessMessage");
    form.reset();
  } catch (error) {
    console.error("Error submitting form:", error);
    displayMessage(error.message, "ErrorMessage", false);
  }
});

function displayMessage(message, type, disappearMsg = true) {
  msgDiv.textContent = message;
  msgDiv.className = type;
  if (disappearMsg)
    setTimeout(() => {
      msgDiv.textContent = "";
      msgDiv.className = "";
    }, 4000);
}
