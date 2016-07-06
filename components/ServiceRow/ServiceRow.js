import React, { PropTypes } from 'react'
import s from './ServiceRow.css'

import ServiceStatus from '../ServiceStatus'

const ServiceRow = (props) => (
  <li className={s.service} key={`service-${props.id}`}>
      <a href={`/services/detail/${props.id}`} className={s.serviceLink} title={`Click to see more details about ${props.name}`}>
        <div>
          <div>
            <p className={s.serviceName}>{props.name}</p>
          </div>
            <span className={s.serviceInfo}>
              <ServiceStatus schedules={props.regularSchedules} />
            </span>
          <div className={s.categoryIcons}>
              <span><i className="category-icon icon-home"></i></span>
          </div>
          <span id="someidlater" className="label-status"></span>
          <div className="service-item-box-caret">
            <i className="icon-right-open-2 chevron"></i>
          </div>
        </div>
      </a>
    </li>
)

export default ServiceRow