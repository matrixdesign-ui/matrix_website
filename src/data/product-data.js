// Import product logos
import product_logo_1 from "../../public/assets/img/product/sheria360.svg";
import product_logo_2 from "../../public/assets/img/product/boardcloud_dark.png";

// Products data - centralized product definitions
const products = [
  {
    id: 1,
    title: "Sheria360",
    description: "Comprehensive legal management software solution for law firms and legal departments.",
    slug: "sheria360",
    link: "https://www.sheria360.com/",
    icon: "fas fa-gavel",
    img: product_logo_1,
    external: true,
    cardIcon: "fas fa-gavel"
  },
  {
    id: 2,
    title: "Boardcloud",
    description: "Secure, paperless board meeting and executive communication platform for seamless collaboration.",
    slug: "boardcloud",
    link: "/products/boardcloud",
    icon: "fas fa-users",
    img: product_logo_2,
    external: false,
    cardIcon: "fas fa-users"
  }
];

export default products;

