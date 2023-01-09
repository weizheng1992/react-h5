import type { GlobConfig } from '/#/config';

export const useGlob = (): Readonly<GlobConfig> => {
  const { VITE_GLOB_APP_TITLE, VITE_GLOB_API_URL, VITE_GLOB_API_URL_PREFIX, VITE_GLOB_UPLOAD_URL } =
    import.meta.env;

  const glob = {
    title: VITE_GLOB_APP_TITLE,
    apiUrl: VITE_GLOB_API_URL,
    urlPrefix: VITE_GLOB_API_URL_PREFIX,
    uploadUrl: VITE_GLOB_UPLOAD_URL,
  };
  return glob as Readonly<GlobConfig>;
};
