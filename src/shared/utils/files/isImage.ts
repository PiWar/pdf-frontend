export const isImage = (file: File) => {
  return file.type.startsWith('image/');
};
