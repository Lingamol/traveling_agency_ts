import Include from "./Include";
import Schedule from "./Schedule";

type Trip = {
  id: string;
  title: string;
  description: string;
  price: { stoc: number; member: number };
  currency: string;
  places: number;
  imgURL: string;
  schedule: Schedule[];
  include: Include[];
};
export default Trip;
// type Schedule = { id: string; startDate: string; endDate: string };
