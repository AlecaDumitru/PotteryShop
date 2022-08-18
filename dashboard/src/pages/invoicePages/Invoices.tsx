import React from 'react';

const Invoices = () => {
    return (
        <div>
            <h1>data,numar, client, nume, contract, suma, tva, status - filtreaza dupa emisa, incasata storno, anulata
                total facturi, pagx/v; filtru cautare dupa client, data nume, id, numar, contract, suma, tva</h1>
            <h2>listare, modificare(reclaculare, modificare casier, status) = poti vedea ob facturi - in care poti modifica individual</h2>
            <h3>imprimare contracte de vanzare, factura fiscala, trimite notificare email client, emitere bon fiscal</h3>
            <h3>sumar navigare pe contract = obiecte/ navigare rapida client -contracte de vanzare, facturi, ob cumparate, id client</h3>
            <h4>nu se pot adauga facturi, aceastea sunt adaugate la vanzare, se pot sterge cele cu statustul de emisa dar nu si incasata, cele incasate trebuie stornate si anulate</h4>
        </div>
    );
};

export default Invoices;