import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import menuIcon from './icons/icon-menu.svg';

function MobileNavBar({logo}) {
    const [open, setOpen] = useState(false);
    const overlayRef = useRef();
    const dialogRef = useRef();

    const handleOpen = () => {
        setOpen(!open);
    }

    useEffect(() => {
        if(open){
            overlayRef.current.style.display = 'block';
            setTimeout(() => {
                overlayRef.current.style.backgroundColor = 'rgba(0, 0, 26, 0.5)';
                dialogRef.current.style.right = '0px';
            }, 10)
        }
        else{
            overlayRef.current.style.backgroundColor = '';
            dialogRef.current.style.right = '';
            setTimeout(() => {
                overlayRef.current.style.display = '';
            },200)
        }
            
    }, [open])

    return(
        <>
            <nav className={styles.container}>
                <img className={styles.logo} src={logo}/>
                <img className={styles.menuIcon} src={menuIcon} onClick={handleOpen}/>
            </nav>       
            <div className={styles.overlay} ref={overlayRef}>
                <dialog className={styles.dialog} ref={dialogRef}>
                    <img className={styles.closeIcon} onClick={handleOpen}/>
                    <ul className={styles.links}>
                        <li className={styles.link}>
                            Home
                        </li>
                        <li className={styles.link}>
                            New
                        </li>
                        <li className={styles.link}>
                            Popular
                        </li>
                        <li className={styles.link}>
                            Trending
                        </li>
                        <li className={styles.link}>
                            Categories
                        </li>
                    </ul>
                </dialog>                
            </div> 
        </>
    )
}

export default MobileNavBar;