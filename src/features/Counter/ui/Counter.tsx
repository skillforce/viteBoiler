import { useCounterStore } from '../model/store.ts';
import cls from './Counter.module.css';
const Counter = () => {
    const { count, inc } = useCounterStore();
    return (
        <div className={cls.counterContainer}>
            <span>{count}</span>
            <button onClick={inc}>one up</button>
        </div>
    );
};

export default Counter;
