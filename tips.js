
async function myFunction(button, color) {
  button.style.color = color;
  button.innerHTML = "SENDING...";

  const name = document.getElementById("tipName").value.trim() || "Anonymous";
  const major = document.getElementById("tipMajor").value.trim() || "Student";
  const tip = document.getElementById("tipBox").value.trim();

  if (!tip) {
    alert("Please enter a tip!");
    button.innerHTML = "SUBMIT TIP";
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/tips", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, Major: major, tip })
    });

    const result = await res.json();

    if (res.ok) {
      alert(result.message || "Tip submitted!");
      document.getElementById("tipBox").value = "";
      document.getElementById("tipName").value = "";
      document.getElementById("tipMajor").value = "";
      loadTips();
    } else {
      alert("Error: " + result.error);
    }
  } catch (err) {
    console.error(err);
    alert("Could not connect to backend.");
  } finally {
    button.innerHTML = "SUBMIT TIP";
  }
}

async function loadTips() {
  try {
    const res = await fetch("http://localhost:5000/tips");
    const tips = await res.json();
    const container = document.getElementById("tipList");
    container.innerHTML = "";

    const colors = ["bg-red-500", "bg-green-500", "bg-blue-500", "bg-yellow-500", "bg-purple-500", "bg-pink-500"];

    tips.forEach(({ name, Major, tip }) => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      const div = document.createElement("div");
      div.className = "comic-panel p-4 bg-white border-2 border-black rounded-lg shadow";
      div.innerHTML = `
        <div class="flex items-center mb-3">
          <div class="w-12 h-12 ${randomColor} rounded-full mr-3"></div>
          <div>
            <h3 class="font-bold">${name}</h3>
            <p class="text-sm">${Major}</p>
          </div>
        </div>
        <div class="speech-bubble">
          <p class="text-black">"${tip}"</p>
        </div>
      `;
      container.appendChild(div);
    });

  } catch (err) {
    console.error("Error loading tips:", err);
  }
}


document.addEventListener("DOMContentLoaded", loadTips);