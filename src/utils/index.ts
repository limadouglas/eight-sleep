import dayjs from "dayjs";

export const getRateFromArray = (arr: [string, number][]) =>
  Math.round(arr.reduce((acc, rate) => acc + rate[1], 0) / arr.length);

export const formatDate = (date: Date | string) => {
  const newDate = dayjs(date);
  return newDate.format("MMMM D, YYYY");
};

export const formatHour = (date: Date | string) => {
  const newDate = dayjs(date);
  return newDate.format("hh A");
};

export const secondsToHour = (seconds: number) => {
  const hour = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  return `${hour}:${minutes.toString()} h `;
};

export const groupByExactHourAndSumValues = (items?: [string, number][]) => {
  if (!items) {
    return;
  }

  const result = {} as { [key: string]: number };

  items?.forEach(([timestamp, value]) => {
    const date = new Date(timestamp);
    const key =
      new Date(
        Date.UTC(
          date.getUTCFullYear(),
          date.getUTCMonth(),
          date.getUTCDate(),
          date.getUTCHours()
        )
      ).toISOString() ?? "";

    if (!result[key]) {
      result[key] = 0;
    }
    result[key] += value;
  });

  const groupedItems = Object.keys(result).map((key) => {
    const adjustedKey = key.substring(0, 13) + ":00:00.000Z";
    return [adjustedKey, result[key]];
  });

  return groupedItems;
};
