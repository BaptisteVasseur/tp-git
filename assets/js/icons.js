// icons.js — injecte le sprite SVG dans le DOM pour permettre l'utilisation de <use>
(function () {
  // Calcul dynamique du chemin du sprite basé sur l'URL du script courant.
  var path = "/assets/icons/sprite.svg";
  try {
    var script = document.currentScript;
    if (!script) {
      // fallback: chercher le script par nom de fichier
      var scripts = document.getElementsByTagName("script");
      for (var i = scripts.length - 1; i >= 0; i--) {
        var s = scripts[i];
        if (s.src && s.src.indexOf("icons.js") !== -1) {
          script = s;
          break;
        }
      }
    }
    if (script && script.src) {
      // supposer la structure .../assets/js/icons.js -> sprite en ../icons/sprite.svg
      path = script.src.replace(/\/js\/icons\.js(\?.*)?$/, "/icons/sprite.svg");
    }
  } catch (e) {
    /* leave default path */
  }

  function rewriteUses() {
    // Remplace les références absolues vers le sprite par des fragments locales (#id)
    var uses = document.querySelectorAll("use");
    uses.forEach(function (u) {
      var href = u.getAttribute("href") || u.getAttribute("xlink:href");
      if (!href) return;
      var m = href.match(/#(icon-[\w-]+)/);
      if (m) {
        try {
          u.setAttribute("href", "#" + m[1]);
          // remove xlink:href for older browsers
          if (u.hasAttribute("xlink:href")) u.removeAttribute("xlink:href");
        } catch (e) {
          /* ignore */
        }
      }
    });
  }

  try {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", path, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var div = document.createElement("div");
          div.style.display = "none";
          div.innerHTML = xhr.responseText;
          document.body.insertBefore(div, document.body.firstChild);
          // After injecting the sprite, rewrite <use> hrefs to fragments
          rewriteUses();
        } else {
          // If sprite cannot be loaded, still try to rewrite in case the sprite was inlined manually
          rewriteUses();
          console.warn("Icon sprite not loaded, status: " + xhr.status);
        }
      }
    };
    xhr.send();
  } catch (e) {
    // fallback: attempt to rewrite uses anyway
    rewriteUses();
    console.warn("Icon sprite injection failed", e);
  }
})();
