const ApplicationActionTypes = {
  INITIALIZE_APPLICATION_REQUEST: "INITIALIZE_APPLICATION_REQUEST",
  INITIALIZE_APPLICATION_ERROR: "INITIALIZE_APPLICATION_ERROR",
  INITIALIZE_APPLICATION_SUCCESS: "INITIALIZE_APPLICATION_SUCCESS"
};

function initializeApplicationRequest() {
  return {
    type: ApplicationActionTypes.INITIALIZE_APPLICATION_REQUEST
  };
}

function initializeApplicationError(error) {
  return {
    payload: { error },
    type: ApplicationActionTypes.INITIALIZE_APPLICATION_ERROR
  };
}

function initializeApplicationSuccess() {
  return {
    payload: { isInitialized: true },
    type: ApplicationActionTypes.INITIALIZE_APPLICATION_SUCCESS
  };
}

const ApplicationActionCreators = {
  initializeApplicationRequest,
  initializeApplicationError,
  initializeApplicationSuccess
};

export { ApplicationActionTypes, ApplicationActionCreators };
