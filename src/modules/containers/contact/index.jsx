/*
 * @Author: HWZ
 * @Date: 2022-07-04
 * @LastEditTime: 2022-10-17 17:53:22
 * @LastEditors: yqy
 * @Description: 公共头部
 */

import { useState } from "react";
import "./index.scss";
import { modelData, typeList, projectData } from "./model";

const Contact = () => {
  // 当前项目范围类型
  const [currentType, setCurrentType] = useState(1);
  return (
    <div id="Contact">
      <div className="case-background" />
      {/* 模式介绍 */}
      <div className="mode-box">
        <div className="mode-desc">
          <div className="mode-title">让中国模式走向世界舞台</div>
          <div className="mode-content">
            {modelData.map((item) => {
              return (
                <div className="mode-item" key={item.type}>
                  <img src={item.img} alt="" />
                  <div className="copywriting">
                    <p>{item.type}</p>
                    <span>{item.text}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* 项目范围 */}
      <div className="mode-box" style={{ height: "50rem" }}>
        <div className="project-box">
          <span className="project-title">公司项目范围</span>
          <div className="project-type">
            {typeList.map((item) => {
              return (
                <span
                  className={
                    currentType === item.value
                      ? "current-type-name"
                      : "type-name"
                  }
                  key={item.name}
                  onMouseMove={() => {
                    setCurrentType(item.value);
                  }}
                >
                  {item.name}
                </span>
              );
            })}
          </div>
          <div className="project-content">
            {projectData[currentType].map((item) => {
              return (
                <p className="project-item" key={item.name}>
                  <span>{item.name}</span>
                  <span>{item.text}</span>
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
