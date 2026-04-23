// * Registro de icones SVG locais (sem dependencia de FontAwesome)
const icons = [
  {
    className: "fa-building-columns",
    svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v2H3zM5 19h14v2H5zM6 9h2v8H6zM11 9h2v8h-2zM16 9h2v8h-2zM12 3 3 6h18z"/></svg>`,
  },
  {
    className: "fa-location",
    svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 4.7 5.5 11.7 6.2 12.5a1 1 0 0 0 1.6 0C13.5 20.7 19 13.7 19 9a7 7 0 0 0-7-7zm0 10.2A3.2 3.2 0 1 1 12 5.8a3.2 3.2 0 0 1 0 6.4z"/></svg>`,
  },
  {
    className: "fa-moon",
    svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 2a9.5 9.5 0 1 0 7.5 15.3A8 8 0 1 1 14.5 2z"/></svg>`,
  },
  {
    className: "fa-sun",
    svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M11 1h2v4h-2zM11 19h2v4h-2zM1 11h4v2H1zM19 11h4v2h-4zM4.2 5.6l1.4-1.4L8.4 7 7 8.4zM15.6 17l1.4-1.4 2.8 2.8-1.4 1.4zM15.6 7l2.8-2.8 1.4 1.4-2.8 2.8zM4.2 18.4 7 15.6 8.4 17l-2.8 2.8z"/></svg>`,
  },
  {
    className: "fa-book",
    svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H19v17H7a2 2 0 0 0-2 2h14v1H6.5A3.5 3.5 0 0 1 3 18.5v-14zM6 4h11v13H7a3.4 3.4 0 0 0-1 .2z"/></svg>`,
  },
  {
    className: "fa-desktop",
    svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h18v12H3zM9 18h6v2H9zM7 20h10v1H7z"/></svg>`,
  },
  {
    className: "fa-microscope",
    svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h4v2H9zM11 5h2v4h-2zM8 9h8v2H8zM10 11h4v4a3 3 0 0 1-3 3H8v-2h3a1 1 0 0 0 1-1v-2h-2zM4 19h16v2H4zM15 13h3v2h-3z"/></svg>`,
  },
  {
    className: "fa-fork-knife",
    svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h1v7h1V2h1v7h1V2h1v8a2 2 0 0 1-2 2v10H8V12a2 2 0 0 1-2-2V2h1zM16 2c1.7 0 3 1.3 3 3v17h-2v-6h-2V5c0-1.7.3-3 1-3z"/></svg>`,
  },
  {
    className: "fa-court-sport",
    svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 4h20v16H2zM11 4h2v16h-2z"/><circle cx="7" cy="12" r="2.2"/><circle cx="17" cy="12" r="2.2"/></svg>`,
  },
  {
    className: "fa-accessible-icon",
    svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="2"/><path d="M8 9h8v2h-3v2.8l4.2 4.2-1.4 1.4-3.4-3.4-2.4 4H8.2l2.8-4.7V11H8z"/></svg>`,
  },
  {
    className: "fa-phone",
    svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.7 15.7 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2c1 .3 2.1.5 3.2.5a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.7 22 2 13.3 2 2a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.1.2 2.2.5 3.2a1 1 0 0 1-.2 1z"/></svg>`,
  },
  {
    className: "fa-book-open",
    svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 5.5A3.5 3.5 0 0 1 5.5 2H12v17H6a2 2 0 0 0-2 2V5.5zM22 5.5V21a2 2 0 0 0-2-2h-6V2h6.5A3.5 3.5 0 0 1 22 5.5z"/></svg>`,
  },
  {
    className: "fa-accessibility",
    svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="4.5" r="2.5"/><path d="M5 9h14v2h-5v11h-2v-5h-2v5H8V11H5z"/></svg>`,
  },
  {
    className: "increase-font",
    svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 20 8 6h2l5 14h-2l-1.2-3.5H6.2L5 20H3zm3.8-5.5h4.4L9 8h-.4L6.8 14.5zM18 8h2v3h3v2h-3v3h-2v-3h-3v-2h3V8z"/></svg>`,
  },
  {
    className: "fa-decrease-font",
    svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 20 8 6h2l5 14h-2l-1.2-3.5H6.2L5 20H3zm3.8-5.5h4.4L9 8h-.4L6.8 14.5zM16 12h7v2h-7z"/></svg>`,
  },
  {
    className: "fa-text-slash",
    svg: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h18v2h-8v14h-2V6H3zM4.7 20.7l14-14 1.4 1.4-14 14z"/></svg>`,
  },
];

function renderSVGs() {
  icons.forEach((icon) => {
    const elements = document.querySelectorAll(`i.${icon.className}`);
    elements.forEach((element) => {
      element.innerHTML = icon.svg;
    });
  });
}

function updateContrastIcon() {
  const iconContrast = document.getElementById("iconContrast");
  if (!iconContrast) return;

  const iconClass = iconContrast.classList.contains("fa-sun")
    ? "fa-sun"
    : "fa-moon";
  const iconData = icons.find((icon) => icon.className === iconClass);

  if (iconData) {
    iconContrast.innerHTML = iconData.svg;
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderSVGs);
} else {
  renderSVGs();
}
