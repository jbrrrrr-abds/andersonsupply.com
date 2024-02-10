import { useRef, useEffect } from 'react';

/**
 * Throttles rapid event-listeners, like scroll, for performance.
 * @callback func
 * @param {number} timeout
 * @param {Array} deps
 */

function useThrottle(func, timeout, deps = []) {
  const timer = useRef(null);

  const cancel = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };

  // Cancel the timer when the deps change.
  useEffect(() => cancel, deps);

  // Return the throttled version of the function.
  return (...args) => {
    cancel();
    timer.current = setTimeout(() => {
      timer.current = null;
      func.apply(this, args);
    }, timeout);
  };
}

export default useThrottle;
