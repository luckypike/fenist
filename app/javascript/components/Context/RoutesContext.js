import React from 'react';

export const RoutesContext = React.createContext(null);

export function withRoutes(Component) {
  return function RoutedComponent(props) {
    return (
      <RoutesContext.Consumer>
        {routes =>
          <Component {...props} routes={routes} />
        }
      </RoutesContext.Consumer>
    )
  }
}
