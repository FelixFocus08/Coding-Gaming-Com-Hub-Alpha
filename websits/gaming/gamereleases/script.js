function switchFrame(i) {
  document.querySelectorAll('iframe').forEach((f, idx) => {
    f.style.display = idx === i ? 'block' : 'none';
  });
}
