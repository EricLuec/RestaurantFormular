import React, { useState, useEffect } from 'react';

function Anmeldeformular() {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    nachname: '',
    telefonnummer: '',
    email: '',
    anzahlPersonen: '',
    datum: '',
    uhrzeit: '',
    mahlzeit: '',
    bemerkungWuensche: '',
  });

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function DateInput() {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
      const now = new Date();

      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const formattedCurrentDate = `${year}-${month}-${day}`;

      setCurrentDate(formattedCurrentDate);
    }, []);

    return (
      <div>
        {currentPage === 1 && (
          <div>
            <h2>Seite 1</h2>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <br />
            <label>Nachname:</label>
            <input
              type="text"
              name="nachname"
              value={formData.nachname}
              onChange={handleChange}
            />
            <br />
            <label>Telefonnummer</label>
            <input
              type="tel"
              name="telefonnummer"
              value={formData.telefonnummer}
              onChange={handleChange}
            />
            <br />
            <label>E-Mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <br />
            <button onClick={nextPage}>Next</button>
          </div>
        )}

        {currentPage === 2 && (
          <div>
            <h2>Seite 2</h2>
            <label>Anzahl Personen:</label>
            <input
              type="text"
              name="anzahlPersonen"
              value={formData.anzahlPersonen}
              onChange={handleChange}
            />
            <br />
            <label>Datum</label>
            <input
              type="date"
              name="datum"
              min={currentDate}
              max={currentDate + 10}
              value={formData.datum}
              onChange={handleChange}
            />
            <br />
            <label>Mahlzeit</label>
            <select
              name="mahlzeit"
              value={formData.mahlzeit}
              onChange={handleChange}
            >
              <option>Frühstück</option>
              <option>Mittagessen</option>
              <option>Abendessen</option>
              <option>Kaffee und Kuchen</option>
            </select>
            <button onClick={prevPage}>Back</button>
            <button onClick={nextPage}>Next</button>
          </div>
        )}

        {/* Weitere Seiten hier */}
      </div>
    );
  }

  return (
    <div>
      <DateInput />
    </div>
  );
}

export default Anmeldeformular;