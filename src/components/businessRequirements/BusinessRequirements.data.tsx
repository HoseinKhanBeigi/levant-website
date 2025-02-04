import React from "react";
import {StaticImage} from "gatsby-plugin-image";

export const BusinessRequirementsData = [
    {
        title: "سادگی",
        description: "در فرایندهای پیش از فروش",
        icon: (
            <StaticImage
                src="../../../assets/images/simplicity.svg"
                alt="businessRequirement"
                className="requirementImage simplicity"
            />
        ),
    },
    {
        title: "موفقیت",
        description: "در عملیات فروش",
        icon: (
            <StaticImage
                src="../../../assets/images/success.svg"
                alt="businessRequirement"
                className="requirementImage"
            />
        ),
    },
    {
        title: "رضایت",
        description: "در پشتیبانی پس از فروش",
        icon: (
            <StaticImage
                src="../../../assets/images/satisfaction.svg"
                alt="businessRequirement"
                className="requirementImage"
            />
        ),
    },
];