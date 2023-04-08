export function handleWindowClose(setIsClosed: (value: boolean) => void, timeout = 2000): () => void {
  return () => {
    setIsClosed(true);
    setTimeout(() => {
      setIsClosed(false);
    }, timeout);
  };
}
