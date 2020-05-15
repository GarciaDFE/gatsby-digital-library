import { generateMedia } from "styled-media-query";

const mq = generateMedia({
   xs: "320px",
   sm: "450px",
   md: "768px",
   lg: "900px",
   xl: "1200px",
 });

export default mq