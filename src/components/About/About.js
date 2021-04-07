import React from "react";
import "./About.css";
import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" lang="en" />
                <title>About | Moviefy100 </title>
                <meta name="description"
                    content="Welcome to moviefy100 about page. Here, you will learn
                    everything there is to know about us. enjoy!
                    "
                />
            </Helmet>
            <div className="About">
                <h1 className="About__large-txt">About us</h1>

                <p>
                    Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Harum expedita voluptas
                    deleniti soluta quam vitae velit voluptatem
                    facere tempore laudantium ab, consequatur sequi
                    optio quaerat non iste aut reprehenderit consectetur
                    totam quo similique! Veritatis iste blanditiis modi
                    quos cum esse fugiat at debitis molestias sint reprehenderit
                    unde dicta inventore nobis, error hic tempore explicabo id omnis
                    ad accusamus quis eum! Praesentium omnis vero totam alias vitae
                    consequuntur ipsam ea magni exercitationem minima officia, a dolores
                    ducimus dignissimos tenetur possimus eligendi ratione. Veniam
                    asperiores dignissimos blanditiis quaerat dolor ad, nesciunt
                    expedita explicabo quidem suscipit odio ex harum nulla commodi et.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet dignissimos totam placeat esse tenetur pariatur
                    blanditiis, similique, magni nisi, earum iusto ex maiores
                    maxime quibusdam suscipit voluptatibus doloribus. Dolores,
                    delectus officia voluptate voluptatem placeat at ea tempora ad
                    vitae aut temporibus odio beatae natus ipsum quos dicta, perferendis ipsam iure.
               </p>
            </div>
        </>
    );
};

export default About;
