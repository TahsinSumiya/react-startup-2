const getstoredjobapplication = () => {
    const storedjobapplication = localStorage.getItem('job-application');
    if (storedjobapplication) {
      return JSON.parse(storedjobapplication);
    }
    return [];
  };
  
  const saveapplication = (id) => {
    const storedapplication = getstoredjobapplication();
    const exist = storedapplication.find(jobId => jobId === id);
    if (!exist) {
      storedapplication.push(id);
      localStorage.setItem('job-application', JSON.stringify(storedapplication));
    }
  };
  
  export { saveapplication, getstoredjobapplication };
  