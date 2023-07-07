(() => {
    const contact = document.querySelector("contact-me-button");
    const btn = document.querySelector("button");

    btn.addEventListener("click", function () {
        contact.ApptentiveSDK.engage("lol");
});

    // const button = ApptentiveSDK.engage("lol");
})();

// (function init() {
//     setTimeout(() => {
//       ApptentiveSDK.engage('lol')
//     }, 1000)
//   })()