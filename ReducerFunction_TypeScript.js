const initialState: number = 0;

enum REDUCER_ACTION_TYPES {
  DEPOSIT,
  WITHDRAW,
  BANKRUPT,
}

// interface Reducer {
//   type: REDUCER_ACTION_TYPES;
//   payload: number;
// }

interface DepositAction {
  type: REDUCER_ACTION_TYPES.DEPOSIT;
  payload: number;
}

interface WithDrawAction {
  type: REDUCER_ACTION_TYPES.WITHDRAW;
  payload: number;
}

interface BankRuptAction {
  type: REDUCER_ACTION_TYPES.BANKRUPT;
}

type Action = DepositAction | WithDrawAction | BankRuptAction;

export const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPES.DEPOSIT:
      return state + action.payload;

    case REDUCER_ACTION_TYPES.WITHDRAW:
      return state - action.payload;

    case REDUCER_ACTION_TYPES.BANKRUPT:
      return 0;

    default:
      return state;
  }
};
