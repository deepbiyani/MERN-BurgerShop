import React from 'react';
import "../../styles/founder.scss";
import {motion} from "framer-motion";
import deepashubiyani from "../../assets/deepanshu-biyani.jpg";

function Founder() {

    const options = {
        initial: {
          x: "-100%",
          opacity: 0,
        },
        whileInView: {
          x: 0,
          opacity: 1,
        },
      };

  return (
    <section>
        <motion.div className="founder" {...options}>
            <img src={deepashubiyani} alt="Founder" height={200} width={200}></img>
            <h3>Deepanshu Biyani</h3>
            <p>
                Hey, foodies I am MBA burgerwala. Our mission is to make our burger reach to every foodie like you!
            </p>
        </motion.div>
    </section>
  )
}

export default Founder