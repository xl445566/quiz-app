const printTime: (seconds: number) => string = (seconds) => {
  let min = (seconds % 3600) / 60;
  min = parseInt(min.toString());
  const sec = seconds % 60;

  if (min > 0) {
    return `${min} 분 ${sec} 초`;
  } else {
    return `${sec} 초`;
  }
};

export default printTime;
