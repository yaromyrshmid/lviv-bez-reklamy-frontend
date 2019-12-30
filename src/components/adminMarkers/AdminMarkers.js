import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import { Filter, Spinner, Pagination, NotFoundMessage } from "../ui";
import AdminMarkerRow from "./AdminMarkerRow";
import { getAdminMarkers } from "../../redux/actions/adminActions";
import statuses from "../../utils/statuses";

const AdminMarkers = props => {
  const [currentPage, setcurrentPage] = useState(1);
  const [statusFilter, setstatusFilter] = useState("");

  useEffect(() => {
    props.getAdminMarkers(currentPage, statusFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, statusFilter]);

  const handleFiltering = value => {
    setstatusFilter(value);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Filter
            handleFiltering={handleFiltering}
            defaultOption="Уся реклама"
            defaultValue=""
            options={statuses.map(stat => ({
              name: stat.ukr,
              value: stat.value
            }))}
          />
        </Col>
      </Row>
      {/* Pagination */}
      <Row>
        <Col>
          <Pagination
            totalPages={props.totalPages}
            setcurrentPage={setcurrentPage}
          />
        </Col>
      </Row>

      {props.loading && <Spinner />}
      <Row>
        {props.markers.map(marker => (
          <AdminMarkerRow marker={marker} key={marker._id} />
        ))}
        {!props.loading && props.markers.length === 0 && (
          <Col>
            <NotFoundMessage>
              Оце так невдача... Маркерів таких немає...
            </NotFoundMessage>
          </Col>
        )}
      </Row>
    </Container>
  );
};

const mapStateToProps = state => ({
  markers: state.admin.markers,
  totalPages: state.admin.totalPages,
  loading: state.admin.loading
});

export default connect(mapStateToProps, { getAdminMarkers })(AdminMarkers);
