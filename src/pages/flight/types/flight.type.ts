export interface FlightRoute {
  routeCode: string;
  airline: string;
  logo: string; // Placeholder image
  departureTime: string;
  arrivalTime: string;
  departureCode: string;
  departureName: string;
  arrivalCode: string;
  arrivalName: string;
  duration: number;
  originalPrice: number;
  discountedPrice: number;
  planeCode: string;
}
