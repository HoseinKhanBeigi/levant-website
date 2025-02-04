import React, { useState } from "react";
import { Button } from "../widgets";
import "./collapsibleContent.scss";
import ContentBox from "../ContentBox/ContentBox";
import SequentialContent from "../sequentialContent/sequentialContent";
import Utils from "../../../lib/utils";

interface CollapsibleItemInterface {
  title: string;
  description: string | null;
  isOpen: boolean;
  contentType: string;
  content: Array<{ content: string; description?: string }> | string;
}

interface CollapsibleContentProps {
  items: Array<CollapsibleItemInterface>;
}

export default function CollapsibleContent({ items }: CollapsibleContentProps) {
  const [collapsibleContentValue, setCollapsibleContentValue] = useState(items);

  function collapseHandler(index) {
    let menu = [...collapsibleContentValue];
    menu[index].isOpen = !menu[index].isOpen;
    setCollapsibleContentValue(menu);
  }

  function renderContent(item) {
    if (item.isOpen && item.contentType === "bulletContent") {
      return (
        <SequentialContent
          title=""
          description={item.description ?? ""}
          items={item.content}
        />
      );
    } else if (item.isOpen && item.contentType === "content") {
      return <ContentBox title="" description={item.content as string} />;
    } else {
      return null;
    }
  }

  return (
    <div>
      {collapsibleContentValue.map((item, index) => {
        return (
          <div className="collapseItemContainer">
            <div className="collapseItemWrapper">
              <span className="collapseItemTitleNumber">
                {Utils.toFarsiNumber(index + 1)} -
              </span>
              <span
                className="collapseItemTitle"
                onClick={() => collapseHandler(index)}
              >
                {item.title}
                {item.isOpen ? (
                  <Button
                    onClick={() => collapseHandler(index)}
                    type="link"
                    className={"collapseButton"}
                  >
                    <span
                      onClick={() => collapseHandler(index)}
                      className="icon-up-pointer"
                    />
                  </Button>
                ) : (
                  <Button
                    onClick={() => collapseHandler(index)}
                    type="link"
                    className={"collapseButton"}
                  >
                    <span
                      onClick={() => collapseHandler(index)}
                      className="icon-down-pointer"
                    />
                  </Button>
                )}
              </span>
            </div>
            <div className="collapseContentWrapper">{renderContent(item)}</div>
          </div>
        );
      })}
    </div>
  );
}
