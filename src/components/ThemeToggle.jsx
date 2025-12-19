export default function ThemeToggle() {
  const toggleTheme = () => {
    const html = document.documentElement;
    html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-sm btn-circle absolute top-4 right-4"
    >
      🌗
    </button>
  );
}
