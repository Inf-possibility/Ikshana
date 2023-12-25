export  function formatDate_yymmdd(dateNumber) {
    // Check if dateNumber is a number
    if (typeof dateNumber === 'number') {
      const dateString = dateNumber.toString();
      if (dateString.length === 8) {
        const year = dateString.slice(0, 4);
        const month = dateString.slice(4, 6);
        const day = dateString.slice(6, 8);
        return `${year.slice(2, 4)}-${month}-${day}`;
      }
    }
      // Return original value if it's not a valid number or format
  return dateNumber;
}

export  function formatDate_yyyymmdd(dateNumber) {
    // Check if dateNumber is a number
    if (typeof dateNumber === 'number') {
      const dateString = dateNumber.toString();
      if (dateString.length === 8) {
        const year = dateString.slice(0, 4);
        const month = dateString.slice(4, 6);
        const day = dateString.slice(6, 8);
        return `${year}-${month}-${day}`;
      }
    }
      // Return original value if it's not a valid number or format
  return dateNumber;
}