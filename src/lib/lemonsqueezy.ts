import axios from "axios";

export const lemonSqueezyClient = () =>{
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_LEMON_SQUEEZY_API,
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      Authorization: `Bearer ${process.env.LEMONSQUEEZY_API_KEY}`,
    },
  });
};




  


// import { lemonSqueezySetup } from '@lemonsqueezy/lemonsqueezy.js'

// export function configureLemonSqueezy() {

//   const requiredVars = [
//     'LEMONSQUEEZY_API_KEY',
//     'LEMONSQUEEZY_STORE_ID',
//     'LEMONSQUEEZY_WEBHOOK_SECRET',
//   ]

//   const missingVars = requiredVars.filter((varName) => !process.env[varName])

//   if (missingVars.length > 0) {
//     throw new Error(
//       `Missing required LEMONSQUEEZY env variables: ${missingVars.join(
//         ', '
//       )}. Please, set them in your .env file.`
//     )
//   }

//   lemonSqueezySetup({
//     apiKey: process.env.LEMONSQUEEZY_API_KEY,
//     onError  : (error) => {
//         throw new Error(`LemonSqueezy API error: ${error.message}`)
//     }
//   })
// }
