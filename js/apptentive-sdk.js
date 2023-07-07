(() => {

    const btn = document.querySelector("button");

    btn.addEventListener("click", function () {
        ApptentiveSDK.engage("lol");
});

    // const button = ApptentiveSDK.engage("lol");
})();

// (function init() {
//     setTimeout(() => {
//       ApptentiveSDK.engage('lol')
//     }, 1000)
//   })()