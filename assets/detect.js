!(function() {
  "use strict";
  const o = {
      isOpen: !1,
      orientation: void 0
    },
    i = (o, i) => {
      window.dispatchEvent(
        new CustomEvent("devtoolschange", {
          detail: {
            isOpen: o,
            orientation: i
          }
        })
      );
    };
  setInterval(() => {
    const n = window.outerWidth - window.innerWidth > 160,
      e = window.outerHeight - window.innerHeight > 160,
      t = n ? "vertical" : "horizontal";
    (e && n) ||
    !(
      (window.Firebug &&
        window.Firebug.chrome &&
        window.Firebug.chrome.isInitialized) ||
      n ||
      e
    )
      ? (o.isOpen && i(!1, void 0), (o.isOpen = !1), (o.orientation = void 0))
      : ((o.isOpen && o.orientation === t) || i(!0, t),
        (o.isOpen = !0),
        (o.orientation = t));
  }, 500),
    "undefined" != typeof module && module.exports
      ? (module.exports = o)
      : (window.devtools = o);
})(),



  window.devtools.isOpen &&
    (window.location.href = "https://www.youtube.com/watch?v=Ney2Mafxvzw"),
  window.addEventListener("devtoolschange", o => {
    window.location.href = "https://www.youtube.com/watch?v=Ney2Mafxvzw";
  });
