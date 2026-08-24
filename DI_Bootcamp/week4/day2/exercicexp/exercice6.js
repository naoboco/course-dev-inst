(function (children, partner, location, job) {
    const fortune = document.getElementById("fortune");

    fortune.textContent =
        `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
})(3, "David", "Jerusalem", "Engineer");