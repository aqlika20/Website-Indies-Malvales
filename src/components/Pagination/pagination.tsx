// components/Pagination.tsx
import React from 'react';

import styled from '@emotion/styled';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

interface PageNumberProps {
  active: boolean;
}

const PageNumber = styled.span<PageNumberProps>`
  font-size: 20px;
  font-family: 'Poppins Regular';
  font-line-height: 30px;

  padding: 8px 12px;
  margin: 0 4px;
  cursor: pointer;
  border-radius: 4px;
  color: ${(props) => (props.active ? 'orange' : 'black')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
`;

const Arrow = styled.span`
  font-size: 20px;
  font-family: 'Poppins Regular';
  font-line-height: 30px;

  padding: 8px 12px;
  margin: 0 4px;
  cursor: pointer;
  user-select: none;
`;

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  return (
    <PaginationContainer>
      <Arrow onClick={handlePrevious}>&lt;</Arrow>
      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <PageNumber key={page} active={page === currentPage} onClick={() => handlePageClick(page)}>
            {page}
          </PageNumber>
        );
      })}
      <Arrow onClick={handleNext}>&gt;</Arrow>
    </PaginationContainer>
  );
};

export default Pagination;
