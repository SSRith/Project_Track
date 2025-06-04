// Building image galleries
const buildingGalleries = {
  BB: [
    { src: "images/gallery/bb/bb1.jpg", caption: "The front entrance of Birmingham Block, showcasing its historic brick exterior." },
    { src: "images/gallery/bb/bb2.jpg", caption: "Interior mural and casual seating inside BB, perfect for studying or relaxing." }
  ],
  BHS: [
    { src: "images/gallery/bhs/bhs1.jpg", caption: "BHS building view from Pac AVE" }
  ],
  CP: [
    { src: "images/gallery/cp/cp1.jpg", caption: "Main entrance of Cherry Parkes with UW signage and CP/MDS markers." }
  ],
  Court17: [
    { src: "images/gallery/court17/court1.jpg", caption: "Main exterior of Court 17 Student Housing with red-brick modern design." },
    { src: "images/gallery/court17/court2.jpg", caption: "Rooftop courtyard of Court 17 with a view over downtown Tacoma." },
    { src: "images/gallery/court17/court3.jpg", caption: "Interior study area and student lounge inside Court 17." },
    { src: "images/gallery/court17/court4.jpg", caption: "Avenue C market in Court 17, stocked with snacks and essentials." },
    { src: "images/gallery/court17/court5.jpg", caption: "Shared kitchen and dining room in Court 17’s community space." }
  ],
  DOU: [
    { src: "images/gallery/dou/dou1.jpg", caption: "Main entrance to Dougan Hall, combining historic and modern architecture." },
    { src: "images/gallery/dou/dou2.jpg", caption: "Campus Safety & Security Office located within Dougan Hall." },
    { src: "images/gallery/dou/dou3.jpg", caption: "Milgard Undergraduate Advising office (Room 204) inside Dougan Hall." }
  ],
  GWP: [
    { src: "images/gallery/gwp/gwp1.jpg", caption: "Front view of the GWP building, a key academic and administrative space on campus." },
    { src: "images/gallery/gwp/gwp2.jpg", caption: "GWP 102 – Home to University Academic Advising, Global Affairs, and Career Development offices" },
    { src: "images/gallery/gwp/gwp3.jpg", caption: "The UW Tacoma Shop inside GWP, offering university apparel, supplies, and merchandise" }
  ],
  HAR: [
    // { src: "images/gallery/har/har1.jpg", caption: "STEM facilities at Harmon" }
  ],
  JOY: [
    { src: "images/gallery/joy/joy1.jpg", caption: "Exterior of Russell T. Joy building with symmetrical red-brick design." }
  ],
  KEY: [
    { src: "images/gallery/key/key1.jpg", caption: "Exterior view of the Keystone building, featuring modern architecture with large glass windows." },
    { src: "images/gallery/key/key2.jpg", caption: "Inside the Keystone building: faculty office hallway (Rooms 200–216)." }
  ],
  LBH: [
    { src: "images/gallery/lbh/lbh1.jpg", caption: "Laborers Hall facility" }
  ],
  MAT: [
    { src: "images/gallery/mat/mat1.jpg", caption: "The historic exterior of the Mattress Factory with ivy-covered brickwork." },
    { src: "images/gallery/mat/mat2.jpg", caption: "Front entrance to the Office of Student Life, located in MAT 103." },
    { src: "images/gallery/mat/mat3.jpg", caption: "Enrollment Services (Admissions, Financial Aid, Registrar) inside MAT 251." },
    { src: "images/gallery/mat/mat4.jpg", caption: "Hot Rod Dog—a cozy on-campus spot serving gourmet hot dogs, built into a classic car grill." },
    { src: "images/gallery/mat/mat5.jpg", caption: "Student lounge inside MAT with mounted TV, seating, and plenty of natural light." },
    { src: "images/gallery/mat/mat6.jpg", caption: "Common area with pool tables and UW Tacoma-branded furniture for students to hang out." }
  ],
  MDS: [
    { src: "images/gallery/mds/mds1.jpg", caption: "Entrance to the MDS building with prominent University of Washington Tacoma signage." },
    { src: "images/gallery/mds/mds2.jpg", caption: "UW Autism Center entrance located in McDonald Smith." }
  ],
  MLG: [
    { src: "images/gallery/mlg/mlg1.jpg", caption: "Front exterior of Milgard Hall, UW Tacoma's newest academic facility focused on innovation." },
    { src: "images/gallery/mlg/mlg2.jpg", caption: "AI Sandbox lab inside Milgard, powered by the Center for Business Analytics." },
    { src: "images/gallery/mlg/mlg3.jpg", caption: "Hallway inside Milgard School of Business, home to the Centers of Excellence." },
    { src: "images/gallery/mlg/mlg4.jpg", caption: "The Bamford Innovation Space with printing and tech access for students." },
    { src: "images/gallery/mlg/mlg5.jpg", caption: "Small group meeting room equipped with a flat screen and whiteboard." },
    { src: "images/gallery/mlg/mlg6.jpg", caption: "\"Building From the Forests\" exhibit showcasing Pacific Northwest logging history." }
  ],
  PNK: [
    { src: "images/gallery/pnk/pnk1.jpg", caption: "Historic facade of Pinkerton building covered in ivy, a visual landmark on campus." },
    { src: "images/gallery/pnk/pnk2.jpg", caption: "UW Office of Student Life, providing support services and community connections." },
  ],
  SCI: [
    { src: "images/gallery/sci/sci1.jpg", caption: "Exterior of the Science Building with modern glass and brick design, offering research and classroom spaces." },
    { src: "images/gallery/sci/sci2.jpg", caption: "Faculty office entrance in SCI 202 with a directory of professors." }
  ],
  SNO: [
    { src: "images/gallery/sno/sno1.jpg", caption: "Front entrance of Snoqualmie, framed by trees and sunlight." },
    { src: "images/gallery/sno/sno2.jpg", caption: "Multicultural Center inside SNO, decorated with international flags and open workspaces." },
    { src: "images/gallery/sno/sno3.jpg", caption: "Student success center with individual workstations and study zones." },
    { src: "images/gallery/sno/sno4.jpg", caption: "Makerspace lab with 3D printers and creative technology tools available for students." },
    { src: "images/gallery/sno/sno5.jpg", caption: "Spacious reading room with tall arched windows, steel beams, and classic industrial charm." }
  ],
  TLB: [
    { src: "images/gallery/tlb/tlb1.jpg", caption: "The front entrance of the TLB (Tioga Library Building), a modern facility with academic and student resources." },
    { src: "images/gallery/tlb/tlb2.jpg", caption: "Inside the Learning Commons — an open area with computers, study booths, and book stacks." },
    { src: "images/gallery/tlb/tlb3.jpg", caption: "Microfilm viewing station available for research and archival browsing." },
    { src: "images/gallery/tlb/tlb4.jpg", caption: "Art studio in the TLB, with easels and creative workspaces beneath stained glass windows." },
    { src: "images/gallery/tlb/tlb5.jpg", caption: "Print & Scan station inside the library, with tools for copying and digitizing documents." }
  ],
  UWY: [
    { src: "images/gallery/uwy/uwy1.jpg", caption: "Street view of the University Y Student Center, a modern recreational and student hub at UW Tacoma." },
    { src: "images/gallery/uwy/uwy2.jpg", caption: "Weight training and strength equipment in the gym area, featuring full-height windows for natural light." },
    { src: "images/gallery/uwy/uwy3.jpg", caption: "Center for Student Involvement—resources, events, and student leadership housed inside UWY." },
    { src: "images/gallery/uwy/uwy4.jpg", caption: "Full basketball court inside the Y, often used for intramurals and pick-up games." },
    { src: "images/gallery/uwy/uwy5.jpg", caption: "Indoor running track and cardio equipment wrapping around the second floor." },
    { src: "images/gallery/uwy/uwy6.jpg", caption: "Large climbing wall near the main entrance offering different levels of challenge." },
    { src: "images/gallery/uwy/uwy7.jpg", caption: "Reflection space with piano and seating, promoting wellness and mindfulness." },
    { src: "images/gallery/uwy/uwy8.jpg", caption: "Student kitchenette and quiet dining nook available near the Reflection Room." },
    { src: "images/gallery/uwy/uwy9.jpg", caption: "Lobby area featuring Tacoma’s Working Waterfront mural and student info tables." }
  ],
  WCG: [
    { src: "images/gallery/wcg/wcg1.jpg", caption: "Front of the historic West Coast Grocery building, now home to student services and support offices." },
    { src: "images/gallery/wcg/wcg2.jpg", caption: "Office of Indigenous Engagement, providing space and resources for Native student success." },
    { src: "images/gallery/wcg/wcg3.jpg", caption: "The family room “syayəʔadiʔ” (pronounced syah-yuh-ah-dee) — a quiet space for parenting students." }
  ],
  WG: [
    { src: "images/gallery/wg/wg1.jpg", caption: "Side entrance of the Walsh Gardner building, featuring red brick and the iconic UW mural." }
  ],
  WHT: [
    { src: "images/gallery/wht/wht1.jpg", caption: "Historic Whitney building with its preserved church-style architecture, now an academic space." }
  ],
  WPH: [
    { src: "images/gallery/wph/wph1.jpg", caption: "Main entrance of William W. Philip Hall, used for events, talks, and community gatherings." },
    { src: "images/gallery/wph/wph2.jpg", caption: "The Pantry inside WPH — a student-run food and essentials resource for the UW Tacoma community." }
  ]
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