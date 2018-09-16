import isFunction from 'lodash/isFunction'
import { combineReducers } from 'redux'
import store, { injectReducer } from '../src/store'

const initialState = store.getState()

describe('Store', () => {
  it('is a Redux store', () => {
    expect(isFunction(store.getState))
      .toBeTruthy()
    expect(isFunction(store.dispatch))
      .toBeTruthy()
    expect(isFunction(store.subscribe))
      .toBeTruthy()
    expect(isFunction(store.replaceReducer))
      .toBeTruthy()
  })

  describe('injectReducer', () => {
		const mockReducer = () => 'fakeNewReducerState'
		const otherMockReducer = () => 'fakeOtherNewReducerState'

    beforeEach(() => {
      injectReducer('mock', mockReducer)
      injectReducer('bar', otherMockReducer)
    })

    describe('when different reducers are injected', () => {
      it('composes the new reducers together with the existing reducer', () => {
        const rootReducer = combineReducers({
          mock: mockReducer,
          bar: otherMockReducer,
        })

        const currentState = Object.assign({}, initialState, rootReducer())
        expect(store.getState()).toEqual(currentState)
      })
    })

    describe('when the same reducer is injected twice', () => {
      const replaceReducer = jest.fn()

      beforeEach(() => {
        store.replaceReducer = replaceReducer
        injectReducer('mock', mockReducer)
      })

      afterEach(() => {
        replaceReducer.mockReset()
      })

      it('does not replace the reducers in the store', () => {
        expect(replaceReducer)
          .not.toBeCalled()
      })
    })
  })
})
