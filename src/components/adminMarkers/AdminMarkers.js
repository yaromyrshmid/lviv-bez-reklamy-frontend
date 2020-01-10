import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";

import { Filter, Spinner, Pagination, NotFoundMessage, Calendar } from "../ui";
import AdminMarkerRow from "./AdminMarkerRow";
import { getAdminMarkers } from "../../redux/actions/adminActions";
import statuses from "../../utils/statuses";

const AdminMarkers = props => {
  const [currentPage, setcurrentPage] = useState(1);
  const [statusFilter, setstatusFilter] = useState("");
  const [selectedDate, setselectedDate] = useState(null);

  useEffect(() => {
    props.getAdminMarkers(currentPage, statusFilter, selectedDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, statusFilter, selectedDate]);

  const handleFiltering = value => {
    setstatusFilter(value);
  };

  const handleDateChange = value => {
    setselectedDate(value);
  };

  return (
    <Container>
      <Helmet>
        <title>Усі маркери | Львів без реклами</title>
      </Helmet>
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
          <Calendar
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
          />
        </Col>
      </Row>
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
