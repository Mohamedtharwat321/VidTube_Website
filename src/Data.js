export const Api_key = "AIzaSyDeXGsuMkCO56ipXQUvzSpBV3ZdgoDjX_0";

export const valueConverter = (val) => {
  if (val >= 1000000) {
    return Math.floor(val / 1000000) + "M";
  }
  else if(val>=1000){
    return Math.floor(val/1000)+"K"
  }
  else return val
};
