import heartRate from "./heart-rate.svg";
import respiratoryRate from "./respiratory-rate.svg";
import score from "./score.svg";

const icons = {
  heartRate,
  respiratoryRate,
  score
};

export type IconsType = keyof typeof icons;

export default icons;
