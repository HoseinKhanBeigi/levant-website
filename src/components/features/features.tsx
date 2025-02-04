import React, { useCallback, useState } from "react";
import "./features.scss";
import { FeatureInterface } from "../../../interfaces";
interface FeaturesInterface {
  title: string;
  description: string;
  features: Array<FeatureInterface>;
}
export default function Features({
  title,
  description,
  features,
}: FeaturesInterface) {
  const [activeFeature, setActiveFeature] = useState(0);
  const renderSubFeature = useCallback(
    (subFeatures) => {
      return subFeatures.map((subFeature) => (
        <div className="subfeatureContainer">
          <div className="subFeatureIcon">{subFeature.icon}</div>
          <div className="subFeatureTitleWrapper">{subFeature.title}</div>
        </div>
      ));
    },
    [activeFeature]
  );
  return (
    <div className="featuresContainer">
      <div className="featuresHeaderWrapper">
        <div className="featuresTitle">{title}</div>
        <div className="featuresSubTitle">{description}</div>
      </div>
      <div className="featuresListContainer">
        <div className="featuresListWrapper">
          {features.map((feature, index) => {
            return (
              <div
                className={`featureTitle ${
                  activeFeature === index ? "activeTitle" : ""
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <span className="featureIcon">{feature.icon}</span>
                <span>{feature.title}</span>
              </div>
            );
          })}
        </div>
        {features.map((feature, index) => {
          return (
            activeFeature === index && (
              <div className="feature">
                {renderSubFeature(feature.subFeatures)}
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}
