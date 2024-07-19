import { AxiosError, AxiosRequestConfig } from 'axios';
import useAxios from 'axios-hooks';
import { useCallback, useEffect, useMemo } from 'react';
import type { UnknonwRecord, UseFetchOption } from './interface';

interface DoMutationType<DT> extends AxiosRequestConfig {
  variables: DT;
}

type MutationFuncType<DT, TBody> = (variables?: DoMutationType<TBody>) => Promise<DT>;

interface MutaitonReturn<DT> {
  loading: boolean;
  data: DT;
  error: AxiosError<any, any>;
}

const useFetchMutation = <DT, TBody = UnknonwRecord>(
  url: string,
  options?: UseFetchOption,
): [MutationFuncType<DT, TBody>, MutaitonReturn<DT>] => {
  const { variables, onCompleted, onError, beforeSend, onFinal, manual = true, ...restOption } = options || {};

  const urlUsed = useMemo(() => {
    if (!variables) {
      return url;
    }

    const varKeys = Object.keys(variables);
    const searchParams = new URLSearchParams();
    varKeys.forEach((key) => {
      searchParams.append(key, variables[key]);
    });

    return `${url}?${searchParams.toString()}`;
  }, [url, variables]);

  const [{ data, loading, error }, doFetch] = useAxios<DT, TBody>(urlUsed, {
    ...restOption,
    ssr: true,
    manual: manual,
  });

  const doMutation: MutationFuncType<DT, TBody> = useCallback(
    async (option: DoMutationType<TBody>) => {
      const { variables: newVariables, method = 'post', ...restAxiosConfig } = option;

      try {
        let dataToSend = newVariables;
        if (typeof beforeSend === 'function') {
          dataToSend = await beforeSend(dataToSend);
        }
        const { data: responseData } = await doFetch({
          url,
          method: method || 'POST',
          data: dataToSend,
          withCredentials: true,
          ...restAxiosConfig,
        });
        if (typeof onCompleted === 'function') onCompleted(responseData);
        return responseData;
      } catch (error) {
        if (typeof onError === 'function') onError(error);
        return error;
      } finally {
        if (typeof onFinal === 'function') onFinal();
      }
    },
    [doFetch, url, onCompleted, beforeSend, onError, onFinal], // Include onError and onFinal in dependencies
  );

  return [
    doMutation,
    {
      data,
      loading,
      error,
    },
  ];
};

export default useFetchMutation;
