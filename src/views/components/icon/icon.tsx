import * as React from "react";
import "./icon.css";

export interface IconButtonProps {
  iconName: string;
  onClick?: () => void;
}

export class Icon extends React.Component<IconButtonProps> {
  render() {
    const { onClick, iconName } = this.props;
    return (
      <i onClick={onClick} className={`fa ${iconName} icon`} />
    );
  }
}