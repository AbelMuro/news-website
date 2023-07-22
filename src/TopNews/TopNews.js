import React from 'react';
import styles from './styles.module.css';
import images from './images';

function TopNews() {
    return(
        <section className={styles.container}>
            <div className={styles.news}>
                <img className={styles.news_image} src={images['retroPC']}/>
                <h1 className={styles.news_number}>
                    01
                </h1>
                <h2 className={styles.news_title}>
                    Reviving Retro PCs
                </h2>
                <p className={styles.news_desc}>
                    What happens when old PCs are given modern upgrades?
                </p>
            </div>
            <div className={styles.news}>
                <img className={styles.news_image} src={images['gamingGrowth']}/>
                <h1 className={styles.news_number}>
                    02
                </h1>
                <h2 className={styles.news_title}>
                    Top 10 Laptops of 2022
                </h2>
                <p className={styles.news_desc}>
                    Our best picks for various needs and budgets.
                </p>
            </div>
            <div className={styles.news}>
                <img className={styles.news_image} src={images['topLaptops']}/>
                <h1 className={styles.news_number}>
                    03
                </h1>
                <h2 className={styles.news_title}>
                    The Growth of Gaming
                </h2>
                <p className={styles.news_desc}>
                    How the pandemic has sparked fresh opportunities.
                </p>
            </div>
        </section>
    )
}

export default TopNews;