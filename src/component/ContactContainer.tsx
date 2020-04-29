import * as React from "react";

interface OwnProps {
}

interface StateProps {
}

interface ActionProps {
}

export type Props = StateProps & ActionProps & OwnProps;


function getState() {

}


function container(Component: React.ComponentClass<Props>): React.ComponentClass<Props> {
  return class Container extends React.Component<Props> {

    public render(): JSX.Element {
      return (
        <Component
          {...this.props}
        />
      );
    }
  };
}

export default (Component: React.ComponentClass<Props>): React.ComponentClass<OwnProps> =>
  (container(Component));
