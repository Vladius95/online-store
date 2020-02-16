import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadResource } from "src/utils/resources";
import { Action } from "redux";

export function useResource<T extends Action, R>(query: string, onResultAction: (result: R) => T) {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    loadResource(query)
      .then(data => {
        dispatch(onResultAction(JSON.parse(data)));
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setError(true);
      });
  }, []);

  return [isLoading, isError];
}
