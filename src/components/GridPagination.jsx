import React, { useState } from 'react';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import { FaCircleChevronRight } from 'react-icons/fa6';

const GridPagination = ({ items, itemsPerPage, renderItem, title, showPagination, seeMoreUrl }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <Container>
            <Row className="justify-content-between mb-4">
                <Col><h2 className="fw-bold text-primary">{title}</h2></Col>
            </Row>
            <Row>
                {items.slice(startIndex, endIndex).map((item, index) => (
                    <Col key={index} md={4} className="mb-4">
                        {renderItem(item)}
                    </Col>
                ))}
            </Row>
            <Row className="justify-content-center">
                {showPagination &&
                    <Pagination>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <Pagination.Item
                                key={index}
                                active={index + 1 === currentPage}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </Pagination.Item>
                        ))}
                    </Pagination>
                }
            </Row>

            {seeMoreUrl ?
                <Col className='d-flex justify-content-end align-items-baseline'><a href={seeMoreUrl} className='text-decoration-none fs-4'>See more <FaCircleChevronRight /></a></Col>
                : ''}

        </Container>
    );
};

export default GridPagination;
