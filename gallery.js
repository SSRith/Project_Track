// Building image galleries
const buildingGalleries = {
  BB: [
    { src: "images/gallery/bb1.jpg", caption: "Main entrance of Birmingham Block" },
    { src: "images/gallery/bb2.jpg", caption: "Computer lab inside BB" }
  ],
  BHS: [
    { src: "images/gallery/bhs1.jpg", caption: "Front desk for advising at BHS" }
  ],
  CP: [
    { src: "images/gallery/cp1.jpg", caption: "Engineering lab in Cherry Parkes" },
    { src: "images/gallery/cp2.jpg", caption: "Study lounge with skylights" }
  ],
  // Continue for other buildings
};

function showGallery(code) {
  const modal = document.getElementById("galleryModal");
  const galleryTitle = document.getElementById("galleryTitle");
  const galleryDesc = document.getElementById("galleryDesc");
  const galleryImages = document.getElementById("galleryImages");

  const building = buildings[code];

  if (building) {
    galleryTitle.textContent = `${building.name} Gallery`;
    galleryDesc.textContent = building.description || "";
  } else {
    galleryTitle.textContent = `${code} Gallery`;
    galleryDesc.textContent = "";
  }

  galleryImages.innerHTML = "";

  const images = buildingGalleries[code];
  if (images && images.length) {
    images.forEach(item => {
      const wrapper = document.createElement("div");
      wrapper.className = "flex flex-col items-center";

      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.caption || "Building photo";
      img.className = "rounded border-2 border-black mb-2";

      const caption = document.createElement("p");
      caption.textContent = item.caption || "";
      caption.className = "text-sm text-center font-comic-neue";

      wrapper.appendChild(img);
      wrapper.appendChild(caption);
      galleryImages.appendChild(wrapper);
    });
  } else {
    galleryImages.innerHTML = "<p>No images available.</p>";
  }

  modal.classList.remove("hidden");
}


function closeGallery() {
  document.getElementById("galleryModal").classList.add("hidden");
}
