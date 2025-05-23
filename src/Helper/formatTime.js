/* eslint-disable no-extra-semi */
const formatTime = (time) => {
  if (!time) {
    return;
  };
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export default formatTime;
