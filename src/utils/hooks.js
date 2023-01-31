import { useEffect } from "react";

export function useOnClickOutside(clickedElemRef, contentElemRef, callback) {
  useEffect(() => {
    const handleClickOutside = (evt) => {
      if ((clickedElemRef.current || contentElemRef) && (!clickedElemRef.current.contains(evt.target) && !contentElemRef.current.contains(evt.target))) {
        callback(); //Do what you want to handle in the callback
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
}
