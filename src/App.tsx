/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';

export default function App() {
  return (
    // لێرە <BrowserRouter> لادرا چونکە لە ناو main.tsx بە basenameـەوە دامانناوە
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}
