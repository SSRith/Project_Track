// async function myFunction(element, color) {
//   element.style.color = color;
//   element.innerHTML = "YOU CLICKED ME!";
//   try {
      
//       const res = await fetch('http://localhost:5000/tips');

//       console.log("Response status:", res.status);

//       const text = await res.text();
//       console.log("Fetched text:", text);

//       alert("Backend says: " + text);
//     } catch (error) {
//       console.error("Fetch failed:", error);
//       alert("Error talking to the backend.");
//     }
// }
// // function storeText(){
//   var text = document.getElementById("tipBox").value;
//   console.log(text);
// }
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
      loadTips(); // reload tips
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
    const res = await fetch("http://localhost:5000/tips", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    console.log("res =" + res);
    const tips = await res.json();
    console.log("tip = "+ tips);
    const container = document.getElementById("tipList");
    container.innerHTML = "";

    tips.forEach(({ name, Major, tip }) => {
      const div = document.createElement("div");
      div.className = "comic-panel p-4 bg-yellow-50 border border-black rounded shadow";
      div.innerHTML = `
        <h4 class="font-bold">${name} <span class="text-sm text-gray-500">(${Major})</span></h4>
        <p class="mt-2 text-black italic">"${tip}"</p>
      `;
      container.appendChild(div);
    });
  } catch (err) {
    console.error("Error loading tips:", err);
  }
}

document.addEventListener("DOMContentLoaded", loadTips);




