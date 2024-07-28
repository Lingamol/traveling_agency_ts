import Rating from "../Rating/Rating.type";

type Review = {
  id: string;
  firstName: string;
  secondName: string;
  avatarURL: string | null;
  eventGroupName: string;
  eventDate: string;
  review: string;
  rating: Rating[];
  reviewDate: string;
};
export default Review;
