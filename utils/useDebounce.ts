import { DependencyList, useCallback, useEffect } from 'react'

/**
 * Type for the effect callback function.
 * The function can either return nothing (void) or a cleanup function.
 */
type EffectCallback = () => void | (() => void | undefined)

/**
 * useDebounce is a custom hook that debounces the provided effect function.
 * The effect function will be called after the specified delay and when the dependencies change.
 * If the dependencies change before the delay has passed, the effect function call will be cancelled and rescheduled.
 *
 * @param effect - The effect callback function to debounce.
 * @param dependencies - The list of dependencies that the effect function depends on.
 * @param delay - The delay in milliseconds to wait before calling the effect function.
 */
export default function useDebounce(
  effect: EffectCallback,
  dependencies: DependencyList,
  delay: number,
): void {
  const callback = useCallback(effect, dependencies)

  useEffect(() => {
    const timeout = setTimeout(callback, delay)
    // Cleanup function that will be called when the dependencies change or the component unmounts.
    // It cancels the scheduled effect function call.
    return () => clearTimeout(timeout)
  }, [callback, delay])
}
