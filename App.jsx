import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <main className={styles.container}>
        <span>
          <button>Blue</button>
          <button>Red</button>
          <button>Yellow</button>
          <button>Green</button>
          <div>blue</div>
        </span>
      </main>
    </div>
  );
}

export default App;
