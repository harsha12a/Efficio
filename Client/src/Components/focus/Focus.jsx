import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Focus.css'; // Add this CSS for styling the navigation

function Focus() {
  return (
    <div className="focus-container">
      <h1 className='focus-title '>Focus Activities</h1>
      <nav className="focus-nav d-flex flex-wrap">
        <Link to="pomodora" className="px-2 nav-link">Pomodora</Link>
        <Link to="settimer" className="px-2 nav-link">Settimer</Link>
        <Link to="breathing" className="px-2 nav-link">Breathing</Link>
        <Link to="tictactoe" className="px-2 nav-link">Tictactoe</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default Focus;
