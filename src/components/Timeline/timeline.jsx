import React from 'react';
import { TIMELINE } from '../../utils/data';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css';

const Timeline = () => {
  let workIconStyles = { background: '#a993fe' };
  let schoolIconStyles = { background: '#7e61e7' };
  return (
    <section className="timeline-container">
      <h5>Experience</h5>
      <VerticalTimeline lineColor="#6751b9">
        {TIMELINE.map((element) => {
          let isWorkIcon = element.icon === 'work';
          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={
                <div className="vertical-timeline-element-icon">
                  {isWorkIcon ? (
                    <img
                      src="/portfolio/assets/images/work.svg"
                      className="svg-timeline"
                    />
                  ) : (
                    <img
                      src="/portfolio/assets/images/school.svg"
                      className="svg-timeline"
                    />
                  )}
                </div>
              }
            >
              <h2 className="vertical-timeline-element-title">
                {element.title}
              </h2>
              <h4 className="vertical-timeline-element-subtitle">
                {element.place}
              </h4>
              <h6 className="vertical-timeline-element-location">
                {element.location}
              </h6>
              <p className="vertical-timeline-element-description">
                {element.description}
              </p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;
