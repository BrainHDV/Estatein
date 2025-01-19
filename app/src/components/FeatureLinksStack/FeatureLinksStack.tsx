import { ArrowRTIcon } from "@assets/index";
import React, { ReactNode } from "react";
import "./FeatureLinksStack.scss";

interface IFeatureLinksStackProps {
  data: {
    icon: ReactNode;
    label: ReactNode;
  }[];
}

const FeatureLinksStack = (props: IFeatureLinksStackProps) => {
  const { data } = props;
  return (
    <div className="feature-links-stack">
      <div className="feature-links-stack__inner">
        {data.map((item) => {
          return (
            <div className="feature-links-stack__item">
              <div className="top-icon">{item.icon}</div>
              <div className="label">{item.label}</div>
              <ArrowRTIcon className="arrow" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureLinksStack;
