async function myFunction(element, color) {
  element.style.color = color;
  element.innerHTML = "YOU CLICKED ME!";
  try {
      
      const res = await fetch('http://localhost:5000/tips');

      console.log("Response status:", res.status);

      const text = await res.text();
      console.log("Fetched text:", text);

      alert("Backend says: " + text);
    } catch (error) {
      console.error("Fetch failed:", error);
      alert("Error talking to the backend.");
    }
}

function storeText(){
  var text = document.getElementById("tipBox").value;
  console.log(text);
}
