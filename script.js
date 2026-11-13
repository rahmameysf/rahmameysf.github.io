const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const selected = button.dataset.filter;
    document.querySelectorAll(".project-card").forEach(card => {
      const categories = card.dataset.category.split(" ");
      card.classList.toggle("hidden", selected !== "all" && !categories.includes(selected));
    });
  });
});

const dialog = document.getElementById("caseDialog");
document.querySelectorAll(".case-link").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("dialogTitle").textContent = button.dataset.title;
    document.getElementById("dialogDetail").textContent = button.dataset.detail;
    dialog.showModal();
  });
});
document.getElementById("dialogClose").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});
