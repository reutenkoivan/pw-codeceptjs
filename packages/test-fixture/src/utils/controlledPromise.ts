/* eslint-disable no-unused-vars */
type ControlledPromiseType = (options?: { timeout?: number }) => {
  promise: Promise<unknown>;
  resolve: (data: any) => void
  reject: (data: any) => void
}

export const controlledPromise: ControlledPromiseType = ({ timeout } = {}) => {
  let resolve: ReturnType<ControlledPromiseType>['resolve']
  let reject: ReturnType<ControlledPromiseType>['reject']

  const promise = new Promise((res, rej) => {
    let timeoutID: NodeJS.Timeout

    if (timeout) {
      timeoutID = setTimeout(() => rej(new Error(`Timeout <${timeout}> expired!`)), timeout)
    }

    resolve = (data) => {
      if (timeoutID) {
        clearTimeout(timeoutID)
      }

      res(data)
    }

    reject = (data) => {
      if (timeoutID) {
        clearTimeout(timeoutID)
      }

      rej(data)
    }
  })

  return {
    promise,
    resolve,
    reject,
  }
}
