export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    contacts: [] // Agregamos el array de contactos
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

      case 'load_contacts': { 
        return {
          ...store,
          contacts: action.payload, // Guardamos los contactos en el estado
        };
      }

    default:
      throw Error('Unknown action.');
  }
}

// Función para obtener contactos desde la API
export const fetchContacts = async (dispatch) => {
  try {
    const response = await fetch('https://playground.4geeks.com/contact/agendas/cecilia/contacts');
    if (!response.ok) {
      throw new Error('Error al obtener los contactos');
    }
    const data = await response.json();

    dispatch({ type: 'load_contacts', payload: data.contacts });
  } catch (error) {
    console.error("Error fetching contacts:", error);
  }
};