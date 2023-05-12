import { useEffect, useState } from "react";
import styles from './MousePosition.module.css';

export const MousePosition = () => {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [lastClickPosition, setLastClickPosition] = useState({x: 0, y: 0});
  
  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      setMousePosition((value) => ({
        x: event.clientX,
        y: event.clientY
      }));
    };
    window.addEventListener('mousemove', onMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);
  
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      setLastClickPosition({
        x: event.clientX,
        y: event.clientY
      });
    };
    window.addEventListener('click', onClick);
    
    return () => {
      window.removeEventListener('click', onClick);
    };
  }, []);
  
  const isOnTheLeftOfLastClick = mousePosition.x < lastClickPosition.x;

  return (
    <>
      <div className={isOnTheLeftOfLastClick ? styles.red : styles.green}>
        My mouse x position is {mousePosition.x} and y position is {mousePosition.y}
      </div>
      <div>
        Last click: x={lastClickPosition.x}, y={lastClickPosition.y}
      </div>
    </>
  );
};
