import React from 'react';

const DropMail = () => {
  return (
    <section className="p-5 border-b border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Drop Mail</h2>
      <form className="flex flex-col space-y-4">
        <input type="text" placeholder="Your Message" className="p-2 border border-gray-300 rounded" />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Submit</button>
      </form>
    </section>
  );
};

export default DropMail;
