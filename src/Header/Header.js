import React from 'react';
import styles from './styles.module.css';
import trendingImage from './images/image-web-3-desktop.jpg';
import trendingImageMobile from './images/image-web-3-mobile.jpg';
import useMediaQuery from '../Hooks/useMediaQuery';

function Header() {
    const mobile = useMediaQuery('(max-width: 700px)');

    return(
        <header className={styles.container}>
            <section className={styles.trending_news}>
                <img className={styles.trending_image} src={mobile ? trendingImageMobile : trendingImage}/>
                <h1 className={styles.trending_title}>
                    The Bright Future of Web 3.0?
                </h1>
                <p className={styles.trending_desc}>
                    We dive into the next evolution of the web 
                    that claims to put the power of the platforms 
                    back into the hands of the people. 
                    But is it really fulfilling its promise?
                </p>
                <button className={styles.readMore}> 
                    Read More
                </button>
            </section>
            <section className={styles.new_stories}>
                <h1 className={styles.title}>
                    New
                </h1>
                <div className={styles.story}>
                    <h2 className={styles.story_title}>
                        Hydrogen VS Electric Cars
                    </h2>
                    <p className={styles.story_desc}>
                        Will hydrogen-fueled cars ever catch up to EVs?
                    </p>
                </div>
                <div className={styles.story}>
                    <h2 className={styles.story_title}>
                        The Downsides of AI Artistry
                    </h2>
                    <p className={styles.story_desc}>
                        What are the possible adverse effects of on-demand AI image generation?
                    </p>
                </div>
                <div className={styles.story}>
                    <h2 className={styles.story_title}>
                        Is VC Funding Drying Up?
                    </h2>
                    <p className={styles.story_desc}>
                        Private funding by VC firms is down 50% YOY. We take a look at what that means.
                    </p>
                </div>
            </section>
        </header>
    )
}

export default Header;