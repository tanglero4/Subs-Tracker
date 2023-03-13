import React from 'react';
//import { useQuery } from '@apollo/client';

//import ThoughtList from '../components/ThoughtList';
//import ThoughtForm from '../components/ThoughtForm';

//import { QUERY_THOUGHTS } from '../utils/queries';

const AboutUs = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 0, padding: 0 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f1f1f1', width: '100%', padding: '1em' }}>
        <h1 style={{ margin: 0 }}>SubsTracker</h1>
        <div className="logo" style={{ width: '100px', height: '100px', backgroundColor: 'blue' }}></div>
      </header>
      <main style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '80%', marginTop: '2em' }}>
        <section style={{ width: '60%' }}>
          <h2>About us</h2>
          <p>
            We are a company that specializes in creating awesome products for our customers.
          </p>
          <h2>What We Do</h2>
          <p>We make the best products that you've ever seen.</p>
        </section>
        <aside style={{ backgroundColor: '#e1e1e1', width: '30%', padding: '1em', marginLeft: '1em' }}>
          <h2>Login</h2>
          <button>Login</button>
          <h2>Sign Up</h2>
          <p>Don't have an account yet? <a href="#">Sign up here!</a></p>
        </aside>
      </main>
    </div>
  );
};

export default AboutUs;