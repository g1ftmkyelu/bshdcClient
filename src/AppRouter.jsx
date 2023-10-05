import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { WebsiteUI, PaymentUI, AdminUI } from './UI';
import { Home, Contact, About, Login, History, PaymentCancel, PaymentSuccess, Partners, Team, Events, Event, NotFound, Donate } from './pages';




function AppRouter() {

    return (

        <Routes>

            <Route path="/" element={<WebsiteUI />}>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/history" element={<History />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/team" element={<Team />} />
                <Route path="/events" element={<Events />} />
                <Route path="/events/:id" element={<Event />} />
                <Route path="/donate" element={<Donate />} />
            </Route>

            <Route path="/admin" element={<AdminUI/>}/>

            

            <Route path="/payment" element={<PaymentUI />}>
                <Route path="/payment/cancel" element={<PaymentCancel />} />
                <Route path="/payment/success" element={<PaymentSuccess />} />
            </Route>

            <Route path="*" element={<NotFound />} />

        </Routes>

    );
}

export default AppRouter;
