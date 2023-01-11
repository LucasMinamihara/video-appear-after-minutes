window.addEventListener("DOMContentLoaded", () => {
  const natureVideo = document.querySelector("#natureVideo");
  const moreAfterVideo = document.querySelector("#moreAfterTime");
  const buttonStartVideo = window.document.querySelector("#startVideo");

  buttonStartVideo.addEventListener("click", () => {
    natureVideo.play();
  });

  const buttonStopVideo = document.querySelector("#stopVideo");

  buttonStopVideo.addEventListener("click", () => {
    natureVideo.pause();
  });

  let appearText = setInterval(() => {
    if (natureVideo.currentTime >= 3) {
      moreAfterVideo.classList.remove("hiddenVideo");
      stopInterval();
    }
    console.log("i am here ");
  }, 3000);

  function stopInterval() {
    clearInterval(appearText);
  }
});
