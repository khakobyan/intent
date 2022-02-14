import { api } from '../../services/api';
import { FETCH_BY_COUNTRY, FETCH_BY_NAME } from '../../utils/end_points';
import { SET_UNIVERSITIES, SET_UNIVERSITIES_LOADING } from '../../utils/action_types';

export const setUniversitiesLoading = ( bool: boolean) => {
	return {
		type: SET_UNIVERSITIES_LOADING,
		payload: bool,
	}
};

export const fetchUniversitiesByCountry = (country: string) => (dispatch: any) => {
  dispatch(setUniversitiesLoading(true));
  api.get(FETCH_BY_COUNTRY(country))
  .then(res => {
    dispatch({
      type: SET_UNIVERSITIES,
      payload: res.data
    });
    dispatch(setUniversitiesLoading(false));
  })
  .catch(e => {
    dispatch(setUniversitiesLoading(false));
    console.log('fetching universities by country error==', e)
  })
};

export const fetchUniversitiesByName = (country: string, name: string) => (dispatch: any) => {
  dispatch(setUniversitiesLoading(true));
  api.get(FETCH_BY_NAME(country, name))
  .then(res => {
    dispatch({
      type: SET_UNIVERSITIES,
      payload: res.data
    });
    dispatch(setUniversitiesLoading(false));
  })
  .catch(e => {
    dispatch(setUniversitiesLoading(false));
    console.log('fetching universities by name error==', e)
  })
};

export const changeListOrder = (order: boolean, universities: any) => (dispatch: any) => {
  dispatch(setUniversitiesLoading(true));
  order = !order;
  universities.sort((a: any, b: any) => order ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
  dispatch({
    type: SET_UNIVERSITIES,
    payload: universities
  });
  dispatch(setUniversitiesLoading(false));
}