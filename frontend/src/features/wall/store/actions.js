import ApiPublication from "../../../api/publications/publication.service";
import { SET_PUBLICATIONS } from "./constants";

function setPublications(payload) {
  return {
    type: SET_PUBLICATIONS,
    payload
  };
}

function requestGetPublications() {
  return dispatch =>
    ApiPublication.getPublications().then(publications => {
      dispatch(setPublications(publications));
    });
}

function requestCreatePublication(body) {
  return (dispatch) =>
    ApiPublication.createPublication(body).then(publication => {
      dispatch(setPublications([publication]));
    });
}

function requestUpdatePublication(obj) {
  return () => ApiPublication.updatePublication(obj);
}

function requestDeletePublication(id) {
  return () => ApiPublication.deletePublication(id);
}

export {
  requestGetPublications,
  requestCreatePublication,
  requestUpdatePublication,
  requestDeletePublication
};
