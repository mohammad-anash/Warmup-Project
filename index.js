let rect = document.querySelector(".center");

rect.addEventListener("mousemove", function (event) {
    let rectanglevalue = rect.getBoundingClientRect();
    let insiderectvalue = event.clientX - rectanglevalue.left;

    if (insiderectvalue < rectanglevalue.width / 2) {
        let redcolor = gsap.utils.mapRange(0, rectanglevalue.width / 2, 255, 0, insiderectvalue);
        gsap.to(rect, {
            backgroundColor: `rgb(rgb${redcolor}, 0, 0)`,
            ease: Power4,

        })
    } else {
        let bluecolor = gsap.utils.mapRange(rectanglevalue.width / 2, rectanglevalue.width, 0, 255, insiderectvalue);
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, rgb${bluecolor})`,
            ease: Power4,
        })
    }
})

rect.addEventListener("mouseleave", function () {
    gsap.to(rect, {
        backgroundColor: "white",
        ease: Power4
    })
})