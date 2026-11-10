// Site settings. Edit these, nothing else needs to change.
const SITE = {
  // The server's public address, e.g. "123.45.67.89:27015". Leave empty to show
  // "find us in the server browser" instead of a Join button.
  serverAddress: "",
  // A Discord invite link, once there is one. Empty = "coming soon".
  discord: "",
};

// Join button: straight into the game through Steam, when there's an address.
(function () {
  const join = document.querySelectorAll("[data-join]");
  const note = document.querySelectorAll("[data-join-note]");
  join.forEach((el) => {
    if (SITE.serverAddress) {
      el.href = "steam://connect/" + SITE.serverAddress;
    } else {
      el.href = "#join";
    }
  });
  note.forEach((el) => {
    el.textContent = SITE.serverAddress
      ? "Or connect in the console: connect " + SITE.serverAddress
      : 'In Garry\'s Mod: Play Multiplayer, then search "RP Revisited".';
  });

  const discord = document.querySelectorAll("[data-discord]");
  discord.forEach((el) => {
    if (SITE.discord) {
      el.href = SITE.discord;
      el.textContent = "Join the Discord";
      el.classList.remove("is-off");
    }
  });

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
})();
