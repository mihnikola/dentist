import serviceImage1 from "../assets/images/imageOne.jpeg";
import serviceImageTwo from "../assets/images/imageTwo.jpg";
import imageFour from "../assets/images/damon.jpg";
import serviceImage2 from "../assets/images/ctScan.jpg";
import employerOne from "../assets/images/denstistTwo.jpg";
import imageDentistOne from "../assets/images/imageDentistOne.jpg";
import implant from "../assets/images/implant.png";
import tooth from "../assets/images/tooth.png";
import braces from "../assets/images/braces.png";
import dentalCare from "../assets/images/dental-care.png";
import notificationImage from "../assets/images/toothDental.png";
import starImage from "../assets/images/starImage.png";
import briefcaseImage from "../assets/images/briefcaseImage.png";

export const INITIAL_DATA = [
  {
    id: 1,
    image: serviceImage1,
    title: "General Dental Care",
    text: "Our services include routine/preventative care, teeth whitening, root canals, dental implants, extractions, Same Day dentures and partials and more.",
  },
  {
    id: 2,
    image: serviceImageTwo,
    title: "How to Get Rid of Cavities",
    text: "While home treatments including fluoride toothpaste won’t get rid of existing cavities, they may help prevent new ones. You’ll need to see a dentist to remove a cavity.",
  },
  {
    id: 3,
    image: imageFour,
    title: "Teeth Braces",
    text: "Braces can correct a wide range of dental issues, including crooked, gapped, rotated or crowded teeth. There are several types of braces, including traditional metal braces, ceramic braces and clear aligners. Braces improve your smile’s health, function and appearance.",
  },
];

export const SERVICES_DATA = [
  {
    id: 1,
    title: "Discount for first appointment",
    image: serviceImage1,
  },
  {
    id: 2,
    title: "Is it mandatory CT scan?",
    image: serviceImage2,
  },
  {
    id: 3,
    title: "Should I wear dental bracelet?",
    image: imageFour,
  },
  {
    id: 4,
    title: "Dental care",
    image: serviceImageTwo,
  },
];
export const ROLES_DATA = [
  {
    id: 1,
    title: "Experience",
    vote: "8+",
    icon: briefcaseImage,
  },
  {
    id: 2,
    title: "Rating",
    icon: starImage,
    vote: "5,0",
  },
];
export const APPOINTMENTS_DATA = [
  {
    id: 1,
    date: "September 15.",
    time: "12:30",
    image: employerOne,
    name: "Novikov Andrei Vukovic",
    position: "Implantologist",
  },
  {
    id: 2,
    date: "September 15.",
    time: "10:00",
    image: imageDentistOne,
    name: "Miroslav Zikic",
    position: "Orthopedic",
  },
];
export const NOTIFICATIONS_DATA = [
  {
    id: 1,
    title: "New appointment",
    image: notificationImage,
    text: "You have a new appointment with Dr. Miroslav Zikic",
  },
  {
    id: 2,
    title: "New appointment",
    image: notificationImage,
    text: "You have a new appointment with Dr. Miroslav Zikic",
  },
];
export const CATEGORIES_DATA = [
  {
    id: 1,
    title: "Implantologist",
    image: dentalCare,
  },
  {
    id: 2,
    title: "Orthodontist",
    image: tooth,
  },
  {
    id: 3,
    title: "Surgeon",
    image: braces,
  },
  {
    id: 4,
    title: "Therapy",
    image: implant,
  },
  {
    id: 5,
    title: "Radiologist",
    image: implant,
  },
];
export const DOCTORS_DATA = [
  {
    id: 1,
    image: employerOne,
    name: "Novikov Andrei Vukovic",
    position: "Implantologist",
    experience: 8,
    votes: "5.0",
  },
  {
    id: 2,
    image: imageDentistOne,
    name: "Miroslav Zikic",
    position: "Orthopedic",
    experience: 2,
    votes: "5.0",
  },
];

export const DATE_DATA = [
  {
    id: 1,
    title: "Monday",
    date: "10",
  },
  {
    id: 2,
    title: "Tuesday",
    date: "11",
  },
  {
    id: 3,
    title: "Wednesday",
    date: "12",
  },
  {
    id: 4,
    title: "Thursday",
    date: "13",
  },
  {
    id: 5,
    title: "Friday",
    date: "14",
  },
  {
    id: 6,
    title: "Saturday",
    date: "15",
  },
  {
    id: 7,
    title: "Sunday",
    date: "16",
  },
];

export const TIMES_DATA = [
  {
    id: 1,
    timeFrom: "09:30",
    timeUntil: "10:30",
  },
  {
    id: 2,
    timeFrom: "10:30",
    timeUntil: "11:30",
  },
  {
    id: 3,
    timeFrom: "12:30",
    timeUntil: "13:30",
  },
  {
    id: 4,
    timeFrom: "14:30",
    timeUntil: "15:30",
  },
  {
    id: 5,
    timeFrom: "16:30",
    timeUntil: "17:30",
  },
  {
    id: 6,
    timeFrom: "18:30",
    timeUntil: "19:30",
  },
];
