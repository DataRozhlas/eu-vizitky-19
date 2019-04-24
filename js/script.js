﻿import { data } from "./data";

let host;
if (window.location.href.indexOf("irozhlas") === -1 && window.location.href.indexOf("localhost") === -1) {
  host = window.location.href.split("?")[0];
} else {
  host = "https://data.irozhlas.cz/eu-vizitky-19/";
}

function makeSelect() {
  const id = window.location.href.split("?")[1];
  if (id) {
    const filtered = data[id];

    if (!filtered) return;

    document.getElementById(id).scrollIntoView();
    window.scrollBy(0, -50);
  }
}

function makeTable() {
  const header = document.createElement("h1");
  header.appendChild(document.createTextNode("Evropský parlament"));

  const outList = document.createElement("ul");

  Object.keys(data).forEach((per) => {
    const entry = document.createElement("li");
    entry.id = per;
    entry.innerHTML = `
      <div class="right">
        <h2>
          <span class="cislo">${per.split("_")[0]}</span>
          <span>${data[per].jmeno}</span>
        </h2>
        <span class="strana">${data[per].partaj}</span>
        <span class="supplemental">${data[per].povolani}</span>
        ${data[per].pozn != null ? `<div><span class="supplemental">${data[per].pozn}</span></div>` : ""}
        <span class="share">Sdílet na <a class="share-link" href="#" data-share-link=${`https://www.facebook.com/sharer/sharer.php?u=${window.location.href.split("?")[0]}?${per}`}>Facebook</a> | <a class="share-link" href="#" data-share-link=${`https://twitter.com/home?status=${window.location.href.split("?")[0]}?${per}`}>Twitter</a></span>
        ${data[per].afile !== "x" ? `<div><audio class="player" src="${host}media/audio/${data[per].file}.mp3" preload="none" controls="yes"></audio></div>` : ""}
      </div>
      <div class="left">
        <img width="120" height="180" alt="${data[per].jmeno}" src="${`${host}media/foto/${data[per].file}.jpg`}">
      </div>
    `;
    // <a target="_blank" href="https://www.irozhlas.cz/volby/senatni-volby-2018/kandidati-vizitky/embed-vizitky-senatoru#' + data[per].file +'">Embed</a>
    outList.appendChild(entry);
  });

  const bottom = document.getElementById("bottom");
  bottom.appendChild(header);
  bottom.appendChild(outList);

  const shareLinks = document.getElementsByClassName("share-link");
  for (let i = 0; i < shareLinks.length; i++) {
    shareLinks[i].addEventListener("click", (e) => {
      e.preventDefault();
      window.open(e.target.attributes["data-share-link"].textContent, "Sdílení", "width=550,height=450,scrollbars=no");
    });
  }

  const players = document.getElementsByClassName("player");
  for (let i = 0; i < players.length; i++) {
    players[i].addEventListener("click", () => {
      ga("gtm1.send", "event", "ondemand", "play", `Volby do Evropského parlamentu - vizitka lídra ${this.src.split("/").slice(-1)[0].split(".")[0]}`);
    });
  }
}

makeTable();
makeSelect();
