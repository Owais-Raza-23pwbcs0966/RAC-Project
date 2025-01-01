// FadeIn function to create animations based on direction and delay
export const FadeIn = (direction, delay) => {
    return {
        // 'hidden' state: the initial state of the element before the animation starts
        hidden: {
            // Adjust vertical movement based on direction (up or down)
            y: direction === "up" ? 40 : direction === "down" ? 40 : 0,

            // Adjust horizontal movement based on direction (left or right)
            x: direction === "left" ? 40 : direction === "right" ? 40 : 0,
        },
        // 'show' state: the final state of the element after the animation completes
        show: {
            // Element will move to the default position (x:0, y:0) after the animation
            x: 0,
            y: 0,
            // Transition settings to control the animation timing
            transition: {
                type: "tween",  // Type of animation (tween: smooth transition)
                duration: 1.2,  // Duration of the animation (in seconds)
                delay: delay,   // Delay before the animation starts, passed as an argument
                ease: "easeInOut",  // Easing function for smooth start and end of the animation
            }
        }
    }
}
