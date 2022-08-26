import { createAction, createReducer, AnyAction, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CounterState {
  value: number;
}

export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');
export const incrementByAmount = createAction<number>('counter/incrementByAmount');

function isActionWithNumberPayload(action: AnyAction): action is PayloadAction<number> {
  return typeof action.payload === 'number';
}

const initialState = { value: 0 } as CounterState;

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.value++;
    })
    .addCase(decrement, (state) => {
      state.value--;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload;
    })
    .addMatcher(isActionWithNumberPayload, (state, action) => {
      console.log(action);
      state.value *= action.payload;
    })
    .addDefaultCase((state, action) => {
      state.value += action.payload * 2;
    });
});

export default counterReducer;

export const sectionCount = (state: RootState) => state.section;