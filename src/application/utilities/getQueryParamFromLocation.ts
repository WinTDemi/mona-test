import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

export const getQueryParamFromLocation = <T>(paramKey: string): T | '' => {
    const location = useLocation();
    const parsedParams = queryString.parse(location.search)[paramKey];
    return parsedParams ? (parsedParams as T) : '';
};
