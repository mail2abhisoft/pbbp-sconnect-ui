import { AgGridReact } from 'ag-grid-react';
import rowData from '../../utils/data/studentDetails.json';

const StudentDetails = () => {

  const columnDefs = [
    { field: 'id', maxWidth: 60 },
    { field: 'photo', maxWidth: 120 },
    { field: 'name' },
    { field: 'year', maxWidth: 120 },
    { field: 'address' },
    { field: 'gender', maxWidth: 120 },
    { field: 'cast', maxWidth: 110 },
    { field: 'contact', maxWidth: 150 },
    { field: 'action', maxWidth: 80 },
  ]

  return (
    <div className="ag-theme-alpine">
      <div class="row" style={{ marginBottom: '5px' }}>
        <div class="col-sm-1">
          <select class="custom-select form-select form-select-sm rounded-0 ag-grid-search">
            <option>10</option>
            <option>50</option>
            <option>100</option>
            <option>All</option>
          </select>
        </div>
        <div class="col-sm-4">
          <form action="simple-results.html">
            <div class="input-group">
              <input type="search" class="form-control form-control-sm" placeholder="Type your keywords here" />
              <div class="input-group-append">
                <button type="submit" class="btn btn-sm btn-default">
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-sm-7">
          <div class="float-sm-right">
            <button class="btn btn-sm btn-success">
              <i class="fa fa-plus"></i> &nbsp; Add New Student
            </button>
          </div>
        </div>
      </div>

      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        pagination={true}
        paginationPageSize={10}
        animateRows={true}
        domLayout={'autoHeight'}
      />
    </div>
  );
}

export default StudentDetails;
