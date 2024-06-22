import styled from "styled-components";
import { Table } from "antd";

export const StyTable = styled(Table)`
  .ant-table-thead > tr > th {
    background: ${({ theme }) => theme.COLORS.MAIN_COLORS.PRIMARY_PURE};
    text-align: center;
    font-size: 0.75rem;
  }

  .ant-table-tbody {
    tr {
      td {
        text-align: center;
        color: #000;
        font-size: 0.9em;
      }
    }

    tr:hover {
      cursor: pointer;
    }
  }

  .ant-table-pagination.ant-pagination {
    margin-right: 16px;
  }
`;

export const StyTableSpan = styled.span`
  color: #fff;
  font-weight: 700;
`;

export const DivCells = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  img {
    margin-right: 1em;
  }
  span {
    font-weight: 400;
    color: #000;
  }
`;
