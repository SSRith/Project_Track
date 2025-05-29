// Building image galleries
const buildingGalleries = {
  BB: [
    { src: "images/gallery/bb/bb1.jpg", caption: "Main entrance of Birmingham Block" },
    { src: "images/gallery/bb/bb2.jpg", caption: "Computer lab inside BB" }
  ],
  BHS: [
    { src: "images/gallery/bhs/bhs1.jpg", caption: "Front desk for advising at BHS" }
  ],
  CP: [
    { src: "images/gallery/cp/cp1.jpg", caption: "Engineering lab in Cherry Parkes" },
    { src: "images/gallery/cp/cp2.jpg", caption: "Study lounge with skylights" }
  ],
  Court17: [
    { src: "images/gallery/court17/court1.jpg", caption: "Court 17 student housing" }
  ],
  DOU: [
    { src: "images/gallery/dou/dou1.jpg", caption: "Science lab in Dougan" }
  ],
  GWP: [
    { src: "images/gallery/gwp/gwp1.jpg", caption: "Library resources in GWP" }
  ],
  HAR: [
    { src: "images/gallery/har/har1.jpg", caption: "STEM facilities at Harmon" }
  ],
  JOY: [
    { src: "images/gallery/joy/joy1.jpg", caption: "Lecture hall in Russell T. Joy" }
  ],
  KEY: [
    { src: "images/gallery/key/key1.jpg", caption: "Keystone lab" }
  ],
  LBH: [
    { src: "images/gallery/lbh/lbh1.jpg", caption: "Laborers Hall facility" }
  ],
  MAT: [
    { src: "images/gallery/mat/mat1.jpg", caption: "Mattress Factory workspace" },
    { src: "images/gallery/mat/mat2.jpg", caption: "Project area inside MAT" }
  ],
  MDS: [
    { src: "images/gallery/mds/mds1.jpg", caption: "Classroom in McDonald Smith" }
  ],
  MLG: [
    { src: "images/gallery/mlg/mlg1.jpg", caption: "Milgard Hall entrance" }
  ],
  WPH: [
    { src: "images/gallery/wph/wph1.jpg", caption: "Event space in WPH" }
  ],
  PNK: [
    { src: "images/gallery/pnk/pnk1.jpg", caption: "Pinkerton building lab" }
  ],
  SCI: [
    { src: "images/gallery/sci/sci1.jpg", caption: "Science building front view" }
  ],
  SNO: [
    { src: "images/gallery/sno/sno1.jpg", caption: "Snoqualmie building entrance" }
  ],
  TPS: [
    { src: "images/gallery/tps/tps1.jpg", caption: "Innovation space at TPS" }
  ],
  TLB: [
    { src: "images/gallery/tlb/tlb1.jpg", caption: "Library zones in TLB" }
  ],
  UWY: [
    { src: "images/gallery/uwy/uwy1.jpg", caption: "University Y recreation center" }
  ],
  WG: [
    { src: "images/gallery/wg/wg1.jpg", caption: "Classroom in Walsh Gardner" }
  ],
  WCG: [
    { src: "images/gallery/wcg/wcg1.jpg", caption: "West Coast Grocery building" }
  ],
  WHT: [
    { src: "images/gallery/wht/wht1.jpg", caption: "Whitney building view" }
  ]
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