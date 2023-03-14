import React from 'react';

function Subscriptions() {
  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f1f1f1', width: '100%', padding: '1em' }}>
        <h1>SubsTracker</h1>
      </header>
      <section className="subscriptions" style={{ display: 'flex', flexWrap: 'wrap', marginTop: '2em' }}>
        <table style={{ flex: 1, marginRight: '2em' }}>
          <thead>
            <tr>
              <th style={{ backgroundColor: '#f1f1f1', padding: '0.5em', textAlign: 'left', border: '1px solid #ccc' }}>Name</th>
              <th style={{ backgroundColor: '#f1f1f1', padding: '0.5em', textAlign: 'left', border: '1px solid #ccc' }}>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '0.5em', textAlign: 'left', border: '1px solid #ccc' }}>Netflix</td>
              <td style={{ padding: '0.5em', textAlign: 'left', border: '1px solid #ccc' }}>$15.99</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5em', textAlign: 'left', border: '1px solid #ccc' }}>Spotify</td>
              <td style={{ padding: '0.5em', textAlign: 'left', border: '1px solid #ccc' }}>$9.99</td>
            </tr>
            <tr>
              <td style={{ padding: '0.5em', textAlign: 'left', border: '1px solid #ccc' }}>HBO Max</td>
              <td style={{ padding: '0.5em', textAlign: 'left', border: '1px solid #ccc' }}>$14.99</td>
            </tr>
          </tbody>
        </table>
        <aside className="add-subscription" style={{ width: '30%', marginLeft: '2em' }}>
          <h2>Add a subscription</h2>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5em' }}>Name:</label>
          <input type="text" id="name" style={{ display: 'block', marginBottom: '0.5em' }} />
          <label htmlFor="cost" style={{ display: 'block', marginBottom: '0.5em' }}>Cost:</label>
          <input type="text" id="cost" style={{ display: 'block', marginBottom: '0.5em' }} />
          <button style={{ marginTop: '0.5em', backgroundColor: '#4caf50', color: 'white', border: 'none', padding: '0.5em', borderRadius: '5px', cursor: 'pointer' }}>Add</button>
        </aside>
      </section>
    </div>
  );
}

export default Subscriptions;
