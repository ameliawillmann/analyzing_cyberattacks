// ==== Footnotes Toggle ====
// Supports both single (legacy) and multi-button pages
function toggleFootnotes() {
  toggleFootnotesById('footnotesWrapper', document.getElementById('toggleSourcesBtn'));
}

function toggleFootnotesById(wrapperId, btn) {
  const wrapper = document.getElementById(wrapperId);
  if (!wrapper || !btn) return;

  const isOpen = wrapper.classList.contains('open');
  wrapper.classList.toggle('open');
  btn.textContent = isOpen ? "View Sources" : "Hide Sources";

  if (!isOpen) {
    setTimeout(() => {
      wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  }
}
