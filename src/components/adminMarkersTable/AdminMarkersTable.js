import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Table, Button } from "react-bootstrap";

import MarkerRow from "./AdminMarkerRow";
import Spinner from "../common/Spinner/Spinner";
import { getAdminMarkers } from "../../redux/actions/adminActions";

const AdminMarkersTable = props => {
  const [currentPage, setcurrentPage] = useState(1);

  useEffect(() => {
    props.getAdminMarkers(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

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
    setcurrentPage(props.totalPages);
  };

  return (
    <div>
      {/* Pagination */}
      {props.totalPages !== 0 && (
        <div>
          {currentPage !== 1 && <Button onClick={paginationFirst}>1</Button>}
          {currentPage !== 2 && currentPage !== 1 && <span>...</span>}
          {currentPage - 1 > 1 && (
            <Button onClick={paginationPrev}>{currentPage - 1}</Button>
          )}
          <Button disabled>{currentPage}</Button>
          {currentPage + 1 < props.totalPages && (
            <Button onClick={paginationNext}>{currentPage + 1}</Button>
          )}
          {currentPage !== props.totalPages - 1 &&
            currentPage !== props.totalPages && <span>...</span>}
          {currentPage !== props.totalPages && (
            <Button onClick={paginationLast}>{props.totalPages}</Button>
          )}
        </div>
      )}
      {props.loading && <Spinner />}
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Адреса</th>
            <th>Користувач</th>
            <th>Статус</th>
            <th>Історія</th>
            <th>Коментар</th>
            <th>Фото</th>
            <th>Розташування</th>
            <th>Видалити</th>
          </tr>
        </thead>
        <tbody>
          {props.markers.map(marker => (
            <MarkerRow marker={marker} key={marker._id} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = state => ({
  markers: state.admin.markers,
  totalPages: state.admin.totalPages,
  loading: state.admin.loading
});

export default connect(mapStateToProps, { getAdminMarkers })(AdminMarkersTable);
