(() => {
  // Select the 3D model and hotspots
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");

  // Placeholder array for hotspot information
  const hotspotInfo = [
    {
      title: "",
      text: "",
      image: "images/",
    },
  ];

  // Function to load and display information for hotspots
  function loadInfo() {
    hotspotInfo.forEach((hotspotInfoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index + 1}`);

      console.log(selected);
      console.log(hotspotInfoBox.title);
      console.log(hotspotInfoBox.text);
    });
  }

  // Function to set initial visibility of hotspots
  function modelLoaded() {
    hotspots.forEach((hotspot) => {
      hotspot.style.display = "block";
    });
  }

  // Load initial hotspot information
  loadInfo();

  // Function to display information when a hotspot is hovered over
  function showInfo() {
    let selected = document.querySelector(`#${this.getAttribute("slot")}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  // Function to hide information when the mouse leaves a hotspot
  function hideInfo() {
    let selected = document.querySelector(`#${this.getAttribute("slot")}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  // Event listener for when the 3D model is loaded
  model.addEventListener("load", modelLoaded);

  // Event listeners for hotspot interactions
  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });
})();
