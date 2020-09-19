import React, { useCallback, useEffect } from 'react';

import { History } from 'history';

interface MicroFrontendProps {
  history: History;
  name: string;
  host: string;
}

const MicroFrontend: React.FC<MicroFrontendProps> = ({
  history,
  name,
  host,
}) => {
  const renderMicroFrontend = useCallback(() => {
    (window as any)[`render${name}`](`${name}-container`, history);
  }, [name, history]);

  useEffect(() => {
    const scriptId = `micro-frontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      renderMicroFrontend();
    } else {
      fetch(`${host}/asset-manifest.json`)
        .then(res => res.json())
        .then(manifest => {
          const promises = Object.keys(manifest.files)
            .filter(key => key.endsWith('.js'))
            .reduce((sum, key) => {
              sum.push(
                new Promise(resolve => {
                  const path = `${host}${manifest.files[key]}`;
                  const script = document.createElement('script');

                  if (key === 'main.js') {
                    script.id = scriptId;
                  }

                  script.onload = () => {
                    resolve();
                  };

                  script.crossOrigin = '';
                  script.src = path;

                  document.body.after(script);
                }),
              );
              return sum;
            }, [] as any);

          Promise.allSettled(promises).then(() => {
            renderMicroFrontend();
          });
        });
    }

    return () => {
      (window as any)[`unmount${name}`](`${name}-container`);
    };
  }, [renderMicroFrontend, host, name]);

  return <main id={`${name}-container`} />;
};

export default MicroFrontend;
