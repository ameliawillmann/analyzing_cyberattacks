// ==== Footnotes Toggle ====
function toggleFootnotes() {
  const wrapper = document.getElementById('footnotesWrapper');
  const btn = document.getElementById('toggleSourcesBtn');
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
