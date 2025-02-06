import Flight from "../models/flight.model";
import { ObjectId } from "mongodb";

interface Flight {
  _id: ObjectId;
  capacity: number;
  flightCode: string;
  passangers: any[];
  overbookedPassangersId: number[];
}

const calculateCategoryPoints = (
  category: "Black" | "Platinum" | "Gold" | "Normal"
) => {
  const categoryPoints = {
    Black: 1,
    Platinum: 0.8,
    Gold: 0.5,
    Normal: 0.2,
  };
  return categoryPoints[category];
};

const calculateAgePoints = (age: number) => {
  if (age < 18) {
    return 1.5;
  } else if (age >= 18 && age <= 65) {
    return 0.8;
  } else {
    return 1;
  }
};

const calculateBookingPoints = (passangers: any) => {
  const reservationPoints: { [key: string]: number } = {};
  for (let i = 0; i < passangers.length; i++) {
    const passanger = passangers[i];
    const reservationId = passanger.reservationId;
    const categoryPoints = calculateCategoryPoints(passanger.flightCategory);
    const connectionPoints = passanger.hasConnections ? 1.5 : 0;
    const baggagePoints = passanger.hasCheckedBaggage ? 0.8 : 0;
    const agePoints = calculateAgePoints(passanger.age);

    const totalPoints =
      categoryPoints + connectionPoints + baggagePoints + agePoints;
    if (reservationPoints[reservationId]) {
      reservationPoints[reservationId] += totalPoints * 5;
    } else {
      reservationPoints[reservationId] = totalPoints;
    }
  }
  return reservationPoints;
};

interface createResponse {
  flight: Flight;
}

module.exports = async function create({
  capacity,
  flightCode,
  passangers,
}: any): Promise<createResponse> {
  const overbookedPassangersId: number[] = [];
  if (capacity < passangers.length) {
    const reservationPoints = calculateBookingPoints(passangers);
    const sortedReservations = Object.keys(reservationPoints).sort(
      (a, b) => reservationPoints[b] - reservationPoints[a]
    );
    let overBookedPassangers = 0;
    let index = 0;
    while (overBookedPassangers < passangers.length - capacity) {
      const overbookedPassangers = passangers.filter(
        (passanger: { reservationId: string }) =>
          passanger.reservationId ===
          sortedReservations[sortedReservations.length - index - 1]
      );
      for (let j = 0; j < overbookedPassangers.length; j++) {
        overbookedPassangersId.push(overbookedPassangers[j].id);
        overBookedPassangers++;
      }
      index++;
    }
  }
  const flight = await Flight.create({
    capacity,
    flightCode,
    passangers,
    overbookedPassangersId,
  });
  return { flight: flight.toObject() };
};
