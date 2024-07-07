import { Fragment } from "react";
import { Accordion } from "react-bootstrap";
const BSAccordion = ({ title, event, onClick, active }) => {
  return (
    <Fragment>
      <Accordion.Toggle
        as="a"
        className={`${
          active === event ? "" : "collapsed"
        } card-header faq_collapsed`}
        data-toggle="collapse"
        eventKey={event}
        aria-expanded="false"
        aria-controls={event}
        variant="link"
        onClick={() => onClick()}
      >
        {title}
        <i className="fas fa-chevron-down" />
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={event} data-parent="#faq-accordion">
        <div className="card-body">
          <p>
            Natus error sit voluptatem accusantium doloremque totam rem aperiam
            eaque ipsa quae ainventores veritatis quasi architecto vitae sunt
            explicabo enim ipsam voluptatem voluptas
          </p>
        </div>
      </Accordion.Collapse>
    </Fragment>
  );
};
export default BSAccordion;
