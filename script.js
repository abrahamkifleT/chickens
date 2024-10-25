/* inspiration from
https://dribbble.com/shots/22764492-Travel-website-Tours-and-glamping
*/
const poster = document.querySelector(".poster");
poster.addEventListener("click", removePoster);

function removePoster() {
  poster.classList.add("poster-active");
  document.querySelector("#myIframe").src += "?autoplay=1";
}
