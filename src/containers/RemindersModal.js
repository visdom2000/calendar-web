import { connect } from 'react-redux'

import { unsetRemindersInfoRequest } from '../store/event/eventActionLazy'

export default connect(
  (state, redux) => {
    console.log('[ConnectedRemindersModal]', state)
    return {}
  },
  (dispatch, redux) => {
    return {
      handleRemindersHide: () => {
        dispatch(unsetRemindersInfoRequest())
      },
    }
  }
)
