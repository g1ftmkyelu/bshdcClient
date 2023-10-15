import React from 'react';
import { HeroSection, GridPagination } from '../components';
import { useFetchAllReports } from '../hooks/ReportsAPI';
import Spinner from 'react-bootstrap/Spinner';
import { Container } from 'react-bootstrap';


const image = 'https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'

const Report = () => {

    const { data, isLoading } = useFetchAllReports();
    return (
        <div>

            <HeroSection
                HeroImage={image}
                Caption={'Reports'}
            />
            {isLoading ? <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Spinner animation="border" variant="primary" /> </div> :

                <Container>
                    <GridPagination
                        title={'Our Reports'}
                        items={data}
                        itemsPerPage={9}
                        renderItem={(report) =>

                            <div class="card">
                                <img class="card-img-top" src="https://sieg.cdmx.gob.mx/static/documents/pdf-placeholder.png" alt="Title"></img>
                                <div class="card-body">
                                    <h4 class="card-title">{report.title}</h4>
                                    <a href={report.pdf} class="btn btn-primary">View PDF</a>
                                </div>
                            </div>


                        }


                    />

                </Container>
            }
        </div>
    );
}

export default Report;
