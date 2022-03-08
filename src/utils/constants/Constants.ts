import { Dimensions } from "react-native";

export const {height, width} = Dimensions.get("window");
export const itemSize = {
  height: height* .33,
  width : width * .95,
};
export const silderHomeheight = height*.3; 
export const headerHeight = height*.08; 
export const itemSliderWidth = width *.8;
export const tabBarHeight = width *.17;
export const serchItemSize = width * .3
