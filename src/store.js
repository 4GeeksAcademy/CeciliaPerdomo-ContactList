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
    const response = await fetch('https://playground.4geeks.com/contact/agendas/ceciliap/contacts');
    if (!response.ok) {
      throw new Error('Error al obtener los contactos');
    }

    if(response.status == 404){
      await createAgendaUser()
      return
    }

    const data = await response.json();

    dispatch({ type: 'load_contacts', payload: data.contacts });
  } catch (error) {
    console.error("Error fetching contacts:", error);
  }
};

// Función para crear un usuario en la agenda
export const createAgendaUser = async () => {
  try {
    const response = await fetch('https://playground.4geeks.com/contact/agendas/ceciliap', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
    });

    if (!response.ok) {
      throw new Error('Error al crear el usuario de la agenda');
    }
  } catch (error) {
    console.error("Error al crear la agenda:", error);
  }
};

// Función para crear un nuevo contacto en la agenda
export const createContact = async (dispatch, contactData) => {
  try {
    const response = await fetch('https://playground.4geeks.com/contact/agendas/ceciliap/contacts', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      throw new Error('Error al crear el contacto');
    }
    
    // Recargar los contactos después de agregar uno nuevo
    fetchContacts(dispatch);

  } catch (error) {
    console.error("Error al crear el contacto:", error);
  }
};

