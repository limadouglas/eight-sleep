import React from "react";
import { fireEvent, render, screen } from "@testing-library/react-native";

import { SummaryCard, SummaryCardProps } from "@components";

describe("component: SummaryCard", () => {
  const cardTestId = "summary-card-id";
  const handleOnPress = jest.fn();
  const summaryCardProps: SummaryCardProps = {
    id: "1",
    date: "2017-03-09T05:22:00.000Z",
    score: 98,
    respiratoryRate: 20,
    heartRate: 60,
    onPress: handleOnPress,
    cardTestId,
  };
  it("should be render with the avg", () => {
    render(<SummaryCard {...summaryCardProps} />);

    const scoreRate = screen.queryAllByText("98/100");
    const heartRate = screen.queryAllByText("60 bpm");
    const respiratoryRate = screen.queryAllByText("20 brpm");

    expect(scoreRate).toHaveLength(1);
    expect(heartRate).toHaveLength(1);
    expect(respiratoryRate).toHaveLength(1);
  });

  it("should call onPress", () => {
    render(<SummaryCard {...summaryCardProps} />);
    const card = screen.getByTestId(cardTestId);
    fireEvent.press(card);

    expect(summaryCardProps.onPress).toHaveBeenCalled();
  });
});
