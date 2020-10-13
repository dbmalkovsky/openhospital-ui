import { IPatientsState } from "./types";

export const initial: IPatientsState = {
  createPatient: { status: "IDLE" },
  searchResults: { isLoading: false, data: [] },
  selectedPatient: { isLoading: false, data: {} },
};
