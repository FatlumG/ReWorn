const barIcn = document.getElementById("bars");
const sidebar = document.querySelector(".navbar");
const sidebarItems = document.querySelectorAll(".nav-link");
const xmark = document.getElementById("xmark");

barIcn.addEventListener("click", () => {
  sidebar.classList.add("show");
  xmark.style.transform = "rotate(360deg)";

  // Apply styles to each item in the sidebar
  sidebarItems.forEach((item) => {
    item.style.transform = "translateX(0)";
    item.style.opacity = "1";
  });
});

xmark.addEventListener("click", () => {
  sidebar.classList.remove("show");
  xmark.style.transform = "rotate(0deg)";
  //Revert the style as the begining
  sidebarItems.forEach((item) => {
    item.style.transform = "translateX(20px)";
    item.style.opacity = "0";
  });
});

sidebarItems.forEach((item) => {
  item.addEventListener("click", () => {
    sidebar.classList.remove("show");
    //Revert the style as the begining(also when clicking other than x-mark)
    sidebarItems.forEach((item) => {
      item.style.transform = "translateX(20px)";
      item.style.opacity = "0";
    });
  });
});

// SIDEBAR - END
// ====================================================
