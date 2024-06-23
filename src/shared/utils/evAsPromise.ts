export const evAsPromise = (es: EventSource) => {
  return new Promise((resolve) => {
    es.onmessage = (e) => {
      resolve(e);
    };
  });
};
