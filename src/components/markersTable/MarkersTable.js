import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";

import MarkerRow from "./MarkerRow";
import Spinner from "../common/Spinner/Spinner";
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
  const handleFiltering = e => {
    if (e.target.value === "") {
      setfilteredMarkers(null);
    } else {
      const filtered = props.userMarkers.filter(
        marker =>
          marker.statusChange[marker.statusChange.length - 1].to ===
          e.target.value
      );
      setfilteredMarkers(filtered);
    }
  };

  // Pagination
  const pageLimit = 10;

  const offset = (currentPage - 1) * pageLimit;

  const markersPaginated = markers.slice(offset, offset + pageLimit);

  // Handling pagination clicks
  const paginationPrev = () => {
    setcurrentPage(currentPage => currentPage - 1);
  };

  const paginationNext = () => {
    setcurrentPage(currentPage => currentPage + 1);
  };

  const paginationFirst = () => {
    setcurrentPage(1);
  };

  const paginationLast = () => {
    setcurrentPage(totalPages);
  };

  return (
    <div>
      <select onChange={handleFiltering}>
        <option value="">Уся реклама</option>
        {statuses.map(stat => (
          <option value={stat.value} key={stat.value}>
            {stat.ukr}
          </option>
        ))}
      </select>
      {/* Pagination */}
      {totalPages !== 0 && (
        <div>
          {currentPage !== 1 && <Button onClick={paginationFirst}>1</Button>}
          {currentPage !== 2 && currentPage !== 1 && <span>...</span>}
          {currentPage - 1 > 1 && (
            <Button onClick={paginationPrev}>{currentPage - 1}</Button>
          )}
          <Button disabled>{currentPage}</Button>
          {currentPage + 1 < totalPages && (
            <Button onClick={paginationNext}>{currentPage + 1}</Button>
          )}
          {currentPage !== totalPages - 1 && currentPage !== totalPages && (
            <span>...</span>
          )}
          {currentPage !== totalPages && (
            <Button onClick={paginationLast}>{totalPages}</Button>
          )}
        </div>
      )}
      {props.loading && <Spinner />}
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Статус</th>
            <th>Історія</th>
            <th>Коментар</th>
            <th>Фото</th>
            <th>Розташування</th>
          </tr>
        </thead>
        <tbody>
          {markersPaginated.map(marker => (
            <MarkerRow marker={marker} key={marker._id} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = state => ({
  userMarkers: state.profile.userMarkers,
  loading: state.profile.loading
});

export default connect(mapStateToProps, { getUserMarkers })(MarkersTable);
