document.addEventListener("DOMContentLoaded", () => {

    const prizePage =
        document.querySelector(".prize-page");


    /*
        Give the browser one frame to
        render everything first.

        Then start the sequence.
    */

    requestAnimationFrame(() => {

        requestAnimationFrame(() => {

            prizePage.classList.add("start");

        });

    });

});