import useDimensions from "react-cool-dimensions";

function CustomHeight() {
    // eslint-disable-next-line
    const { observe, unobserve, w, height, entry } = useDimensions({
        onResize: ({ observe, unobserve, width, height, entry }) => {
            // Triggered whenever the size of the target is changed...

            unobserve(); // To stop observing the current target element
            observe(); // To re-start observing the current target element
        },
    });

    return { observe, height };
}

export default CustomHeight;
