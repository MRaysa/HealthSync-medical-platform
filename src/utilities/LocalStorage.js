// src/utilities/LocalStorage.js
const getFromStoredDB = () => {
  try {
    const appointments = localStorage.getItem("appointments");
    return appointments ? JSON.parse(appointments) : [];
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return [];
  }
};

const addToStoredDB = (doctor) => {
  try {
    const appointments = getFromStoredDB();
    const exists = appointments.some((app) => app.id === doctor.id);
    if (exists) return false;

    const updatedAppointments = [...appointments, doctor];
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    return true;
  } catch (error) {
    console.error("Error writing to localStorage:", error);
    return false;
  }
};

const removeFromStoredDB = (id) => {
  try {
    const appointments = getFromStoredDB();
    const updatedAppointments = appointments.filter((app) => app.id !== id);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    return true;
  } catch (error) {
    console.error("Error removing from localStorage:", error);
    return false;
  }
};

export { addToStoredDB, getFromStoredDB, removeFromStoredDB };
