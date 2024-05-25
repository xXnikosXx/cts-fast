"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollow() {
  // ? Constant representing the follower cursor's size.
  const cursorSize = 15;

  // ? Object that holds x and y motion values using the useMotionValue hook from Framer Motion
  // ? These values represent the current position of the mouse cursor.
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  // ? Object containing options for the smoothness of animation.
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };

  // ? Object that holds motion spring values for x and y using the useSpring hook from Framer Motion.
  // ? These values are used to animate the cursor's position smoothly.
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  // ? Function that updates the mouse object's x and y motion values based on the mouse movement.
  // ? It adjusts the values to center the cursor around the mouse pointer.
  const manageMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  // ? useEffect hook is used to add an event listener for mouse movement when the component mounts.
  // ? It calls manageMouseMove to update the cursor position.
  // ? The event listener is removed when the component unmounts.
  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <div>
      <motion.div
        // ? uses the smoothMouse motion values for left and top to position the cursor div
        // ? dynamically based on the mouse movement.
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
        className="fixed w-[15px] h-[15px] bg-p-brand-teal rounded-[50%] pointer-events-none z-[999]"
      ></motion.div>
    </div>
  );
}
