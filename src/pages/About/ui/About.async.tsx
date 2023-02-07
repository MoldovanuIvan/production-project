import {lazy} from "react";

const AboutAsync = lazy(() => new Promise((resolve) => {
    //@ts-ignore
    setTimeout(() => resolve(import('./About')), 1500)
}))

export default AboutAsync