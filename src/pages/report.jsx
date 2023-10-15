import React, { useState } from 'react';
import { HeroSection, GridPagination } from '../components';
import { useFetchAllReports } from '../hooks/ReportsAPI';
import Spinner from 'react-bootstrap/Spinner';
import { Container } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf'; // Import react-pdf components

const image = 'https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'

const Report = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const { data, isLoading } = useFetchAllReports();

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div>
            <HeroSection
                HeroImage={image}
                Caption={'Reports'}
            />
            {isLoading ? (
                <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Spinner animation="border" variant="primary" />
                </div>
            ) : (
                <Container>
                    <GridPagination
                        title={'Our Reports'}
                        items={data}
                        itemsPerPage={9}
                        renderItem={(report) => (
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">{report.title}</h4>
                                    <Document
                                        file={report.pdf}
                                        onLoadSuccess={onDocumentLoadSuccess}
                                    >
                                        <Page pageNumber={pageNumber} />
                                    </Document>
                                    <a href={report.pdf} className="badge bg-primary">View</a>
                                </div>
                            </div>
                        )}
                    />
                </Container>
            )}
        </div>
    );
}

export default Report;
