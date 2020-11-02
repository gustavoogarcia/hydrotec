import { useRef, useEffect } from 'react';

export function useIsMount() {
  const isMountRef = useRef(false);
  useEffect(() => isMountRef.current = true, []);
  return isMountRef.current;
};