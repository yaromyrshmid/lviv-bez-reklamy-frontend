import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

import MarkerRow from "./MarkerRow";
import { Filter, Spinner, Pagination, NotFoundMessage } from "../ui";
import { getUserMarkers } from "../../redux/actions/profileActions";
import statuses from "../../utils/statuses";

const MarkersTable = props => {
  const [filteredMarkers, setfilteredMarkers] = useState(null);
  const [currentPage, setcurrentPage] = useState(1);
  const [totalPages, settotalPages] = useState(0);

  useEffect(() => {
    props.getUserMarkers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Checking which markers to display
  const markers = filteredMarkers ? filteredMarkers : props.userMarkers;

  useEffect(() => {
    settotalPages(Math.ceil(markers.length / pageLimit));
  }, [markers]);

  // Handling marker filtering by status
  const handleFiltering = value => {
    if (value === "") {
      setfilteredMarkers(null);
    } else {
      const filtered = props.userMarkers.filter(
        marker =>
          marker.statusChange[marker.statusChange.length - 1].to === value
      );
      setfilteredMarkers(filtered);
    }
  };

  // Pagination
  const pageLimit = 10;

  const offset = (currentPage - 1) * pageLimit;

  const markersPaginated = markers.slice(offset, offset + pageLimit);

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
          <Pagination totalPages={totalPages} setcurrentPage={setcurrentPage} />
        </Col>
      </Row>

      {props.loading && <Spinner />}
      <Row>
        {markersPaginated.map(marker => (
          <MarkerRow marker={marker} key={marker._id} />
        ))}
        {!props.loading && markersPaginated.length === 0 && (
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
  userMarkers: state.profile.userMarkers,
  loading: state.profile.loading
});

export default connect(mapStateToProps, { getUserMarkers })(MarkersTable);
