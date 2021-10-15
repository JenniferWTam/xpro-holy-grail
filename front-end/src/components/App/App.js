import Counter from '../Counter/Counter';
import styles from './App.module.css';

const App = () => {

    return (
        <div className={styles.app}>

            <div className={styles.header}>
            "header", 0, "left", 0, "article", 0, "right", 0, "footer", 0
            <Counter dataKey='header' />
            </div>

            <div className={styles.body}>

            <div className={styles.menu}>
            "header", 0, "left", 0, "article", 0, "right", 0, "footer", 0
            <Counter dataKey='menu' />
            </div>

            <div className={styles.content}>
            "header", 0, "left", 0, "article", 0, "right", 0, "footer", 0
            <Counter dataKey='content' />
            </div>

            <div className={styles.ad}>
            "header", 0, "left", 0, "article", 0, "right", 0, "footer", 0
            <Counter dataKey='ad' />
            </div>
        </div>

            <div className={styles.footer}>
            "header", 0, "left", 0, "article", 0, "right", 0, "footer", 0
            <Counter dataKey='footer' />
            </div>
        </div>
    );
};

export default App;