// Css
import styles from "./hanging-alerts.module.css";

const HangingAlerts = () => {
    return (
        <>
            <div className={`${styles.mainWrapper} hidden md:flex`}>
                <div className={`${styles.signboardWrapper}`}>
                    <div className={`${styles.signboard}`}>Thanksgiving</div>
                    <div className={`${styles.strings}`}></div>
                    <div className={`${styles.pin} ${styles.pin1}`}></div>
                    <div className={`${styles.pin} ${styles.pin2}`}></div>
                    <div className={`${styles.pin} ${styles.pin3}`}></div>
                </div>
            </div>

        </>
    )
}

export default HangingAlerts;