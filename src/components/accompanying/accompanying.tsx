import React from "react";
import Utils from "../../../lib/utils";
import Counter from "../counter/counter";
import  AccompanyingData  from './accompanying.data';
import "./accompanying.scss";

export default function Accompanying({ active }) {
    return (
        <div className="accompanyingContainer">
            <div className="accompanyingTitle">به همراهی شما افتخار می‌کنیم</div>
            <div className="accompanyingItemContainer">
                {AccompanyingData.map((item) => {
                    return (
                        <div className="accompanyingItemWrapper">
                            {/*<div className="accompanyingItemIconWrapper">{item.icon}</div>*/}
                            <div className="accompanyingItemContentWrapper">
                                {item.text?<div>{item.preText}</div>:  <div>بیش از</div>}
                                <div className="accompanyingItemNumber">
                                    {item.text?<div>{item.text}</div>: active ?<> <Counter number={item.number} initialValue={item.initialStart}/> <span>{"هزار"}</span></>: Utils.toFarsiNumber(item.number)}
                                </div>
                                <div>{item.description}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}