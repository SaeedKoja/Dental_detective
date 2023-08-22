const BASE_URL = "http://127.0.0.1:8000/api";
const DENTALLABS_URL = `${BASE_URL}/Dentallabs`;


export const API = {
  auth: {
    LOGIN: `${BASE_URL}/users/login`
  },
  Dentallabs: {
    GET_APPROVED: `${DENTALLABS_URL}/approved`,
    GET_COUNT_APPROVED: `${DENTALLABS_URL}/countApproved`,
    GET_IN_PROGRESS: `${DENTALLABS_URL}/inprogress`,
    GET_COUNT_IN_PROGRESS: `${DENTALLABS_URL}/countInprogress`,
    GET_REFUZED: `${DENTALLABS_URL}/refuzed`,
    GET_COUNT_REFUZED: `${DENTALLABS_URL}/countRefuzed`,
    SHOW_NOTES: `${DENTALLABS_URL}/shownotes`,
    GET_ARCHIVED: `${DENTALLABS_URL}/Archived`,
    GET_COUNT_ARCHIVED: `${DENTALLABS_URL}/countArchived`,
    POST_COMPLETE: `${DENTALLABS_URL}/complete`,
    GET_DENTIST: `${DENTALLABS_URL}/getdentist`,
    GET_COMPLAINTS: `${DENTALLABS_URL}/getcomplaints`,
    DELETE_COMPLAINTS: `${DENTALLABS_URL}/deleteComplaint`,
    GET_PORTFOLIO: `${DENTALLABS_URL}/portfolio`,
  }
};
