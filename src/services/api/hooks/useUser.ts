import { useQuery } from "@tanstack/react-query";
import { getUserData } from "../user";
import {
  convertToAxiosArray,
  groupByExactHourAndSumValues,
  groupStageByName,
} from "@utils";
import { Interval } from "../user/types";
import { ArrKeyValue } from "@types";

export const useUser = (id: string) => {
  return useQuery({
    queryKey: [`user-${id}`],
    queryFn: () => getUserData(id),
  });
};

export const useUserTempAxios = (interval?: Interval) => {
  if (!interval) {
    return {
      tempBed: [],
      tempRoom: [],
    };
  }

  const tempRoomData = convertToAxiosArray(interval?.timeseries.tempBedC);
  const tempBedData = convertToAxiosArray(interval?.timeseries.tempRoomC);

  return {
    tempBed: tempRoomData,
    tempRoom: tempBedData,
  };
};

export const useUserSleepStages = (interval?: Interval) => {
  if (!interval) {
    return {
      awake: { x: "awake", y: 0 },
      out: { x: "out", y: 0 },
      light: { x: "light", y: 0 },
      deep: { x: "deep", y: 0 },
    };
  }

  const stageAwake = groupStageByName(interval?.stages, "awake") ?? 0;
  const stageOut = groupStageByName(interval?.stages, "out") ?? 0;
  const stageLight = groupStageByName(interval?.stages, "light") ?? 0;
  const stageDeep = groupStageByName(interval?.stages, "deep") ?? 0;

  return {
    awake: { x: "awake", y: stageAwake },
    out: { x: "out", y: stageOut },
    light: { x: "light", y: stageLight },
    deep: { x: "deep", y: stageDeep },
  };
};

export const useUserSleepTnT = (interval?: Interval) => {
  if (!interval) {
    return [
      {
        x: "",
        y: 0,
      },
    ];
  }

  const sleepTnT = convertToAxiosArray(
    groupByExactHourAndSumValues(interval?.timeseries?.tnt) as ArrKeyValue
  );

  return sleepTnT;
};
