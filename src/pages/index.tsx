// @ts-ignore
import React from "react";
import "../../assets/css/main.css";
import "./index.scss";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/layout/mainLayout";
import Introduction from "../components/introduction/introduction";
import ProductIntro from "../components/ProductIntro/productIntro";
import LivenessDetection from "../components/LivenessDetection/LivenessDetection";
import VerificationFeature from "../components/technicalFeatureSection/technicalFeature";
import VideoAuthentication from "../components/VideoAuthentication/VideoAuthentication";
import RoadMap from "../components/roadMap";
import SlideShow from "../components/slideShow";
import CommonQuestions from "../components/commonQuestion/commonQuestion";
import KYCSection from "../components/KYCSection/KYCSection";
import LogoSection from "../components/logoSection/logoSection";
import Testimonials from "../components/Quates/quat";

export default function Home() {
    return (
        <Layout>
            <div style={{width: "100%"}}>
                <Introduction/>
                <ProductIntro/>
                <LivenessDetection/>
                <VerificationFeature/>
                <VideoAuthentication/>
                <RoadMap/>
                {/*<ApiPanel/>*/}
                {/*<Tabs/>*/}
                <SlideShow/>
                <CommonQuestions/>
                <KYCSection/>
                <LogoSection/>
                <Testimonials/>
            </div>
            <svg
                xmlns="//www.w3.org/2000/svg"
                version="1.1"
                className="svg-filters"
                style={{display: "none"}}
            >
                <defs>
                    <filter id="marker-shape">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0 0.15"
                            numOctaves="1"
                            result="warp"
                        />
                        <feDisplacementMap
                            xChannelSelector="R"
                            yChannelSelector="G"
                            scale="30"
                            in="SourceGraphic"
                            in2="warp"
                        />
                    </filter>
                </defs>
            </svg>
        </Layout>
    );
}
