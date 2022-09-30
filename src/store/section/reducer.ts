import { createAction, createReducer } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface SectionState {
  value: number;
}

export const increment = createAction('section/increment');

const initialState = { value: 0 } as SectionState;

const sectionReducer = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state) => {
    state.value++;
  });
});

export default sectionReducer;

export const section = (state: RootState) => state.section;
