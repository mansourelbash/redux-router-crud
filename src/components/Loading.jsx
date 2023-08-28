import React, { cloneElement } from 'react';

const Loading = ({ loading, error, children }) => {
  console.log(loading)
  const elementType = children?.type?.render?.displayName;
  const clonedElement = cloneElement(children, { disabled: true }, 'Loading ...');

  if (elementType === 'Button') {
    return (
      <>
        {loading ? (
          clonedElement
        ) : error ? (
          <>
            {children}
            <br />
            <p>{error}</p>
          </>
        ) : (
          children
        )}
      </>
    );
  }

  return (
    <>
      {loading ? (
        <p>Loading ...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        children
      )}
    </>
  );
};

export default Loading;
