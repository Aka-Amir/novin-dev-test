import { useEffect } from "react";
import { Observable, Observer } from "rxjs";

export function useSignal<T>(
  signal: Observable<T>,
  observer: Partial<Observer<T> & { onDestroy: () => void }>
) {
  useEffect(() => {
    const obs = observer;
    if (obs.onDestroy) delete obs.onDestroy;
    const subscription = signal.subscribe(obs);
    if (observer.onDestroy) {
      subscription.add(observer.onDestroy);
    }
    return () => {
      subscription.unsubscribe();
    };
  }, [signal, observer]);
}
