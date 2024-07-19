import { AxiosError, AxiosRequestConfig } from 'axios';
import type { Options } from 'axios-hooks';

export type UnknonwRecord = Record<string, unknown>;

export type VariablesType = Record<string, string>;

export interface UseFetchOption extends Options {
  variables?: VariablesType;
  onCompleted?: (data: any) => void;
  onError?: (error: AxiosError) => void;
  beforeSend?: (payload: any) => any;
  onFinal?: () => void;
}

export type FetcherFuncType<DT> = (variables?: VariablesType, restConfig?: AxiosRequestConfig) => Promise<DT>;
